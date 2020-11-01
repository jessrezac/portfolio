---
posttype: blog
title: Continuous Deployment of a Gatsby site to cPanel with Git Version Control
date: 2020-11-01T15:50:00-06:00
author: Jess Rezac
hero_image: "/content/images/git-version-control.png"
kicker: "<p>Hosting a static site like one built in Gatsby on virtual shared hosting
  server makes sense, but the solution doesn't have to rely on FTP to deploy changes
  to the live site. See how to set up continuous deployment using cPanel's Git Version
  Control.</p>"

---
Last weekend, I launched my developer portfolio site at [www.rezac.dev](https://www.rezac.dev "rezac.dev"). I built the site in [Gatsby](https://www.gatsbyjs.com/ "Gatsby") because I was excited to play with a static-site generator and Gatsby is React-based. My last project, [Bout Manager](https://www.rezac.dev/projects/bout-manager "Bout Manager"), was built in React so choosing a React-based generator encouraged me to focus on mastering Gatsby specifically and [Tailwind CSS](https://tailwindcss.com/ "Tailwind CSS"), the two tools I was hoping this project would add to my repertoire.

When it came time to deploy my site, I decided to stick with the virtual shared hosting account I've had for more than a decade. My portfolio is likely to be deployed for a long time, so I couldn't really justify spinning it out in a different cloud-based location than all of the other websites I host and manage. There is plenty of time for me to familiarize myself with cloud-based deployment solutions.

To deploy a Gatsby site using cPanel, we'll need to build a Gatsby site, create a home for it on cPanel, and create a Git repository on cPanel using Git Version Control.

## Create a Gatsby site

Begin by creating a Gatsby site, you can use Gatsby's [Quick Start guide](https://www.gatsbyjs.com/docs/quick-start/ "Gatsby Quick Start Guide") to get up and running pretty quickly. I started mine with [Melanie Nolan's Gatsby-Starter-Tailwind-CSS](https://www.gatsbyjs.com/starters/melanienolan/gatsby-starter-tailwind-css/ "gatsby-starter-tailwind-css").

```zsh
	gatsby new gatsby-cpanel-deploy https://github.com/melanienolan/gatsby-starter-tailwind-css
```

Test your installation with:

```zsh
    cd gatsby-cpanel-deploy
    gatsby develop
```

## Define deployment instructions for cPanel

Next, create a `.cpanel.yml` file in your project directory with deployment instructions.

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/<userName>/<public_html>/
    - /bin/cp -R public/* $DEPLOYPATH
```

* Line 1 is the beginning of a YAML file.
* Lines 2 and 3 add `deployment` and `tasks` keys.
* Line 4 begins a list of BASH commands that run during deployment.

The first BASH command defines a variable, `DEPLOYPATH` that holds the path on our server where deployed files will be located.

Replace `<userName>` with your account username and `<public_html>` with the location of your files in your site directory. For many deployment cases, this is likely to be `public_html`, but I am deploying to a subfolder of a subdomain on an add-on domain within my account, so my path will be to `demos.rezac.dev/gatsby-cpanel-deploy`.

The second BASH command deploys a specified file or directory to the directory defined in `$DEPLOYPATH`. When you run `gatsby build`, Gatsby will automatically write all files to the `public/` folder, so `public/*` deploys all files in that directory.

## Build your Gatsby site

Run `gatsby build` to create your site's build files and `public` folder and `gatsby serve` to check your build.

Push changes to your repo. By default, many Gatsby starters add `public` to `.gitignore`, so you'll need to remove it for Git Version Control to eventually be able to access those files from your repo.

## Set up Git Version Control

With deployment instructions defined in `.cpanel.yml` and the site's build pushed to our GitHub repository, we're ready to set up a second remote repository in cPanel using Git Version Control.

* First, grab your GitHub repository clone URL from your repo on GitHub by clicking the `Code` button and copying the URL. I prefer to use the HTTPS URL.
* Next, go go to `Git Version Control` from cPanel and click the `Create` button.
* Enable the toggle to clone a repository.
* Enter your copied clone URL in the clone URL field.
* Enter a path for repostiroy directory. I store mine in a directory named after the GitHub repository in a `repositories` directory in my site files.
* Enter a respository name.
* Click `Create`.

## Deploy from Git Version Control

To deploy for the first time, click the `Manage` button next to your new repo in the repositories list in Git Version Control.

Click the `Pull or Deploy` tab and then the `Deploy HEAD Commit` button.

Git Version Control will immediately queue the deployment and will add Last Deployment Information when the deployment is complete.

## Set up continuous deployment to Git Version Control in your local repository

As you push changes to your repository on GitHub, you can return to the `Pull or Deploy` tab for your repository in Git Version Control and click `Update from Remote` followed by `Deploy HEAD Commit` to make changes live on your site.

This may feel too cumbersome as it requires pushing changes to GitHub, logging in to cPanel, and manually starting two processes before changes are live. An easier solution would be to set up a continuous deployment pipeline in your local repository, and with Git Version Control this is possible.

Copy the clone URL for your Git Version Control repo from the repo's `Basic Information` tab.

In your local repository, run:

```bash
$ git remote add <remoteName> <cloneUrl>
```

where `<remoteName>` is a unique name for your new remote – I usually name this remote `cpanel` whereas the GitHub remote is named `origin` – and `<cloneUrl>` is the clone URL you coppied from Git Version Control.

You can check if the command has worked using `git remote -v` which will list your established remotes.

```bash
$ git remote -v
cpanel  <cpanel clone url> (fetch)
cpanel  <cpanel clone url> (push)
origin  <github clone url> (fetch)
origin  <github clone url> (push)
```

Now, your deployment cycle will look like this:

```bash
$ gatsby build
$ git add .
$ git commit -m "Update build"
$ git push origin main
$ git push cpanel main
```

Git Version Control will show its progress in your terminal window as it completes the deployment:

```bash
Enumerating objects: 32, done.
Counting objects: 100% (32/32), done.
Delta compression using up to 4 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (19/19), 15.08 KiB | 3.77 MiB/s, done.
Total 19 (delta 11), reused 0 (delta 0)
remote: Recieved update on checked-out branch, queueing deployment.
remote: --- 
remote: apiversion: 3
remote: func: create
remote: module: VersionControlDeployment
remote: result: 
remote:   data: 
remote:     deploy_id: 17
remote:     log_path: /home/cranewif/.cpanel/logs/vc_1604266002.21772_git_deploy.log
remote:     repository_root: /home/cranewif/repositories/gatsby-cpanel-deploy
remote:     sse_url: /sse/UserTasks/00000000_5f9f2812355a77/vc_1604266002.21772_git_deploy.log
remote:     task_id: 00000000/5f9f2812355a77
remote:     timestamps: 
remote:       queued: '1604266002.23371'
remote:   errors: ~
remote:   messages: ~
remote:   metadata: {}
remote: 
remote:   status: 1
remote:   warnings: ~
To ssh://jlrezac.com/home/cranewif/repositories/gatsby-cpanel-deploy
   494f663..57b1676  main
```

In theory, you could also set up your cPanel remote in the `public` folder, but keep in mind that `gatsby build` erases the contents of the `public` folder every time it runs, so you would need to keep your `.cpanel.yml` file in the same directory as your Gatsby files and copy it along with `.gitignore` over each time you re-built your site. I'm interested in this solution, so if you try it, let me know how it works out for you!

This is my first real post on Dev.to. I'm excited to hear what you think!
---
date: 2020-08-01T19:57:00.000+00:00
title: Bout Manager
author: Jess Rezac
github_url: https://github.com/jessrezac/bout-manager
demo_url: https://www.loom.com/share/17702c2e16444d7da725d4762fb57e39
posttype: project
skills:
- Javascript
- Ruby
- HTML
- CSS
kicker: A React app to manage slam poetry bouts for Louder Than A Bomb-Kansas City.
  Built with React and Redux with a Rails API.
hero_image: "/content/images/bout-manager.png"

---
Bout Manager is essentially a competition management platform built for the Louder Than A Bomb poetry festival. It’s built using React to communicate with an API built in Ruby on Rails.

## Planning

I decided this app should be my final project for Flatiron School’s Online Software Engineering Program as I prepared for a new season of Kansas City’s Louder Than A Bomb festival in February 2020. Because of my involvement as an organizer of LTAB, I have deep knowledge on the mathematics of the competition and the needs that software could meet.

Since the festival began in 2014, every bout we’ve ran in Kansas City used my Google Sheet to keep score, and I personally had ran the spreadsheet at least 80% of the time. When a different bout manger ran scoring, they needed to know several specific instructions for the sheet, including that the order teams were listed in for round one needed to be maintained in the spreadsheet through every round even though the teams rotated their order from round to round.

To set up the Google Sheet for each bout, the bout manager needed to receive a list of the poets for each team. We always had enough to carry on the round, but we often got less complete data than we would have liked. An app could also solve this problem by facilitating team check-in online prior to the bout start or even online. An app could also provide error messages to coaches when their team configuration violated a rule.

![webmap illustrating database schema](/content/images/bout-manager-scapple.png "Rails Database Schema")Rails Database Schema Mapped Using Scapple

To plan for the app, I mapped out a database schema using [Scapple](https://www.literatureandlatte.com/scapple/overview). To help predict and think through some of the challenges of building a database that would span multiple teams in multiple competitions across multiple seasons, I relied on the Sports Standards Alliance’s [Open Database Schema for Sports Information](http://www.sportsdb.org/sd). This helped me to structure the database schema so that resources stay connected to each other in relatively small units: I created teams that belong to an organization and a season so that the events and poets affiliated with each organization could be organized under single seasons.

## Challenges

I worked through a reasonable number of technical challenges in this project, but nothing poses a challenge like a global pandemic.

![Screenshot of Events Index from Bout Manager app](/content/images/bout-manager-events-index.png)Screenshot of Events Index

On the technical side, I solved problems including:

* authenticating users and authorizing access to the API with webtokens using Devise and Doorkeeper gems
* creating a Redux store that could support my app without storing too much information that could be retrieved from the API
* normalizing data from JSON API to the Redux store as entities
* learning conventions for React app structure and creating my own patterns to rely on when writing functions, naming variables and more

Overall, the majority of my challenges on this project were more logistical and mental. Our first project week was the week that the school where I work as website/digital media specialist was closing down due to the pandemic. I managed all of our communications related to COVID-19 and our school closure for that week and then cancelled all but one day of vacation the following week that I had planned to dedicate to this app. The app moved slowly and not quite steadily from there. My day job workload about doubled when school moved online, so in the time that I developed this app, I also worked on:

* launching 10 website landing pages
* editing 40 videos that were sent as a morning message to every family in our school
* recreating two cherished school traditions in the form of video-rich landing pages
* keeping community alive through a hashtag campaign that meant receiving easily quintuple email volume

In case you were hoping my personal life was steadier, my family got doxxed mid-summer.

## Lessons

This app was much more complex than any of the React apps we worked with in the React module at Flatiron School. The API was more ambitious than my Rails app, [Card Trick](https://rezac.dev/projects/card-trick), and accessing it as an API added complexity to the project, too.

![Git log for bout manager app](/content/images/bout-manager-todo-lists.png "Git Commit Messages")Todo lists, notes, planning and git commit messages kept me organized over a long coding project timeline

I used a lot of productivity tools and habits that have been helpful to me in my professional career to keeping working on this project bit by bit without requiring a lot of mental effort to remember where I left off. My other projects for Flatiron School were created over 2–3 week crunches, so I was rarely out of my code for more than 12 hours until the project was submitted. This app required making better plans, lists, and notes. I wrote `git` commit messages with enough detail that I could refer back to them when I could jump back into coding. I left comments in code with todo items to keep track of where I would start the next time.

I learned a lot about structuring a React app and look forward to using that in future projects. I have a better handle on when and how to use Redux. When I return to this project to add more features, I may rely a lot less on Redux and leave more of the work to the API, but regardless of how much this project needs to use Redux to meet project requirements, I understand how to structure a Redux store much better than before I started the project.
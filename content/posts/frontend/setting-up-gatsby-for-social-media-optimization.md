---
posttype: post
title: Setting Up Gatsby for Social Media Optimization
date: 2020-11-08T14:00:00-06:00
author: Jess Rezac
hero_image: "/content/images/screenshot-twitter-post-with-link.jpg"
kicker: "<p>Optimizing a page or post for social sharing helps your content stand out in a social media feed.</p>"
---

Whether you are writing content for your own portfolio or developing a website for a client, websites are essentially marketing collateral. Therefore, all websites implicitly have a goal of attracting the right audience for whatever it is they're marketing.

I'm transitioning into full-stack web developer roles now, but in my current career station, I'm a mid-career digital marketer. As I've learned Javascript and Ruby, I'm often surprised by how little about optimization for search engines and social sharing are part of tutorials.

For example, when I worked on [Daily Practice](https://www.rezac.dev/projects/daily-practice "Daily Practice"), my mindful journalling app built in Sinatra, I had to figure out how to pass a title meta tag to the template for the various pages of my site, because it felt too weird to me to leave it out.

SEO (search engine optimization) helps ensure that your page gets some share of voice for relevant search terms. That's fairly easy when someone knows who or what brand they are looking for – say "Jess Rezac" – and a little more challenging when someone only knows the need they're looking to have solved – say "Web Developer near me."

Optimizing a page for social sharing is more about creating the aesthetic or brand that you desire so that your content stands out when you or a reader shares it to social media.

## Social Share Optimization In Gatsby

Social media sites use meta tags provided by a webpage to determine what content should appear as the page title, description, link and image in a linked post.

My portfolio is built in Gatsby so I'm using `React Helmet` to add meta tags between the `<head>` tags on my articles and pages.

To install React Helmet as a Gatsby plugin, install `gatsby-plugin-react-helmet` and `react-helmet`:

```shell
npm install gatsby-plugin-react-helmet react-helmet
```

Then, add the plugin to your `plugins` array in `gatsby-config.js`:

    {
      plugins: [`gatsby-plugin-react-helmet`]
    }

`React Helmet` gives you a `<Helmet>` component that passes its children as changes to the document head.

```jsx
import React from "react"
import { Helmet } from "react-helmet"

function Layout(props) {
  const { title, description, oGraphUrl } = props

  return (
    <div id="application">
      <Helmet>
        <meta
          property="og:title"
          content={title}`}
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={
            !oGraphUrl || oGraphUrl === ""
              ? `${siteUrl}/rezacdev.png`
              : `${siteUrl}${oGraphUrl}`
          }
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={
            !oGraphUrl || oGraphUrl === ""
              ? `${siteUrl}/rezacdev.png`
              : `${siteUrl}${oGraphUrl}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </div>
  )
};
```

---
date: 2019-09-12T19:57:00.000+00:00
title: Daily Practice
author: Jess Rezac
github_url: https://github.com/jessrezac/daily-practice
demo_url: https://www.loom.com/share/cdc6cdebfb7f4fd79a302ed9f2084cbc
posttype: project
skills:
- Ruby
- HTML
- CSS
kicker: Daily Practice is a private journal for free-writing and keeping a daily gratitude,
  forgiveness and commitment practice. Built using Ruby, Sinatra, and ActiveRecord.
hero_image: "/content/images/daily-practice.png"

---
Daily Practice is a journal that allows a user to keep a private daily journalling practice that includes free-writing, gratitude, forgiveness, and commitment. The idea was inspired by a [Catholic friend](https://shamelesspopery.com) who described a daily prayer practice where one says thank you to God for three things, asks Jesus for forgiveness for two things, and makes one commitment to the Holy Spirit. I liked the idea, thought the practice would be useful, and knew the resulting application would satisfy — and go just beyond — the project requirements of the Sinatra project at Flatiron School.

## Planning

I began this project by illustrating a database schema that showed the relationship between the User and their Journals. Then, I loosely sketched a user interface for the main views I would need. I considered writing this blog post that describes the project as a kind of planning exercise. I still feel like that idea would be useful, but for this project, I started by creating a checklist of the order I planned to employ when writing code.

## Getting Started

After setting up the file directory, `config.ru` and `config/environment.rb`, I began by creating ActiveRecord migrations to build the database. I created Users and Journals with database tables and ruby classes that assigned relationships between them.

Next, I worked on:

* Session Controller and views
* Journal Controller and views
* Gratitude database migration and models with edits to account for Gratitude in Journal controller and views
* Forgiveness database migration and models with edits to Journal controller and views
* Commitment database migration and models with edits to Journal controller and views
* I worked on the user interface in Views

## Challenges

Overall, this project didn’t feel very challenging. After my CLI project, I wanted to stay within the framework of the assignment a little better — for my own stress level — and I definitely did that this time. I’m glad that I included a has many through relationship in my models, because without the little bit of extra thinking that component required I would have been very bored.

I wish I would have done more to sketch out the UI from the outset of the project. I spent entirely too much time working on views and overhauled the entire design in some respects about two and a half times. I think I would have been less frustrated if I would have had a better wireframe of where I wanted the design to end up.

## Lessons

I spent a lot of time learning Bootstrap 4 and brushing up on my CSS3 and HTML5 skills during this project. With more than 15 years of experience in HTML and CSS, I have gotten a little reliant on Wordpress and plugins in my front-end work, so I’m glad to feel like my technical knowledge is up to date in that area.

While familiarizing myself with Bootstrap 4, I determined that the most straightforward way to customize it was using Sass, and I found picking up that framework to also be very fulfilling.

## Next Steps

I designed this program in a secular way, but my hope for it is that it would be designed to be useful to people who are coming from a religious tradition as well. I envision letting users choose whether they come from a Christian tradition, Buddhist tradition, or prefer for their Daily Practice to remain secular. These options would reword the prompts for each section of the Daily Practice journal — where Christians would ask for forgiveness instead of the more bi-directional prompt “What needs forgiveness today?”

I’d also like to add Christian, Buddhist, and secular inspiration for people that changes daily. I’ve already determined that could be scraped from two sites I found, but it needs to be built.

Next, I want users to be able to design their Daily Practice journal in a modular way. For example, a user could decide to only free-write and record a commitment.

Then, I would like to let users add [Paul Graham’s daily to-do list reminders](http://paulgraham.com/todo.html) to the commitment section of their journal. I discovered these during the project and thought they would fit well.

Finally, I have some ideas for UI changes. I’d like to be able to use contenteditable HTML elements instead of textareas for the sake of aesthetics, but I’ll need Javascript to accomplish it. I think using the Unsplash API — in the style of [Momentum Dash](https://momentumdash.com/)— to add more decorative graphics to the journal would be a nice touch, too.
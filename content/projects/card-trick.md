---
date: 2019-11-14T19:57:00.000+00:00
title: Card Trick
author: Jess Rezac
github_url: https://github.com/jessrezac/card-trick
demo: https://www.loom.com/share/c7ef9ecf0ac647e8a5d34fec17b3b793
posttype: project
skills:
  - Ruby
  - Javascript
  - HTML
  - CSS
kicker:
  Card Trick creates clean and simple flashcards, automatically, from Google
  Docs. Built using Ruby on Rails with help from Google Drive API and Google File
  Picker API.
hero_image: "/content/images/card-trick.png"
---

Card Trick is a web application written in Ruby on Rails that creates clean and simple flash cards, automatically, using comments in Google Drive. The idea for this project came from my husband who was studying flashcard apps while completing a UX certification. In his research with current undergraduates, law students, and med school applicants who had recently studied for the MCAT, he learned that while there are some flash card apps that are good, students don’t like creating their own flash cards when they have already spent a lot of time working on notes and outlines for their courses. As we discussed the project, I realized the Google Drive API would allow someone to access highlighted text and comments in a Google Doc which could then be generated into a flashcard.

## Planning

I felt like my Sinatra project would have improved with more planning of views before I started developing the app. I spent more time before this app planning views. I also made a plan for the order that I would use to create features. My main strategy was to tackle as much of the code as I could before I integrated Omniauth or the Google Drive API.

## Challenges

Using the Google Drive API was the biggest challenge in this project. In May, Google limited the access that third-party apps could have to Google Drive files without going through a verification process with Google. My original vision of the app would have had users authorize my app to have access to their Google Drive when they logged in with Omniauth or the first time they wanted to create a stack through Google Drive. I thought I would provide them a dropdown of their Google Docs to generate a stack of flashcards. Instead, users have to authorize my app one time per file.

To select a file, they need to use the Google Picker to select a file from their drive. This requires my app to access an additional API. Also, the Picker API uses javascript, not Ruby, to function. It was challenging to use Javascript at a higher level than I have before, but I managed to figure it out and feed it to my app’s back end to create stacks of flashcards. Ultimately, I think this improves the usability of my app because it means that users aren’t tied to the account they use to login to generate flashcards and can instead use a personal Gmail account to login while generating flashcards from a school G Suite account.

## Lessons

I was very sick the last two days of this project period — including right now — so I’m wishing I would have been able to allocate more time to the project earlier in the project cycle.

In part because of the illness, I haven’t been able to spend much time learning Devise or Pundit, so I look forward to abstracting authentication and authorization out of my next app.

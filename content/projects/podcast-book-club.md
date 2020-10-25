---
date: 2019-07-13T19:57:00.000+00:00
title: Podcast Book Club
author: Jess Rezac
github_url: https://github.com/jessrezac/podcast-book-club
demo_url: https://www.loom.com/share/d65589fc83a14adb922812be633c12eb
posttype: project
skills:
- Ruby
kicker: Podcast Book Club is a command-line interface that builds an explorable library
  of book recommendations from Vox's Ezra Klein Show podcast.
hero_image: "/content/images/podcast-book-club.png"

---
As a student at Flatiron School, I was excited to think of a CLI project that both met the scope of the assignment — to scrape a website two levels deep — and that would solve a “problem” I had, using code. Satisfying the project requirements and creating a useful app ultimately complicated my project just a bit, but I feel more fulfilled by the project at the end. I’m more interested in extending the functionality of my app than I think I would be if the app were purely an exercise in demonstrating my ability to code using Ruby.

Podcast Book Club scrapes the episode list and show notes of [**The Ezra Klein Show**](https://www.vox.com/ezra-klein-show-podcast), a Vox podcast, for the show guest’s book recommendations. The app then builds a library and allows the user to explore their bookshelf by genre, author, or keyword.

![laptop open to code editor on a table in front of a screened window](/content/images/maxnelson.jpg) Photo by [Max Nelson](https://unsplash.com/@maxcodes?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

## Planning

I’ve listened to The Ezra Klein Show since the first episode debuted and I’ve always liked hearing the books recommended by the guests. At first, the recommendations weren’t included in show notes at all, and now that they are, there isn’t much that Vox does to compile them. I think in the history of the show, they’ve made one list of book recommendations and it was very early on.

When I considered how I would want Podcast Book Club to work, I knew that I would want it to help me (and any users) see the books recommended by guests and be able to interact with the complete book list by author or genre.

## Getting Started

Beginning in January of this year, books are listed with Amazon links, so it’s fairly easy to find those links in the show notes using Nokogiri. I also wanted to be able to find books in the show notes using Reg Ex and patterns in how books are listed. I wasn’t sure if I would be able to accomplish the second thing, so I started by building a scraper.

I was mostly successful at building the scraper that looks for books that do not have links so that code exists in my application, but it’s not available as a menu option in the interface quite yet. I didn’t want to complicate the usability of my app and jeopardize my success in the assignment, so I will leave that as an extended functionality on a later version of the app.

After I built the scraper, I created objects to store scraped data. The objects in my app are:

* Episodes
* Books
* Authors
* Genres

I also have a CLI object that creates an instance of the interface for the app and a Scraper object that creates an instance of the scraper that the CLI and other objects use to build data.

## Challenges

Although the links in the episodes are from Amazon, I use a GoogleBooks gem to find information about the books beyond what is provided in show notes. I made this choice very early on as I found that Amazon’s redirect loops tripped Nokogiri when it isn’t starting its scrape on one Amazon.com URL. GoogleBooks also helps with scaling the functionality to include books that aren’t linked to Amazon. My scraper builds a query for each book that includes its best guess for the title and author from show notes and then searches Google Books using that query and uses the first result to build a book, author, and genre object for the book.

I use player.fm as the site to scrape to get information about the Ezra Klein Show. I initially chose it because it seemed to list every episode rather than relying on javascript and a “load more” button as the user reaches the end of a partial list. As I got a little deeper into my code, I realized that the page was actually using javascript to create a continuous scroll of the episodes. As the user wasn’t required to click, I looked for the URL that javascript called and built my own path that requests the number of episodes that have books listed at all and then adds to them based on an algorithm that adds to the number every time a new episode should be released on Monday or Thursday.

## Lessons

The main lesson I learned was how to scale a project correctly for the assignment and I’ve learned a lot about the process of building an app. Overall, I like the Flatiron School curriculum a lot, but on this (major!) project, I feel like I would have benefited from a checklist that explained the process of watching the code. They provided one video of a simple CLI app development process, but I learn better from text.

On future projects, I’ll follow a much better project checklist that will help me include envisioning my app, sketching an interface, coding it using pseudocode and then stubbing, and then building it in a more linear way.

I did attempt to incorporate tests in this app even though it wasn’t part of the project assignment. It helped a lot with coding the object classes and making sure they related to each other correctly, but because I was writing the app without a ton of planning of how this would happen, I ultimately changed the way that Genre’s instantiated and that caused many of my tests to break by the end of app development.

## Next Steps

I hope to return to the development of this app so that I can include more functions.

First, I would like the app to be able to generate Books based on episodes that do not have links in the show notes. Currently, this works most but not all of the time.

Second, I would like to give more options after books are listed. It would be cool if the user could use a command to open the URL in their browser without leaving their keyboard. And I’d like users to be able to show a synopsis of certain books in the genre list and author list. Possibly, I would want to remove the synopsis from the book list unless the user requested it.

Third, I would like to consider using the Goodreads API instead of GoogleBooks. Practically, Google Books is very forgiving which helps when the query generated from show notes that do not have links are not exact, but I would like to be able to let users save a book to their want-to-read list on Goodreads.

## More

Listen to The Ezra Klein Show at [Player.fm](https://player.fm/series/the-ezra-klein-show/) or check out other [Vox Media Podcasts](https://www.vox.com/pages/podcasts).

Checkout [Podcast Book Club on Github](https://github.com/jessrezac/podcast-book-club).
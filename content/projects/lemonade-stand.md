---
date: 2020-01-19T19:57:00.000+00:00
title: Lemonade Stand
author: Jess Rezac
github_url: https://github.com/jessrezac/lemonade-stand
demo_url: https://www.loom.com/share/022bc3e39867477686f2dcc547e6fbe0
posttype: project
skills:
- Javascript
- Ruby
- HTML
- CSS
kicker: A JavaScript build of the classic AppleIIE game, powered by a Ruby on Rails
  API.
hero_image: "/content/images/lemonade-stand.png"

---
Lemonade Stand is a clone of the classic Apple IIE game of the same name. It’s a single page application, built using Javascript’s `fetch` command to asynchronously communicate with an API built in Ruby on Rails.

## Planning

I planned for this project by playing the original game available through online emulators several times. I read a strategy guide for a more sophisticated version of Lemonade Stand that discussed ways to optimize your game inputs based on the randomized weather. I also found a git repository of the code for the original game in BASIC and read through it to get an idea of how to generate the logic for the game.

I designed my back-end to comply with the project requirements. I decided to persist individual Games and Days to the API so that in future versions of the game, there could be a high score leaderboard that players could add their name to and so I could aggregate data to increase difficulty based on results that players had saved.

## Challenges

This project was pretty straightforward. I struggled a little bit with using Netflix’s Fast JSON Api gem to serialize API data. My introduction to the gem had proposed including the collection of objects in a has_many relationship on the parent by passing options to include that collection to the new instance of the serializer. I had better results including :days as an attribute in the Games serializer and then specifiying which serializer the gem should use when including the day attributes.

## Lessons

This project helped me grasp the specifics of object-oriented programming in Javascript.
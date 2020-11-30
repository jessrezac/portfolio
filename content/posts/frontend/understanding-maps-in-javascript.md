---
posttype: post
title: Understanding Maps in Javascript
date: 2020-11-29T18:00:00-06:00
author: Jess Rezac
hero_image: "/content/images/delfi-de-la-rua-vfzfavuzmfc-unsplash.jpg"
kicker: "<p>Map and Set are data structures introduced to JavaScript in ECMAScript
  2015. A keyed collection, maps most resemble objects in JavaScript but maintain
  insertion order similar to an array.</p>"

---
A keyed collection, map is similar to a fundamental object in that it is iterable and accepts key/value pairs, but differs in a few ways:

* Keys in a map are not restricted to any data type. You could use an integer, string, even another object as a key. In fact, `NaN` can be used as a key even though elsewhere in JavaScript `NaN !== NaN`.
* Maps maintain insertion order.

Initialize a new map using the syntax:

```js
    const map = new Map()
```

You can then use the following instance methods to interact with map:

```js
map.clear()
// removes the key-value pairs from the Map object
map.delete(key)
// removes the corresponding key/value pair and returns true
map.get(key)
// returns the value associated to the key or undefined
map.has(key)
// returns a boolean if the key/value pair exists in the map
map.set(key, value)
// returns the map object
```

Maps are also iterable objects that respond to the following iteration methods:

```js
map.keys()
// returns a new iterable object that contains the keys for each element in the Map in insertion order
map.values()
// returns a new iterator object that contains the alues for each element in the Map object in insertion order
map.entries()
// returns a new iterator object that contains an array of key/value pairs for each element in the Map object in insertion order
map.forEach(callbackFn)
// calls callbackFn once for each key-value pair in the Map object in insertion order.
```

In addition to Map, WeakMap exists. WeakMap works similar to maps except that it consists of only objects as keys and is not iterable which means the objects used as keys are subejct to garbage collection. 

Photo by [delfi de la Rua](https://unsplash.com/@delfidelarua7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
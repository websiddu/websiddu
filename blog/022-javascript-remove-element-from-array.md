---
title: Remove an element from array JavaScript
date: Jan 19, 2020
description: Often times developers run into a situation where they have to remove a specific element from an array. And with JavaScript there a quite a lot of ways to approach this.
permalink: /blog/javascript-remove-element-from-array.html
prev: /blog/how-to-design-a-ux-portfolio-website-part1.html

autometa:
  author:
    name: Siddhartha Gudipati
    twitter: websiddu

tags:
  - javascript
  - array
  - remove
  - remove element
  - remove element from a specific location
  - javascript splice
  - array.slice()
  - array.shift()
  - arr.pop()
---

Often times developers run into a situation where they have to remove a specific element from an Array. And with JavaScript there a quite a lot of ways to approach this. Below are some of simple and straightforward examples,

### Remove from a specific location

```js
let array = ["apple", "ball", "cow", "dog", "egg"];
const location = 1;

array.splice(location, 1);

// array ->  ["apple", "cow", "dog", "egg"];
```

### Remove at the end

```js
let array = ["apple", "ball", "cow", "dog", "egg"];
array.pop();

// array -> ["apple", "ball", "cow", "dog"]
```

### Remove at the beginning

```js
let array = ["apple", "ball", "cow", "dog", "egg"];
array.shift();

// array -> ["ball", "cow", "dog", "egg"]
```

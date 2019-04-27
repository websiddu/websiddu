---
title: CSS box-sizing in and out
date: May 01, 2014
permalink: /blog/css-box-sizing-in-and-out.html
next: /blog/my-website-is-build-on-open-source.html
prev: /blog/my-sublime-text-setup.html
description: box-sizing is a new CSS3 property that is handy in overwriting the default BOX model given by the browser. Let's start with how box model works. All the block-level element (like div, header, section, footer etc...
---

`box-sizing` is a new CSS3 property that is handy in overwriting the default BOX model given by the browser.

Let's start with how box model works. All the block-level element (like `div`, `header`, `section`, `footer` etc...) in the html must follow the box model. And which looks like below. So, this box model used to calculate the heights and widths of block level elements.

![Box model](https://lh5.googleusercontent.com/-aCwB7kur8l4/U2JjDzBTYDI/AAAAAAAABRc/SNaYAyUvc54/s0-U-I/box-model.png)

The width/height of an element gives the width/height of the content of the box, excluding padding and border. They are calculated like this:

```
Width = width + padding-left + padding-right + border-left + border-right
Height = height + padding-top + padding-bottom + border-top + border-bottom
```

Let's see this with an example, for instance lets assume that we have div of class `box` and it has some padding, margin and border.

```css
.boxxy {
  border: solid 5px purple;
  margin: 40px 20px;
  padding: 20px 30px;
  width: 400px;
  height: 100px;
}
```

```html
<div class="boxxy">Namaskaram!!</div>
```

## Result

<style>
.boxxy {
  border: solid 5px purple;
  margin: 40px 20px;
  padding: 20px 30px;
  width: 400px;
  height: 100px;
}
</style>

<div class="boxxy">Namaskaram!!</div>

Now lets calculate the actual height/width of the boxxy on the screen.

```
Height = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
  = 100 + 20 + 20 + 5 + 5 + 40 + 40
    = 330

Width = width + padding-right + padding-left + border-right + border-left + margin-right + margin-left
      = 400 + 30 + 30 + 5 + 5 + 20 + 20
      = 510
```

This is how it works in all the browsers, However IE8 and below will not take add the padding and border to the width. We can fix that using a html5 doc type.

```html
<!DOCTYPE html>
```

Now, imagine if you ever want to overwrite this behavior for some reason, then our super hero of the day will help us do that. Let's say we have a `div` with width 500px and a `div` inside that. By default the child div will occupy the 100% width, now say If you give some padding and border to the child div all over then you can see a weird behavior of the box that is padding and border cut into the box.

<iframe width="100%" height="300" src="http://jsfiddle.net/websiddu/FSVqS/embedded/result,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You can see in the above example you cannot see the green background. To fix this one ugly solution will be giving `width: 90%` or `width: 420px` to the child container which will not work in fluid layouts. There are cases where we have to use the 100% width to the child container. Consider a `<textarea>` unlike the child `div` the textarea will not occupy the 100% width it depends on the `col` attribute of the tag. So to make this look pretty with full width, we are forced to give 100% to the text area. Now, if we want to give some nice padding or border to the text area then the textarea will come out of the parent div, which is kind of wierd. So to fix this issue we can use this `box-sizing` property.

box-sizing allows you to switch box models :

1. **content-box**: This is the default style as specified by the W3C. The width and height properties are measured including only the content, but not the border, margin, or padding.

2. **border-box**: The width and height properties include the padding and border, but not the margin. This is the box model used by IE when the document is in Quirks mode.

3. **padding-box**: The width and height properties include the padding size, and do not include the border or margin (only in Firefox).

<iframe width="100%" height="700" src="http://jsfiddle.net/websiddu/YHUkA/1/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Browser support

![Bowers support](https://lh4.googleusercontent.com/-AFTF2JJhPi4/U2KLnsDr_LI/AAAAAAAABR4/6rjeEGQfCLc/s0-U-I/box-sizing-browser-support.png)

## Further reading

1. http://www.w3.org/TR/css3-ui/#box-sizing
2. <a href="http://www.456bereastreet.com/archive/201104/controlling\_width\_with\_css3\_box-sizing/" target="_blank"> http://www.456bereastreet.com/archive/201104/controlling_width_with_css3_box-sizing/ </a>
3. https://github.com/Schepp/box-sizing-polyfill
4. https://developer.mozilla.org/En/CSS/Box-sizing

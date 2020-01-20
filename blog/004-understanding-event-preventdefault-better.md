---
title: Understanding e.preventDefault() better
date: February 09, 2014
permalink: /blog/understanding-event-preventdefault-better.html
next: /blog/my-sublime-text-setup.html
prev: /blog/use-google-app-engine-as-cdn.html
description: It's pretty common that many of us use `event.preventDefault` and `return false` on a click event or any other event. Lets see `event.preventDefault()` first. The function name itself more or less tells the story, that it will prevents...

tags:
  - jquery preventdefault
  - event.preventDefault()
  - jquery
  - default prevented
  -
---

It's pretty common that many of us use `event.preventDefault` and `return false` on a click event or any other event. Lets see `event.preventDefault()` first. The function name itself more or less tells the story, that it will prevents the default action on any event.

> event.preventDefault() &mdash; Cancels the event if it is cancelable, without stopping further propagation of the event.

Let's see an example, say in your awesome cool website you have a link to google.com and you want to show google.com in a modal window instead opening up in the new tab, then you will do something similar to below.

```js
$("a.open_modal").click(function(event) {
  event.preventDefault();
  // Open modal
  $('#modal').modal($(this).attr('href'));
}
```

The example above is specific to jQuery, However `preventDefault()` is a JavaScript function on an event. Most of the developers think that `preventDefault()` is a jQuery function but its not. See the below example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>preventDefault example</title>
    <script>
      function stopDefAction(evt) {
        evt.preventDefault();
        alert("You shall not pass!!");
      }
      function Init() {
        document
          .getElementById("my-form")
          .addEventListener("submit", stopDefAction, false);
      }
    </script>
  </head>
  <body onload="Init()">
    <p>Please click on the submit button.</p>
    <form id="my-form">
      <input type="checkbox" id="my-checkbox" />
      <label for="my-checkbox">Checkbox</label>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Above example stops the normal form submit when you click on the submit button. See in action below

<iframe height="420" style="width: 100%;" scrolling="no" title="preventDefault example" src="https://codepen.io/websiddu/embed/MWYzPey?height=420&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/websiddu/pen/MWYzPey'>preventDefault example</a> by Siddhartha
  (<a href='https://codepen.io/websiddu'>@websiddu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## event.defaultPrevented

So now we successfully prevented the default action, now you may ask how do I find out the event is prevented or not. As of Gecko 6.0, calling preventDefault() causes the `event.defaultPrevented` property's value to become true. In short `event.preventDefault()` will make the boolean `event.defaultPrevented` true. A simple if condition to check if default is prevented or not.

> event.defaultPrevented is a boolean turned to true when event.preventDefault() is called.

```js
if (e.defaultPrevented) {
  // the default was prevented
}
```

Browser support for event.defaultPrevented

<table class="table">
    <tbody>
      <tr>
        <th>Feature</th>
        <th>Chrome</th>
        <th>Firefox (Gecko)</th>
        <th>Internet Explorer</th>
        <th>Opera</th>
        <th>Safari</th>
      </tr>
      <tr>
        <td>Basic support</td>
        <td>18</td>
        <td>6.0 (6.0)</td>
        <td>9.0</td>
        <td>11.0</td>
        <td>5.0</td>
      </tr>
    </tbody>
  </table>

Before using event.preventDefault make sure if the event default event can be preventable with `event.cancelable` function. You can use `event.cancelable` to check if the event is cancelable. Calling preventDefault for a non-cancelable event has no effect.

NOTE: `preventDefault` doesn't stop further propagation of the event through the DOM. event.stopPropagation should be used for that.

#### Further reading

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/event.defaultPrevented" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/event.defaultPrevented</a>
- <a href="https://developer.mozilla.org/samples/domref/dispatchEvent.html" target="_blank">https://developer.mozilla.org/samples/domref/dispatchEvent.html</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault</a>

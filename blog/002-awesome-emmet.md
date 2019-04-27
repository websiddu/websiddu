---
title: Awesomeness of emmet
date: January 31, 2014
next: /blog/use-google-app-engine-as-cdn.html
permalink: /blog/awesome-emmet.html
prev: /blog/challenges-in-implementing-rwd-for-large-sites.html
description: Emmet is a collection of abbreviations that expand into html/xml/css, taking the idea of text snippets further. When working with Emmet, type in the appropriate abbreviation and hit the action key. In Sublime Text 2/3 this is the...
---

Emmet is a collection of abbreviations that expand into html/xml/css, taking the idea of text snippets further. When working with Emmet, type in the appropriate abbreviation and hit the action key. In Sublime Text 2/3 this is the `TAB` key.

> Emmet (previously known as Zen Coding) is a web-developer's toolkit that can greatly improve your HTML & CSS workflow.

There are some really cool features in emmet that we don't use frequently. I want to share some rarely used but very useful emmet features. Lets get started.

## Merge Lines

It merges selected lines into a single one. But when there's no selection, Emmet will match context HTML tag.

Unfortunately there is no key board shot cut enable by default in the emmet sublime text plugin. So, Lets create on our own. Open up the Preferences &rarr; Package settings &rarr; Emmet &rarr; Key Bindings - User and put the following code in that file and save it.

```json
[
  {
    "keys": ["shift+super+m"],
    "args": {
      "action": "merge_lines"
    },
    "command": "run_emmet_action"
  }
]
```

Now you can use the short cut `Shift`+ `Command`+ `m` to merge multiple lines in between a tag.

![Merge Lines with emmet](https://lh4.googleusercontent.com/-YTQ4NzZ9BUQ/Uuv8TS0PyHI/AAAAAAAABDU/SYNzmoBOLE4/s0-I/merge_lines.gif)

## Update image size

Its always a good practice to mention the height and width of the image in the `img` tag, However 90% of web developers ignore specifying the height and width attributes. For those this snippet is very useful.

This action helps you to automate this process: simply place caret inside <img> tag and run this action to add/update width and height attributes.

In CSS, place caret inside property value with url() function to add/update width and height properties for current rule.

You just need to press `shift` + `Ctrl` + `i`

Note that this action also works for absolute URLs: it will start searching for requested file from host file's folder and then will traverse up the tree.

![Update dimentisions](https://lh3.googleusercontent.com/-OcqZc60ylAI/Uuv8TYR-d5I/AAAAAAAABDY/KThsTDtvCyE/s0-I/image_dimentions.gif)

## Evaluate Math Expression

How much time you have spend adding up pixes, subtracting padding in the calculator application! Now you can evaluate math expression with in the code editor.

Evaluates simple math expression like 13\*7 or 14/5 and outputs its result. You can use \ operator which is equivalent to `round(a/b)`.

This is very useful in CSS where numeric values should be modified frequently.

![Evaluate Expressions](https://lh4.googleusercontent.com/-1hPHEa0qCbU/Uuxjdm7ViOI/AAAAAAAABD8/PE4Zgv8dlZk/s0-I/evaluate_expressions.gif)

## Increment/Decrement Number

This action, as name says, increments or decrements number under caret with different steps: 0.1, 1 or 10.

Shortcuts in sublime text 3 for increment

- `Ctrl` + `Up` &mdash; increments by 1 point
- `Alt` + `Up` &mdash; increments by 0.1 point
- `Alt` + `Command` + `UP` &mdash; increments by 10 point

Shortcuts in sublime text 3 for decrements

- `Ctrl` + `Up` &mdash; decrements by 1 point
- `Alt` + `Up` &mdash; decrements by 0.1 point
- `Alt` + `Command` + `UP` &mdash; decrements by 10 point

![Increment/Decrement Number](https://lh5.googleusercontent.com/-7Vf4A9rSYrU/Uux5O2Z9__I/AAAAAAAABEc/9tNeo2MDh38/s0-I/increment_counter.gif)

To conclude emmet is awesome start using it now!

### Other useful links

- [Emmet documentation](http://docs.emmet.io/)
- [Emmet cheat sheet](http://docs.emmet.io/cheat-sheet/)
- [Smashing magazine](http://coding.smashingmagazine.com/2013/03/26/goodbye-zen-coding-hello-emmet)

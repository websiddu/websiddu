---
title: My Sublime Text setup
cover: images/covers/sublime.jpg
date: February 15, 2014
next: /blog/css-box-sizing-in-and-out.html
permalink: /blog/my-sublime-text-setup.html
prev: /blog/try-banana-peanut-chocolate-protein-shake.html
description: It's obvious that almost all web developer and front-end developers use Sublime Text. Every one has there own use case and reasons for using ST, some might say its clear, fast and slim some might say its beautiful...
---

<TOC />

It's obvious that almost all web developer and front-end developers use Sublime Text. Every one has there own use case and reasons for using ST, some might say its clear, fast and slim some might say its beautiful, highly customizable and slick. I want to share my ST settings and plugins that I use as a front-end developer.

> Sublime Text is a sophisticated text editor for code markup and prose You'll love the slick user interface extraordinary features and amazing performance

Some of the main features of ST that I believe are Beautiful User Interface, Awesome Editing, Customization, Automation.

![Sublime Text Features](https://lh5.googleusercontent.com/-zqpMC4AkOV8/Uv76oQLNJvI/AAAAAAAABL0/RkeKme-VZeU/s0-I/features.png)

First off, I want to share my ST User settings; You can see the settings below or you can get it from this <a href="https://gist.github.com/websiddu/2c7150bad44ad2b7ab27" target="_blank">gist</a>.

```js
{
   "color_scheme":"Packages/Color Scheme - Default/Twilight.tmTheme",
   "detect_indentation":true,
   "ensure_newline_at_eof_on_save":true,
   "tab_size":2,
   "translate_tabs_to_spaces":true,
   "trim_trailing_white_space_on_save":true,
   "file_exclude_patterns":[
      ".DS_Store",
      "*.scssc",
      "*.gem"
   ],
   "folder_exclude_patterns":[
      ".git",
      ".sass-cache",
      ".bundle",
      ".tmp",
      "tmp",
      "node_modules"
   ],
   "font_face":"Monaco",
   "font_options":[
      "no_bold",
      "subpixel_antialias"
   ],
   "font_size":13.0,
   "highlight_line":true,
   "highlight_modified_tabs":true,
   "ignored_packages":[
      "Vintage"
   ],
   "rulers":[

   ]
}
```

You can make this as your settings just by copying and pasting this to your User - Settings.

Now as I said before, ST is highly customized there are many plugins that you can do almost every thing you want just by installing plugin. Here are some plugins that I use.

## Package Control

Package Control is one of my favorite plugins, it allows users to manage packages very easily, with one shortcut you have access to a long list of plugins available to install and update is automatically handled. To install it open the console View &rarr; Show Console or **Ctrl + `**, then paste the following code :

```python
import urllib.request,os,hashlib;
h = '7183a2d3e96f11eeadd761d777e62404e330c659d4bb41d3bdf022e94cab3cd0'
pf = 'Package Control.sublime-package'
ipp = sublime.installed_packages_path()
urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) )
by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read()
dh = hashlib.sha256(by).hexdigest()
print('Error validating download (got %s instead of %s), please try manual install' % (dh, h))
if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

or you can visit <a href="https://sublime.wbond.net/installation" target="_blank">https://sublime.wbond.net/installation</a>

## Emmet

Emmet my most favorite plugin, this enables me to code css and html blazingly fast and this will provide great shotcuts and handfull of other trick which will save ample amount of time.

![Emmet](https://lh4.googleusercontent.com/-PGIQEpCYIlo/Uv8AezzBotI/AAAAAAAABMQ/oxK9odRE9Cw/s0-I/emmet.png)

For more details and installation visit <a href="http://emmet.io/" target="_blank">http://emmet.io/</a>

## Sidebar Enhancements

Sidebar Enhancements Makes the sidebar more user friendly and improves its usability by adding more options to it. You can delete files and open files using certain programs like Photoshop. giving you more options on new files, moving files, copying files and opening files in another program.

![Sidebar enhancements](https://lh4.googleusercontent.com/-U8h1NV-DVRk/Uv8CGM9cNlI/AAAAAAAABMk/_iq2IChVjQQ/s0-I/sidebar.png)

You can get the source <a href="https://github.com/titoBouzout/SideBarEnhancements" target="_blank">https://github.com/titoBouzout/SideBarEnhancements</a> or install via package manager.

## Emmet LiveStyle

This awesome plugins which the combines the power of chrome and sublime text. This enables me to style real quickly without any refreshing or saving the file.

> Emmet LiveStyle is a plugin for live bi-directional (editorâ†”browser) CSS editing of new generation. Currently, it works in Google Chrome, Safari and Sublime Text, more browsers and editors will be available later.

![Live style for chrome](https://lh3.googleusercontent.com/-gYzdt1MIfcQ/Uv8EIo9pBLI/AAAAAAAABM4/EZIhb3mzi9k/s0-I/livestyle.png)

Checkout the installaiton guide <a herf="http://livestyle.emmet.io/install/" target="_blank">http://livestyle.emmet.io/install/</a>

## BracketHighlighter

Bracket Highlighter matches a variety of brackets such as: `[]`, `()`, `{}`, `""`, `''`, `<tag></tag>`, and even custom brackets. This is a very handy plugin with this you can easly find out where is the closing tag.

![Bracket hilighter](https://lh6.googleusercontent.com/-xg4xIG_vefA/Uv8GspSIpdI/AAAAAAAABNU/N97iswqj5DY/s0-I/bracket.png)

Get brackethighlighter at <a href="https://github.com/facelessuser/BracketHighlighter" target="_blank">https://github.com/facelessuser/BracketHighlighter</a> or install from package control.

## JsFormat

JsFormat is a javascript formatting plugin for Sublime Text. It uses the command-line/python-module javascript formatter from http://jsbeautifier.org/ to format whole js or json files, or the selected portion(s). You can get the souce from <a href="https://github.com/jdc0589/JsFormat" target="_blank">https://github.com/jdc0589/JsFormat</a>

## Text-Pastry

Text Pastry is a plugin for Sublime Text that will give you the necessary tools to insert or paste a bunch of text, a range of numbers or generated UUIDs into your selected locations.

> Plugin for Sublime Text. Insert/Paste a range of words, numeric sequences or UUIDs at once.

Ever wanted to paste incrementing numbers or five lines from your clipboard into five different locations at once? Text Pastry can help you out!

![Text pastry](https://lh6.googleusercontent.com/-qWAwdcZQdKk/UxwslVYcbMI/AAAAAAAABOE/ltyB54FB52w/s0-I/Screen%2BShot%2B2014-03-09%2Bat%2B2.23.48%2Bpm.png)

More details <a href="https://github.com/duydao/Text-Pastry" target="_blank">https://github.com/duydao/Text-Pastry</a>

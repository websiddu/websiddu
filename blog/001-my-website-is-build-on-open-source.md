---
title: My website is build on open-source
cover: images/covers/website.jpg
date: May 25, 2014
permalink: /blog/my-website-is-build-on-open-source.html
next: /blog/email-that-paved-my-path.html
# prev: /blog/css-box-sizing-in-and-out.html
description: Few months ago, my old website was pretty static and whenever I want to add a new project to my portfolio, I have to goto the file add the required details build the project again and FTP it to server. Which is...
---

Few months ago, my old website was pretty static and whenever I want to add a new project to my portfolio, I have to goto the file add the required details build the project again and FTP it to server. Which is a little tedious task if I want to do this even if I misspelt some thing in the content.

This time I wanted to build a dynamic portfolio site, in other words fetch data from a database. I started thinking, what are different ways that I can do this, first option was to use a CMS like Wordpress, Drupal or Joomla which are not ideal for my simple portfolio website. The next idea is to build my own application with stores data and fetches data for me.

As my website is very small and the traffic will be minimum. I decides to use all free services to build my portfolio website. After few iterations, I came up with my technology stack. Its ruby on rails and angularjs. Which looks like some thing below.

I want to use as many as technologies and services that I can for this small website. So, Let''s get started to know more.

### Server

I used Ruby on Rails to fetch data from the database. This ruby on rails application is hosted on heroku http://websiddu.herokuapp.com. As you can see its a pretty simple interface with enables me to add/edit/delete/get data. Its controlled by a simple authorization plugin using device gem. So only I''ve the access. ;)

And this has API end points to get the data so that I can uses the data with more flexibility. Here is an example of the API endpoint

http://websiddu.herokuapp.com/api/projects

**Keywords**

- Ruby on Rails
- SASS, Foundation
- Device
- Heroku

### Database

I wanted to use a no-sql database for my application as I am not going do any complex relations queries between tables. I chose mongodb with is very quick and easy. And, <a href="https://mongolab.com/" target="blank">Mongo lab</a> gives a 500MB database for free. So, I got my DB ready.

**Keywords**

- MongoDB
- Mongo lab
- Mongoid gem
- Nosql

### Front-end

Now I designed the static application using the API. This front-end part is built on Angular.js, SASS and Foundation and deployed on github.

http://websiddu.github.io/websiddu/#/

**Keywords**

- Angular.js
- SASS
- Fondation
- Yeoman
- Grunt
- Bower

### Assets

All the images, screen shots and sources are hosted on google app engine again a free service. First I tried using dropbox, but it turned out that I cannot control the caching time for those files. I wrote a blog post a while ago how to use google app engine as your static assets server or CDN. Check this out http://blog.websiddu.com/2014/01/15/use-google-app-engine-as-cdn/

**Keywords**

- Google app engine

To conclude, in simple this is how I used the open-source to build my portfolio website. If you have any question feel free to leave a comment below. I am ready to answer all your question.

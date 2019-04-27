---
title: How I implemented accessibility for my portfolio website?
cover: images/covers/accessibility.jpg
date: February 19, 2016
description: I am a designer who is full of empathy and I strongly believe in universal design. First of all, let me tell you what I understand about universal design. Wikipedia says...
permalink: blog/how-i-implemented-accessibility-to-website.html
next: /blog/నా-సంతకం-తెలుగు-లో-మరి-మీది.html
prev: /blog/integrating-your-node-app-with-uw-saml.html
---

[[toc]]

I am a designer who is full of empathy and I strongly believe in universal design. First of all, let me tell you what I understand about universal design. Wikipedia says,

> Universal design (often inclusive design) refers to broad-spectrum ideas meant to produce buildings, products and environments that are inherently accessible to older people, people without disabilities, and people with disabilities.

In other words, universal design means creating a product that is usable for anyone. When I say anyone, I mean people who have qualified knowledge to use that product. Universal design is hard and sometimes it's impossible to cover everything, but with some extra effort we can cover 80% to 90% of the aspect of it.

Universal design can be applied to any physical or digital products. Since I am interested in websites, I am going to only talk about digital aspects of universal design in this post. One of the main digital aspects of universal design is web accessibility, which mainly focused on visual disabilities. When I said accessible previously, I referred to web accessibility that was for visually disabled people. In this article, I will mainly talk about making the websites accessible for visually disabled people.

> Every designer has a portfolio website, but very few of them are accessible.

I got really frustrated and disappointed when I saw a designer's website that was not accessible at all but was full of the saying of empathy and accessibility. As a universal design advocate, I decided to take that little extra time to make my portfolio website accessible. And here began my journey.

## The Basics

Visually disabled people use something called **screen readers** to access the web content. Screen readers are special softwares that will read the content on the screen to them and give some additional powerful shortcuts to help them navigate. There are multiple screen reader softwares available in the market. The most popular ones are JAWS for Windows, NVIDIA for Windows, and Voiceover for Mac iOS. As a Mac user, I used Voice Over(Command + F5 to activate) to work on my website accessibility.

To begin with, I was well aware of adding `alt` attributes to the images and titles to the hyperlinks. These alt tags were super helpful for screen reader users since they could describe what the image was. Therefore, I went through all my web pages and added alt tags and titles to the images.

I saw many portfolios that had images with text but leaving no clue for the screen readers on what the image was. This made me little disappointed because I believed that designers should really care about the things they designed that were able to access to everyone.

## Navigation & Lists

Navigation places an important role when it comes to keyboard users. Make sure that your navigation uses the semantic markup like `nav` tags and `role=navigation` so that screen readers will detect these areas and enable users to jump from one section to the others.

Lists can be very effective when being used in a proper manner. Make sure that you use `ul` and `li` tags in proper places such as when there is a list of projects or list of tags.

## Font-icons

Using font icons will block Mac Voice Over. It will stop reading once it finds a font icon. Make sure that your font icon uses `aria-hidden=true` and add a description of the icon with `sr-only` class. Check the below example

```html
<i class="icon icon-close">
  <span class="sr-only"> Click here to close </span>
</i>
```

## Angular JS & SPA's

Another challenge is accessibility for single page application. As there is no page refresh in the navigation of single page applications, the screen readers will not detect the page change. I have to inform the page change manually using a `$.announce`. I also wrote a detailed blog post about implementing accessibility for single page applications.

## Roles & Regions

The roles, their characteristics, the states and properties they support, and specification of how they may be used in markup, should all be considered normative. In plain English, they tell you the type of the content you are at, which will be really helpful for screen reader users to identify the type of object and region and accordingly the user can take an action.

For example

```html
<ul role="menubar">
  <!-- Rule 2A: "File" label via aria-labelledby -->
  <li role="menuitem" aria-haspopup="true" aria-labelledby="fileLabel">
    <span id="fileLabel">File</span>
    <ul role="menu">
      <!-- Rule 2C: "New" label via Namefrom:contents -->
      <li role="menuitem">New</li>
      <li role="menuitem">Open</li>
    </ul>
  </li>
</ul>
```

## Color contrast

[We know](http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast) that our color contrast ratio should be 3:1 for non-decorative text, sized larger than 18 point or larger than 14 point if bold. Text smaller than that should meet a contrast ratio of at least 4.5:1.

I used http://webaim.org/resources/contrastchecker/ to check the color contrast ratios on my website.

## Final thoughts

It's very important for designers to make sure that their portfolio websites are accessible. Here are my takeaways.

1. Do the basics right.
2. Use navigation & lists intelligently.
3. Roles & Regions make life easier.
4. Accessibility in single page application sucks.
5. Check the color contrast .

## Vote of thanks

Throughout the process, I was constantly taking help from Cynthia Bennett, PhD. Student at University of Washington and [Hadi Rangin](http://www.washington.edu/doit/staff-profile-hadi-rangin) one of the staff members at [DO-IT](http://www.washington.edu/doit/).

![](http://res.cloudinary.com/websiddu/image/upload/c_mfit,h_800,q_53,w_1200/v1448299738/hardi_qrbhcl.png)

## Further reading

1. [Angular JS accessibility](http://www.slideshare.net/ginader/angularjs-accessibilty)
2. [Easy Color Contrast Testing](http://alistapart.com/blog/post/easy-color-contrast-testing)
3. [Introduction to Web Accessibility](https://www.w3.org/WAI/intro/accessibility.php)
4. [Tenon](https://tenon.io/index.php)
5. [Accessibility is about people.](http://marcysutton.github.io/angular-a11y/)
6. [Single page applications, Angular.js and accessibility](http://simplyaccessible.com/article/spangular-accessibility/)
7. [Slideroom Accessibility](http://blog.slideroom.com/slideroom-accessibility)

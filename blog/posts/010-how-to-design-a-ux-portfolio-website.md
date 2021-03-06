---
title: How to design a UX Portfolio website
date: Aug 05, 2019
description: Building a design portfolio website can be a daunting task especially when you are just starting with your design career or you are design student with no coding skills. I have heard many questions from my classmates asking where do I start. In this post I will try to explain how to build a portfolio website end to end.
permalink: /blog/how-to-design-a-ux-portfolio-website-part1.html
state: draft
sidebar: false

autometa:
  author:
    name: Siddhartha Gudipati
    twitter: websiddu

tags:
  - ux design
---

[[toc]]

## Introduction

A design portfolio website is a great medium to showcase your design work and tell a story about you. As of today a digital design portfolio website is one of the most essential when you are looking for a design job or recruiters to find you. Building a portfolio website can be a daunting task especially when you are just starting with your design career or you are design student with limited coding skills.

In this post I will explain how to design & build a design portfolio website end to end. I divided this post into different parts, in the first part is focused on design, and the second on building the website.

I’m writing this blog post with experience looking at 100’s of portfolio websites and conducting around ~50 onsite interviews at Google. Recommendations on this post are purely my interpretation of a good portfolio website, there might be other good portfolio ideas thats not described here. So Let’s get started,

## Purpose

As with any design project, ask yourself why are you doing this and what is the purpose of this particular project. Let's understand the purpose a portfolio website.

A design portfolio website is particularly important when you are actively looking for a design job. A well designed portfolio can guarantee at-least a phone call from the recruiter. Portfolio helps tell your stories effectively and even reflect your personality. In short a portfolio website is an easy way to share you work & story with the world.

## Considerations

Try and think of designing your portfolio is another design project, follow the User Centered Design process. Though you don’t have to follow every single step make a note to yourself and make assumptions as required. Consider thinking about different aspects of the problem you are trying to solve like — Who are your target users? What devices are you going to support? What typography you want to use? Below are some of the considerations for designing a portfolio.

### Target Users

First off, it's important to understand who you are designing this website for. So, if you are in search for a job, the target users mainly recruiters, design managers and interview panels and hiring committees.

In most cases you are reached out by a recruiter first when you apply for a job, So the first audience of a portfolio site a recruiter. A recruiter reviews 100s or applications for per day and generally busy with ongoing recruiting, once they click on your portfolio link they have less than a minute to review it and move to the next application. So keep that in mind, you have to be very direct and make a good impression in first 15 - 30 seconds. Once you are scheduled for an interview, the designers, design manager have little more time to explore your portfolio. Generally they look at 1 or 2 of your project in detail.

In short we can have two categories of target users one is recruiters and the other is design manager.

### Target devices

A recruiter might be using a Windows machine and a Microsoft Edge on a 13” Lenovo machine when reviewing 100’s of the applications. And the design manager can be using a MacBook Pro. And different browser and OS might render your website differently if do no optimize properly. In other words, our portfolio have to be cross browser compatible.

Let's say you were in a networking event and you wanted to show your portfolio to a design manager. Though a laptop is inaccessible, you should be able to pull up your website on your mobile phone to share with them. In other words, out website should to be responsive.

### Typography

A carefully chosen type set will make your portfolio look 10x classy. Avoid choosing a random funky font. Sometimes a typeface you choose may convey your character.

> "Typography is important because the internet is mostly made of words"

Be thoughtful about the typefaces and type sizes you choose. I’m pretty sure, design managers will appreciate your thoughtfulness and will add some extra points than a poorly chosen type. Here are some of my favorite typefaces, I collected over the years.

### Technology

The next step is to choose the technology you want to build your website on. There are two major options the first one is to use some sort of site builders like Squarespace, Wix or Wordpress, the other is to build yourself using HTML & CSS.

It’s important to decide how you are going to proceed as the templates available in site builders might be limited and you cannot achieve what you designed. In part 2 we will learn how to build a site from scratch using open source technologies like vuepress & github pages.

## Content

This is the most important part. The project you choose to show on your portfolio will determine whether you are going to get a call or not. Choose the content very carefully. I will give you more detailed explanations in the below sections.

Now you really know what your website is going to be. Write down all these considerations and make sure that your address them.

## Design

After researching and reviewing numerous portfolio, most commonly appeared pages on site are

- Projects list page or Home page
  - Project details page
- Resume
- About page
- Contact page

Those are the most common pages and you can add other pages like a blog for photography page if you are into such things. Now you have a sitemap of your portfolio website, the next step is to finalize some common components & layouts.

Most common components across all the pages are a header and a footer.

- Header
  - Logo or Name
  - Navigation
- Footer
  - Quick contact information
  - Social links
  - Copyright information

### Home

The homepage or landing page is the most important page for your portfolio, this is where you get to impress your audience. The landing page should contain two main components a welcome message, a short blurb and the projects list.

#### Option I

![Option I](https://res.cloudinary.com/websiddu/image/upload/v1565479060/blog/019/Option1.png)

#### Option II

![Options II](https://res.cloudinary.com/websiddu/image/upload/v1565479060/blog/019/Option2.png)

#### Option III

![Options III](https://res.cloudinary.com/websiddu/image/upload/v1565480000/blog/019/Option3.png)

Now you picked the landing page, the next step is to design your project detail page.

### Details

I reviewed several good portfolio and distilled the common sections in a good project details page.

- Project title
- Project summary
  - Type of project
  - Timeline
  - The team members
  - Your role
- Main content
  - Introduction
    - A video or Image
    - Links to resources
  - Problem
  - Goals
  - Process (optional)
  - Research
  - Prototypes
    - Paper prototypes – Pros and Cons
  - Design
    - Images
    - Videos
  - Outcome & Learnings
- Page footer
  - Next Project
  - Previous Project

Write down this information for each and every project under the subheadings project project in each google doc. Once you start writing things your will start remembering small details of your design. Bring up all the pictures you took with your group, the paper prototypes you made. Just looking at them will refresh your memories.

Once you are confident that you want to put in each project them you need to layout this information. You can keep tweaking the content once the layout is finalized. You can use different layouts for the detail pages. Here are a couple of common once.

![Image](https://res.cloudinary.com/websiddu/image/upload/blog/019/details.png)

### About

The purpose of the about page is to tell your story, here is an opportunity for you to tell some interesting things about you and tell how you got into design. You can be very creative here, some uses pictures some uses words. Just go out of the box. Here are some pointers to get you started,

- Where you are from
- Your design philosophy
- Places you've worked at
- Your timeline
- Hobbies & other talents
- Books you've read
- Music you love
- Social media links
- Anything that is interesting about yourself

![Image](https://res.cloudinary.com/websiddu/image/upload/blog/019/about.png)

### Contact

The contact page should contain your email address or a little contact form as an optional.

![Image](https://res.cloudinary.com/websiddu/image/upload/blog/019/contact.png)

### Resume

This is super straightforward, just link to your latest PDF resume. Helps recruiters to reach out to you and allows recruiters to forward your profile to their colleagues.

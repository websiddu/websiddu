---
title: Integrating node apps with UW's SAML
cover: images/covers/saml.jpg
date: July 28, 2015
permalink: /blog/integrating-your-node-app-with-uw-saml.html
description: As part of my on-campus jobs, I built a custom form builder for the UW Dept of Sustainability. I used MEAN (MongoDB, Express.js, Angular.js, Node) as my tech stack. I was the only designer and developer for the whole application...
sidebar: false
---

As part of my on-campus jobs, I built a custom form builder for the UW Dept of Sustainability. I used MEAN (MongoDB, Express.js, Angular.js, Node) as my tech stack. I was the only designer and developer for the whole application. So, for that I was required to integrate the application with UW NetID using SAML. After toiling for a couple of months, I was able to successfully integrate UWNetID with the node application. There was no good documentation on how to do that. So, I decided to write this awesome blog post to help other people like me.

**Note:** I assume that you have prior knowledge working with mongoDB and node. If you don't have any idea what those are scroll till the end enjoy the cat gif.

### Step 1: Get your sub-domain.

First you have to get your sub domain on UW. You should raise a request to the UWIT for the sub domain. In my case its "green-certification.uw.edu". Send an email to help@uw.edu if you have proper permissions. And ask them to point it to your DNS server(If you got one)

### Step 2: Get valid certificates

Second you need to get valid HTTPS certificates for your server. You have to use those certificates to run the node server and the shibboleth sever. You can get those from UWIT again. Just send an email to help@uw.edu requisition for brand new secure certificates for your newborn domain.

### Step 3: Install Shibb on your server

Then, next you have to install Shibboleth on your server(You don't have to install apache). Follow this link https://wiki.shibboleth.net/confluence/display/SHIB2/Installation
or again request UWIT to install it, if you have a server that is managed by the UWIT. Once you configured the Shibboleth on to your server, make sure you are running some server it can be node or apache or any other.

Here is my shibb configuration file

<!-- <script src="https://gist.github.com/websiddu/b45f9b2b941b8252bb62.js"></script> -->

Make sure you remember the EntitiyID in line number 10 that should match with your EnitityID in the IDP server. And also make sure that you give valid certificates `CredentialResolver` at line number 59 and 60.

You should be able to get the XML metadata
https://green-certification.uw.edu/Shibboleth.sso/Metadata with proper values.

### Step 4: Register your server with IDP

Once you get all the details correct you should ask UWIT to register your server with the IDP. Be careful about the name and make sure that you ask to release the attributes that are required(e.g NetID, FullName etc...). You can check the IDP in this URL https://iam-tools.u.washington.edu/spreg/

![Img](http://res.cloudinary.com/websiddu/image/upload/v1440464533/saml1_yn7gcm.png)

Make sure this entityID matches with the entityID in your sihbb metadata. Also, ask for the ACS POST request to point to the correct URL. Once you are authenticated the data is passed to this URL as post request, so this is where you do all important stuff.

### Step 5: Integrate netID

In your node application use the library uwshib (https://github.com/drstearns/passport-uwshib) to integrate your application. And again make sure that you used the same entityID and Certificates that you used before to run the https server.

<small>Taken from https://github.com/drstearns/passport-uwshib </small>

<!-- <script src="https://gist.github.com/websiddu/25c3958156d502c8ce5d.js"></script> -->

<!-- <script src="https://gist.github.com/websiddu/6bef6b86d7ec33e23be1.js"></script> -->

### Step 6: Sleep in peace

![Cat](http://thoughtcatalog.files.wordpress.com/2013/05/cat1.gif?w=800&h=570#center)

### Further reading:

- Email me at me@websiddu.com if you have any questions
- Read passport.js documentation

---
title: Use google app engine as CDN
date: February 08, 2014
next: /blog/understanding-event-preventdefault-better.html
permalink: /blog/use-google-app-engine-as-cdn.html
prev: /blog/awesome-emmet.html
description: To begin with, for people who are not familiar with CDN. What is CDN ? (Wikipedia definition) A content delivery network or content distribution network (CDN) is a large distributed system of servers deployed in multiple data centers...
---

To begin with, for people who are not familiar with CDN.

**What is CDN ?**
<small>(Wikipedia definition)</small>
A content delivery network or content distribution network (CDN) is a large distributed system of servers deployed in multiple data centers across the Internet. The goal of a CDN is to serve content to end-users with high availability and high performance. CDNs serve a large fraction of the Internet content today, including web objects (text, graphics and scripts), downloadable objects (media files, software, documents), applications (e-commerce, portals), live streaming media, on-demand streaming media, and social networks.

> There are many ways to serve static assets for your awesome cool website. You can buy a CDN, host it on a costly hosting service, use github pages or just use google app engine and take advantage of the cloud storage.

#### Create you first Google app engine project

1. Since google appengine works on `python`, `java`, `PHP` <small>(Expiremantal)</small> and `go` <small>(Expiremantal)</small> programming language, make sure that any one of those works on you machine. ![Languages supported by google appengine](https://lh6.googleusercontent.com/-G1X916LClws/UvXaIyN9QOI/AAAAAAAABGs/7IFIuMCFXE0/s0-I/languages.png)

2. Download the Google App Engine SDK from the following URL that suits your Operating system <a href="https://developers.google.com/appengine/downloads" target="_blank">https://developers.google.com/appengine/downloads</a> ![Download google appengine SDK for Python](https://lh6.googleusercontent.com/-iqpoeVE7p7M/UvXbsk2e4UI/AAAAAAAABHE/1cJt1JxwhFU/s0-I/download.png) After downloading install app engine sdk on you machine.

3. Sign up for Google App Engine at https://appengine.google.com. For this you need a Google account (your GMail address for example, if you dont have one it is free to create one)

4. Create a new app engine application by clicking on the `Create new Applicaiton` button on the landing screen. ![Create a new app engine applicaiton](https://lh5.googleusercontent.com/-mymKEagqm0w/UvXekLprU0I/AAAAAAAABH0/PCZAEZOtTmg/s0-I/create_a_new_project.png)

5. Create a static html project, you can use the [html5 boilerplate](http://html5boilerplate.com/) or any other front-end seed project that you like. In my case I created the folders and files maually. Add a file and name it as `app.yaml`, now this make your app-engine project complete. ![File stricture of the application](https://lh6.googleusercontent.com/-8yVMdxgVIdc/UvYfY8e0oYI/AAAAAAAABIU/3559qkAfR2s/s0-I/file_structure.png)

6. Open up the project in your favorite editor and copy paste pastes the following snipped. ![Your app.yaml file](https://lh3.googleusercontent.com/-dkcO7Wmyehk/UvYhZcffgYI/AAAAAAAABI0/8X5xb1fo_8E/s0-I/app_yaml_file.png)

7. Now upload image files to images folder and any other resources to files folder. You can create any number of folder and make sure you mention that folder path as a `static_dir` in app.yaml file.

8. Once you completed copying all the static file, now we need to deploy to the google cloud. The easiest way is to use the `GoogleAppEngineLauncher` which will be come with the SDK. Add a project to the launcher by clicking on the `+` button. Alternatly you can just drag and drop the project folder on to the Launcher. ![GoogleAppEngineLauncher](https://lh5.googleusercontent.com/-kb835wXntiU/UvYjUldkUxI/AAAAAAAABJI/-38NpPK9YvE/s0-I/Launcher.png)

9. Select a project and click on run to test your project locally. If you feel everything works fine click on the `Deploy` button to deploy the application. Give your Google account user name and password and sign in. ![Prompt for user name and password](https://lh3.googleusercontent.com/-NyZjW-GEdB0/UvYj-M3o5NI/AAAAAAAABJc/IjoD9noKv2E/s0-I/Deploy.png) or you can fire up the terminal and cd to the project directory and use this command `appcfg.py update .`

10. Once the deployment is successful you can access your static files like this http:// < app name >.appspot.com/images/brand.png

Though, Google Appengine is awesome there are some limitations for the free accounts

#### Limitations

- Google App Engine does not support any data structure that is larger than 1MB in size.
- Quota limitations. <a href="https://developers.google.com/appengine/docs/quotas?csw=1" target="_blank">more details in documentation</a>

#### Further reading

- Aral Balkan wrote a post discussing these defects of app engine &mdash; <a href="http://aralbalkan.com/1504/" target='_blank'>http://aralbalkan.com/1504/</a>
- Nice article on how to use Google app engine as your own CDN &mdash; <a href="http://24ways.org/2008/using-google-app-engine-as-your-own-cdn/" target="_blank">http://24ways.org/2008/using-google-app-engine-as-your-own-cdn/</a>

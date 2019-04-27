---
title: Good And Bad Visualizations
date: September 28, 2014
permalink: /blog/good-and-bad-visualizations.html
next: /blog/use-of-using-use-strict-in-js.html
prev: /blog/my-website-is-build-on-open-source.html
description: Back in 2012, when general elections were held in USA, there was this beautiful visualization called "512 Paths to the White House" on The NewYork Times website by Mike Bostock and Shan Carter. This has been one the most...
---

![512 Paths to the White House](https://lh3.googleusercontent.com/-euhVjS-FABM/VCjSJZcBMOI/AAAAAAAABZE/eITfjHFFjb8/s0-U-I/1.png)

## Explanation

Back in 2012, when general elections were held in USA, there was this beautiful visualization called "512 Paths to the White House" on The NewYork Times website by Mike Bostock and Shan Carter. This has been one the most intelligent and awesome visualizations ever made. This visualization was aimed to communicate the possibilities in which Obama or Romney could win the elections. Link to the actual Data visualization

http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html

First off, few questions.

1. Why 512 ?
2. How the lines are being highlighted ?
3. Is the message clear ?

Firstly why were they only 512 ways.The NYT took only 9 most competitive states as a base data set. So there were only 2^9 i.e. 512 possibilities. As it can be seen on the graph which clearly states that Obama had 431 ways to win, Romney had 76 ways to win and 5 chances of a tie (431 + 76 + 5 = 512).

The lines are highlighted whenever the mouse is hovered over a chosen region.

<video src="http://c0.videobam.com/storage/33/videos/u/uk/UKogN/encoded.mp4/b9ebf7a0a03a632bd07f5c6e7f6088df/5428f275?ss=64"></video>

This is pretty tough achieve with simple javascript and CSS. The only way I can think of is, on mousemove find out the distance between the mouse pointer and each and every node. Then find the nearest node and highlights the tree. However is very huge event handler on mouse move, So browser might crash after some point of time. But NYT did it differently, they actually pre-calculated all the regions using an algorithm. They used an algorithm called Voronoi. I just googled for and found this http://alexbeutel.com/webgl/voronoi.html. You can also play with this.

## Definition

"In mathematics, a Voronoi diagram is a way of dividing space into a number of regions. A set of points (called seeds, sites, or generators) is specified beforehand and for each seed there will be a corresponding region consisting of all points closer to that seed than to any other. The regions are called Voronoi cells."

A typical voronoi diagram looks like this.

![Voronoi Diagram](https://lh3.googleusercontent.com/-T_Z2tcnC8Y8/VCjSJsA4VvI/AAAAAAAABZc/ZlaROpEwsNQ/s0-U-I/3.png)

If we debug the code, we can actually see something called `class=â€œg-voronoiâ€`. After adding some css properties to the invisible areas, We can see the areas separated pretty clearly. And from then on its simple, when the mouse pointer is in that area highlight the vortex node and all its parents.

![Voronoi after highlighting](https://lh3.googleusercontent.com/-2eOGwWgiBG8/VCjSJfmRWNI/AAAAAAAABZQ/n2F3WKAl44k/s0-U-I/2.png)

Lets find out the answer for our final question, Is the message understandable/clear. As you can see every thing that NYT wanted to convey is pretty clear. The color highlighting, the legends and the sizes of the nodes also says the story.

To conclude, this is a pretty intelligent visualization, which used some really good math techniques and it communicates every thing in just 970px by 650px space.

## Fun facts

- One of the notable uses of a voronoi diagram happened 60 years before Voronoi put his name on it, in 1854 by a physician named John Snow.
- John Snow's theory was never accepted by the science community.
- John Snow died just 4 years after he stopped the cholera outbreak.
- The area where he found the culprit hand-pump was named as â€œJohn Snow Public house.

![The John snow public house](https://lh3.googleusercontent.com/-5XCm45JdOEs/VCjSJzbzyMI/AAAAAAAABZM/gUiT3_mwEDM/s0-U-I/4.png)

Other nice usage of this algorithm
http://www.nytimes.com/interactive/2014/02/13/sports/baseball/jeter-long-lived-greatness.html?_r=0

**Some Useful links**

http://mathworld.wolfram.com/VoronoiDiagram.html
http://www.jasondavies.com/maps/voronoi/

## Example for Bad Visualization

http://static.fusion.net/immigration/

This is one of the not so good example for data visualization. This is a DataViz posted on the fusion.com to tell a sort about how may city/states agreed or disagreed to give shelter for immigrant kids.

If you just give one glance, You can find many missing or unanswered details in this DataViz.

![Immigrations](https://lh3.googleusercontent.com/-ylJ_GZgduVE/VCjSKP1awDI/AAAAAAAABZY/ukC-XPBsV-A/s0-U-I/5.png)

- The data that is being presented is not visible at one screen, even though that can show all in one shot.
- Secondly the map is not interactive.
- The red dot keeps changing when clicked on the arrow. Which represents the current city, which is little hard to find.
- The agreed and disagree information is represented with another icon which is out of context and also without any legends.
- It could have been better communicated if they have used 2 different colors and added a legends.

This information visualization is a bad example, as its very hard to find out what actually the DataViz is trying to communicate. In other words it doesn't tell the story.

---
title: Designing for colorblind users
date: Jul 05, 2019
description: One of the most common questions asked in making a site accessible is to How do I design for the colorblind users? First off, before designing for colorblind we have to understand what is how our eye works and what is the reason causing the colorblindness..
permalink: /blog/designing-for-colorblind.html
prev: /blog/sync-google-sheets-to-firebase.html
state: published
autometa:
  author:
    name: Siddhartha Gudipati
    twitter: websiddu

tags:
  - colorblind
  - ux design
  - charts design colorblind
  - web design colorblind
  - color blind simulator
  - Deuteranomaly
  - charts design for colorblind
  - colour blind
---

![Cover Image](//res.cloudinary.com/websiddu/image/upload/w_800,ar_16:9,c_fill,g_auto/v1562353853/blog/018/marina-vitale-t809JJ6r9KA-unsplash.jpg)

[[toc]]

One of the most common questions asked in making a site accessible is to How do I design for the colorblind users? First off, before designing for colorblind we have to understand what is how our eye works and what is the reason causing the colorblindness. Let’s jump right in,

> Color blindness is not ‘color blindness’!

There are still a lot of people who think that if you are colorblind you really can’t see any colors. But the term is misleading, as more than 99% of all colorblind people can see colors. A better wording would be color vision deficiency, which describes this visual disorder more precisely.

So what actually is color vision deficiency? In simpler words, if you are suffering from a color vision deficiency you perceive a narrower color spectrum compared to somebody with normal color vision.

Color perception build up by three different types of cones[1]. Each type is sensitive to a certain wavelength of light (red, green, blue). Every perceived color is therefore a mixture of stimuli of those three cone types.

**So why is this important?** Approximately 8% of all men and 0.5% of all women worldwide are affected by color vision deficiency.

## Understanding vision deficiency

Let’s look at a human eye and understand its construction,

![Img](//res.cloudinary.com/websiddu/image/upload/c_scale,w_450/v1562349079/blog/018/chart.png#right)

- **S-cones**: sensitive to short wavelength light with a peak at ca. 420nm • Blue (tritan)
- **M-cones**: sensitive to medium wavelength light, peak at ca. 530nm • Green (detuan)
- **L-cones**: sensitive to long wavelength light with a peak at ca. 560nm • Red (protan)

<br >
<br >
<br >

### Type of color vision deficiency

**Monochromatism**
Either no cones available or just one type of them.

**Dichromatism (Anopia)**
Only two different cone types. Third one is missing completely.

**Anomalous trichromatism (Anomaly)**
All three types exists but with shifted peaks of sensitivity for one of them, which results in a smaller color spectrum.

<table style="font-size: 14px">
<tr>
<th></th>

<th colspan="3">Anopia (missing) </th>
<th colspan="3">Anomaly (malfunctioning)</th>
<th colspan="3">Monochromacy</th>
</tr>
<tr>
<th></th>
<th></th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">🧔🏽</th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">👩🏼‍🦰</th>
<th> </th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">🧔🏽</th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">👩🏼‍🦰</th>
<th></th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">🧔🏽</th>
<th style="font-size: 18px; opacity: 0.8; padding: 0;">👩🏼‍🦰</th>
</tr>
<tr>
<td style="color: red; font-weight: 500;">Protan (red)</td>

<td>Protanopia</td>
<td>1.01%</td>
<td>0.02%</td>
<td>Protanomaly</td>
<td>1.08%</td>
<td>0.03%</td>

<td rowspan="3" style="transform: rotate(-90deg) translateX(-66%); padding: 0; max-width: 30px;">Achromatopsia</td>
<td colspan="2" rowspan="3">0.00003%</td>
</tr>
<tr>
<td style="color: green; font-weight: 500;">Detuan (green)</td>
<td>Deuteranopia</td>
<td>1.27%</td>
<td>0.01%</td>
<td>Deuteranomaly</td>
<td style="font-weight: 500;">4.63%</td>
<td>0.36%</td>
</tr>
<tr>
<td style="color: blue; font-weight: 500;">Tritan (blue)</td>
<td>Tritanopia</td>
<td colspan="2" style="text-align: center">0.0001%</td>
<td>Tritanomaly</td>
<td colspan="2" style="text-align: center">0.0002%</td>
</tr>

</table>

## How do I Design?

### When designing Red & Green

- Don’t just rely on color to differentiate between data.
- Use some kind of additional indicator to show the difference. E.g Icon, +ve -ve signs, fill patterns

### Creating color blind friendly charts

#### Leverage dark and light when necessary

Sometimes your chart design will require a combination that is considered unsuitable for those who are color blind. In cases where you must use combinations like red and green, it’s highly recommended that you leverage a dark vs. light combination.

#### Alternatives for distinguishing information.

Think of alternatives to color, like fill patterns and symbols to indicate different colors.

#### Label information when necessary.

Clearly label the information when necessary, this helps to avoid confusion.

#### Provide a fallback

If any of the above steps won’t optimize the graph, then provide a fallback of the data in a tabular format.

## What software should I use?

- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/)
- [Sketch Stark](https://getstark.co/)
- [Chrome plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)

## Reference

- [Color-Blind-Essentials](http://www.color-blindness.com/wp-content/documents/Color-Blind-Essentials.pdf) by Daniel
- [Web Design for Color Blind Persons](http://www.journal.faa-design.com/pdf/4-4-tawfeek.pdf)
- [Color blindness: how to design an accessible user interface](https://uxdesign.cc/color-blindness-in-user-interfaces-66c27331b858)
- [Color Blindness Simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Using color blind simulator](http://accelconf.web.cern.ch/AccelConf/icalepcs2017/papers/thsh103.pdf)

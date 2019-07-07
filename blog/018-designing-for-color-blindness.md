---
title: Designing for color blindness
date: Jul 05, 2019
description: One of the most common questions asked in making a site accessible is to How do I design for the colorblind users? First off, before designing for colorblind we have to understand what is how our eye works and what is the reason causing the colorblindness..
permalink: /blog/designing-for-color-blindness.html
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

> Color blindness is not "color blindness"!

There are still a lot of people who think that if you are colorblind you really can’t see any colors. But the term is misleading, as more than 99% of all colorblind people can see colors. A better wording would be color vision deficiency, which describes this visual disorder more precisely.

So what actually is color vision deficiency? In simpler words, if you are suffering from a color vision deficiency you perceive a narrower color spectrum compared to somebody with normal color vision.

Color perception build up by three different types of cones[1]. Each type is sensitive to a certain wavelength of light (red, green, blue). Every perceived color is therefore a mixture of stimuli of those three cone types.

**So why is this important?** Approximately 8% of all men and 0.5% of all women worldwide are affected by color vision deficiency.

## Understanding vision deficiency

Let’s look at a human eye and understand what it is constructed of, we all know retina is responsible for our vision and the retina is built with a number of atomic cells called cones and rods. Cone cells, or cones, are photoreceptor cells in the retinas of vertebrate eyes that will they respond differently to light of different wavelengths, and are thus responsible for color vision and function best in relatively bright light, as opposed to rod cells, which are responsible for seeing in dim light.

Cones contain one of three different photopigments. This makes cones sensitive to long (red), medium (green), or short (blue) wavelengths of light. The presence of three types of photopigments, each sensitive to a different part of the visual spectrum, is what gives us our rich color vision. Humans are unusual among mammals for our trichromatic vision – named for the three different types of photopigments we have. Here are the three types of cones responsive to different wavelengths,

![Img](//res.cloudinary.com/websiddu/image/upload/c_scale,w_450/v1562349079/blog/018/chart.png#right)

- **S-cones**: sensitive to short wavelength light with a peak at ca. 420nm • Blue (tritan)
- **M-cones**: sensitive to medium wavelength light, peak at ca. 530nm • Green (detuan)
- **L-cones**: sensitive to long wavelength light with a peak at ca. 560nm • Red (protan)

<br >
<br >
<br >

So when one or more types of these cones are missing/defective the vision deficiency occurs and can see fewer or no colors. There are 3 types of vision deficiency,

**Monochromatism**
Either no cones available or just one type of them.

**Dichromatism (Anopia)**
Only two different cone types. Third one is missing completely.

**Anomalous trichromatism (Anomaly)**
All three types exists but with shifted peaks of sensitivity for one of them, which results in a smaller color spectrum.

Based on the cone type missing or defective, there are many types of colorblindness, for e.g, if a person is missing (anopia) red cones (protan) its called Proto-anopia, if they have malfunctioned (anomaly) red cones(protan) its called Proto-anomaly, similar for all the other 2 cone types.

And below image shows how the the different wavelengths are missing or disoriented from the normal cone curves,

![Image showing the different wavelengths](https://res.cloudinary.com/websiddu/image/upload/v1562400013/blog/018/cones.png)

here is what different colorblind people see from the original colors,

<ColorBlindHelper />

Not all colorblindness common, share of different type of colorblind humans worldwide and it looks like below,

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

### Designing for red/green

- Don’t just rely on color to differentiate between data.
- Use some kind of additional indicator to show the difference. E.g Icon, +ve -ve signs, fill patterns

When using conditional formatting in tables don't just rely on red & green, add an additional indicator like an icon here shown below.

<Spec d="https://res.cloudinary.com/websiddu/image/upload/v1562405056/blog/018/1d.png"
dnt="https://res.cloudinary.com/websiddu/image/upload/v1562405056/blog/018/1dnt.png" />

Similarly when showing a scorecard, don't just rely on the color alone, use an additional indicator to denote the special situation

<Spec d="https://res.cloudinary.com/websiddu/image/upload/v1562402569/blog/018/2d.png" dnt="https://res.cloudinary.com/websiddu/image/upload/v1562402569/blog/018/2dnt.png" />

When designing form validations make sure you are not just relying on color alone to convey the message; e.g like below take a simple form when the user submits an incomplete while the text itself is enough its better to mix the message with an icon giving stronger indication focus.

<Spec d="https://res.cloudinary.com/websiddu/image/upload/v1562439500/blog/018/3d.png" dnt="https://res.cloudinary.com/websiddu/image/upload/v1562439500/blog/018/3dnt.png" />

### Designing color blind friendly charts

#### Leverage dark and light when necessary

Sometimes your chart design will require a combination that is considered unsuitable for those who are color blind. In cases where you must use combinations like red and green, it’s highly recommended that you leverage a dark vs. light combination.

<Spec dnt="https://res.cloudinary.com/websiddu/image/upload/v1562441167/blog/018/4dnt.png" d="https://res.cloudinary.com/websiddu/image/upload/v1562441167/blog/018/4d.png" />

#### Alternatives for distinguishing information.

Think of alternatives to color, like fill patterns and symbols to indicate different colors.

<Spec dnt="https://res.cloudinary.com/websiddu/image/upload/v1562443364/blog/018/5dnt.png" d="https://res.cloudinary.com/websiddu/image/upload/v1562443364/blog/018/5d.png" />

also try to avoiding bad color combos

- Green & Red
- Green & Brown
- Blue & Purple
- Green & Blue
- Light Green & Yellow
- Blue & Grey
- Green & Grey
- Green & Black

#### Use a colorblind friendly color palette

By using a colorblind safe color palette, you are making sure that everyone can capture the differences and meanings of the information presented in the chart, as well as easily remember things you have put focus on.

The following are some colorblind safe color palette

<ColorBlindColors />

To learn more visit https://colorbrewer2.org

#### Label information when necessary

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

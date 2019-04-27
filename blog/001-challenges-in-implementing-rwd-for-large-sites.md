---
title: Challenges in implementing RWD for large sites
date: Jan 17, 2014
next: /blog/awesome-emmet.html
prev: false
permalink: /blog/challenges-in-implementing-rwd-for-large-sites.html
description: When some one says Responsive web design, you will think of media queries. In my opinion Responsive web design is not only media queries. In case of large sites like Goolge plus or any other heavy sites media queries will be only 10%...
---

When some one says Responsive web design, you will think of media queries. In my opinion Responsive web design is not only media queries. In case of large sites like Goolge plus or any other heavy sites media queries will be only 10%.

If you are developing a responsive blog or a static portfolio site of yours, the content is very less and they are adjustable(we can say them as read-only sites as we cant perform any action on those other than comments). It will be very easy for the developer to control the content based on his design and can develop a nice cool responsive website which will be compatible for all kind of devices and resolutions on the earth.

![Responsive web design](https://lh3.googleusercontent.com/-iEAr1ndjT6I/UuzoFBYSp0I/AAAAAAAABF0/KSt1_Wq-ZBM/s0-I/rwd.png)

However, in case of large site the content is not controlled by the developer or the designer as that is posted by the large user group and user has great control over the system. The user can perform many actions based on his interest.

So, Its very important we concentrate on the following areas when implementing RWD for large sites,

- Layout
- Navigation
- Modal windows
- Images
- Tabs (Horizontal and Vertical)
- Tables
- Internet Explorer

#### Layout :

There are four different layout options.

- Fixed width
- Fluid layouts
- Elastic layouts
- Hybrid layouts

![Layouts](https://lh5.googleusercontent.com/-BmYds1GKtBc/UuzoEalnWVI/AAAAAAAABFo/uoq06GZqOZQ/s0-I/responsive-wireframed.jpg)

##### Fixed Layouts :

These are non responsive layouts, before RWD this fixed layouts are famous. In fixed-width layouts the site width is constrained by a specific pixel measurement, 960px being the most commonly chosen width today. In 2006, Cameron Moll wrote a blog post entitled "Optimal width for 1024px resolution?" in which he dissected what the "optimal" width was to target for the increasingly popular 1024 resolution. After considering the Chrome browser that left between 974px and 984px to play with.

The biggest problem with fixed-width layouts is that you must operate under a lot of assumptions. When you determine how wide your site will be, you're making a guess as to what dimensions will best serve the largest percentage of visitors.

This is the an example of Fixed layout(try resizing the browser)
http://tcs.com/

##### Fluid Layouts

In fluid layouts, dimensions are determined by percentages, not pixel measurements. As a result, they're much more malleable. So you may have a primary column that's sized at 60% of the width of the container, a right sidebar column in her categorization; sized at 30%, and a gutter of 10% in between. Using a layout defined in that manner means that it doesn't matter if the user is using a desktop computer with a browser width of 1024px, or a tablet sized at 768px wide: the widths of the elements in the page will adjust accordingly.
A fluid layout can avoid lot of problems that are caused by fixed layouts. It prevents the Horizontal scrollbars in most cases.
Implementing responsive design in fluid layouts is very easy, with the css3 media queries.

##### Elastic Layouts:

Elastic layouts are very similar to fluid layouts, except that their constraints are determined by the type sizeâ€”typically using the em measurement. One em is the equivalent of the currently defined font-size. Say, for example, the body text is in a font-size of 12px. In that case, 1em equals 12px and 2em equals 24px. Elastic layouts provide strong typographic control. With an elastic layout, you can define the width of the container to be, say, 55em. This would ensure that the width of the container always maintains an appropriate line length. Another benefit of elastic layouts is that as a visitor increases or decreases the font size, elements defined with elastic widths will scale in proportion to that font size.

##### Hybrid layouts:

This the mix of two are more above layouts. Say, you have a case where you have fixed 300px width widget, and the sidebar is in percentage the you need to mix the fixed and fluid layout.

#### Navigation :

There are many navigation areas one on the top(main navigation), one on the left side bar, one drop down on click of profile picture.

![Navigation](https://lh6.googleusercontent.com/-Oq5lxlVqqwo/UuzoDtdHXAI/AAAAAAAABFg/V7iJm7nQexA/s0-I/navigation1.jpg)

Thinking of RWD we cant get the large real estate in case of mobile and tablet devices. So we need a way to show this navigation in the smaller screen resolutions. This can be done using the media queries with different CSS for small screens.

The basic solution can be stacking the all the menu items, vertically. However when you have submenus an more number of menus we need to handle them separately.
Image description not specified.
Let's run through a few quick options.

**Don't do anything:** That's what the page essentially does right now. It's intuitive and the solution works on a variety of devices, but it consumes a lot of screen real estate.

**Convert to select menu:** We could convert the navigation to a select menu. This would conserve screen space, be usable by most devices, and fall back nicely on those devices that can't handle the necessary JavaScript. However, select menus are familiar to users as being part of a form. They might be a little thrown off to see it used for navigation. We can't style it either, as most browsers don't allow for that.

**Toggle the menu:** On small screens, we could use JavaScript to hide the navigation initially and offer the user a button to click to make the navigation display. This method passes all three tests: it conserves screen real estate, the solution is intuitive to the user, and it can be implemented on a wide variety of devices and falls back nicely on devices where JavaScript is not supported.
Here are few helpful links

- http://www.hongkiat.com/blog/responsive-web-nav/
- http://bradfrostweb.com/blog/web/responsive-nav-patterns/
- http://alwaystwisted.com/post.php?s=2011-02-20-dont-let-your-menu-take-over
- http://palantir.net/blog/scalable-navigation-patterns-responsive-web-design

#### Modal Windows:

Its necessary to use modal windows in case of large sites. So how to make these modal's responsive.
We can use the same fluid layout(with percentages) to make them responsive.

![Responsive modal windows](https://lh4.googleusercontent.com/-wYIlJOwu34Y/UuzoCi0xW_I/AAAAAAAABFI/itQ_NM1IiXk/s0-I/modal.png)

Checkout these

- https://gist.github.com/3322351
- https://github.com/twitter/bootstrap/issues/2130
- http://blog.cameronbaney.com/tutorials/css3modal/

#### Images

The main problem though is not in how the images look, but in how much they weigh, how much demand they place on performance. Currently, the same images are being loaded regardless of the device in use. That means, for example, the 624px lead-in image is being downloaded even on small screens where a 350px image is all that's needed. The page performance is suffering, and that's a big deal to people visiting the site.

Performance is an important consideration for any site. Loading images that are unnecessary or larger than needed can have a serious impact on page load time.

**Selective Serving images to the mobile devices:**

![Selective serving](https://lh3.googleusercontent.com/-cEZzYAeBlfI/UuzoCb59G2I/AAAAAAAABFE/7-QIkDbmna0/s0-I/images.png)

The CSS solution of `display:none` is not viable. It hides images from view, but they're still requested and downloaded. If you want images to show only above a certain breakpoint, the better bet is to load them conditionally, after the page load has occurred.
The main concept is we will bypass the image loading by not using the img tag. We place a `data-imgsrc` attribute for each div tag or any other tag and we will load the image based on the screen resolution through javascript. Read Implementing Responsive Design with Media from the book Implementing Responsive Design

**Background Images:**
Its ok when you use repeat on your backgound image, if you are using a no repeat background image you need to scale it along with the screen resolution.

![Background Images](https://lh5.googleusercontent.com/-4gVMCPjpkcQ/UuzoClGuPZI/AAAAAAAABFY/N5_aWB1qDQs/s0-I/images1.jpg)

- http://voormedia.com/blog/2012/11/responsive-background-images-with-fixed-or-fluid-aspect-ratios
- http://elliotjaystocks.com/blog/better-background-images-for-responsive-web-design/
- https://css-tricks.com/forums/discussion/19817/responsive-div-background-image/p1

**High resolution displays:**
Keeping in mind that we have retina display devices available in the market. SVG are one of the solution for those devices.

#### Tabs (Horizontal and Vertical):

Image description not specified.
Tabs are a kind of menus, (http://twitter.github.com/bootstrap/javascript.html#tabs). So if we have more number of tabs and if we want to show them in mobile devices its very difficult to show them as it is.
the solution can be converting the tab to a `select box`.
few other solutions
https://github.com/mlbli/Responsive-tabs

#### Tables:

Responsive table, hmm great to thing. In large display devices we can display the whole table as we have more realestate. If it is a mobile device we cant show a proper table.

![Responsive Tables](https://lh4.googleusercontent.com/-i5Slu4HUndY/UuzoFAI7HvI/AAAAAAAABF4/8VZ1wlM5eb4/s0-I/tables.png)

- http://www.zurb.com/playground/responsive-tables
- http://css-tricks.com/responsive-data-tables/
- http://dbushell.com/2012/01/05/responsive-tables-2/

#### Internet Explorer:

Forget responsive for IE8 and below and code it for IE9 and above.

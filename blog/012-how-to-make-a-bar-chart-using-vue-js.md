---
title: How to make a bar chart using Vue.js
date: Jan 03, 2020
description: Often time the project you are working requires us to add a simple bar chart and including a charing library like highcharts.js or charts.js is too costly and resource consuming. In this post lets a make a simple re-usable vue component for a bar chart.
permalink: /blog/how-to-make-a-bar-chart-using-vue-js.html
prev: /blog/how-to-design-a-ux-portfolio-website-part1.html

feed:
  enable: true

autometa:
  author:
    name: Siddhartha Gudipati
    twitter: websiddu

tags:
  - vue.js
  - barchart
  - vue barchart
  - vuejs bar chart
  - vue charts
  - d3-scale
  - vue-barchart
  - stand alone vue js bar chart
  - barchart
---

![Cover](https://res.cloudinary.com/websiddu/image/upload/v1578204310/blog/021/cover.png)

Often the project you are working requires us to add a simple bar chart and including a charing library like highcharts.js or charts.js is too costly and resource consuming. In this post lets a make a simple re-usable vue component for a bar chart.

## Goals

We're going to create a small reusable bar chart component with Vue. We will go through a step by step process of making the bar chart

- How to set up a Vue application
- Learn about d3-scale
- How to use SVG to create a bar chart

I've created a live demo and shared the source code for you to follow along,

- **[View demo](https://wtyzj.csb.app)**
- **[View source](https://codesandbox.io/s/vue-barchart-wtyzj)**

## Setup and Installation

First, we'll install Vue CLI.

```sh
# install with npm
npm i -g @vue/cli @vue/cli-service-global

# install with yarn
yarn global add @vue/cli @vue/cli-service-global
```

Now that we have Vue CLI installed globally, we can use the vue command anywhere. We'll use vue create to start a new project.

```bash
vue create vue-app
```

Once that's done, you can move to the new app that's been created and serve to run the dev server.

```sh
cd vue-app
npm run serve
# or
yarn serve
```

Once that's done, you can navigate to [http://localhost:8080/](http://localhost:8080/) to see the default page.

## Creating a Component

Before creating a barchart lets understand the components of a bar chart, let's identify the building blocks that are required to compose a bar chart,

![Structure](/img/blog/12/structure.png)

Create a file called `BarChart.vue` in `src/component`. We are going to create a skeleton of a vue file.

<div class="filename">src/components/BarChart.vue</div>

```html
<template> </template>
<script>
  export default {
    name: "BarChart",
  };
</script>

<style lang="scss"></style>
```

Now let create an SVG element, and set up some initial height and width for the SVG tag. This SVG element will act as the container for our chart.

<div class="filename">BarChart.vue</div>

```html{2,10-11}
<template>
  <svg class="barchart" :width="width" :height="height"></svg>
</template>

<script>
  export default {
    name: "BarChart",
    data() {
      return {
        height: 200,
        width: 500,
      };
    },
  };
</script>

<style lang="scss"></style>
```

We'll need some seed data for the bar chart to show up, lets take an array of people and their ages. Which might look like this

```js
let dataSet = [
  ["Bob", 33],
  ["Robin", 24],
  ["Mark", 22],
  ["Joe", 29],
  ["Eve", 38],
  ["Karen", 21],
  ["Kirsty", 25],
  ["Chris", 30],
];
```

Now pull make the data available for you vue component, for now we will place the dataset in the data field.

<div class="filename">BarChart.vue</div>

```html{12-20}
<template>
  <svg class="barchart" :width="width" :height="height"></svg>
</template>

<script>
  export default {
    name: "BarChart",
    data() {
      return {
        height: 200,
        width: 500,
        dataset: [
          ["Bob", 33],
          ["Robin", 24],
          ["Mark", 22],
          ["Joe", 29],
          ["Eve", 38],
          ["Karen", 21],
          ["Kirsty", 25],
          ["Chris", 30],
        ],
      };
    },
  };
</script>

<style lang="scss"></style>
```

Now we'll have to prep our data to so that we can render the bars in the SVG. We can create our own functions for the scaling the values that is tedious and error prone, we are going to use a the awesome [d3-scale](https://github.com/d3/d3-scale) standalone library to generate our scales.

To add d3-scale to your project run the following command on your terminal.

```sh
yarn add d3-scale
```

Once that is done we'll need to import the scaling functions to our components. d3-scale provides us with a lot of scaling functions for a bar chart only the `linerScale` and `scaleBand` functions are sufficient.

The linerScale function takes two chained functions `.range` will take an array of the height of the chart and 0, and domain will take the 0 to max age in the data and will return a function. Let's see an example below

```js
let scale = scaleLinear()
  .range([200, 0])
  .domain([0, 50]);

scale(23); // returns 108
scale(33); // returns 68
scale(11); // returns 156
```

Similarly for y axis you will need to use the `scaleBand` function as this in this case x-axis is not a continuous scale. We'll add two computed properties x and y that will return a corresponding scaling function.

<!-- <div class="filename">BarChart.vue → script → computed</div> -->

```js
computed: {
  x() {
    return scaleBand()
      .range([0, this.width])
      .padding(0.3)
      .domain(this.data.map(e => e[0]));
  },
  y() {
    let values = this.data.map(e => e[1]);
    return scaleLinear()
      .range([this.height, 0])
      .domain([0, Math.max(...values)]);
  },
}
```

The next step is to uses our dataset to generate x, y, height and width values to render our bars using the `<rect>` tag. We can create another computed property called `bars` and loop though the dataSet array and compute new values.

```js{14-25}
computed: {
  x() {
    return scaleBand()
      .range([0, this.width])
      .padding(0.3)
      .domain(this.data.map(e => e[0]));
  },
  y() {
    let values = this.data.map(e => e[1]);
    return scaleLinear()
      .range([this.height, 0])
      .domain([0, Math.max(...values)]);
  },
  bars() {
    let bars = this.data.map(d => {
      return {
        xLabel: d[0],
        x: this.x(d[0]),
        y: this.y(d[1]),
        width: this.x.bandwidth(),
        height: this.height - this.y(d[1])
      };
    });
    return bars;
  }
}
```

Now we can loop through the bars object in our HTML and generate some bars.

```html
<template>
  <svg class="barchart" :width="width" :height="height">
    <g class="bars" fill="none">
      <rect
        v-for="(bar, index) in bars"
        fill="pink"
        :key="index"
        :height="bar.height"
        :width="bar.width"
        :x="bar.x"
        :y="bar.y"
      ></rect>
    </g>
  </svg>
</template>
```

Let's place our component in the Home.vue by importing it and calling the `<BarChart>` tag in the file like below,

<div class="filename">Home.vue</div>

```html
<template>
  <div class="home">
    <BarChart class="chart" />
  </div>
</template>

<script>
  import BarChart from "@/components/BarChart.vue";

  export default {
    name: "home",
    components: { BarChart },
  };
</script>

<style lang="scss" scoped>
  .chart {
    margin: 120px auto;
    display: block;
  }
</style>
```

Now if you open [http://localhost:8080/](http://localhost:8080/) you will see a preview of bars arranged next to each other. You could inspect and take a look at how the SVG `rect` tag is rendered. Also you could try adjusting the data object and see how all the bars will re-adjust accordingly.

![Preview](/img/blog/12/perview-1.png)

Our next step is to generate the x and y axises, lets tackle the x-axis first. x-axis is the horizontal axis and first off, we'll need to create the line. The x and y axises are placed bottom and right edges so we need to make some room to display them, so we'll need to add a padding to the svg elements. Add an additional 40px to both height and width and then move the whole content inside by 20px left and top using the `transform` property.

We'll be using a another group tag `g` to place our x-axis and move that to the bottom of the graph by using the height property. For the line itself we can use a path to generate the line below using the width variable. Putting all that together,

```html
<template>
  <svg class="barchart" :width="width + 40" :height="height + 40">
    <g transform="translate(20, 20)">
      <g class="x-axis" fill="none" :transform="`translate(0, ${height})`">
        <path stroke="currentColor" :d="`M0.5,6V0.5H${width}.5V6`"></path>
      </g>
      <g class="bars" fill="none">
        <rect
          v-for="(bar, index) in bars"
          fill="pink"
          :key="index"
          :height="bar.height"
          :width="bar.width"
          :x="bar.x"
          :y="bar.y"
        ></rect>
      </g>
    </g>
  </svg>
</template>
```

This is will generate a line below the graph like below, you can adjust the tick height by changing the `d` property on the `path` tag.

![Preview](/img/blog/12/preview-2.png)

Now we need to add the ticks to the x-axis, horizontal ticks are nothing but labels for the bars and for that we can loop though the bars again and places the text label right under the bar. You can create another `g` tag and loop that though the bars and add a `text` tag inside the `g` tag along with a `line` tag to show the little tick.

```html{10-22}
<template>
  <svg class="barchart" :width="width + 40" :height="height + 40">
    <g transform="translate(20, 20)">
      <g class="x-axis" fill="none" :transform="`translate(0, ${height})`">
        <path
          class="domain"
          stroke="currentColor"
          :d="`M0.5,6V0.5H${width}.5V6`"
        ></path>
        <g
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="middle"
          v-for="(bar, index) in bars"
          :key="index"
          :transform="`translate(${bar.x + bar.width / 2}, 0)`"
        >
          <line stroke="currentColor" y2="6"></line>
          <text fill="currentColor" y="9" dy="0.71em">{{ bar.xLabel }}</text>
        </g>
      </g>
      <g class="bars" fill="none">
        <rect
          v-for="(bar, index) in bars"
          fill="pink"
          :key="index"
          :height="bar.height"
          :width="bar.width"
          :x="bar.x"
          :y="bar.y"
        ></rect>
      </g>
    </g>
  </svg>
</template>
```

The `text-anchor` attribute will make sure the text is placed in the middle of the bar, and we will place each group at their corresponding their x position. That will produce a chart like below,

![Preview](/img/blog/12/preview-3.png)

Our next step is to add the y-axis, and for that we need a array of values in correct intervals split equally base on the height of the chart. We can use the d3s `tick()` function to generate these values. We can add a computed property called `yTicks` and use the `y` scale function to generate the number of ticks.

```js{2-4}
computed: {
  yTicks() {
    return this.y.ticks(5);
  },
  x() {
    return scaleBand()
      .range([0, this.width])
      .padding(0.3)
      .domain(this.data.map(e => e[0]));
  },
  y() {
    let values = this.data.map(e => e[1]);
    return scaleLinear()
      .range([this.height, 0])
      .domain([0, Math.max(...values)]);
  },
  bars() {
    let bars = this.data.map(d => {
      return {
        xLabel: d[0],
        x: this.x(d[0]),
        y: this.y(d[1]),
        width: this.x.bandwidth(),
        height: this.height - this.y(d[1])
      };
    });
    return bars;
  }
}
```

Now the `yTicks` property will contain an array values in equal intervals scaled according to the height of the container, similar to the x-axis we will create a path and then group that loops within each group we'll have a `text` and `line` tag to place the label and show the tick. And we'll use the scale `y()` function to generate the corresponding `y` value for given tick value.

```html{24-43}
<template>
  <svg class="barchart" :width="width + 40" :height="height + 40">
    <g transform="translate(20, 20)">
      <g class="x-axis" fill="none" :transform="`translate(0, ${height})`">
        <path
          class="domain"
          stroke="currentColor"
          :d="`M0.5,6V0.5H${width}.5V6`"
        ></path>
        <g
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="middle"
          v-for="(bar, index) in bars"
          :key="index"
          :transform="`translate(${bar.x + bar.width / 2}, 0)`"
        >
          <line stroke="currentColor" y2="6"></line>
          <text fill="currentColor" y="9" dy="0.71em">{{ bar.xLabel }}</text>
        </g>
      </g>
      <g class="y-axis" fill="none" :transform="`translate(0, 0)`">
        <path
          class="domain"
          stroke="currentColor"
          :d="`M0.5,${height}.5H0.5V0.5H-6`"
        ></path>
        <g
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="end"
          v-for="(tick, index) in yTicks"
          :key="index"
          :transform="`translate(0, ${y(tick) + 0.5})`"
        >
          <line stroke="currentColor" x2="-6"></line>
          <text fill="currentColor" x="-9" dy="0.32em">{{ tick }}</text>
        </g>
      </g>
      <g class="bars" fill="none">
        <rect
          v-for="(bar, index) in bars"
          fill="pink"
          :key="index"
          :height="bar.height"
          :width="bar.width"
          :x="bar.x"
          :y="bar.y"
        ></rect>
      </g>
    </g>
  </svg>
</template>
```

That will generate our final graph with both x and y axis like shown in the picture below.

![Preview](/img/blog/12/preview-4.png)

The next step we can remove all the hard coded values form the graph and get those values a props for the component call and style the graph using CSS and them it look pretty. Putting it all together we will have a file like this,

<div class="filename">BarChart.vue</div>

```html
<template>
  <svg
    class="barchart"
    :width="width + marginLeft / 2"
    :height="height + marginTop"
  >
    <g :transform="`translate(${marginLeft / 2}, ${marginTop / 2})`">
      <g
        class="x-axis"
        fill="none"
        :transform="`translate(0, ${height})`"
        style="color: #888"
      >
        <path
          class="domain"
          stroke="currentColor"
          :d="`M0.5,6V0.5H${width}.5V6`"
        ></path>
        <g
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="middle"
          v-for="(bar, index) in bars"
          :key="index"
          :transform="`translate(${bar.x + bar.width / 2}, 0)`"
        >
          <line stroke="currentColor" y2="6"></line>
          <text fill="currentColor" y="9" dy="0.71em">{{ bar.xLabel }}</text>
        </g>
      </g>
      <g
        class="y-axis"
        fill="none"
        :transform="`translate(0, 0)`"
        style="color: #888"
      >
        <path
          class="domain"
          stroke="currentColor"
          :d="`M0.5,${height}.5H0.5V0.5H-6`"
        ></path>
        <g
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="end"
          v-for="(tick, index) in yTicks"
          :key="index"
          :transform="`translate(0, ${y(tick) + 0.5})`"
        >
          <line stroke="currentColor" x2="-6"></line>
          <text fill="currentColor" x="-9" dy="0.32em">{{ tick }}</text>
        </g>
      </g>
      <g class="bars" fill="none">
        <rect
          v-for="(bar, index) in bars"
          fill="#2196f3"
          :key="index"
          :height="bar.height"
          :width="bar.width"
          :x="bar.x"
          :y="bar.y"
        ></rect>
      </g>
    </g>
  </svg>
</template>

<script>
  import { scaleLinear, scaleBand } from "d3-scale";

  export default {
    name: "BarChart",
    props: {
      height: { default: 200 },
      width: { default: 500 },
      dataSet: { default: [] },
      marginLeft: { default: 40 },
      marginTop: { default: 40 },
      marginBottom: { default: 40 },
      marginRight: { default: 40 },
      tickCount: { default: 5 },
      barPadding: { default: 0.3 },
    },
    computed: {
      yTicks() {
        return this.y.ticks(this.tickCount);
      },
      x() {
        return scaleBand()
          .range([0, this.width])
          .padding(this.barPadding)
          .domain(this.dataSet.map((e) => e[0]));
      },
      y() {
        let values = this.dataSet.map((e) => e[1]);
        return scaleLinear()
          .range([this.height, 0])
          .domain([0, Math.max(...values)]);
      },
      bars() {
        let bars = this.dataSet.map((d) => {
          return {
            xLabel: d[0],
            x: this.x(d[0]),
            y: this.y(d[1]),
            width: this.x.bandwidth(),
            height: this.height - this.y(d[1]),
          };
        });

        return bars;
      },
    },
  };
</script>

<style lang="scss"></style>
```

<div class="filename">Home.vue</div>

```html
<template>
  <div class="home">
    <BarChart
      class="chart"
      :data-set="data"
      :margin-left="40"
      :margin-top="40"
      :tick-count="5"
      :bar-padding="0.5"
    />
  </div>
</template>

<script>
  import BarChart from "@/components/BarChart.vue";

  export default {
    name: "home",
    data() {
      return {
        data: [
          ["Bob", 33],
          ["Robin", 24],
          ["Mark", 22],
          ["Joe", 29],
          ["Eve", 38],
          ["Karen", 21],
          ["Kirsty", 25],
          ["Chris", 30],
        ],
      };
    },
    components: {
      BarChart,
    },
  };
</script>

<style lang="scss" scoped>
  .chart {
    margin: 40px auto 0;
    display: block;
  }
</style>
```

Adding some details and moving all the hard coded values to props will result in a beautiful chart like below.

![Preview](/img/blog/12/preview-5.png)

## Conclusion

To recap we created a re-usable barchart from scratch using vue and d3-scale, and here is a TLDR; version of the post

- Create a SVG element
- Import `linearScale` and `scaleBand` from `d3-scale`
- Loop thought the data and generate the array with x, y, height, width and xLabel
- In the template render the bars using the `rect` tag
- Use the `path` tag to render the x-axis and y-axis
- Loop thought bar and use the `text` tag to render x-axis labels(names)
- Generate the number of ticks you want by using the `.ticks(n)` function
- Loop thought the tricks and use the `text` tag to render the y-axis values(ages).

And here is the demo and sourcecode

- **[View demo](https://wtyzj.csb.app)**
- **[View source](https://codesandbox.io/s/vue-barchart-wtyzj)**

If you like the post please feel free to share it with on twitter or leave a comment below. If you found any errors in this article, please feel free to edit on [GitHub](https://github.com/websiddu/websiddu/blob/master/blog/021-how-to-make-a-bar-chart-using-vue-js.md)

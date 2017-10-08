---
title:  "Ona.io"
date:   2017-01-01
img: home/Ona.png
path: "/ona-io/"
excerpt: "Building a 200K LOC dataview in React + clojurescript"
role: ["Front-end Engineer", "Data Scientist"]
category: software
---

### The Context

Ona had just launched as a new company, and were re-building [Formhub](/formhub) with a highly decoupled architecture through a data API. Formhub.org demand had outgrown its stature, and the initial architecture it was built with was having scaling issues. At the time I joined, pre-launch, the team had replicated much of the back-end and had not started on the front-end.

The brief for me was to build a sophisticated dataview for Ona.io, drawing lessons from Formhub's map view, and creating new ways to visualize and browse data through tables and charts. 


### My Role

I was a front-end engineer and data scientist at Ona. I did initial exploratory data analysis using R and ggplot, and converted successful visualization techniques to automated visualization tools using javascript (well, clojurescript :)

### The Product

I wrote the initial implementation of Ona's front-end data view, starting from 0 lines of code and building the codebase to 200K lines of code. After spending a week learning `clojure`, I dove in, and built the map view (on top of `leaflet.js`), the chart view (on top of `d3.js`), and the table view (on top of `slickgrid.js`).

I created automatic map-based visualizations of structured data collected in Ona.io. Until then, most map-based web software only offered heatmaps and "pop-ups" as a way to explore data, requiring one click at a time data exploration. I created new ways to automatically visualize structured data, drawing from scatterplot visualization techniques and my previous work with the amazing `ggplot2`. As a result, if you were collecting data about public taps in a Ghanain village, you could automatically visualize which taps were working at the time of data collection:


### Tech Stack

  * `om`, `clojurescript`, and `core.async` channels
  * The back-end was built on `ring`, ..., and ... I only made occassional changes here.
  
### Learnings
  
  * I learned clojure, clojurescript, and React. All of these were a first for me, and I immensely enjoyed being able to use paradigms like functional programming and immutability to build front-end software. `om` and `clojurescript` also allowed me to work with design patterns now popularized by `redux` and `immutable.js`, before those technologies even existed--I used reducers, actions, and the pattern of using a single-source of immutable data triggering DOM updates via selectors / cursors for most of the app.
  
  * I learned how to build a sophisticated front-end starting from scratch. My previous projects had drawn heavily on existing templates and frameworks, and it was refreshing and very educational to code all the divs and their associated css by hand, with minimal use of frameworks.
  
### The Impact

The front-end I wrote for Ona is still very much in use today, two afters I stopped working on it. Despite two years of iteration, I still have the largest number of lines contributed to the front-end code :) The front-end data view is one of Ona's most popular selling points.
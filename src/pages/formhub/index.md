---
title:  "Formhub"
date:   2017-01-01
img: home/Formhub.jpg
path: "/formhub/"
excerpt: "Democratizing data collection in International Development"
role: ["Co-creator", "Product Manager", "Full-stack Engineer"]
category: software
---

### The Context

In 2011, The International Development was beginning to embrace data-based decision-making. However, in the developing world, data are scarce. Most existing data was collected using pen-on-paper, and required large effort for processing, storage, and access. Because data needed to be collected offline, web-based tools like SurveyMonkey were not feasible to use. Highly offline digital data collection apps were being created, but required hiring software developers. These tools, which required writing code, were out of reach for people working with data on the ground who worked largely with Excel: M&E (Monitoring and Evaluation) officers in international development outfits, non-profits, or within governments.

### My Role

I was part of the Earth Institute (working under Vijay Modi and Jeffrey Sachs) on a project helping the Nigerian government to collect a large amount of data. One of our software engineers had written a tool (`xls2xform`) to take Excel files and convert them to XML configuration files that were needed by the open source data collection app we were using. We realized that this was useful much beyond our team, so I helped create and later was the PM for Formhub.org, a website that allowed anyone to collect data using "survey"s authored with Excel.

I ran the community support mailing list, triaged feature requests, ran our agile stand-ups, and occassionally wrote code contributions for Formhub.org.

### The Product

Formhub.org allowed front-line workers to use Excel to create surveys, easily deploy them to thousands of mobile phones, collect all of that data in one place, and later export it for analysis. We leveraged an open source app created by Washington University (Open Data Kit, or ODK) for the actual data collection. Formhub allowed people to manage the entire data collection effort, allowed people to manage data collection efforts, Data would then come back into formhub, and be available to export back out to Excel.

We also created tools to visualize the data in Formhub itself, no export needed. Particularly useful was the map view, which allowed people to monitor and browse their data on a map. We also added sophisticated map-based visualizations, which normally required hiring a GIS expert to conduct.

### Tech Stack

  * Formhub.org was built with Django, with MongoDB for storage, and RabbitMQ for task processing
  * The map view front-end used `leaflet.js` and `jQuery`
  * Our team also created and managed `xls2xform` (a python library), which took Excel-based surveys and created `xml` needed by the ODK app

### The Learning Stack

As the PM for Formhub, I learned what features we needed to add to Formhub using two channels:
  
  * Using it myself. Formhub was actually a side project; my primary job was to help the Nigerian government to implement data-driven decision making to construct core infrastructure like schools and hospitals. We used Formhub.org to collect the data we needed for the project.
  
  * Running the user mailing list. I was the main manager for Formhub's community mailing list, which was our version of a support team. I manned the mailing list daily, and was on a first name basis with many users, most of whom I got to know because of the mailing list. No better way to learn about how your product needs to improve than to explain features and aspects of it to confused users :)
  
  * Google Analytics.
  
### The Impact

By the time I left the Earth Institute, Formhub was used by 1,000 users to collect over 3 million surveys in ___ countries. Even as a collective side-project of our team, we grew the product from 0 to 500+ DAUs and 5,000+ daily unique pageviews. The service that Formhub.org provided later spun out on Ona Sytems in 2014. I decided not to join the founding team due to personal reasons, though I did join the team for a year to do data science and software development.



### Personal Learnings

 * Using the product for your day job and doing customer support are both invaluable ways to make sure you are solving for real customer needs. Being a user is a double-edged sword, however. While it gives you amazing perspective, it is important to not design just for yourself and make sure to incorporate wider user needs.
 * _Thinking back today_. Analytics and interview-based data need to supplement use- and support-based learning. There were moments when we built complex features that we thought would be game changers that landed with a dud, because I was much more technical than most of the users. I wished we had used both analytics (quant) and interviews (qual) data to build the right things, given how the little resources we had.
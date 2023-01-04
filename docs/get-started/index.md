---
title: Introduction to Web Components
layout: doc
---

# Introduction to Web Components

::: info 👨‍💻 Full Course on Frontend Masters
This guidebook is a supplement to [my course on Frontend Masters](https://frontendmasters.com/courses/web-components/). If you want the full experience, watch the full 4&frac12;-hour course.

<a href="https://frontendmasters.com/courses/web-components" class="button brand medium">Take the course</a>
:::

Before we dive in, let's get an understanding of what Web Components are and what problems they're trying to solve.

## Custom, reusable, encapsulated components

According to the official Web Components website (that is a bit out of date):

> Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.  
> – [webcomponents.org](https://webcomponents.org)

The phrasing "custom, reusuable, encapsulated" should sound familiar if you've been following web design or development trends in the last ten years. Web Components – as the name suggests – are about building component systems. LEGO™ bricks, but for the Web.

Web Components are akin to modern day JS frameworks like React, Svelte, and Vue, but with one key differentiator...

## Web Components are a set Web Standards

What makes Web Components different than JS frameworks is that they're a set of Web Standards built into the platform. 

- `<template>` and `<slot>` elements
- Custom Elements
- Shadow DOM
- <s>HTML Imports</s> ES Modules

We'll go in-depth into each of these pieces in the next section, but these give Web Components some unique superpowers :sparkles: like pre-parsed templates, style and script encapsulation, as well as importable assets.


## Buildless Web Development

Another superpower :sparkles: of Web Components is that they don't require any extra tooling, libraries, or bundlers to use. Production code will want bundled and minified JavaScript and you may find a library makes coding Web Components more ergonomic, but that is all opt-in. 


## Who's using Web Components?

A little social validation goes a long way...

![Google, Microsoft, YouTube, IBM, ING Bank, RedHat, GitHub, Salesforce, Adobe](/images/socialvalidation.png)

One thing you'll notice about these companies is that they all tend to be large companies. Because Web Components are framework agnostic (part of the web platform), they have the ability to work on a wide variety of different backends languages or front-end templating systems. You don't need to rearchitect your entire front-end to support Web Components, they graft in to fit with your existing systems. 

## Who is this course for?

- **Developers who are evaluating Web Components**
  - Learn what it looks like to build an entire system in Web Components
  - What are the problems/constraints exist going all the way down this path?
- **Developers forced to use Web Components**
  - "Help! I joined Big Company X and I need to catch up!"
- **People interested in Web Components**
  - Heard they were cool. :cool::sunglasses:
  - You come from a strong HTML/CSS background but don't want to buy into a JS-only architecture.

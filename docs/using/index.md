---
title: Using Web Components with HTML
---

# Using Web Components with HTML

One important aspect of Web Components is that they don't require advanced JavaScript knowledge or build tooling to use, it's plain old HTML.

## Basic Usage

In practice, using web components looks something like this:

```html
<simple-greeting name="World!"></simple-greeting>
<script src="/path/to/simple-greeting.js" type="module"></script>
```

A script tag and a custom element is all you need to get started using Web Components. Some Web Components act as wrapper around your content and allow you to upgrade your content into an interactive control.

```html
<generic-accordion>
  <button>Home</button>
  <div>
    <p>Home tab contnet</p>
  </div>

  <button>About</button>
  <div>About tab content</div>

  <button>Contact</button>
  <div>Contact tab content</div>
</generic-accordion>
<script src="/path/to/generic-accordion.js" type="module"></script>
```

This should look somewhat familiar. It's not too different from any React/Vue/Svelte/`<Insert JS Framework Here>` component.

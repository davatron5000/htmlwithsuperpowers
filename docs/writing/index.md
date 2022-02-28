---
title: Writing Web Components with JavaScript
---

# How to write a Web Components with JavaScript


## Component Lifecycle

```js
class CustomAlert extends HTMLElement {
  static get observedAttributes() {
    return ['icon', 'theme']
  }
  constructor() {
    super();
  }

  connectedCallback() {}    // componentDidMount
  disconnectedCallback() {} // componentWillUnmount
  attributeChangedCallback(oldValue, newValue) {}
}
customElement.define('custom-alert', CustomAlert)
```

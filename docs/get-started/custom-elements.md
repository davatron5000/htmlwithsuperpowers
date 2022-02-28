---
title: Custom Elements
---

# Custom Elements

Custom Elements are arguably the flagship feature of Web Components. Custom elements are a packaged component of HTML, CSS, JavaScript. They can be static, dynamic, or reactive.

```html
<custom-alert theme="warn" icon="warn">
  <strong>Breaking news</strong>
  <p>Custom attributes exist in HTML.</p>
</custom-alert>
```

And the JavaScript looks a little like this:

```js
class CustomAlert extends HTMLElement {
  static get observedAttributes() {
    return ['theme','icon'];
  }

  constructor() {
    super();
  }

  // More JS goes here.
}

customElements.define('custom-alert', CustomAlert)
```

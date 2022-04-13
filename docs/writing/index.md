---
title: Writing Web Components with JavaScript
---

# How to write a Web Components with JavaScript

The first thing to know about writing Web Components is that they have a component lifecycle, just like other modern day JavaScript framework.
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
customElements.define('custom-alert', CustomAlert)
```

## Injecting a template

```js
const myTemplate = document.createElement('template')
myTemplate.innerHTML = `
  <div>Hello, world!</div>
`;

class CustomAlert extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open'    })
    this._shadowRoot.appendChild(myTemplate.content.cloneNode(true))
  }
}
```

## Example Lit Component Lifecycle


```js
import { LitElement, html } from 'lit'

class MyElement extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  update(changed) {
    super.update(changed);
  }

  render() {
    return html`<div></div>`
  }

  updated(changed) {
    super.updated(changed);
  }

  firstUpdated() {
    super.firstUpdated();
  }
}
```

- https://open-wc.org/guides/knowledge/lit-element/lifecycle/

---
title: Shadow DOM
---

# Shadow DOM

The Shadow DOM is the most complicated part of Web Components because they offer a level of encapsulation and isolation that has never existed on the web platform. 

```html
<custom-alert>
  <p>This is Light DOM content</p>
  -----------Shadow DOM-------------
  | <img src="path/to/icon.svg"/>  |
  | <slot></slot>                  |
  | <button>Close</button>         |
  ----------------------------------
</custom-alert>
```

The Shadow DOM behaves a lot like an `<iframe>`, but better. Styling and scripting that happens within the Shadow DOM does not spill outside of its "shadow boundary". But three critical differences from an `<iframe>` are:

1. The Shadow DOM templates render as first-party content on the page.
2. You avoid all the variable height issues related with `<iframe>` content.
3. Interacting with (open) Shadow DOM is much easier and doesn't have the `postMessage` workarounds or related security issues that exist with `<iframe>`.

## Attaching a Shadow Root

```js{4-7}
class CustomAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ 
      mode: 'open'|'closed'       // default: 'closed'
      delegatesFocus: true|false  // default: false
    })
  }
}
```

Shadow Roots have two modes

  - `open`: Exposes the `customElement.shadowRoot` to external JavaScript  
  - `closed`: `customElement.shadowRoot` returns `null` to external JavaScript.

## Appending a `<template>`

```js{1-2,7-8}
const myTemplate = document.createElement('template')
myTemplate.innerHTML = `<div>Hello, world!</div>`;

class CustomAlert extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open'    })
    this._shadowRoot.appendChild(myTemplate.content.cloneNode(true))
  }
}
```

## Resources

- [Shadow DOM on MDN]()
- [Web components: from zero to hero](https://medium.com/@pascalschilp/web-components-from-zero-to-hero-cf3274752100) by Pascal Schilp

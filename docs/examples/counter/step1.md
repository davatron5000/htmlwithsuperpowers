# A counter component

Let's start with a classic, a counter component.

```html
<qty-picker></qty-picker>
```

```js
import { LitElement, html } from 'https://cdn.skypack.dev/lit-element'

class Counter extends LitElement {

  static properties = {
    counter: {state: true},
  }

  constructor() {
    super()
    this.counter = 0
  }

  render() {
    return html`
      <div>${this.counter}</div>
    `
  }
}

customElements.define('qty-picker', Counter)
```

# Step 3: Add External API

```js{6}
import { LitElement, html } from 'https://cdn.skypack.dev/lit-element'

class Counter extends LitElement {

  static properties = {
    counter: { type: Number },
  }

  constructor() {
    super()
    this.counter = 0
  }

  increment() {
    this.counter++
  }

  render() {
    return html`
      <div>${this.counter}</div>
      <button @click="${this.increment}">Increment</button>
    `
  }
}

customElements.define('qty-picker', Counter)
```

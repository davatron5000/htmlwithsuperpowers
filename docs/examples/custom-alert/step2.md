# Step 2: Add Event Handling
```js{6-8,14}
import { LitElement, html } from 'lit-element'

export class CustomAlert extends LitElement {
  // ...

  _close() {
    this.hidden = true;
  }

  render() {
    return html`
      <svg> ... </svg>
      <slot></slot>
      <button part="button" @click="${this._close}">Close</button>
    `
  }
}
```

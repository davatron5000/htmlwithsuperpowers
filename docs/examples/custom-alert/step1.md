# Step 1: Template, Props, and Attributes

```js{1,16}
import { LitElement, html } from 'lit-element'

export class CustomAlert extends LitElement {
  static get properties() { 
    return {
      icon: { type: String },
      theme: { type: String },
    }
  }
  constructor() {
    super()
    this.setAttribute('role', 'alert’)
    this.setAttribute('aria-live', 'polite’)
  }
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;" >
        <symbol id="note" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="..." />
        </symbol>
        <symbol id="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="…" />
        </symbol>
      </svg>
      <svg part="icon" height="24" width="24"><use href="#${this.icon}"></use></svg>
      <slot></slot>
      <button part="button">Close</button>
    `
  }
}
window.customElements.define('custom-alert', CustomAlert)
```

## `html` tagged templates


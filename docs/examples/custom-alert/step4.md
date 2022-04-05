# Step 4: Putting it all together

```js
import { LitElement, html, css } from 'lit-element'

export class CustomAlert extends LitElement {
  static get styles() {
    return css`
      :host {
        background: var(--bg, #f0f0f0);
        color: var(--text);
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 24px auto 1fr;
        align-items: start;
        padding: 1rem 0.5rem;
      }
      :host([hidden]) {
        display: none;
      }
      :host([theme="danger"]) {
        --bg: red!important;
        --text: white!important;
      }
      :host([theme="warn"]) {
        --bg: gold!important;
        --text: black!important;
      }
      svg {
        grid-column: 2 / 3;
      }
      button {
        grid-column: 4;
        grid-row: 1;
        justify-self: end;
        margin-right: 8px;
      }
      ::slotted(*) {
        grid-column: 3 / 4;
        margin: 0;
        max-width: 66ch;
        line-height: 1.6;
      }
    `
  }
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
  _close() {
    this.hidden = true;
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
      <button part="button" @click="${this._close}">Close</button>
    `
  }
}
window.customElements.define('custom-alert', CustomAlert)
```

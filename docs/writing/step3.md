# Step 3: Add Styling
```js{1,5}
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
```

# Step 2: Setup our main app wrapper



`src/brewery-app.js`
```js
import { LitElement, html } from 'lit';

class BreweryApp extends LitElement {
  static get properties() {
    return {
      breweries: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <h1>Breweries App</h1>

      <h2>Breweries</h2>
      <p>Found ${this.breweries.length} breweries</p>

      <ul>
        ${breweries.map(
          brewery => html`
            <li>${brewery.name}</li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('brewery-app', BreweryApp);
```

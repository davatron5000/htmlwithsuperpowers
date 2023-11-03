# Step 3: Fetch some breweries

```js{6,14-16,19-25,28-30}
import { LitElement, html } from 'lit';

class BreweryApp extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      breweries: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.breweries) {
      this.fetchBreweries();
    }
  }

  async fetchBreweries() {
    this.loading = true;
    const response = await fetch('https://api.openbrewerydb.org/breweries/search?query=minneapolis');
    const jsonResponse = await response.json();
    this.breweries = jsonResponse;
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html` <p>Loading...</p> `;
    }

    return html`
      <h1>Breweries App</h1>

      <h2>Breweries</h2>
      <p>Found ${this.breweries.length} breweries</p>

      <ul>
        ${this.breweries.map(
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

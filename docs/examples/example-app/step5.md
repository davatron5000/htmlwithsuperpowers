# Add Filtering

```js{8,35-40,48-50}
import { LitElement, html } from 'lit';

class BreweryApp extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      breweries: { type: Array },
      filter: { type: String },
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

    const totalVisited = this.breweries.filter(b => b.visited).length;
    const totalNotVisited = this.breweries.length - totalVisited;
    const breweries = this.breweries.filter(brewery => {
      if (!this.filter) {
        return true;
      }
      return this.filter === 'visited' ? brewery.visited : !brewery.visited;
    });

    return html`
      <h1>Breweries App</h1>

      <h2>Breweries</h2>
      <p>(${totalVisited} visited and ${totalNotVisited} still to go)</p>

      <button @click=${() => {this.filter = null}}>Filter none</button>
      <button @click=${() => {this.filter = 'visited'}}>Filter visited</button>
      <button @click=${() => {this.filter = 'not-visited'}}>Filter not-visited</button>

      <ul>
        ${breweries.map(
          brewery => html`
            <li>
              <h3>${brewery.name}</h3>
              <button @click=${() => this.toggleVisitedStatus(brewery)}>
                Mark as ${this.brewery.visited ? 'not-visited' : 'visited'}
              </button>
            </li>
          `,
        )}
      </ul>
    `;
  }

  toggleVisitedStatus(breweryToUpdate) {
    this.breweries = this.breweries.map(brewery => brewery === breweryToUpdate
      ? { ...brewery, visited: !brewery.visited }
      : brewery);
  }
}

customElements.define('brewery-app', BreweryApp);
```

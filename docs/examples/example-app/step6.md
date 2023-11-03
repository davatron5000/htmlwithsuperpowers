# Make a child component

`src/brewery-app.js`
```js{2,25-28}
import { LitElement, html } from 'lit';
import './brewery-template.js';

class BreweryApp extends LitElement {
  // ...

  render() {
    // loading...
    // filtering...

    return html`
      <h1>Breweries App</h1>

      <h2>Breweries</h2>
      <p>(${totalVisited} visited and ${totalNotVisited} still to go)</p>

      <button @click=${this._filterNone}>Filter none</button>
      <button @click=${this._filterVisited}>Filter visited</button>
      <button @click=${this._filterNotVisited}>Filter not-visited</button>

      <ul>
        ${this.breweries.map(
          brewery => html`
            <li>
              <brewery-template
                .brewery="${brewery}"
                .toggleVisitedStatus=${() => this.toggleVisitedStatus(brewery)}>
              </brewery-template>
            </li>
          `,
        )}
      </ul>
    `;
  }

  // ...
```

`src/brewery-template.js`
```js
import { LitElement, html, css } from 'lit';

class BreweryTemplate extends LitElement {

  static get properties() {
    return {
      brewery: { type: Object },
      toggleVisitedStatus: {},
    };
  }

  render() {
    return html`
      <span class="check">${this.brewery.visited ? '✅' : ''}</span>
      <h3> ${this.brewery.name}</h3>
      <p><a href="${this.brewery.website_url}">${this.brewery.website_url}</a></p>
      <button @click=${this.toggleVisitedStatus}>
        Mark as ${this.brewery.visited ? 'not-visited' : 'visited'}
      </button>
  `;
  }
}

customElements.define('brewery-template', BreweryTemplate);
```

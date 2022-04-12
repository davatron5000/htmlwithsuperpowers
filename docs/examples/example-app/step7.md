# Add third-party buttons

`src/brewery-app.js`
```js{2,15-17}
import { LitElement, html, css } from 'lit';
import 'https://unpkg.com/@material/mwc-button?module';
import './brewery-template.js';

class BreweryApp extends LitElement {
  // ...

  render() {
    // loading...
    // filtering...

    return html`
      // ...

      <mwc-button @click=${() => {this.filter = null}}>Filter none</mwc-button>
      <mwc-button @click=${() => {this.filter = 'visited'}}>Filter visited</mwc-button>
      <mwc-button @click=${() => {this.filter = 'not-visited'}}>Filter not-visited</mwc-button>

      // ...
    `;
  }

}

customElements.define('brewery-app', BreweryApp);
```

`src/brewery-template.js`
```js{2,12-14}
import { LitElement, html } from 'lit';
import 'https://unpkg.com/@material/mwc-button?module';

class BreweryTemplate extends LitElement {
  // ...

  render() {
    return html`
      <span class="check">${this.brewery.visited ? '✅' : ''}</span>
      <h3> ${this.brewery.name}</h3>
      <p><a href="${this.brewery.website_url}">${this.brewery.website_url}</a></p>
      <mwc-button @click=${this.toggleVisitedStatus}>
        Mark as ${this.brewery.visited ? 'not-visited' : 'visited'}
      </mwc-button>
  `;
  }
}

customElements.define('brewery-template', BreweryTemplate);
```

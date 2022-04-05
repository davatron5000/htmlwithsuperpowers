# A counter component

Let's start with a classic, a counter component.

```js
import { LitElement, html } from 'https://cdn.skypack.dev/lit-element'

class Counter extends LitElement {

  static properties = {
    counter: {type: Number},
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

## Initialize counter with props in HTML

```html
<qty-picker counter="3"></qty-picker>
```

## Update props via JavaScript

```js
const qtyPicker = document.querySelector('qty-picker')

qtyPicker.counter = 5
```

## Resources

- [Demo on Lit Playground](https://lit.dev/playground/#project=W3sibmFtZSI6InNjcmlwdC5qcyIsImNvbnRlbnQiOiJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvbGl0LWVsZW1lbnQnXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICBjb3VudGVyOiB7dHlwZTogTnVtYmVyfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNvdW50ZXIgPSAwXG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy5jb3VudGVyKytcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXY-JHt0aGlzLmNvdW50ZXJ9PC9kaXY-XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7dGhpcy5pbmNyZW1lbnR9XCI-SW5jcmVtZW50PC9idXR0b24-XG4gICAgYFxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncXR5LXBpY2tlcicsIENvdW50ZXIpIn0seyJuYW1lIjoicGFja2FnZS5qc29uIiwiY29udGVudCI6IntcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibGl0XCI6IFwiXjIuMC4wXCIsXG4gICAgXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjogXCJeMS4wLjBcIixcbiAgICBcImxpdC1lbGVtZW50XCI6IFwiXjMuMC4wXCIsXG4gICAgXCJsaXQtaHRtbFwiOiBcIl4yLjAuMFwiXG4gIH1cbn0iLCJoaWRkZW4iOnRydWV9LHsibmFtZSI6ImluZGV4Lmh0bWwiLCJjb250ZW50IjoiPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwic2NyaXB0LmpzXCI-PC9zY3JpcHQ-XG5cbjxxdHktcGlja2VyIGNvdW50ZXI9XCIzXCI-YXNkZjwvcXR5LXBpY2tlcj4ifV0)

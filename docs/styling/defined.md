# `:defined` pseudo-class

`:defined` provides a styling hook for changing the custom-element on whether `customElements.define()` got called on that element.

```html
<slow-element>This is stale content</slow-element>
```

```css
slow-element:not(:defined) {
  opacity: 0.1;
}

slow-element:defined {
  opacity: 1;
}
```

```js
const template = document.createElement("template");
template.innerHTML = `
  <div>Custom Element now defined</div>
`;

class SlowElement extends HTMLElement {
  constructor() {
    super();
    let templateContent = template.content;
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {}
}

setTimeout(() => {
  customElements.define("slow-element", SlowElement);
}, 2000);
```

## Demo
<iframe height="600" style="width: 100%;" scrolling="no" title=":defined" src="https://codepen.io/davatron5000/embed/vYprrKa?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/vYprrKa">
  :defined</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Resources

- [Link to Example](https://lit.dev/playground/#project=W3sibmFtZSI6InNjcmlwdC5qcyIsImNvbnRlbnQiOiJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJylcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPjpkZWZpbmVkIHsgYmFja2dyb3VuZDogcGluazsgfTwvc3R5bGU-XG4gIDxkaXY-Q3VzdG9tIEVsZW1lbnQgbm93IGRlZmluZWQ8L2Rpdj5cbmBcblxuY2xhc3MgU2xvd0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgfVxufVxuXG5zZXRUaW1lb3V0KCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2xvdy1lbGVtZW50JywgU2xvd0VsZW1lbnQpXG59LCAyMDAwKSJ9LHsibmFtZSI6InBhY2thZ2UuanNvbiIsImNvbnRlbnQiOiJ7XG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImxpdFwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI6IFwiXjEuMC4wXCIsXG4gICAgXCJsaXQtZWxlbWVudFwiOiBcIl4zLjAuMFwiLFxuICAgIFwibGl0LWh0bWxcIjogXCJeMi4wLjBcIlxuICB9XG59IiwiaGlkZGVuIjp0cnVlfSx7Im5hbWUiOiJpbmRleC5odG1sIiwiY29udGVudCI6IjxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cInNjcmlwdC5qc1wiPjwvc2NyaXB0PlxuXG48c2xvdy1lbGVtZW50PkknbSBzbG93PC9zbG93LWVsZW1lbnQ-In1d)
- [`:defined` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined)

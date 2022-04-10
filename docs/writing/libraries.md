# Libraries

I tend to shy away from recommending needless JavaScript libraries. They can lead to bloat that gets passed on to the user which ruins their user experience. But it's important to note that Web Components were *intentionally designed* to be a low-level web platform feature for authors to build libraries and frameworks. Often the user costs of these small libraries get amortized over dozens of components.

Web Component libraries tend to offer some DX improvements:

- Small size (~7kb gzipped)
- Convenience functions
- Better templating and styling
- Templating directives
- TypeScript bindings


## Extend existing libraries

One benefit of Web Components is that it's easy to "rebrand" or extend existing components to fit your site's naming schema.

```js
import { SomeOtherButton } from 'someother/button'

export class MyButton extends SomeOtherButton {
  // Do different stuff here.
}

customElements.define('my-button', MyButton)
```
## Suggested libraries

At the time of writing, there are [61 libraries for making Web Components](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/). Each one offers different flavors of authoring. Here are some I can recommend.

- Lit
- Hybrids
- Stencil
- Haunted

### Lit

```js
import { LitElement, html, css } from 'lit-element';

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }
}

customElements.define('my-counter', MyCounter);
```

### Hybrids

```js
import { html, define } from "hybrids";

function inc(host) {
  host.count++;
}

function dec(host) {
  host.count--;
}

const MyCounter = {
  tag: "my-counter",
  count: 0,
  render: ({ count }) => html`
    <button onclick="${dec}">-</button>
    <span>${count}</span>
    <button onclick="${inc}">+</button>
  `,
};

define(MyCounter);
```

### Stencil

```
/* @jsx h */
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: "my-counter",
  styleUrl: "counter.css",
  shadow: true,
})
export class MyCounter {
  @Prop() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count}</span>
        <button onClick={this.inc.bind(this)}>+</button>
      </Host>
    );
  }
}
```

### Haunted

```js
import { html, component, useState } from "haunted";

function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <button @click=${() => setCount(count - 1)}>
      -
    </button>
    <span>${count}</span>
    <button @click=${() => setCount(count + 1)}>
      +
    </button>
  `;
}

customElements.define("my-counter", component(Counter));
```

## Resources
- [All the Ways to Make a Web Component - Feb 2022 Update](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/)
- [WebComponents.dev Studio Editor](https://webcomponents.dev/user/m4dz?collection=all-the-ways)
- [LitElement: A Deepdive Into Batched Updates](https://dev.to/open-wc/litelement-a-deepdive-into-batched-updates-3hh)

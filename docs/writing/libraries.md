# Web Component Libraries

I tend to shy away from recommending needless JavaScript libraries. They can lead to bloat that gets passed on to the user which ruins their user experience. But it's important to note that Web Components were intentionally designed to be a low-level web platform feature for authors to build libraries and frameworks. Often the user costs of these small libraries get amortized over dozens of components.

Web Component libraries tend to offer some DX improvements:

- Small size (~7kb gzipped)
- Convenience functions
- Better templating and styling
- Templating directives
- TypeScript bindings

## Suggested libraries

At last count I think there are 38+ different Web Component libraries, but here are some I can recommend. Each one offers different flavors of authoring.

- Lit
- Hybrid.js
- Stencil

If you already author in a framework, it might be possible to use Web Components today. Some of the libraries that are able to both import and export Web Componets are:

- Svelte
- Vue
- Preact


## Extend existing libraries

One benefit of Web Components is that it's easy to "rebrand" or extend existing components to fit your site's naming schema.

```js
import { SomeOtherButton } from 'someother/button'

export class MyButton extends SomeOtherButton {
  // Do different stuff here.
}

customElements.define('my-button', MyButton)
```

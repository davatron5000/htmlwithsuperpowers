# ES Modules

Web Components use native ES Module imports and exports to link your components together and offer the ability to extend elements as well.

## Importing and Exporting

```js
import { MyButton } from 'path/to/my-button.js'

export default class HeroButton extends MyButton {
  constructor() {
    super();
    this.size = 'large';
  }
}
```

At the top of this module, we `import` other required modules and then `export` our new class, the `HeroButton`.

A nice superpower :sparkles: of this is you can "rebrand" components from other libraries if you need to, your `<mycompany-button>` can extend or use `<someothercompanys-button>` with little extra code.

## Faster script execution

A non-obvious superpower :sparkles: of using import/export features of ES Modules is that using `<script type="module">` puts your code on the browser's fast path for script evaluation, which in computer terms changes it from O(n²) → O(n).

Other performance benefits include how browsers defer modules by default, meaning your UI is never blocked by a module's execution.

## A brief history of HTML Imports

The Web Component `v0` specification proposed a new platform feature called HTML Imports. This would allow you to author your Web Components in an HTML file and use `<link rel="import">` to import your Web Components on the page. 

```html
<link rel="import" href="/path/to/my-component.html"/>
```

Unfortunately, only Chrome implemented HTML Imports. In 2014, Mozilla outright refused HTML Imports in favor of the nascent JavaScript specification of ES Modules.

::: tip
If you see `<link rel="import">` on docs the wild, just know that it's the old, unsupported specification.
:::

## Resources

- [v8.dev Modules](https://v8.dev/features/modules)
- [ES Modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

---
title: "Template and Slot Elements"
---

# Template and Slot Elements

Two handy elements for creating content fragments and passing content to components that you might not be familiar with are `<template>` and `<slot>`.

## `<template>`

The `template` element is for creating "special" content fragments for reuse later in the application. 
By default, you won't see the contents of templates rendered in the page.  Templates are often used to 
define the Shadow tree for a component.

```html
<template>
  <div> HTML goes here </div>
</template>
```

The superpower :sparkles: of the `<template>` element is that it gets parsed by the HTML parser into a reusable and "inert" content fragment.  That is, the browser will not attempt to do things like load replaced elements or execute scripts inside the template.  The fragment can   be worked with as a parsed tree and inserted into the DOM relatively cheaply.

## `<slot>`

The `<slot>` element creates a "hole" inside a web component's [Shadow DOM](/get-started/shadow-dom.html). We explain Shadow DOM later, but for now understand slots are a way to project your custom HTML content inside a web component. Not all web components have slots and Shadow DOM, but they are very common and one of web components' greatest superpowers :sparkles: 

If you've ever used Vue's slots feature this should be familiar.

```html
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

Elements aren't limited to a single slot. If you want to provide multiple slots, you can do that through "named slots".

```html
<template>
  <h1>
    <slot name="heading"></slot>
  </h1>
  <p>By <slot name="author"></slot></p>
</template>
```

### `slotchange` event

Another unique superpower :sparkles: of the `<slot>` element is that it comes with a `slotchange` event to notify the Web Component if the Light DOM content has updated.

## Resources

- [`<template>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [`<slot>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)

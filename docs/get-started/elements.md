---
title: "Template and Slot Elements"
---

# Template and Slot Elements

There are two elements which can be very useful in creating Web Components which you might not be familliar with: `<template>` and `<slot>`, for creating content fragments and passing content in to components.

## `<template>`

The `template` element is for creating "special" content fragments for reuse later in the application. 
By default, you won't see the contents of templates rendered in the page.  Templates are often used to 
define the Shadow Tree for a component.

```html
<template>
  <div> HTML goes here </div>
</template>
```

The superpower :sparkles: of the `<template>` element is that it gets parsed by the HTML parser into a reusable and "inert" content fragment.  That is, the browser will not attempt to do things like load replaced elements or execute scripts inside the template.  The fragement created and be worked with as a parsed tree and inserted into the DOM relatively cheaply.

## `<slot>`

The `<slot>` element is for use inside a Shadow tree.  It provides a way to expose a "hole" into the Shadow DOM which the consumer can use to provide HTML content ("Light DOM") which will be "projected".   If you've ever used Vue's slots feature this should be familiar.

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

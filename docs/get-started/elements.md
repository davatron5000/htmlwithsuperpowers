---
title: "Template and Slot Elements"
---

# Template and Slot Elements

The Web Components specification brings two elements to the Web Platform, `<template>` and `<slot>`, for creating content fragments and passing content in to components.

## `<template>`

The `template` element is a Web Standard for creating content fragments for reuse later in the application. By default browsers hide templates from rendering on the page.

```html
<template>
  <div> HTML goes here </div>
</template>
```

The superpower :sparkles: of the `<template>` element is that it gets pre-parsed by the HTML parser into a reusable content fragment. Then when rendering to the page, it can skip the parsing step of the expensive parse → layout → reflow loop the browser does when JavaScript injects content on the page. 


## `<slot>`

The `<slot>` element is a child element of `<template>` and provides a way to pass HTML content ("Light DOM") into a template. If you've ever used Vue's slots feature this should be familiar.

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

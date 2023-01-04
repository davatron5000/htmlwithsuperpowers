# SSR with Declarative Shadow DOM

::: info
Declarative Shadow DOM is **Chrome-only** but [being prototyped in Safari](https://github.com/WebKit/standards-positions/issues/12).
:::

One common request is for Server-Side Rendering (SSR) story with web components. The current way to solve this problem is by moving the `<template>` in the Light DOM, and the `shadowroot="open"` attribute will auto-mount it in the Shadow DOM.

```html
<custom-alert>
  <template shadowroot="open">
    <style>
      :host { background: pink; }
    </style>
    <img src="path/to/icon.svg"/>
    <slot></slot>
    <button>Close</button>
  </template>
  <p>This is Light DOM</p>
</custom-alert>
```

- **Pros**: Server-side rendering, a step closer to JavaScript-less component declaration for static components.
- **Cons**: In most contexts, this will be a lot of duplicate code.

🙋‍♂️ One non-obvious superpower ✨ of Declarative Shadow DOM is that the `<template>` HTML does not need to be the same as your JavaScript component. You have flexibility to ship progressively enhanceable HTML or "skeleton" content that gets replaced when the "live" JavaScript component mounts. 


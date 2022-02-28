# Server Side Rendering with Declarative Shadow DOM

Do you remember our example component with the Shadow Boundary? A new Web Component specification allows you to move your template from the 

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

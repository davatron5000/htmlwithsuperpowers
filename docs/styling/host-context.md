# `:host-context()` pseudo-class

```html
<example-element></example-element>
<div class="card">
  <example-element></example-element>
</div>
```

```css
:host-context(.card) { background:pink; }
:host-context(.card)::after { content: 'I’m in a card' }
```

## Resources

- [Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think](https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/)
- [MDN]()

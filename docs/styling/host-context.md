# `:host-context()` pseudo-class

```html
<example-element></example-element>
<div class="card">
  <example-element></example-element>
</div>
```

```css
:host-context(.card) { background:pink; }
:host-context(.card)::after { content: 'I’m in a card'; color: red; }
```

## Demo

<iframe height="600" style="width: 100%;" scrolling="no" title=":host()" src="https://codepen.io/davatron5000/embed/jOYKKPN?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/jOYKKPN">
  :host()</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Resources

- [Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think](https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/)
- [MDN]()

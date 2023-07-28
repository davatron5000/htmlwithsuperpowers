# `::slotted()` pseudo-element

The `::slotted()` pseudo-element let's you shallowly target slotted elements.

```css
:slotted(p) {
  background: pink;
}
```

This example would turn all direct child `<p>` elements slotted inside the custom element.

```html
<example-element>
  <p>I'm pink</p>
  <div>
    <p>I'm not pink</p>
  </div>
</example-element>
```

## Example

<iframe height="600" style="width: 100%; resize: both;" scrolling="no" title="Class-styling Shadow DOM" src="https://codepen.io/davatron5000/embed/yLPRaWX?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/yLPRaWX">
  Class-styling Shadow DOM</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)
- [ShadowDOM v1](https://web.dev/shadowdom-v1/)

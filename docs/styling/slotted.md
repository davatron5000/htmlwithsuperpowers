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

<iframe height="300" style="width: 100%;" scrolling="no" title="Class-styling Shadow DOM" src="https://codepen.io/davatron5000/embed/yLPRaWX/6252e0de908b521f936c3683aca44627?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/yLPRaWX/6252e0de908b521f936c3683aca44627">
  Class-styling Shadow DOM</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Resources

- [MDN]()
- [ShadowDOM v1](https://web.dev/shadowdom-v1/)

# CSS Custom Properties

CSS Custom Properties ("CSS variables") are also [inheritable styles](/styling/inheritable.html).

A common pattern for Web Components is to allow customization of colors, backgrounds, and spacing through CSS Custom Property utilities.

For example

```css
body {
  --bg: red
}
```

If coded to look for the `--bg` property, the Web Component will apply it. And becuase CSS Custom Properties override at the block scope, you can update the appareance of two differnet elements.

```css
custom-alert:nth-of-type(1) {
  --bg: pink;
}
custom-alert:nth-of-type(2) {
  --bg: orange;
}
```

## Demo 

<iframe height="400" style="width: 100%;" scrolling="no" title="&lt;custom-alert&gt; theme demo" src="https://codepen.io/davatron5000/embed/GRyGBjJ?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/GRyGBjJ">
  &lt;custom-alert&gt; theme demo</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## `<two-up>` Example

The `<two-up>` component offers a handful of variables that for customization.

```css
two-up {
  --accent-color: #777;
  --track-color: #777;
  --thumb-color: #777;
  --thumb-background: #fff;
  --thumb-size: 62px;
  --bar-size: 6px;
  --bar-touch-size: 30px;
}
```

## Resources

- [MDN]()
- [CSS-Tricks]()

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

## Example

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

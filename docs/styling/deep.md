# Deep Styling Shadow DOM

After seeing the ability to style Ligth DOM, it's tempting to want to style the Shadow DOM with a "deep" selector, one that tries to reach inside the custom element.

```html
<custom-alert>
  <p>This is Light DOM</p>
  ---------Shadow Boundary----------
  | <img src="path/to/icon.svg"/>  |
  | <slot></slot>                  |
  | <button>Close</button>         |
  ----------------------------------
</custom-alert>
```

However, using a selector like:

```css
/* This doesn't work */
custom-alert button {
  background: red!important;
}
```

No matter how hard you try, you're not able to pierce the Shadow DOM with this selector.

## Example

<iframe height="300" style="width: 100%;" scrolling="no" title="Deep Styling Shadow DOM" src="https://codepen.io/davatron5000/embed/YzEJWjr/925d38ef0a76de81e28673d6b5ac704b?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/YzEJWjr/925d38ef0a76de81e28673d6b5ac704b">
  Deep Styling Shadow DOM</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# Styling Light DOM

Looking at our diagram:

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

From your global stylesheet you are able to style anything that exists in the Light DOM, this includes any content that gets slotted into the Shadow DOM. In our example, you can style the `<custom-alert>` wrapper, the `<p>` tag, but **not** the `<img>` or the `<button>`

## Example

<iframe height="300" style="width: 100%;" scrolling="no" title="Styling Light DOM" src="https://codepen.io/davatron5000/embed/BamqzVO/?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/BamqzVO/">
  Styling Light DOM</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

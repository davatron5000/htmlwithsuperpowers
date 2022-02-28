# The `is` attribute

::: danger
Safari/Webkit have flat-out refused to implement this feature. For educational purposes only. Usage not recommended.
:::

In the `v0` specification of Web Components was the idea that you could "extend" existing HTML elements. You sometimes find a reference to this in Web Component articles online. It works by passing an extra value to the component definition.


```js
customElement.define('word-count', WordCount, { extends: 'p' })
```

Then in your 

```html
<div contenteditable>
  <p>lorem ipsum dolor sit amit</p>

  <p is="word-count"></p>
</div>
```

## Example

:warning: The following works only in Chrome. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/davatron5000/embed/KKyxBzJ/d52a7bd351d4a1ca3a3b292ecf89e490?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/KKyxBzJ/d52a7bd351d4a1ca3a3b292ecf89e490">
  Untitled</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# The `is` attribute

::: danger
Safari/Webkit have flat-out refused to implement this feature. For educational purposes only. Usage not recommended.
:::

In the `v0` specification of Web Components was the idea that you could "extend" existing HTML elements. You sometimes find a reference to this in Web Component articles online. It works by passing an extra value to the component definition.


```js
customElements.define('word-count', WordCount, { extends: 'p' })
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

<iframe height="600" style="width: 100%; resize: both;" scrolling="no" title="is attribute demo" src="https://codepen.io/davatron5000/embed/d52a7bd351d4a1ca3a3b292ecf89e490?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/d52a7bd351d4a1ca3a3b292ecf89e490">
  is attribute demo</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# details-utils

The `<details>` element is one of the best additions to HTML; a disclosure widget with zero lines of JavaScript required... until you want more features. 

`<details-utils>` by [Zach Leatherman](https://www.zachleat.com/) is a wrapper around the native `<details>` element that gives it new behaviors like 

- Close on click outside
- Close on `ESC`
- Animation!
- More...
## Example

```html
<details-utils close-click-outside="(min-width: 48em)" close-esc animate>
  <details id="my-details">
    <summary>My demo</summary>
    <div>
      <p>This is content</p>
    </div>
  </details>
</details-utils>

<script src="https://cdn.skypack.dev/@zachleat/details-utils" type="module"></script>  
```

## Demo
<iframe height="600" style="width: 100%;" scrolling="no" title="&lt;details-utils&gt; example" src="https://codepen.io/davatron5000/embed/dyJKeqR?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/dyJKeqR">
  &lt;details-utils&gt; example</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
## Resources

- [Details / Summary Are Not [insert control here]](https://adrianroselli.com/2019/04/details-summary-are-not-insert-control-here.html)
- `<details-utils>` Blog Post https://www.zachleat.com/web/details-utils/
- Demos https://zachleat.github.io/details-utils/demo.html
- GitHub https://github.com/zachleat/details-utils

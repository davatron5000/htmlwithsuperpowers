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
    <summary></summary>
    <div>
      <p>This is content</p>
    </div>
  </details>
</details-utils>

<script src="https://cdn.skypack.dev/@zachleat/details-utils" type="module"></script>  
```

## Resources

- [Details / Summary Are Not [insert control here]](https://adrianroselli.com/2019/04/details-summary-are-not-insert-control-here.html)
- `<details-utils>` Blog Post https://www.zachleat.com/web/details-utils/
- Demos https://zachleat.github.io/details-utils/demo.html
- GitHub https://github.com/zachleat/details-utils

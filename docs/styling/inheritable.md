# Inheritable styles pierce the Shadow DOM

As pointed out in earlier sections, the Shadow DOM behaves like an `<iframe>` in its encapsulation. The Shadow DOM inherits some of the same quirks in the form of inheritable styles. Inheritable styles are styles that `inherit` the styles from their parent. 

Here's a list of inheritable styles:

- border-collapse
- border-spacing
- caption-side
- **color**
- cursor
- direction
- empty-cells
- **font-family**
- **font-size**
- **font-style**
- font-variant
- **font-weight**
- font-size-adjust
- font-stretch
- **font**
- letter-spacing
- **line-height**
- list-style-image
- list-style-position
- list-style-type
- list-style
- orphans
- quotes
- tab-size
- **text-align**
- text-align-last
- text-decoration-color
- text-indent
- text-justify
- text-shadow
- **text-transform**
- visibility
- white-space
- widows
- word-break
- word-spacing
- word-wrap

<style>
#inheritable-styles-pierce-the-shadow-dom ~ ul {
  columns: 3
}
</style>

You can see that most of these fall under the umbrella of text, list, or table formatting; situations where you'd expect an embedded `<iframe>` or child content to have a similar look and feel as the parent. 

## Example

<iframe height="300" style="width: 100%;" scrolling="no" title="Class-styling Shadow DOM" src="https://codepen.io/davatron5000/embed/ZEaqOqY/feea3651111d3824b9dafc1d7c95dcd6?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/ZEaqOqY/feea3651111d3824b9dafc1d7c95dcd6">
  Class-styling Shadow DOM</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

As shown by this example, the `color` value passes through to the Shadow DOM markup, but the `font-family` on the `<button>` is not passing. This is – in part – due to the unique aspects of `<button>` being a replaced element, but demonstrates that while inherited styles do pass down, there are still limitations with this approach.

# `:host` pseudo-class

Templates and Slots bring with them a handful of CSS pseudo-classes and pseudo-elements to help with styling.

The `:host` pseudo-class is a reference to the custom element itself, but you're unable   `:root` pseudo-class in HTML. 

```css
:host p {
  background: orange;
}

:host > div {
  background: pink;
}
```

## Demo

<iframe height="600" style="width: 100%;" scrolling="no" title="::slotted()" src="https://codepen.io/davatron5000/embed/QWaxxWe?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/QWaxxWe">
  ::slotted()</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Resources

- [Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think](https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/)
- [MDN]()

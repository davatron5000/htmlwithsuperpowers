---
title: Are Web Components Accessible?
---

# Are Web Components Accessible?

**Short Answer: Yes**, but there's a couple known issues around forms, labelling, and focus behavior.

## The Cross-Root ARIA Problem

As specified, HTML and ARIA today do not allow making cross-root associations across the Shadow Boundary. The `document.body` know what's in the Shadow DOM and likewise the Shadow DOM doesn't know what's in the `document.body`. 

Here's an simple example that fails...

```html
<label for="email">Email</label>
<email-input>
  -------------------------------------------
  | <input id="email" type="email">         |
  -------------------------------------------
</email-input>
```

The `for="email"` attribute is looking for an element with `id="email"` to setup the proper input labelling. But because `input#email` is inside the Shadow DOM, it's unable to make the proper association.  

Workarounds exist (don't decouple your labels and your inputs) but as a better solution smart people are working on proposals to "delegate" ARIA properties into the Shadow DOM.

More reading:

- [Shadow DOM and accessibility: the trouble with ARIA
](https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/)
- [Cross-Root ARIA Spec](https://github.com/leobalter/cross-root-aria-delegation/blob/main/explainer.md)
 
## The Returning Focus Problem

Another similar problem but in the reverse way. Sometime when you close an interface (example: a modal) you need to return focus to the previous active element. The Shadow DOM has no way to interact with the parent document. You *can* make this work and new attributes like `inert` attribute help a ton, but it's not easy to make this work. 

The tl;dr is that managing focus in web applications is difficult, and it's also difficult in Web Components. You'll need to allot time to make this work properly.

More reading:

- [Managing focus in the shadow DOM](https://nolanlawson.com/2021/02/13/managing-focus-in-the-shadow-dom/)
- [Dialogs and shadow DOM: can we make it accessible?
](https://nolanlawson.com/2022/06/14/dialogs-and-shadow-dom-can-we-make-it-accessible/)

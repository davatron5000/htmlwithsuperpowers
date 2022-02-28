---
title: Styling Web Components with CSS
---

# Styling Web Components with CSS

Styling Web Components can be one of the most difficult aspects of using Web Components. The barrier created by the Shadow DOM creates some styling superpowers :sparkles: but also creates some unique challenges that can be frustrating.  

## Style Encapsulation

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

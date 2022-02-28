# CSS Module Scripts

In 2015 we got ES Modules but in 2021, we got CSS Module Scripts. Like how you can import JavaScript modules into your JS, you can now import CSS into your JavaScript; it's native CSS-in-JS! 

It pairs excellently with Web Components where imported styles get scoped to the compoennt.

```js{1,7}
import sheet from './custom-alert.css' assert {type: 'css'};

class CustomAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: open })
    this.shadowRoot.adoptedStyleSheets = [sheet];    
  }
}
```

But you can also do this at the global `document` level as well.

```js
import sheet from './custom-alert.css' assert {type: 'css'};
document.adoptedStyleSheets = [sheet];
```

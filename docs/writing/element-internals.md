---
title: How to use elementInternals
---
# How to use `ElementInternals`

`ElementInternals` allows custom elements to get the full feature set of form elements (labelling, validation, ARIA behaviors).

## Example

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <custom-label for="custom-checkbox">Join newsletter</custom-label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    console.log(this.#internals.form.length)
  }
}

window.customElements.define("custom-checkbox", CustomCheckbox);
```

After you attach `ElementInternals` and set `formAssociated` to `true`, your element gets new form-based superpowers :sparkles:

```js
// Form controls usually expose a "value" property
get value() { return this.#value; }
set value(v) { this.#value = v; }

// The following properties and methods aren't strictly required,
// but browser-level form controls provide them. Providing them helps
// ensure consistency with browser-provided controls.
get form() { return this.#internals.form; }
get name() { return this.getAttribute('name'); }
get type() { return this.localName; }
get validity() {return this.#internals.validity; }
get validationMessage() {return this.#internals.validationMessage; }
get willValidate() {return this.#internals.willValidate; }

checkValidity() { return this.#internals.checkValidity(); }
reportValidity() {return this.#internals.reportValidity(); }
```
/via [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/form)

## Resources

- [ElementInternals on MDN](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
- [More Capable Form Controls](https://web.dev/more-capable-form-controls/)

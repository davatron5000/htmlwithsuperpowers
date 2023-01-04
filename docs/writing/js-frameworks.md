## Popular JS Frameworks

If you already author in a framework, it might be possible to use Web Components with small changes to either your exporting process or bundling config. Some of the libraries that are able to both import and export Web Componets are:

- Svelte
- Vue
- Preact

### Svelte

Svelte leverages a `<svelte:options>` config to output web components.

```html
<svelte:options tag="my-counter" />

<script>
	let count = 0;

	function inc() {
		count++;
	}

	function dec() {
		count--;
	}
</script>

<button on:click={dec}>
	-
</button>
<span>{count}</span>
<button on:click={inc}>
	+
</button>
```

### Vue 3

Vue 3 uses a `defineCustomElement` wrapper around your existing Vue components to create web components.

```js
import { defineCustomElement } from 'vue'
import MyCounter from "./my-counter.ce.vue.js";

customElements.define("my-counter", defineCustomElement(MyCounter));
```

```html
<template>
	<div>
		<button @click="dec">
      -
    </button>
		<span>{{ state.count }}</span>
		<button @click="inc">
      +
    </button>
	</div>
</template>

<script>
	import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    function inc() {
      state.count++;
    }

    function dec() {
      state.count--;
    }

    return {
      state,
      inc,
      dec,
    };
  },
};
</script>
```

### Preact

Preact uses a `createCustomElement` wrapper around Preact components to output web components.

```js
import { createCustomElement } from "@wcd/preact-custom-element";
import { Component, html } from "htm/preact";
import "preact";

class MyCounter extends Component {
  state = {
    count: 0,
  };

  inc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  dec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render(props, state) {
    return html`
      <button onClick=${this.dec}>
        -
      </button>
      <span>${state.count}</span>
      <button onClick=${this.inc}>
        +
      </button>
    `;
  }
}

customElements.define("my-counter", createCustomElement(MyCounter, ["count"]));
```

## Resources

- [Custom Elements Everywhere](https://custom-elements-everywhere.com/)

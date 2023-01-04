# What about React?

**Short answer: Yes-ish** and the situation may be getting better in React 19.

React –due to its popularity– is a notable outlier in [Custom Elements Everywhere](https://custom-elements-everywhere.com/) support matrix that documents which JS frameworks. The tl;dr on the problem is that React treats attributes and properties the same but in HTML those are different, so there's potentially a breaking change needed to fix the issue.

But work is underway to support web components in React. 🙌

- Experimental React branch that supports Web Components [facebook/react#11347](https://github.com/facebook/react/issues/11347#issuecomment-988970952)
- A web component wrapper for React components [@lit-labs/react](https://www.npmjs.com/package/@lit-labs/react)

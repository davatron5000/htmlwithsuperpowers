# Let's make a `<brewery-app>`

::: info
🧑‍🚀 If you're reading this in the distant future CLI tools may have changed so your experience may be different. 
:::

We're going to make a demo [brewery app based on this example from Open WC](https://open-wc.org/codelabs/intermediate/lit-html.html). We'll get started a little bit differently this time, we'll need to open a terminal on your local computer (with `npm` version 14+ installed) and use our first CLI tool:

```bash
npm init @open-wc
```

This basically the `create-react-app` of Web Components. Our goal isn't to teach a specific CLI tool and become too dependent, but `@open-wc` lets us leap frog the boring parts of setting up an entire app with a dev server, testing, and build processes.

```bash
✔ What would you like to do today? › Scaffold a new project
✔ What would you like to scaffold? › Application
✔ What would you like to add? › Linting (eslint & prettier), Testing (web-test-runner), Demoing (storybook), Building (rollup)
✔ Would you like to use typescript? › No
✔ What is the tag name of your app shell element? … brewery-app
```

At the end of this you'll end up with a file structure that looks like the following:

```
./
├── brewery-app/
│   ├── .storybook/
│   │   ├── main.js
│   │   └── server.mjs
│   ├── .vscode/
│   │   └── extensions.json
│   ├── assets/
│   │   └── open-wc-logo.svg
│   ├── src/
│   │   ├── brewery-app.js
│   │   └── BreweryApp.js
│   ├── stories/
│   │   └── brewery-app.stories.js
│   ├── test/
│   │   └── brewery-app.test.js
│   ├── .editorconfig
│   ├── .gitignore
│   ├── index.html
│   ├── LICENSE
│   ├── package.json
│   ├── README.md
│   ├── rollup.config.js
│   ├── web-dev-server.config.mjs
│   └── web-test-runner.config.mjs
```

Finally, `@open-wc` will confim you want to write files and install the dependencies.

```
✔ Do you want to write this file structure to disk? › Yes
Writing..... done
✔ Do you want to install dependencies? › Yes, with npm
```

The final step is to go into our project directory and start the application.

```bash
cd brewery-app
npm start
``` 

## Resources

- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) has a good scaffold template for Lit that is worth test driving.

import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'HTML with Superpowers',
  description: 'Introduction to Web Components',
  lang: 'en-US',
  markdown: {
  },
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/get-started/', activeMatch: '^/get-started/'},
      { text: 'Using', link: '/using/', activeMatch: '^/using/'},
      { text: 'Styling', link: '/styling/', activeMatch: '^/styling/'},
      { text: 'Writing', link: '/writing/', activeMatch: '^/writing/'},
      { text: 'Examples', link: '/examples/', activeMatch: '^/examples/'},
      { text: 'FAQ', link: '/faq/', activeMatch: '^/faq/'},
    ],
    sidebar: {
      '/get-started/': [
        {text: 'What are Web Components?', children:[
          { text: "Introduction", link:'/get-started/'}
        ]},
        {text: 'Web Standards', children:[
          {text: '<template> Elements', link:'/get-started/elements'},
          {text: 'Custom Elements', link:'/get-started/custom-elements'},
          {text: 'Shadow DOM', link:'/get-started/shadow-dom'},
          {text: 'ES Modules', link:'/get-started/es-modules'}
        ]}
      ],
      '/using/': [
        {text: 'How to use with HTML', children: [
          {text: 'Overview', link: '/using/' }
        ]},
        {text: 'Examples', children: [
          {text: '<two-up>', link: '/using/examples/two-up' },
          {text: '<copy-table>', link: '/using/examples/copy-table' },
          {text: '<podcast-player>', link: '/using/examples/podcast-player' },
          {text: '<details-utils>', link: '/using/examples/details-utils' },
          {text: '<spicy-sections>', link: '/using/examples/spicy-sections' },
          {text: '<a-frame>', link: '/using/examples/a-frame' }
        ]},
        {text: 'Component systems', children: [
          {text: '<generic-components>', link: '/using/examples/generic-components' },
          {text: '<geo-elements>', link: '/using/examples/geo-elements' },
        ]},
        {text: 'Finding components', children: [
          {text: 'Standalone Components', link:'/using/standalones'},
          {text: 'Web Component Design Systems', link:'/using/systems'}
        ]}
      ],
      '/styling/': [
        {text: 'How to style with CSS', children: [
          {text: 'Overview', link: '/styling/' },
        ]},
        {text: 'Piercing the Shadow DOM', children: [
          {text: '✅ Styling Light DOM', link: '/styling/light-dom' },
          {text: '❌ Styling Shadow DOM', link: '/styling/deep' },
          {text: '❌ Global Classes', link: '/styling/classes' },
          {text: '✅ Inheritable Styles', link: '/styling/inheritable' }
        ]},
        {text: 'Internal styling APIs', children: [
          {text: 'CSS Variables', link: '/styling/css-variables' },
          {text: 'Predefined Themes', link: '/styling/themes' },
          {text: 'Named Parts', link: '/styling/named-parts' }
        ]},
        {text: 'Internal CSS features', children: [
          {text: ':host', link: '/styling/host' },
          {text: ':host-context()', link: '/styling/host-context' },
          {text: '::slotted()', link: '/styling/slotted' },
          {text: ':defined', link: '/styling/defined' },
        ]}
      ],
      '/writing/': [
        {text: 'How to write with JS', children: [
          {text: 'Overview', link: '/writing/' },
          {text: 'Comparing Web Component Libraries', link: '/writing/libraries' },
          {text: 'JS Frameworks', link: '/writing/js-frameworks' },
        ]},

        {text: 'Advanced Concepts', children: [
          {text: 'Declarative Shadow DOM', link: '/writing/declarative-shadow-dom' },
          {text: 'ElementInternals', link: '/writing/element-internals' },
          {text: 'CSS Module Scripts', link: '/writing/css-module-scripts' },
          {text: 'The is="" attribute', link: '/writing/is'},
        ]},
      ],
      '/examples/': [
        {text: 'Example: Counter', children: [
          {text: 'Step 1: Basic Setup', link: '/examples/counter/step1' },
          {text: 'Step 2: Add Local State', link: '/examples/counter/step2' },
          {text: 'Step 3: Add Types', link: '/examples/counter/step3' },
          {text: 'Step 4: Review', link: '/examples/counter/review' }
        ]},
        {text: 'Example: Custom Alert', children: [
          {text: 'Step 1: Basic Setup', link: '/examples/custom-alert/step1' },
          {text: 'Step 2: Add Event Handling', link: '/examples/custom-alert/step2' },
          {text: 'Step 3: Add Styling', link: '/examples/custom-alert/step3' },
          {text: 'Step 4: Review', link: '/examples/custom-alert/review' },
        ]},
        {text: 'Example: Brewery App', children: [
          {text: 'Step 1: Project Setup', link: '/examples/example-app/step1' },
          {text: 'Step 2: Setup App Wrapper', link: '/examples/example-app/step2' },
          {text: 'Step 3: Fetch Breweries', link: '/examples/example-app/step3' },
          {text: 'Step 4: Add Visited State', link: '/examples/example-app/step4' },
          {text: 'Step 5: Add Filtering', link: '/examples/example-app/step5' },
          {text: 'Step X: Review', link: '/examples/example-app/review' }
        ]},
      ],
      '/faq/': [
        {text: 'Frequently Asked Questions', children: [
          {text: 'Accessibility', link: '/faq/accessibility' },
          {text: 'Context API', link: '/faq/context-api' },
          {text: 'IE11', link: '/faq/ie11' },
          {text: 'React', link: '/faq/react' },
          {text: 'Routing', link: '/faq/routing' },
          {text: 'Search Engine Optimization (SEO)', link: '/faq/seo' },
          {text: 'Server-side Rendering (SSR)', link: '/faq/ssr' },
        ]}
      ],
    }
  }
})

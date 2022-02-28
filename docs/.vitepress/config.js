import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'HTML with Superpowers',
  description: 'Introduction to Web Components',
  lang: 'en-US',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/get-started/', activeMatch: '^/get-started/'},
      { text: 'Using', link: '/using/', activeMatch: '^/using/'},
      { text: 'Styling', link: '/styling/', activeMatch: '^/styling/'},
      { text: 'Writing', link: '/writing/', activeMatch: '^/writing/'},
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
          {text: '<spicy-sections>', link: '/using/examples/spicy-sections' },
          {text: '<a-frame>', link: '/using/examples/a-frame' }
        ]},
        {text: 'Please don’t', children: [
          {text: '<geo-elements>', link: '/using/examples/geo-elements' },
        ]},
        {text: 'Finding components', children: [
          {text: 'Standalone Web Components', link:'/using/standalones'},
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
          {text: '❌ Classes', link: '/styling/classes' },
          {text: '✅ Inheritable Styles', link: '/styling/inheritable' }
        ]},
        {text: 'Internal styling APIs', children: [
          {text: 'CSS Variables', link: '/styling/css-variables' },
          {text: 'Predefined Themes', link: '/styling/themes' },
          {text: 'Named Parts', link: '/styling/named-parts' }
        ]},
        {text: 'Internal CSS features', children: [
          {text: ':host', link: '/styling/host' },
          {text: ':slotted()', link: '/styling/slotted' },
          {text: ':defined', link: '/styling/defined' },
        ]}
      ],
      '/writing/': [
        {text: 'How to write with JS', children: [
          {text: 'Overview', link: '/writing/' },
          {text: 'Libraries', link: '/writing/libraries' },
        ]},
        {text: 'Example: Custom Alert', children: [
          {text: 'Step 1: Basic Setup', link: '/writing/step1' },
          {text: 'Step 2: Add Event Handling', link: '/writing/step2' },
          {text: 'Step 3: Add Styling', link: '/writing/step3' },
          {text: 'Step 4: Review', link: '/writing/step4' },
        ]},
        {text: 'Advanced Concepts', children: [
          {text: 'Declarative Shadow DOM', link: '/writing/declarative-shadow-dom' },
          {text: 'ElementInternals', link: '/writing/element-internals' },
          {text: 'CSS Module Scripts', link: '/writing/css-module-scripts' },
          {text: 'The is="" attribute', link: '/writing/is'},
        ]},
      ],
      '/faq/': [
        {text: 'Frequently Asked Questions', children: [
          {text: 'Accessibility', link: '/faq/accessibility' },
          {text: 'IE11', link: '/faq/ie11' },
          {text: 'Search Engine Optimization (SEO)', link: '/faq/seo' },
          {text: 'Server-side Rendering (SSR)', link: '/faq/ssr' },
          {text: 'Routing', link: '/faq/routing' },
          {text: 'Context API', link: '/faq/context-api' },
        ]}
      ],
    }
  }
})

---
home: true
heroImage: './images/htmlwithsuperpowers.png'
heroAlt: HTML with Superpowers
heroText: HTML with Superpowers
tagline: An Introduction to Web Components
actionText: Get Started
actionLink: /get-started/
content: "Hello"
features:
  - title: Easy to Use
    details: Use Web Components without any build tools or JavaScript know-how. Easy as 1-2-3!
  - title: Robust Ecosystem
    details: Join the thousands of developers and websites using Web Components today.
  - title: Native encapsulation
    details: Shadow DOM keeps your component and styles isolated from outside pollution. 
footer: MIT Licensed | Copyright © 2021-present Dave Rupert
---
<style>
    .announcement {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap:1.5rem;
      background: lightyellow;
      border: 1px solid gold;
      border-radius: 6px;
      padding: 1.5rem;
    }
    .announcement p {
      margin-top: 0;
    }
    .button {
      font-weight: bold;
      display: inline-block;
      border-radius: 6px;
      padding: 8px 12px;
      line-height: 1.5;
      color: var(--c-bg);
      background-color: var(--c-brand);
      border: 2px solid var(--c-brand);
    }
  </style>


 
  <div name="top" class="announcement">
    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1580398871/fem-m_aqgbfh.png" alt="Frontend Masters"/>
    <div>
      <p><strong>Full Video Course Available on Frontend Masters</strong></p>
      <a href="https://frontendmasters.com/courses/web-components/" class="button">Take the course</a>
    </div>
  </div> 

# WDD 331R Portfolio

**Student:** Jacob Hutson
**Semester:** Fall 2026
**Live Site:** [View Site](https://jhutson256.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Grid Layouts - Cards](unit-4/grid-layouts/cards.html)
- [Grid Layouts - Editorial](unit-4/grid-layouts/editorial.html)
- [Grid Layouts Advanced - Container](unit-4/advanced/container-demo.html)
- [Grid Layouts Advanced - Sticky](unit-4/advanced/sticky-demo.html)

## Bundler

This repository uses LightningCSS to bundle CSS files. Type npm run watch 
in the console to run the bundler and update the bundled CSS file automatically
after saving files. Otherwise, type npm run build to run the bundler after making 
all of your changes.

## Light and Dark Modes

The site supports light and dark mode. The color tokens are located in ./css/tokens/
colors.css.

## Typography

This site uses the Anton font from Google Fonts. The typography tokens can be found at the top of the variables.css file located here: [Tokens](css/tokens/variables.css)

## Site Directory

```text
[portfolio]
├── css/
│   ├── base/
│   │   ├── elements.css
│   │   └── reset.css
│   ├── components/
│   │   ├── video-cards.css
│   │   ├── effects.css
│   │   └── theme-toggle.css  
│   ├── layout/
│   │   └── layout.css
│   ├── tokens/
│   │   ├── colors.css        
│   │   └── variables.css     
│   ├── utilities/
│   │   └── utilities.css
│   └── main.css              
├── js/
│   └── theme-preference.js
├── unit-1/
│   └── custom-properties/
│       ├── index.html                  
│       └── styles.css                  
├── unit-2/
│   └── layered-components/
│       ├── index.html
│       └── css/
│           ├── base/
│           │   ├── elements.css      
│           │   └── reset.css         
│           ├── components/
│           │   ├── buttons.css       
│           │   ├── cards.css         
│           │   ├── forms.css         
│           │   ├── nav.css           
│           │   └── temples.css       
│           ├── layout/
│           │   └── primary.css
│           ├── tokens/
│           │   ├── colors.css        
│           │   └── variables.css     
│           ├── utilities/
│           │   └── utilities.css     
│           └── main.css
    └── css-bundling/
│       ├── index.html
│       └── css/
|         │   ├── base/
|         │   │   ├── elements.css
|         │   │   └── reset.css
|         │   ├── components/
|         │   │   └── card.css
|         │   ├── layout/
|         │   │   ├── chrome.css
|         │   │   └── primary.css
|         │   ├── tokens/
|         │   │   ├── colors.css
|         │   │   └── variables.css
|         │   ├── utilities/
|         │   │   └── utilities.css
|         │   └── main.css
|         ├── dist/
|         │   └── styles.css
|         ├── node_modules/
|         ├── package.json
|         ├── .gitignore
|         ├── index.html
|         └── package.json   
    └── demo/
│         ├── index.html                  
│         └── styles.css  
├── unit-3/
│   └── visual-effects/
│       └── index.html   
├── unit-4/
│   ├── grid-layouts/
│   │   ├── cards.html
│   │   └── cards.css
│   └── advanced/
│       ├── container-demo.html
│       ├── container-demo.css 
│       ├── sticky-demo.html   
│       └── sticky-demo.css  
    └── demo/
│       ├── demo.html   
│       └── demo.css                   
├── dist/
│   └── styles.css
├── fonts/
    └── Anton/
│         ├── Anton/Anton-Regular.subset.ttf    
│         ├── Anton/Anton-Regular.ttf              
│         └── OFL.txt  
├── node_modules/
├── .gitignore
├── package.json            
├── index.html                      
└── README.md   
```                    
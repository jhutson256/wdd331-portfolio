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

## Bundler

This repository uses LightningCSS to bundle CSS files. Type npm run watch 
in the console to run the bundler and update the bundled CSS file automatically
after saving files. Otherwise, type npm run build to run the bundler after making 
all of your changes.

## Site Directory

```text
[portfolio]
├── css/
│   ├── base/
│   │   ├── elements.css            
│   │   └── reset.css               
│   ├── components/
│   ├── layout/
│   ├── tokens/
│   │   ├── colors.css              
│   │   └── variables.css           
│   ├── utilities/
│   │   └── utilities.css           
│   └── main.css
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
    └── lightning-css-demo/
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
|         ├── .gitignore
|         ├── index.html
|         └── package.json            
├── dist/
│   └── styles.css
├── node_modules/
├── .gitignore
|── package.json                  
├── index.html                      
└── README.md   
```                    
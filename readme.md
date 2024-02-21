# JavaScript Fundamentals

## Magesh Kuppan

## Schedule
- Session - 1   : 1:30 hrs
- Tea Break     : 20 mins
- Session - 2   : 1:40 hrs
- Lunch Break   : 1 hr
- Session - 3   : 1:30 hrs
- Tea Break     : 20 mins
- Session - 4   : 1:40 hrs

## Methodology
- No powepoint
- Discuss & Code

## Objectives
- Better foundation in JS
- Course Outline in repo

## Repository
- https://github.com/tkmagesh/salesforce-js-feb-2024

## Software Requirements
- Chrome Browser
- Any Editor (Visual Studio Code)
- Node.js 
    - To verify, run the following command in the command prompt / terminal
        > node --version

## What is JavaScript?
- Scripting Language
- Invented to make web pages interactive
    - Client Side Validations
    - Manipulate the UI
- Loosely typed language

## JavaScript Language
### Data Types
- number
- string
- boolean
- object
- undefined
    - default value of a variable when not initialized
    - default return value of a function (when the function not returning anything explicitly)
- function
### Programming Constructs
- var
- branching statements
    - if...else
    - switch...case
- loops
    - do...while
    - while
    - for
    - for...in
    - break
    - continue
- exceptions
    - try...catch...finally
    - throw

### Functions
- Functions are first class citizens
- Functions can be treated like data
    - functions can be assigned as values to variables
    - Higher Order Functions
        - functions can be passed as arguments to other functions
        - functions can be returned as return values from other functions 
### Objects
- dictionaries
- collection of key/value pairs
### APIs


### DOM
- Traversing the DOM tree
```
var body = document.body;
var h1Ele = body.children[0];
console.log(h1Ele.innerText)
h1Ele.innerText = 'Welcome to DOM!'
```

- querying elements by id
```
var heading1 = document.getElementById('heading-1')
```

- querying elements by tag name
```
var paras = document.getElementsByTagName('p')
```

- querying elements by css class name
```
var highlightedElems = document.getElementsByClassName('highlight')
```

- querying elements by css selectors
```
var p = document.querySelector('body > div > p')
```

## Attributes for Manipulating DOM Nodes
- innerText
- innerHTML
- value
- checked
- disabled
- parentElement

## Methods for Manipulating DOM Nodes
- appendChild()
- removeChild()
- getAttribute()
- createElement()
- insertAdjacentElement()

## Manipulate the css classes
- classList.add()
- classList.remove()
- classList.contains()

## Handling Events
- addEventListener()
- removeEventListener()
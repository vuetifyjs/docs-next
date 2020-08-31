# What is Tree Shaking?

Tree shaking is a term used as a means to eliminate code that isn't in use, or dead-code, as we call it. You can also think of it like choosing 3-4 relevant quotes from a book to write an excellent paper. If you only need 3-4 relevant quotes, why use the entire book?

Whenever a [code bundler](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2), like webpack, builds our web application for production. It does tree shaking. Code bundlers like webpack do their best to remove **dead code**, or unused code, to reduce the bundle size of your application when you prepare your code to be able to be used for production. Unfortunately, it can't catch everything, and that's because we sometimes write code that isn't tree shaking friendly.

A way for us to help code bundlers with tree shaking, or eliminating **dead code**, in our web development projects is to only import necessary methods and components into our application. We do this by using JavaScript [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax in our `import` statements and properly `export` code as well. In Vuetify, this is done by default when you import and use it throughout your project.

---

Let's dive into an example to find out more about tree shaking!

Starting off, in JavaScript we sometimes unintentionally import an entire framework and/or library into our application. Example below:

```js
import Vuex from 'vuex'
```

The problem with this import statement is that we import the entire library, `vuex`, when we don't need everything from it when programming. Because of that, we end up bringing a significant amount of unnecessary code, into our web application.

What are the problems with this?

* It increases bundle size when we build and deploy our app.
* In return, it will take longer to load. Longer load times make for a bad end user experience.
* It helps us follow DRY ("don't repeat yourself" - write code only once if possible) coding principles when using the library of choice and the functions/methods within it.

The question you should always ask when you import a module is "*What exactly do I need from here?*" This allows you to better approach what to import. Example:

```js
import { mapState } from 'vuex'
```

In this example we are solely importing the [mapState](https://vuex.vuejs.org/guide/state.html#the-mapstate-helper) helper from the [vuex](https://vuex.vuejs.org/) library, which is used to help manage the data and how it flows for a vue.js application. To many people not comfortable with [es6](https://github.com/lukehoban/es6features) this is a different [syntax](https://developer.mozilla.org/en-US/docs/Glossary/Syntax) from what you usually see starting out. We are using ES6 [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) to grab the `mapState` helper from vuex. Instead of importing all of vuex and only using one small part of the library, we use this syntax to grab only what we need from the vuex library. This "take what you only need" mindset helps keep dead code out of your application.

## Making Your Code Tree Shaking Friendly

BOOM we magically now have a small calculator app. In the following example, we create an object that holds functions to calculate the numbers that we input:

```js
// calculator.js

const myCalculator = {
  add (a, b) {
    return a + b
  },

  subtract (a, b) {
    return a - b
  },

  divide (a, b) {
    return a / b
  },

  multiple (a, b) {
    return a * b
  },
}

// Making it possible for other files to import and use the calculator object
export default myCalculator
```

```js
// index.js

import myCalculator from './calculator.js'

console.log(myCalculator.add(1, 2)) // Expected output: 3
console.log(myCalculator.subtract(15, 9)) // Expected output: 6
```

This looks great, right? Well unfortunately there are a couple problems:

* First, even if we use just one method on the `myCalculator` object we will still import everything else inside `myCalculator`.
* Second, due to that when we use a code bundler, like webpack, to bundle it for production, our bundle size will remain the same.

How do we refactor this to make it tree shaking friendly for our code bundlers?

We're going to split each of our methods inside `myCalculator` into their own modules!

```js
// calculator

export function add (a, b) {
  return a + b;
}

export function subtract (a, b){
  return a - b;
}

export function divide (a, b) {
  return a / b;
}

export function multiply (a, b) {
  return a * b;
}
```

What we did here was:

* Break down all the methods inside the exported `myCalculator` object into their own separate and exportable files
* Made it possible to specify what method we would like to use in our index.js

Below we will declare the function we want without worrying about dead code:

```js
import { add } from './calculator'

console.log(add(1, 2)) // Expected output: 3
```

How would we import other methods that were exported as modules from the same file?

For example, after you add two numbers you'd like to use the `subtract` method for two other numbers.

We can do that within our destructuring object next to `add`.

```js
// index.js

import { add, subtract} from './calculator'

console.log(add(1, 2)) // Expected output: 3
console.log(subtract(15, 9)) // Expected output: 6
```

There you have it! We've now learned how to make our code tree shake ready. Not only are we happy but your code bundler is as well!

More Info on Tree Shaking, Destructuring, ES6 Modules:

* [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking) (Article)
* [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) (MDN Documentation)
* [Destructuring in ES6 - Beau teaches JavaScript](https://www.youtube.com/watch?v=-vR3a11Wzt0) (Video)
* [Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/) (Article)

P.S. Huge thanks for [Johanna](https://dev.to/johannarlee) being the editor of this article!

---

Interested in contributing a topic? ➡ Reach out to **johnleider** in the [Vuetify Community Discord](https://community.vuetifyjs.com/).

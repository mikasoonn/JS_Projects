# ⚙️ Implementing JavaScript Under the Hood


A collection of custom implementations of commonly used JavaScript **Array** and **Function** prototype methods. This project explores how JavaScript works under the hood by recreating the core behavior of native methods from scratch.

Rather than relying on the built-in implementations, each method is manually written to better understand JavaScript's internal mechanics, including prototype inheritance, execution context, callback handling, and array manipulation.

---

## 📖 Table of Contents

* Overview
* Implemented Methods

  * Array.prototype
  * Function.prototype
* Example Usage
* JavaScript Concepts Demonstrated
* Project Objective

---

## 📌 Overview

The goal of this project is to gain a deeper understanding of JavaScript by implementing commonly used native methods without relying on their built-in counterparts.

The project includes custom implementations for:

* Array mutation methods
* Array iteration methods
* Array searching and copying methods
* Function execution context methods (`call`, `apply`, and `bind`)

Each implementation is designed to mirror the behavior of the native JavaScript method as closely as possible while handling common edge cases.

---

# 🛠️ Implemented Methods

## Array.prototype

### 🔧 Mutating Methods

* `myPush(...args)` – Adds one or more elements to the end of an array and returns the new length.
* `myPop()` – Removes and returns the last element.
* `myShift()` – Removes and returns the first element while shifting remaining elements.
* `myUnshift(...args)` – Adds elements to the beginning of an array and returns the new length.
* `mySplice(start, deleteCount, ...items)` – Removes, replaces, or inserts elements while returning the removed elements.

---

### 🔁 Iterating Methods

* `myForEach(callback, thisArg)` – Executes a callback once for each array element.
* `myMap(callback, thisArg)` – Creates a new array populated with callback results.
* `myFilter(callback, thisArg)` – Creates a new array containing only elements that satisfy a condition.
* `myReduce(callback, initialValue)` – Reduces the array to a single accumulated value.
* `mySome(callback, thisArg)` – Returns `true` if at least one element satisfies the callback.
* `myEvery(callback, thisArg)` – Returns `true` if every element satisfies the callback.

---

### 🔍 Searching & Copying Methods

* `myFind(callback, thisArg)` – Returns the first matching element.
* `myFindIndex(callback, thisArg)` – Returns the index of the first matching element.
* `myIncludes(searchElement, fromIndex)` – Determines whether an array contains a specific value, including correct handling of `NaN`.
* `mySlice(start, end)` – Returns a shallow copy of a portion of an array.

---

## Function.prototype

### ⚙️ Execution Context Methods

* `myCall(context, ...args)` – Invokes a function with a specified `this` value and individual arguments.
* `myApply(context, argsArray)` – Invokes a function with a specified `this` value and arguments provided as an array.
* `myBind(context, ...args)` – Returns a new function with a permanently bound `this` value and optional preset arguments.

---

# 🚀 Example Usage

### Array Methods

```javascript
const numbers = [1, 2, 3];

numbers.myPush(4);
console.log(numbers);
// [1, 2, 3, 4]

const doubled = numbers.myMap(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8]

const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers);
// [2, 4]
```

### Function Methods

```javascript
function greet(city) {
    return `Hello, I'm ${this.name} from ${city}`;
}

const user = {
    name: "Alice"
};

console.log(greet.myCall(user, "London"));
// Hello, I'm Alice from London

console.log(greet.myApply(user, ["Paris"]));
// Hello, I'm Alice from Paris

const boundGreeting = greet.myBind(user);

console.log(boundGreeting("Berlin"));
// Hello, I'm Alice from Berlin
```

---

# 🧠 JavaScript Concepts Demonstrated

This project provides hands-on experience with a variety of core JavaScript concepts, including:

* Prototype inheritance
* Extending built-in prototypes
* Higher-order functions
* Callback functions
* Function execution context (`this`)
* `call`, `apply`, and `bind`
* Closures
* Rest parameters (`...args`)
* Array manipulation
* Mutation vs. immutability
* Shallow copying
* Edge case handling
* Native JavaScript method behavior
* Algorithm implementation

---

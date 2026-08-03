# 📘 JavaScript Prototype & Object Utilities

## 📖 Overview

This project contains a collection of JavaScript utility functions and prototype extensions that demonstrate fundamental concepts of the JavaScript language. The implementations focus on object-oriented programming principles, prototype inheritance, object creation, property lookup, and functional programming techniques by recreating or extending built-in JavaScript behavior.

The project serves as a practical exploration of JavaScript's prototype-based architecture and provides custom implementations of several native mechanisms to better understand how they operate internally.

---

## ✨ Features

### 🔹 `getPrototypeMethods(obj)`

Retrieves all function properties defined directly on an object's prototype while excluding the constructor. The function works with both user-defined constructors and built-in JavaScript objects.

**Capabilities:**

* Detects prototype methods
* Excludes the `constructor`
* Supports custom objects
* Supports built-in objects such as arrays
* Correctly handles objects with a `null` prototype

---

### 🔹 `myInstanceOf(obj, Constructor)`

A custom implementation of JavaScript's `instanceof` operator.

The function manually traverses an object's prototype chain and determines whether the specified constructor's prototype exists within that chain.

**Capabilities:**

* Traverses the prototype chain manually
* Works with inherited constructors
* Handles invalid inputs safely
* Replicates the behavior of the native `instanceof` operator

---

### 🔹 `myNew(Constructor, ...args)`

A custom implementation of JavaScript's `new` operator.

The function recreates the internal behavior of object instantiation by:

* Creating a new object.
* Linking it to the constructor's prototype.
* Invoking the constructor with the newly created object as its context (`this`).
* Returning either the newly created object or an explicitly returned object.

This implementation demonstrates how JavaScript creates objects internally.

---

### 🔹 `checkProperty(obj, key)`

Determines how a property exists within an object.

The function returns one of the following values:

| Return Value  | Description                                           |
| ------------- | ----------------------------------------------------- |
| `"own"`       | The property belongs directly to the object.          |
| `"inherited"` | The property exists somewhere in the prototype chain. |
| `"not found"` | The property does not exist.                          |

The implementation manually traverses the prototype chain instead of relying on built-in property lookup operators.

---

### 🔹 `Array.prototype.mySum()`

Extends the native `Array` prototype with a custom summation method.

The method:

* Calculates the sum of all numeric elements.
* Returns `0` for an empty array.
* Validates every array element before summation.
* Throws an error if an element is not a valid number or is `NaN`.

---

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates several important JavaScript concepts, including:

* Prototype-based inheritance
* Prototype chain traversal
* Constructor functions
* Custom implementation of the `new` operator
* Custom implementation of the `instanceof` operator
* Object property lookup
* Prototype methods
* Extending built-in prototypes
* Type checking
* Error handling
* `Object.create()`
* `Object.getOwnPropertyNames()`

---

## ✅ Conclusion

This project demonstrates several fundamental JavaScript mechanisms through custom implementations of native language features. By manually working with prototypes, constructors, property lookup, and object creation, the project provides practical experience with JavaScript's prototype-based inheritance model. These implementations reinforce a deeper understanding of how JavaScript objects behave internally and how core language features can be recreated using the language itself.

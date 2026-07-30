# 🧩 JavaScript Higher-Order Functions

## 📖 Project Overview

This project demonstrates the implementation of several commonly used **Higher-Order Functions (HOFs)** in JavaScript. Each function showcases a different functional programming technique, including function composition, currying, memoization, and execution tracing.

The primary goal of this project is to strengthen the understanding of higher-order functions by implementing them from scratch without relying on external libraries.

---

# 🎯 Project Objectives

The objectives of this project are:

* Understand the concept of higher-order functions.
* Apply functional programming principles in JavaScript.
* Improve code reusability through function abstraction.
* Implement common utility functions used in modern JavaScript development.
* Practice working with callbacks, closures, and function arguments.

---

# 🏛️ Function Descriptions

## 📝 `trace(cb)`

The `trace` function creates a wrapper around another function and records information about every function call.

### Features

* Accepts a callback function.
* Stores the arguments passed to each invocation.
* Stores the returned value.
* Maintains a call history.
* Returns the original function's output.

### Example Usage

```javascript
const tracedFunc = trace(foo);

tracedFunc(1, 2);
tracedFunc(2, 4, 6);

console.log(tracedFunc.history);
```

---

## 🔗 `pipe(...funcs)`

The `pipe` function combines multiple functions into a single function. The output of one function becomes the input of the next.

### Features

* Accepts any number of functions.
* Executes functions from left to right.
* Returns the final computed value.

### Example Usage

```javascript
const func = pipe(add5, add5, double, sub4);

console.log(func(2));
```

---

## ⚡ `memoize(cb)`

The `memoize` function optimizes performance by caching previously computed results.

### Features

* Stores function results after the first computation.
* Returns cached values for repeated inputs.
* Reduces unnecessary calculations.

### Example Usage

```javascript
const factorialMemo = memoize(factorial);

console.log(factorialMemo(5));
console.log(factorialMemo(5));
```

---

## 🔄 `curry(cb)`

The `curry` function transforms a function that accepts multiple arguments into a sequence of functions that accept fewer arguments.

### Features

* Supports partial application.
* Accepts arguments over multiple function calls.
* Executes the original function once all required arguments are provided.

### Example Usage

```javascript
const sumFunc = curry(sum);

console.log(sumFunc(1)(2, 3));
console.log(sumFunc(1, 2)(3));
console.log(sumFunc(1, 2, 3));
```

---

# ⚙️ Program Workflow

The program demonstrates four independent higher-order functions:

1. Wrap a function with `trace()` to record its execution history.
2. Combine multiple functions using `pipe()` to create a processing pipeline.
3. Cache expensive function results using `memoize()`.
4. Apply partial function application with `curry()`.

Each implementation is tested with sample functions to verify its correctness.

---

# ✅ Function Summary

| Function    | Purpose                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| `trace()`   | Records function arguments and return values.                            |
| `pipe()`    | Composes multiple functions into a single pipeline.                      |
| `memoize()` | Caches function results for improved performance.                        |
| `curry()`   | Enables partial application by collecting arguments over multiple calls. |

---

# 📌 Conclusion

This project provides practical implementations of several essential higher-order functions in JavaScript. It demonstrates the use of callbacks, closures, function composition, and argument manipulation while reinforcing key functional programming concepts.

These utility functions illustrate techniques that are widely used in modern JavaScript applications to improve code modularity, readability, and performance.

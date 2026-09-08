# 🔄 Custom Promise Implementation

## 📌 Project Overview

This project is an implementation of a **custom Promise-like object in JavaScript**, created from scratch to understand how JavaScript Promises work internally.

Instead of using the built-in `Promise` class, the project implements a custom `myPromise` constructor that reproduces several core Promise behaviors, including asynchronous callback execution, chaining, error handling, and nested promise resolution.

The main purpose of the project is to understand the internal concepts behind Promises and how asynchronous operations are handled using the **microtask queue**.

---

## 🎯 Objectives

The main objectives of this project are to:

* Understand how Promises work internally.
* Implement a custom Promise-like constructor.
* Manage Promise states.
* Handle fulfilled and rejected states.
* Implement `.then()`.
* Implement `.catch()`.
* Support Promise chaining.
* Handle returned values from callbacks.
* Support nested `myPromise` objects.
* Handle errors and exceptions.
* Understand and use `queueMicrotask()`.

---

## ⚙️ Promise States

The custom Promise uses three possible states:

```text
pending
   ↓
fulfilled

pending
   ↓
rejected
```

A Promise starts in the `pending` state and can transition only once.

Once it becomes either `fulfilled` or `rejected`, its state cannot be changed.

The implementation prevents further calls to `resolve()` or `reject()` after the Promise has already settled.

---

## 🧩 Main Components

### `myPromise`

The `myPromise` constructor accepts an executor function:

```js
new myPromise((resolve, reject) => {
    // asynchronous operation
});
```

The executor receives two functions:

* `resolve()` — fulfills the Promise.
* `reject()` — rejects the Promise.

The implementation stores:

* Current state
* Fulfilled value
* Rejection reason
* Fulfillment callbacks
* Rejection callbacks

---

## ✅ Fulfillment

When `resolve()` is called:

1. The state changes from `pending` to `fulfilled`.
2. The resolved value is stored.
3. Registered fulfillment callbacks are scheduled as microtasks.

This allows `.then()` callbacks to execute asynchronously.

---

## ❌ Rejection

When `reject()` is called:

1. The state changes from `pending` to `rejected`.
2. The rejection reason is stored.
3. Registered rejection callbacks are scheduled as microtasks.

Rejected Promises can be handled using the second argument of `.then()` or through `.catch()`.

---

## 🔗 Promise Chaining

The `.then()` method returns a **new `myPromise`**.

This allows multiple `.then()` calls to be chained:

```text
myPromise
   ↓
.then()
   ↓
new myPromise
   ↓
.then()
   ↓
new myPromise
```

The value returned by one callback becomes the fulfillment value of the next Promise in the chain.

---

## 🔁 Nested Promise Resolution

The implementation also handles callbacks that return another `myPromise`.

For example:

```js
.then((value) => {
    return new myPromise((resolve) => {
        resolve(value + 100);
    });
})
```

Instead of resolving immediately with the nested Promise object, the implementation waits for the returned `myPromise` and passes its final result to the next `.then()`.

---

## ⚠️ Error Handling

Errors thrown inside `.then()` callbacks are caught and used to reject the Promise returned by `.then()`.

This allows errors to propagate through the Promise chain and be handled using `.catch()`.

For example:

```text
.then()
   ↓
Error occurs
   ↓
Rejected Promise
   ↓
.catch()
   ↓
Error handled
```

The executor is also wrapped in `try...catch`, so an exception thrown during Promise creation results in rejection.

---

## 🛡️ `.catch()`

The `.catch()` method is implemented using `.then()`:

```js
this.catch = (callback) => {
    return this.then(null, callback);
}
```

This means that `.catch()` handles rejected Promises by providing a rejection callback to `.then()`.

---

## ⏱️ Microtask Queue

The project uses `queueMicrotask()` to reproduce an important behavior of native JavaScript Promises.

Promise callbacks are scheduled as **microtasks**, meaning they execute asynchronously after the current synchronous code has finished.

For example:

```text
resolve()
   ↓
queueMicrotask()
   ↓
Current synchronous code finishes
   ↓
Microtask queue executes
   ↓
.then() callback runs
```

This is an important part of understanding Promise behavior and asynchronous JavaScript execution.

---

## 🧪 Tested Behaviors

The project includes tests demonstrating several Promise behaviors:

* Basic asynchronous execution.
* Promise chaining.
* Returning values from `.then()`.
* Returning nested `myPromise` objects.
* Error handling through `.catch()`.
* Recovery after rejection.
* Passing values through when callbacks are not provided.
* Intercepting exceptions thrown inside `.then()`.
* Multiple subscribers attached to the same pending Promise.

---

## 📚 Concepts Demonstrated

This project provides practical experience with:

* JavaScript Promises
* Asynchronous programming
* Microtask queue
* `queueMicrotask()`
* Callback functions
* Closures
* Error propagation
* Promise chaining
* State management
* Higher-order functions
* Exception handling
* Custom object implementation

---

## 📈 Conclusion

This project demonstrates how a simplified Promise mechanism can be implemented using JavaScript functions, callbacks, state management, and the microtask queue.

Implementing `myPromise` from scratch provides a deeper understanding of what happens when `.then()` and `.catch()` are used, how Promise states are managed, how values and errors propagate through chains, and why Promise callbacks execute asynchronously.

The project is primarily intended as an educational implementation for understanding the internal behavior of JavaScript Promises.

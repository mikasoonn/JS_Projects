# JavaScript **`Promise`** **Practice Tasks** ⚡

This project contains a collection of JavaScript practice tasks focused on implementing and understanding the behavior of built-in `Promise` methods.

The exercises demonstrate how multiple asynchronous operations can be coordinated using custom implementations of `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any`.

---

## 📚 Practice Tasks

### 1. `Promise.all` — Implementation 🔗

This task focuses on implementing a custom `promiseAll(promises)` function that accepts an array containing Promises or ordinary values.

The function returns a new Promise that resolves when all elements are fulfilled.

The resulting array must preserve the original order of the input elements, regardless of the order in which the individual Promises complete.

If any Promise is rejected, the entire function must immediately reject with the same rejection reason.

#### Requirements

* Implement a `promiseAll(promises)` function.
* Accept Promises and ordinary values.
* Return a new Promise.
* Resolve with an array containing the results of all elements.
* Preserve the original order of the input elements.
* Reject immediately when any element is rejected.
* For an empty array, immediately return a resolved empty array.

---

### 2. `Promise.allSettled` — Implementation 📋

This task focuses on implementing a custom `promiseAllSettled(promises)` function.

Unlike `Promise.all`, this function must wait for every Promise to settle, regardless of whether it is fulfilled or rejected.

The resulting array contains an object describing the final state of each element.

A fulfilled element has the following structure:

```js
{
    status: 'fulfilled',
    value: result
}
```

A rejected element has the following structure:

```js
{
    status: 'rejected',
    reason: error
}
```

The function itself must never reject.

#### Requirements

* Implement a `promiseAllSettled(promises)` function.
* Wait for all elements to settle.
* Handle both fulfilled and rejected Promises.
* Return an array of result objects.
* Preserve the original order of the input elements.
* Use `status: 'fulfilled'` and `value` for successful results.
* Use `status: 'rejected'` and `reason` for rejected results.
* The returned Promise must never reject.

---

### 3. `Promise.race` — Implementation 🏁

This task focuses on implementing a custom `promiseRace(promises)` function.

The function returns a new Promise that settles as soon as the first input Promise settles.

The first Promise may either be fulfilled or rejected.

If the first settled Promise is fulfilled, the returned Promise is fulfilled with its value. If the first settled Promise is rejected, the returned Promise is rejected with its reason.

The results of all remaining Promises are ignored.

#### Requirements

* Implement a `promiseRace(promises)` function.
* Return a new Promise.
* Settle as soon as the first input Promise settles.
* Support both fulfillment and rejection.
* Ignore the results of subsequent Promises.
* Preserve the behavior of the first settled Promise.

---

### 4. `Promise.any` — Implementation 🎯

This task focuses on implementing a custom `promiseAny(promises)` function.

Unlike `Promise.race`, this function only considers fulfilled Promises.

The function resolves as soon as the first Promise is fulfilled. Rejected Promises are ignored while there are still other elements that may fulfill.

If all Promises are rejected, the function rejects with an `AggregateError` containing all rejection reasons.

For an empty array, the function immediately rejects with an `AggregateError`.

#### Requirements

* Implement a `promiseAny(promises)` function.
* Resolve with the value of the first fulfilled Promise.
* Ignore rejected Promises until all elements have rejected.
* If all elements are rejected, reject with an `AggregateError`.
* Store all rejection reasons in the `AggregateError`.
* For an empty array, immediately reject with an `AggregateError`.

---

## 🔍 Promise Methods Comparison

| Method               | Resolves when              | Rejects when              |
| -------------------- | -------------------------- | ------------------------- |
| `Promise.all`        | All Promises fulfill       | The first Promise rejects |
| `Promise.allSettled` | All Promises settle        | Never                     |
| `Promise.race`       | The first Promise settles  | The first Promise rejects |
| `Promise.any`        | The first Promise fulfills | All Promises reject       |

---

## 🎯 Concepts Demonstrated

This project provides practical experience with:

* JavaScript Promises
* Promise resolution and rejection
* Promise chaining
* `.then()` and `.catch()`
* Handling asynchronous operations
* Preserving input order
* Tracking completed Promises
* Handling fulfilled and rejected states
* `AggregateError`
* Implementing Promise combinators
* Working with ordinary values alongside Promises

---

## 📝 Conclusion

These practice tasks provide a deeper understanding of how JavaScript Promise combinators operate internally.

By implementing `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any` independently, the project demonstrates the different strategies used to coordinate multiple asynchronous operations and handle their fulfilled and rejected states.


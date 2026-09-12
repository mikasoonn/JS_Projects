# JavaScript **`Symbol`** **Practice Tasks** 🔹

This project contains a collection of JavaScript practice tasks focused on **well-known Symbols** and their role in customizing object behavior.

The exercises demonstrate how JavaScript objects can be integrated with built-in language features such as iteration, the `instanceof` operator, and primitive type conversion.

---

## 📚 Practice Tasks

### 1. `Symbol.iterator` — Range Object 🔄

This task focuses on creating a custom iterable object using `[Symbol.iterator]`.

The `range` object contains `from` and `to` properties. A custom iterator is implemented using the `next()` method to generate values sequentially.

The iterator must generate values dynamically without creating an array containing all values beforehand.

Example:

```js
const range = {
    from: 1,
    to: 5
};

for (const value of range) {
    console.log(value);
}
```

Expected output:

```text
1
2
3
4
5
```

#### Requirements

* Use `[Symbol.iterator]`.
* Implement the iterator using a `next()` method.
* The `next()` method must return an object containing `value` and `done`.
* Do not create an array containing all values.
* Make the object compatible with the `for...of` loop.

---

### 2. `Symbol.iterator` — Range with Step 🔢

This task extends the previous range implementation by introducing a `step` property.

The iterator starts from `from` and increases the current value by `step` on every iteration. Iteration stops when the current value becomes greater than `to`.

Example:

```js
const range = {
    from: 0,
    to: 10,
    step: 2
};

for (const value of range) {
    console.log(value);
}
```

Expected output:

```text
0
2
4
6
8
10
```

#### Requirements

* Use `[Symbol.iterator]`.
* Implement a `next()` method.
* Generate values dynamically.
* Do not create an array containing the values beforehand.
* Increase the current value according to `step`.
* Stop iteration when the value becomes greater than `to`.

---

### 3. `Symbol.hasInstance` — User 👤

This task demonstrates how `[Symbol.hasInstance]` can be used to customize the behavior of the `instanceof` operator.

A `User` object is created without using a class. An object should be considered a `User` when it contains both `name` and `email` properties.

Example:

```js
const User = {
    [Symbol.hasInstance](value) {
        // Custom instanceof logic
    }
};

const user = {
    name: 'John',
    email: 'john@gmail.com'
};

const product = {
    title: 'iPhone',
    price: 1000
};

console.log(user instanceof User);
console.log(product instanceof User);
```

Expected output:

```text
true
false
```

#### Requirements

* Use `[Symbol.hasInstance]`.
* Do not use a `class`.
* An object is considered a `User` if it contains both `name` and `email`.
* Customize the behavior of the `instanceof` operator.
* Do not manually check the object before using `instanceof`.

---

### 4. `Symbol.toPrimitive` — Product 💻

This task demonstrates how `[Symbol.toPrimitive]` can customize the conversion of an object into a primitive value.

The `product` object contains a `name` and `price`. Its conversion behavior depends on the `hint` provided by JavaScript.

The implementation must handle three different hints:

* `string`
* `number`
* `default`

Example:

```js
const product = {
    name: 'Laptop',
    price: 1500,

    [Symbol.toPrimitive](hint) {
        // Custom primitive conversion logic
    }
};
```

The following operations are tested:

```js
console.log(String(product));
console.log(Number(product));
console.log(product + 100);
```

Expected behavior:

```text
Laptop: $1500
1500
```

The result of `product + 100` depends on how the `default` hint is implemented.

#### Requirements

* Implement `[Symbol.toPrimitive]`.
* Handle `string`, `number`, and `default` hints.
* Customize string conversion.
* Customize numeric conversion.
* Test implicit conversion using the `+` operator.

---

## 🎯 Concepts Demonstrated

This project provides practical experience with several advanced JavaScript concepts:

* `Symbol.iterator`
* Custom iterators
* The iterator protocol
* The `next()` method
* `for...of` iteration
* `Symbol.hasInstance`
* Custom `instanceof` behavior
* `Symbol.toPrimitive`
* Primitive type conversion
* `string`, `number`, and `default` conversion hints
* Custom object behavior using well-known Symbols

---

## 📝 Conclusion

These practice tasks demonstrate how JavaScript's well-known Symbols can be used to customize the behavior of objects and integrate them with built-in language features.

The `Symbol.iterator` exercises demonstrate how objects can implement the iteration protocol. `Symbol.hasInstance` provides control over how objects interact with the `instanceof` operator, while `Symbol.toPrimitive` demonstrates how objects can define their behavior during explicit and implicit primitive conversion.

Together, these exercises provide a practical foundation for understanding how JavaScript's built-in protocols can be customized through well-known Symbols.

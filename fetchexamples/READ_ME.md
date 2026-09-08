# 🌐 JavaScript API Practice

## 📌 Overview

This project contains a collection of JavaScript exercises focused on working with **REST APIs**, asynchronous programming, and processing JSON data.

The assignments are designed to practice retrieving data from external APIs using the JavaScript `fetch()` function and processing the returned data with array methods such as `filter()`, `map()`, `find()`, `reduce()`, and `sort()`.

---

## 🎯 Objectives

The main objectives of this project are to:

* Practice making HTTP requests using `fetch()`.
* Work with asynchronous API responses.
* Convert API responses into JavaScript objects using `.json()`.
* Extract specific information from JSON data.
* Use JavaScript array methods to process API data.
* Filter and search through collections of objects.
* Calculate values such as counts, averages, and totals.
* Combine multiple array operations to solve more complex problems.

---

## 📚 Assignments

### Assignment 1 — All Users 👤

**API:** JSONPlaceholder Users

The task works with a collection of users.

Requirements:

* Print only the names of all users.
* Print only the emails of all users.
* Find the user whose `username === "Bret"` and print the complete user object.

---

### Assignment 2 — Random People 🎲

**API:** Random User API

The API provides 20 randomly generated people.

Each person contains a `dob.age` property representing their age.

Requirements:

* Print people older than 18.
* Count how many people are older than 30.
* Print the names of people younger than 25.

---

### Assignment 3 — Store Products 🛒

**API:** Fake Store API

The API provides a collection of products with information such as names, prices, and categories.

Requirements:

* Print products that cost less than `$50`.
* Find the most expensive product.
* Print only products from the `"electronics"` category.
* Calculate the average price of all products.

---

### Assignment 4 — Posts by One User 📝

**API:** JSONPlaceholder Posts

The task works with posts belonging to user `2`.

Requirements:

* Print the number of posts belonging to the user.
* Print only the titles of the posts.
* Find the post with `id === 15`.
* If the post does not exist, print `"not found"`.

---

### Assignment 5 — Todos by One User ✅

**API:** JSONPlaceholder Todos

The task works with the todos belonging to user `3`.

Each todo contains a `completed` property indicating whether the task has been completed.

Requirements:

* Print only completed tasks.
* Print only incomplete tasks.
* Count the total number of tasks.
* Count how many tasks are completed.
* Format the result as:

```text
Completed 7 of 20
```

---

### Assignment 6 — Countries 🌍

**API:** REST Countries API

The task works with information about countries, including their names and populations.

Requirements:

* Print the names of countries with a population greater than 100 million.
* Find the country with the largest population.
* Print the names of countries with a population less than 1 million.
* Calculate the total population of all countries.

---

## 🛠️ Concepts Practiced

The assignments cover the following JavaScript concepts:

* `fetch()`
* Promises
* `.then()`
* `.json()`
* Asynchronous programming
* REST APIs
* JSON data
* `map()`
* `filter()`
* `find()`
* `reduce()`
* `sort()`
* Template literals
* Array and object manipulation

---

## 🔄 General API Workflow

The assignments follow the general process:

```text
API Request
     ↓
fetch()
     ↓
HTTP Response
     ↓
response.json()
     ↓
JavaScript Objects
     ↓
Array Methods
     ↓
Console Output
```

This workflow demonstrates how external JSON data can be retrieved and transformed using JavaScript.

---

## 📖 Purpose

The purpose of these assignments is to develop practical experience with **API communication and data manipulation in JavaScript**.

The exercises gradually increase in complexity, starting with basic data extraction and filtering and progressing toward calculations and combined array operations.

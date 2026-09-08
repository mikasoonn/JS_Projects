# 🛍️ Shop Order Management System

## 📌 Project Overview

This project is a **Shop Order Management System** implemented in **JavaScript** using **Object-Oriented Programming (OOP)** principles.

The system models the main entities involved in a simple shopping process, including users, shops, products, orders, shopping carts, and payments.

The project demonstrates how classes can be used to represent real-world entities and how these objects interact with each other throughout the purchasing process.

---

## 🎯 Objectives

The main objectives of the project are to:

* Practice Object-Oriented Programming in JavaScript.
* Use classes to model real-world entities.
* Apply encapsulation using private class fields.
* Implement getters and setters for controlled access to object properties.
* Establish relationships between objects.
* Manage products and shopping carts.
* Implement order creation and modification.
* Calculate order subtotals.
* Implement a basic payment system.
* Maintain user order history.
* Validate users and available product quantities.

---

## 🏗️ System Components

The system consists of five main classes.

### 🏪 Shop

The `Shop` class represents a shop and manages its products.

It stores:

* Shop ID
* Shop name
* Address
* Contact information
* Product list

Main operations:

* `addProduct()` — adds a product to the shop.
* `getAllProducts()` — displays all available products.

---

### 📦 Product

The `Product` class represents an individual product.

Each product contains:

* ID
* Name
* Price
* Quantity

The properties are encapsulated using private fields, with getters and setters providing controlled access.

---

### 👤 User

The `User` class represents a customer.

A user contains:

* User ID
* Name
* Gender
* Address
* Payment method
* Balance
* Shopping cart
* Order history
* Login status

Main operations include:

* `logOut()` — logs the user out.
* `getHistory()` — returns the user's order history.

---

### 🛒 Order

The `Order` class represents a customer's order and manages the products currently being purchased.

Main operations:

* `addProduct()` — adds a product to the order if enough stock is available.
* `deleteProduct()` — removes a specified quantity of a product.
* `getList()` — displays the products in the order.
* `getSubtotal()` — calculates the total price of the products in the order.

The order also verifies that the specified user exists before creating the order.

---

### 💳 Payment

The `Payment` class is responsible for processing payments.

Before completing a payment, it checks:

1. Whether the order belongs to the specified user.
2. Whether the user has sufficient funds.

If the payment is successful:

* The required amount is deducted from the user's balance.
* The order is added to the user's order history.
* The user's cart is cleared.

---

## 🔄 System Workflow

The general workflow of the application is:

```text
Shop
  ↓
Products
  ↓
User
  ↓
Order
  ↓
Add / Remove Products
  ↓
Calculate Subtotal
  ↓
Payment
  ↓
Update Balance
  ↓
Order History
```

---

## 🔗 Object Relationships

The classes interact with each other to represent relationships within the shopping system.

For example:

* A `Shop` contains multiple `Product` objects.
* An `Order` contains products selected by a `User`.
* A `User` has a cart and order history.
* A `Payment` processes a specific `Order` for a `User`.

These relationships allow the different objects to work together as a complete system.

---

## 💰 Payment Process

The payment process follows these steps:

```text
Check User
    ↓
Check Order Ownership
    ↓
Calculate Subtotal
    ↓
Check User Balance
    ↓
Deduct Payment
    ↓
Save Order to History
    ↓
Clear Cart
```

If the user does not have enough funds, the payment is rejected and the user's balance and order history remain unchanged.

---

## 🧪 Functionality Demonstrated

The project demonstrates the following functionality:

* Creating shops and products.
* Adding products to a shop.
* Displaying shop products.
* Creating users.
* Creating orders for registered users.
* Adding products to an order.
* Checking product availability.
* Removing products from an order.
* Calculating order subtotals.
* Processing payments.
* Updating user balances.
* Storing completed orders in order history.
* Clearing the user's cart after successful payment.
* Using **encapsulation** with private class fields, getters, and setters.

---

## 📚 JavaScript Concepts

The project applies several JavaScript concepts, including:

* Classes
* Constructors
* Private class fields (`#`)
* Getters and setters
* Object relationships
* Arrays
* Array methods
* Conditional logic
* Iteration
* Arrow functions
* Template literals
* Object-oriented design

---

## 📈 Conclusion

This project demonstrates how **Object-Oriented Programming in JavaScript** can be used to model a basic shopping and order management system.

By separating the system into classes such as `Shop`, `Product`, `User`, `Order`, and `Payment`, each entity has its own data and behavior.

The project provides practical experience with **object relationships, encapsulation, state management, order processing, and payment logic** while demonstrating how multiple objects can interact to implement a complete workflow.

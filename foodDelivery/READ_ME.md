# 🍽️ Restaurant Order Management System — SOLID Refactoring

## 📌 Project Overview

This project is a **refactoring task** focused on applying the **SOLID principles of Object-Oriented Programming**.

The starting point of the project was an existing Restaurant Order Management System whose code contained multiple **SOLID design violations**. The main objective was to analyze the original implementation, identify its design problems, and transform it into a more **maintainable, flexible, extensible, and loosely coupled system**.

The functionality of the system was preserved while its internal structure and responsibilities were reorganized according to SOLID principles.

---

## 🎯 Task Objective

The primary task was:

> **Transform an existing codebase with SOLID principle violations into a codebase that follows the SOLID principles.**

The refactoring focused on:

* Identifying classes with multiple responsibilities.
* Separating unrelated responsibilities into dedicated classes.
* Reducing dependencies between components.
* Introducing abstractions where appropriate.
* Applying polymorphism instead of relying on large conditional structures.
* Making the system easier to extend without modifying existing code.
* Using dependency injection to reduce tight coupling.

---

## 🏗️ Original Design Problems

The original implementation contained several design problems related to SOLID principles.

For example, the `Order` class was responsible for many unrelated operations, including:

* Calculating prices
* Processing payments
* Handling delivery
* Sending notifications
* Saving data
* Generating invoices

This caused the class to have too many responsibilities and made it highly dependent on other parts of the system.

There were also conditional structures for different payment methods, delivery methods, discount types, and pricing rules. Adding a new behavior would require modifying existing code.

The refactoring process addressed these problems by separating these responsibilities into independent abstractions and implementations.

---

## 🔨 Refactoring Approach

The original code was gradually transformed into separate components.

### Before Refactoring

A single order-related class was responsible for a large part of the application's business logic.

```text
Order
 ├── Price calculation
 ├── Discount calculation
 ├── Payment
 ├── Delivery
 ├── Notification
 ├── Database operations
 └── Invoice generation
```

### After Refactoring

Responsibilities were separated into dedicated classes:

```text
Order
 │
 ├── PaymentService
 │    ├── PayByCash
 │    ├── PayByPaypal
 │    └── PayByCrypto
 │
 ├── DeliveryService
 │    ├── DeliverCourier
 │    ├── DeliverPickup
 │    └── DeliverDrone
 │
 ├── NotificationService
 │    ├── sendEmail
 │    ├── sendSms
 │    └── pushNotification
 │
 ├── DiscountService
 │    ├── DiscountRegular
 │    ├── DiscountVIP
 │    ├── DiscountEmployee
 │    └── DiscountNew
 │
 ├── Price
 │    ├── PizzaPrice
 │    ├── BurgerPrice
 │    └── DessertPrice
 │
 └── Database
```

This structure makes each component responsible for a specific part of the system.

---

## 🧩 SOLID Principles Applied

### 1. Single Responsibility Principle (SRP)

The original code contained classes that handled several unrelated responsibilities.

During refactoring, these responsibilities were separated.

For example:

* `PaymentService` handles payments.
* `DeliveryService` handles delivery.
* `NotificationService` handles notifications.
* `DiscountService` handles discounts.
* `Price` handles pricing strategies.
* `Database` handles persistence.

As a result, each class has a more focused responsibility.

---

### 2. Open/Closed Principle (OCP)

The original implementation required modifying existing code when a new payment, delivery, discount, or pricing type was introduced.

The refactored implementation uses separate subclasses.

For example, a new payment method can be added without changing the existing payment implementations:

```js
class PayByCard extends PaymentService {
  pay(amount) {
    console.log(`Charging card: ${amount}`);
  }
}
```

The system is therefore **open for extension but closed for modification**.

---

### 3. Liskov Substitution Principle (LSP)

The different implementations of each service can be substituted for their corresponding base abstraction.

For example:

```js
const payment = new PayByPaypal();
```

can be replaced with:

```js
const payment = new PayByCrypto();
```

Both implementations provide the required `pay()` behavior defined by `PaymentService`.

The same approach is used for delivery, notification, discount, refund, and pricing strategies.

---

### 4. Interface Segregation Principle (ISP)

Instead of having one large service containing unrelated methods, the responsibilities were divided into smaller abstractions.

The project uses focused abstractions such as:

* `PaymentService`
* `DeliveryService`
* `NotificationService`
* `DiscountService`
* `RefundService`
* `Price`

Each abstraction contains methods related only to its specific responsibility.

---

### 5. Dependency Inversion Principle (DIP)

The refactored `OrderService` does not create its own concrete dependencies.

Instead, the required services are provided through its constructor.

This allows different implementations to be supplied without modifying `OrderService`.

For example, `PayByPaypal` can be replaced with `PayByCrypto` without changing the order-processing logic.

---

## 🔄 Result of the Refactoring

After the refactoring, the system has:

* ✅ Separated responsibilities
* ✅ Reduced coupling
* ✅ Better extensibility
* ✅ Greater flexibility
* ✅ Reusable service abstractions
* ✅ Dependency injection
* ✅ Polymorphic implementations
* ✅ Improved maintainability
* ✅ SOLID-oriented architecture

The main goal was not to add new functionality, but to **improve the design of the existing functionality by eliminating SOLID violations**.

---

## 📚 Conclusion

This project demonstrates the process of transforming an existing codebase with **SOLID principle violations** into a more structured and maintainable Object-Oriented system.

The refactoring separates responsibilities, introduces appropriate abstractions, reduces coupling, and allows individual components to be extended or replaced independently.

The final implementation demonstrates how the **SOLID principles can be applied in practice to improve the design of an existing software system without changing its fundamental purpose or functionality.**

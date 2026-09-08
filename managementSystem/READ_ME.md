# 📄 Product Requirements Document (PRD)

# Company Staff & Role Management System

---

## 📖 Overview

The **Company Staff & Role Management System** is a JavaScript application designed to model employees and their responsibilities within a company using object-oriented programming principles. The project demonstrates inheritance, encapsulation, and class-based design by representing different employee roles with specialized behaviors.

The system establishes a common employee structure while allowing role-specific functionality for developers and managers. It also utilizes JavaScript private class fields to ensure secure data management and controlled access to employee information.

---

## 🎯 Objectives

The primary objectives of this project are to:

* Model company employees using object-oriented programming.
* Demonstrate inheritance through specialized employee roles.
* Protect sensitive employee information using private class fields.
* Promote code reusability through a shared base class.
* Simulate common workplace activities performed by different employee roles.

---

# ✨ Functional Requirements

## 🔹 Employee Class

The **Employee** class serves as the parent class for all employees in the system.

### Responsibilities

* Store employee information.
* Protect employee data using private class fields.
* Provide controlled access to employee information.
* Calculate employee salary after applying a bonus.
* Display employee profile information.

### Features

* Stores employee name.
* Stores base salary.
* Returns employee name.
* Returns salary information.
* Calculates salary after applying a bonus multiplier.
* Displays employee profile details.

---

## 💻 Developer Class

The **Developer** class extends the **Employee** class and represents software developers within the company.

### Responsibilities

* Store the developer's primary programming language.
* Track resolved software bugs.
* Simulate software development activities.

### Features

* Inherits all employee functionality.
* Stores the primary programming language.
* Simulates writing code.
* Records completed bug fixes.

---

## 📊 Manager Class

The **Manager** class extends the **Employee** class and represents managerial staff.

### Responsibilities

* Store team information.
* Track successful business deals.
* Simulate management activities.

### Features

* Inherits all employee functionality.
* Stores team size.
* Records successful business deals.
* Simulates conducting meetings.

---

# 🧠 JavaScript Concepts Demonstrated

This project demonstrates several important JavaScript concepts, including:

* Object-Oriented Programming (OOP)
* Classes and Objects
* Class Inheritance
* Encapsulation
* Private Class Fields (`#`)
* Constructors
* Method Inheritance
* Code Reusability
* Data Abstraction
* Method Invocation

---

# 🏗️ Class Hierarchy

```text
                Employee
               /        \
              /          \
      Developer        Manager
```

* **Employee** is the base class shared by all staff members.
* **Developer** inherits common employee functionality while adding developer-specific behavior.
* **Manager** inherits common employee functionality while adding management-specific behavior.

---

# 🔒 Data Security

The system uses JavaScript private class fields to protect sensitive employee information.

The following data is encapsulated:

* Employee name
* Base salary
* Developer's primary programming language
* Number of fixed bugs
* Manager's team size
* Number of successful deals

These values cannot be accessed directly from outside their respective classes and are only available through public methods.

---

# ✅ Conclusion

The **Company Staff & Role Management System** demonstrates the practical use of object-oriented programming in JavaScript through a clear class hierarchy and well-defined employee roles. By combining inheritance, encapsulation, and private class fields, the project illustrates how shared functionality can be reused while allowing each role to implement its own specialized behavior. The implementation provides a solid example of modern JavaScript class design and reinforces key OOP principles through practical application.

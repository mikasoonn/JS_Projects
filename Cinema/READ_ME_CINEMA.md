# 🎬 Cinema Management System

## 📖 Project Overview

The **Cinema Management System** is an object-oriented JavaScript application that simulates the core operations of a cinema. The project demonstrates the practical implementation of **Object-Oriented Programming (OOP)** concepts, including classes, inheritance, encapsulation, and object interaction.

The system allows users to manage movies, cinema halls, screening sessions, employees, clients, and ticket sales while enforcing business rules such as age restrictions and seat availability.

---

# 🎯 Project Objectives

The primary objectives of this project are:

* Apply Object-Oriented Programming principles in JavaScript.
* Design a realistic cinema management model.
* Simulate the ticket purchasing process.
* Validate business logic such as:

  * Movie age restrictions.
  * Hall capacity limitations.
  * Session availability.
* Organize the code into reusable and maintainable classes.

---

# 🏛️ Class Structure

The project consists of the following classes:

## 🎥 Cinema

Represents a cinema and stores all related information.

### Properties

* `name`
* `address`
* `contact`
* `movies`
* `sessions`
* `halls`
* `employees`

### Methods

* `cinemaInfo()` – Displays general information about the cinema.
* `moviesInfo()` – Lists all available movies.
* `sessionsInfo()` – Displays all scheduled sessions.
* `hallsInfo()` – Displays information about cinema halls.
* `addMovie(movie)` – Adds a movie.
* `addHall(hall)` – Adds a hall.
* `addSession(session)` – Adds a screening session.
* `addEmployee(employee)` – Adds an employee.

---

## 👤 Person

A base class representing a person.

### Properties

* `name`
* `age`

This class serves as the parent class for both **Employee** and **Client**.

---

## 👨‍💼 Employee

Extends the `Person` class.

### Additional Property

* `experience`

### Method

#### `sell(request, cinema)`

Processes ticket sales by:

* Finding the requested session.
* Checking whether the session exists.
* Verifying the client's age against the movie's age restriction.
* Checking seat availability.
* Creating ticket objects.
* Updating the number of sold tickets.

---

## 🎟️ Client

Extends the `Person` class.

### Additional Property

* `tickets`

### Method

#### `purchase(movieName, time, tickets)`

Creates a purchase request containing:

* Client information
* Movie name
* Session time
* Number of requested tickets

The request is later processed by an employee.

---

## 🎬 Movie

Represents a movie.

### Properties

* `name`
* `duration`
* `genre`
* `ageLimit`
* `description`

---

## 🏟️ Halls

Represents a cinema hall.

### Properties

* `number`
* `capacity`

---

## 🕒 Sessions

Represents a movie screening.

### Properties

* `movie`
* `hall`
* `time`
* `tickets_bought`

Each session keeps track of the number of sold tickets.

---

## 🎫 Ticket

Represents a purchased ticket.

### Properties

* `session`
* `client`

Each ticket connects a specific client with a specific movie session.

---

# ⚙️ Program Workflow

The application follows the sequence below:

1. Create a cinema.
2. Add employees.
3. Add cinema halls.
4. Add movies.
5. Schedule movie sessions.
6. Create clients.
7. Clients submit purchase requests.
8. Employees process requests.
9. Tickets are generated if all validation checks pass.

---

# ✅ Business Rules

The system enforces several important validation rules:

### 🎂 Age Restriction

A client cannot purchase tickets for a movie if they are younger than the required age limit.

---

### 💺 Hall Capacity

Tickets cannot be sold once all available seats have been purchased.

---

### 🎥 Session Validation

A purchase request is rejected if the requested movie session does not exist.

---

# 📌 Conclusion

The **Cinema Management System** is a simplified simulation of a real-world cinema management application. Although it does not include a graphical user interface or persistent data storage, it effectively demonstrates the application of Object-Oriented Programming principles in JavaScript.

The project provides a solid foundation for future enhancements, such as database integration, user authentication, online reservations, payment processing, and graphical interfaces.

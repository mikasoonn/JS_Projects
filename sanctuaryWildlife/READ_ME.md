# 🦁 Wildlife Sanctuary

## 📖 Overview

The **Wildlife Sanctuary** project is a JavaScript-based animal management system implemented in two different ways. Both versions represent the same animal hierarchy and demonstrate inheritance, encapsulation, method overriding, and energy management.

The system includes **Lions** and **Rabbits**, with behaviors such as hunting, eating, sleeping, roaring, grazing, and jumping.

---

## 1. 🆕 First Version — ES6 Classes

The first version uses modern JavaScript `class` syntax.

It demonstrates:

* Private fields using `#`
* Getters and setters
* `extends` and `super()`
* Method overriding
* Encapsulation

```text
Animal
├── Predator
│   └── Lion
└── Herbivore
    └── Rabbit
```

---

## 2. 🔧 Second Version — Constructor Functions & Prototypes

The second version implements the same system using traditional JavaScript constructor functions and prototypes.

It demonstrates:

* Constructor functions
* `prototype`
* `Object.create()`
* `call()`
* Prototype-based inheritance
* Getter and setter methods
* Method overriding

```text
Animal
├── Predator
│   └── Lion
└── Herbivore
    └── Rabbit
```

---

## ⚡ Energy Rules

The same energy system is used in both versions:

* **`eat()`** → restores **+20** energy.
* **`sleep(hours)`** → restores **`hours × 10`** energy.
* **`hunt()`** → spends **-30** energy.
* **`roar()`** → spends **-10** energy.
* **`graze()`** → spends **-10** and restores **+15** energy.
* **`jump()`** → spends **-5** energy.
* **Rabbit's `graze()`** → spends **-5** and restores **+20** energy.

Energy must always remain between **0 and 100**. In the class-based version, this is enforced by the `energy` setter using `Math.max()` and `Math.min()`.

---

## 🧠 Key Concepts

The project demonstrates:

* Object-Oriented Programming
* Encapsulation
* Inheritance
* Private fields
* Getters and setters
* Prototypes
* Method overriding
* Constructor functions
* `Object.create()`
* `super()`
* `call()`
* State and energy management

---

## ✅ Conclusion

**Wildlife Sanctuary** provides two implementations of the same animal system, allowing a comparison between **modern ES6 class-based programming** and **prototype-based inheritance** in JavaScript. 🐾

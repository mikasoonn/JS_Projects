# 🏦 Simple Banking System (JavaScript)

A simple banking system implemented in **vanilla JavaScript** using object-oriented principles with object literals. The project demonstrates how to manage bank accounts, perform transactions, and keep a transaction history while reinforcing fundamental JavaScript concepts such as object methods and the `this` keyword.

---

## 📌 Features

Each bank account supports the following operations:

* 💰 **Deposit**

  * Adds money to the account balance.
  * Validates that the deposited amount is a positive number.
  * Records the transaction in the account history.

* 💸 **Withdraw**

  * Removes money from the account balance.
  * Validates the input.
  * Checks for sufficient funds before processing the withdrawal.
  * Records the transaction in the account history.

* 🔄 **Transfer**

  * Transfers money from one account to another.
  * Prevents transferring to the same account.
  * Validates the transfer amount.
  * Checks for sufficient funds.
  * Records the transfer in the sender's transaction history.

* 📊 **Show Balance**

  * Displays the current balance of the account owner.

* 📝 **Show History**

  * Displays all transactions performed by the account.

---

# Project Structure

```text
account1
├── owner
├── balance
├── history
├── deposit()
├── withdraw()
├── transfer()
├── showBalance()
└── showHistory()

account2
├── owner
├── balance
├── history
└── Reuses the same methods as account1
```

---

# Example Usage

```javascript
account1.deposit(500);
account1.withdraw(200);
account1.transfer(account2, 300);

account1.showBalance();
account1.showHistory();

account2.showBalance();
```

Example output:

```text
Successful Deposit
Successful Withdraw
Successful Transfer

Alice's Balance: 1000

Alice's History:
[
  { type: "Deposit", Amount: 500 },
  { type: "withdraw", Amount: 200 },
  { type: "Transfer", Amount: 300 }
]
```

---

# Validation

The application performs several validation checks before executing transactions.

### Deposit

* Amount must be of type `number`.
* Amount must be greater than `0`.

### Withdraw

* Amount must be of type `number`.
* Amount must be greater than `0`.
* Account must contain sufficient funds.

### Transfer

* Amount must be of type `number`.
* Amount must be greater than `0`.
* Sender cannot transfer money to the same account.
* Sender must have sufficient funds.

---

# JavaScript Concepts Demonstrated

This project demonstrates several core JavaScript concepts, including:

* Object literals
* Object methods
* The `this` keyword
* Method reuse between objects
* Arrays
* Objects
* Input validation
* Basic transaction management
* Template literals

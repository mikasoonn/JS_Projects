const account1 = {
    owner: "Alice",
    balance: 1000,
    history: [],

    deposit (amount) {
        if (typeof amount !== "number"){
            console.log("Invalid input");
            return;
        }
        if(amount <= 0){
            console.log("Invalid Input");
            return;
        }
        this.balance += amount;
        this.history.push({
            type: "Deposit",
            Amount: amount,
        });
        console.log("Succesful Deposit");
      
    },

    withdraw(amount) {
         if (typeof amount !== "number"){
            console.log("Invalid input");
            return;
        }
        if(amount <= 0){
            console.log("Invalid Input");
            return;
        }
        if(amount > this.balance || this.balance <= 0){
            console.log("Not Enogh Funds");
            return;
        }
        this.balance -= amount;
        this.history.push({
            type: "withdraw",
            Amount: amount,
        })
        console.log("Succesful Withdraw");
    },

    transfer(account, amount) {
        if(account == this){
            console.log("Cannot transfer to the same account");
            return;
        }
         if (typeof amount !== "number"){
            console.log("Invalid input");
            return;
        }
        if(amount <= 0){
            console.log("Invalid Input");
            return;
        }
        if(amount > this.balance || this.balance == 0){
            console.log("Not Enogh funds");
            return;
        }
        this.balance -= amount;
        account.balance += amount;
        this.history.push({
            type: "Transfer",
            Amount: amount,
        })
        console.log("Succesful Transfer");
    },

    showBalance() {
        console.log(`${this.owner}'s Balance: ${this.balance}`);
        return;
    },

    showHistory() {
        console.log(`${this.owner}'s History: `);
        console.log(this.history);
        return;
    },
};
const account2 = {
    owner: "John",
    balance: 1500,
    history: [],
    deposit: account1.deposit,
    withdraw: account1.withdraw,
    transfer: account1.transfer,
    showBalance: account1.showBalance,
    showHistory: account1.showHistory,
};



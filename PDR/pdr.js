class Employee {
    #name;
    #baseSalary;

    constructor(name, baseSalary){
        this.#name = name;
        this.#baseSalary = baseSalary;
    }

    getName(){
        return this.#name;
    }

    getbaseSalary(){
        return `${this.getName()}'s BaseSalary: ${this.#baseSalary}`;
    }

    calculatePay(num){
        return `${this.getName()} just got a bonus, for this month ${this.getName()}'s Salary is: ${this.#baseSalary * num}, Congratss!`;
    }

    getProfileInfo(){
        console.log("Profile Info:")
        return `name: ${this.#name}, Base Salary(Compensation): ${this.#baseSalary}`;
    }
}
class Developer extends Employee{
    #mainLanguage;
    #bugsFixed = 0;

    constructor(name, baseSalary, mainLanguage){
        super(name,baseSalary);
        this.#mainLanguage = mainLanguage;
    }

    writeCode(){
        return `The developer is writing code in ${this.#mainLanguage}`;
    }

    fixBug(){
        this.#bugsFixed++;
        let name = this.getName();
        return `${name} fixed one bug`;
    }
}
class Manager extends Employee{
    #teamSize;
    #successfulDeals = 0;

    constructor(name,baseSalary, teamSize){
        super(name, baseSalary);
        this.#teamSize = teamSize;
    }

    closeDeal(){
        this.#successfulDeals++;
        let name = this.getName();
        return `${name} closed a deal, Congratsss!`;
    }

    conductMeeting(){
        let name = this.getName();
        return `${name} organized a meeting, the team size was: ${this.#teamSize}`;
    }
}
let developer1 = new Developer("Sona",1500,"JS");
let developer2 = new Developer("Ruben", 1600, "Cpp");

let manager1 = new Manager("Hayk",1800,25);
let manager2 = new Manager("Alina", 1700, 20);

console.log(developer1.getName());
console.log(manager1.getName());

console.log(developer2.getbaseSalary());

console.log(manager2.getProfileInfo());

console.log(developer1.fixBug());

console.log(manager1.closeDeal());

console.log(manager2.conductMeeting());

console.log(developer2.calculatePay(1.5));


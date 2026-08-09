class Animal {
    #name;
    #age;
    #energy = 100;
    constructor (name, age, energy){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    get name (){
       return this.#name; 
    }
    get age (){
        return this.#age;
    }
    get energy (){
        return this.#energy;
    }
    set name (name){
        this.#name = name;
    }
    set age (age){
        this.#age = age;
    }
    set energy (energy){
        this.#energy = Math.max(0, Math.min(100,energy));
    }
    eat(food){
       if(this.energy <= 80){
        this.energy += 20;
        return `${this.name} ate a ${food}`;
       } else {
        return `${this.name}'s energy is full, cannot eat`;
       }
    }
    sleep(hours){
        if(this.energy + (hours * 10) <= 100){
            this.energy += (hours * 10);
            return `${this.name} just slept ${hours} hours`;
        }else{
            return `${this.name} cannot sleep: The energy is full`;
        }
    }
    getInfo(){
        return `name: ${this.name}, age: ${this.age}, energy: ${this.energy}`
    }

}
class Predator extends Animal{
    #isHungry = true;
    constructor(isHungry, name, age, energy){
        super(name, age, energy);
    }
    get isHungry(){
        return this.#isHungry;
    }
    set isHungry(value){
        this.#isHungry = value;
    }
    hunt(){
        if(this.isHungry){
            if(this.energy >= 30){
                this.energy -= 30;
                this.isHungry = false;
                return `${this.name} just hunted`;
            }else {
                return `${this.name} cannot hunt: lack of energy`;
            }
        }else{
            return `${this.name} cannot hunt: not hungry`;
        }
    }
    getInfo(){
        console.log("Required Information: ");
        return `name: ${this.name} is a Predator, Hunger status: ${this.isHungry} `;
    }
}
class Herbivore extends Animal{
    #favoritePlant;
    constructor(name, age,energy, favoritePlant){
        super(name,age, energy);
        this.#favoritePlant = favoritePlant;
    }
    get favoritePlant (){
        return this.#favoritePlant;
    }
    set favoritePlant(value){
        this.#favoritePlant = value;
    }
    graze(){
        if(this.energy >= 10){
            this.energy -= 10;
            this.energy += 15;
            return `${this.name} foraged and restored`;
        }else {
            return `${this.name} cannot forage: lack of energy`;
        }
    }
    getInfo(){
        console.log("Required Information: ");
        return `${this.name} is a Herbivore, its favorite plant is: ${this.favoritePlant}`;
    }
}
class Lion extends Predator{
    #prideName;
    constructor(isHungry, name, age,energy, prideName){
        super(isHungry, name, age, energy);
        this.#prideName = prideName;
    }
    get prideName() {
        return this.#prideName;
    }
    set prideName(value){
        this.#prideName = value;
    }
    roar(){
        if(this.energy >= 10){
            this.energy -= 10;
            return `${this.name}: ROARRRR`;
        }else {
            return `${this.name} cannot Roar: Lack of energy`;
        }
    }
    hunt(){
        if(this.energy >= 30){
            if(this.isHungry){
                this.energy -= 30;
                this.isHungry = false;
                return `A Lion from ${this.prideName} pride and named ${this.name} just hunted`;
            }else{
                return `A Lion from ${this.prideName} pride and named ${this.name} cannot hunt: is not hungry`;
            }
        }else{
            return `A Lion from ${this.prideName} pride and named ${this.name} cannot hunt: lack of energy`;
        }
    }
}
class Rabbit extends Herbivore{
    #jumpHeight;
    constructor (name, age, energy, favoritePlant, jumpHeight){
        super(name,age,energy,favoritePlant);
        this.#jumpHeight = jumpHeight;
    }
    get jumpHeight(){
        return this.#jumpHeight;
    }
    set jumpHeight(value){
        this.#jumpHeight = value;
    }
    jump(){
        if(this.energy >= 5){
            this.energy -= 5;
            return `A Rabbit named ${this.name} just performed a ${this.#jumpHeight} centimetre jump`;
        }else{
            return `A Rabbit named ${this.name} cannot perform a jump: Lack of energy`;
        }
    }
    graze(){
        if(this.energy >= 5){
            this.energy -= 5;
            this.energy += 20;
            return `Rabbit named ${this.name} just grazed`;
        }else{
            return `Rabbit named ${this.name} cannot graze: lack of energy`;
        }
    }
}
const lion1 = new Lion(true, "Simba", 8, 50, "Shadow Pride");
const lion2 = new Lion(true,"Sonya", 7,60,"The Sunborn");

const rabbit1 = new Rabbit("Pushok", 2, 20, "Dandelion", 35);
const rabbit2 = new Rabbit("Bobik",4, 40, "Mint", 40);

console.log(lion1.getInfo());
console.log(lion2.getInfo());

console.log(rabbit1.getInfo());
console.log(rabbit2.getInfo());

console.log(lion1.hunt());
console.log(lion1.eat("Meat"));
console.log(lion2.roar());
console.log(lion2.sleep(2));

console.log(rabbit1.eat("Dandelion"));
console.log(rabbit1.jump());
console.log(rabbit2.graze());
console.log(rabbit2.sleep(3));










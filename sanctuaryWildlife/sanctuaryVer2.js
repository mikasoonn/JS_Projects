function Animal(name, age, energy = 100){
    this._name = name;
    this._age = age;
    this._energy = energy;
}
Animal.prototype.getName = function (){
    return this._name;
}
Animal.prototype.setName = function (name){
    this._name = name;
}
Animal.prototype.getAge = function (){
    return this._age;
}
Animal.prototype.setAge = function (age){
    this._age = age;
}
Animal.prototype.getEnergy = function (){
    return this._energy;
}
Animal.prototype.setEnergy = function(Energy){
    this._energy = Energy;
}
Animal.prototype.eat = function(food){
    if(this.getEnergy() <= 80){
    this.setEnergy(this.getEnergy() + 20);
    return `${this.getName()} ate a ${food}`;
    } else {
    return `${this.getName()}'s energy is full, cannot eat`;
    }
}
Animal.prototype.sleep = function(hours){
    if(this.getEnergy() + (hours * 10) <= 100){
        this.setEnergy(this.getEnergy() + (hours * 10));
        return `${this.getName()} just slept ${hours} hours`;
    }else{
        return `${this.getName()} cannot sleep: The energy is full`;
    }
}
Animal.prototype.getInfo = function(){
    return `name: ${this.getName()}, age: ${this.getAge()}, energy: ${this.getEnergy()}`
}



function Predator (name, age, energy,isHungry ){
    Animal.call(this,name,age,energy);
    this._isHungry = isHungry;
    
}
Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.getIsHungry = function (){
    return this._isHungry;
}
Predator.prototype.setIsHungry = function (value){
    this._isHungry = value;
}
Predator.prototype.hunt = function (){
    if(this.getIsHungry()){
        if(this.getEnergy() >= 30){
            this.setEnergy(this.getEnergy() - 30);
            return "The hunt was done";
        }else{
            return "cannot hunt: lack of energy";
        }
    }{
        return "not hungry";
    }

}
Predator.prototype.getInfo = function (){
    return `${this.getName()} is a Predator, isHungry: ${this.getIsHungry()}`;
} 



function Lion (isHungry, name, age, energy, prideName){
    Predator.call(this,name, age,energy, isHungry);
    this._prideName = prideName;
   
} 
Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;
Lion.prototype.getPrideName = function() {
    return this._prideName;
}
Lion.prototype.SetPrideName = function(value){
    this._prideName = value;
}
Lion.prototype.roar = function(){
    if(this.getEnergy() >= 10){
        this.setEnergy(this.getEnergy() - 10);
        return `${this.getName()}: ROARRRR`;
    }else {
        return `${this.getName()} cannot Roar: Lack of energy`;
    }
}
Lion.prototype.hunt = function(){
    if(this.getEnergy() >= 30){
        if(this.getIsHungry()){
            this.setIsHungry(this.getIsHungry() - 30);
            this.setIsHungry(false);
            return `A Lion from ${this.getPrideName()} pride and named ${this.getName()} just hunted`;
        }else{
            return `A Lion from ${this.getPrideName()} pride and named ${this.getName()} cannot hunt: is not hungry`;
        }
    }else{
        return `A Lion from ${this.getPrideName()} pride and named ${this.getName()} cannot hunt: lack of energy`;
    }
}



function Herbivore(name, age, energy, favoritePlant){
    Animal.call(this,name,age,energy);
    this._favoritePlant = favoritePlant;
}
Herbivore.prototype = Object.create(Animal.prototype);
Herbivore.prototype.constructor = Herbivore;
Herbivore.prototype.getFavoritePlant = function(){
    return this._favoritePlant;
}
Herbivore.prototype.setFavoritePlant = function(value){
    this._favoritePlant = value;
}
Herbivore.prototype.graze = function(){
    if(this.getEnergy() >= 10){
        this.setEnergy(this.getEnergy() - 10);
        this.setEnergy(this.getEnergy() + 15);
        return `${this.getName()} foraged and restored`;
    }else {
        return `${this.getName()} cannot forage: lack of energy`;
    }
}
Herbivore.prototype.getInfo = function(){
    console.log("Required Information: ");
    return `${this.getName()} is a Herbivore, its favorite plant is: ${this.getFavoritePlant()}`;
}



function Rabbit(name, age, energy, favoritePlant, jumpHeight){
    Herbivore.call(this, name, age, energy, favoritePlant);
    this._jumpHeight = jumpHeight;
}
Rabbit.prototype = Object.create(Herbivore.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.getJumpHeight = function(){
    return this._jumpHeight;
}
Rabbit.prototype.setJumpHeight = function(value){
    this._jumpHeight = value;
}
Rabbit.prototype.jump = function(){
    if(this.getEnergy >= 5){
        this.setEnergy(this.getEnergy() - 5);
        return `A Rabbit named ${this.getName()} just performed a ${this.getJumpHeight()} centimetre jump`;
    }else{
        return `A Rabbit named ${this.getName()} cannot perform a jump: Lack of energy`;
    }
}
Rabbit.prototype.graze = function(){
    if(this.getEnergy() >= 5){
        this.setEnergy(this.getEnergy() - 5);
        this.setEnergy(this.getEnergy() + 20);
        return `Rabbit named ${this.name} just grazed`;
    }else{
        return `Rabbit named ${this.name} cannot graze: lack of energy`;
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
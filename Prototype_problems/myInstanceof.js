function Animal() {}
function Dog() {}
function myInstanceOf(obj, Constructor) {
    if(!(typeof(obj) == "object" && obj !== null)){
        return false;
    }
    let copy = obj;
    let bool = false;
    while(copy.__proto__ !== null){
        if(copy.__proto__ === Constructor.prototype){
            bool = true;
            break;
        }else{
            copy = copy.__proto__;
        }
    }
    return bool;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();


console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false
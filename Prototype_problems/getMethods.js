function getPrototypeMethods(obj){
    if(!obj.__proto__){
        return [];
    }
    let proto = Object.getOwnPropertyNames(obj.__proto__);
    let retArr = [];
    for(let key of proto){
        if(typeof(obj.__proto__[key]) == "function" && key !== "constructor"){
            retArr.push(key);
        }
    }
    return retArr;  
} 
function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
// console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([1,2,3]));
console.log(getPrototypeMethods([]).includes("push")); // true
const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []
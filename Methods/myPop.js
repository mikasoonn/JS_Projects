//Array.prototype.myPop() — removes the last element and returns it.

Array.prototype.myPop = function () {
    if(this.length){
    let lastElement = this[this.length - 1];
     delete this[this.length - 1];
     this.length--;
     return lastElement;
    } else {
        return undefined;
    }
}

//testing

let numbers = [10, 20, 35, 40];
numbers.myPop();
console.log(numbers);
let numberss = [];
console.log(numberss.myPop());
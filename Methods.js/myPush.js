// Array.prototype.myPush(...args) — adds elements to the end of the array and 
// returns the new length.

Array.prototype.myPush = function (...args) {
    for(var i = 0; i < args.length; i++){
        this[this.length] = args[i];
    }
    return this.length;
}

//testing

let numbers = [10, 20, 35, 40];
console.log(numbers.myPush(25, 35));
console.log(numbers);
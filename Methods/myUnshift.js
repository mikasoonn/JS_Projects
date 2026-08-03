//Array.prototype.myUnshift(...args) — adds elements to the beginning of the array 
// and returns the new length.

Array.prototype.myUnshift = function (...args) {
    for(let i = this.length + args.length - 1; (i - args.length) >= 0; i--){
        if((i - args.length) in this){
        this[i] = this[i - args.length];
        }else{
            delete this[i];
        }
    }
    for(let i = 0; i < args.length; i++){
        this[i] = args[i];
    }
    return this.length;
}

//testing

let numbers = [10, 32, , 1, 15];
console.log(numbers.myUnshift(4,5));
console.log(numbers);
//Array.prototype.mySome(callback, thisArg) — 
// tests whether at least one element in the array passes the test implemented by the provided function.

Array.prototype.mySome = function (callbackfn, thisArg){
     if(!this.length){
        return false;
    }
    let boolean = false;
    for(let i = 0; i < this.length; i++){
        if(i in this){
            if(callbackfn(this[i], i, this)){
                boolean = true;
                break;
            }
        }
    }
    return boolean;
}

//testing

let numbers = [10, 21, 3, 4, 8, 9];
console.log(numbers.mySome((num) => {
    return num % 35 == 0;
}, globalThis));
//Array.prototype.myEvery(callback, thisArg) — tests whether all elements in the array
//  pass the test implemented by the provided function.

Array.prototype.myEvery = function (callbackfn, thisArg){
    if(!this.length){
        return false;
    }
    let boolean = true;
    for(let i = 0; i < this.length; i++){
        if(i in this){
            if(!(callbackfn(this[i], i, this))){
                boolean = false;
                break;
            }
        }
    }
    return boolean;
}

//testing

let numbers = [10, 22, 6, 4, 5, 12];
console.log(numbers.myEvery((num) => {
    return num % 2 == 0;
}, globalThis));
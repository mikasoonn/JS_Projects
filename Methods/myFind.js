//Array.prototype.myFind(callback, thisArg) — 
// returns the first element in the provided array that satisfies the provided testing function.

Array.prototype.myFind = function(callbackfn, thisArg){
    if(!this.length){
        return undefined;
    }
    for(let i = 0; i < this.length; i++){
        if (i in this){
            if(callbackfn(this[i], i, this)){
                return this[i];
            }
        }
    }
    return undefined;
}

//testing

let numbers = [15, 17, 21, 56, 4, , 0];
console.log(numbers.myFind((num) => {
    return num > 10;
}, globalThis));

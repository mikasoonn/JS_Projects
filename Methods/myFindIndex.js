//Array.prototype.myFindIndex(callback, thisArg) — 
// returns the index of the first element that satisfies the testing function.

Array.prototype.myFindIndex = function(callbackfn, thisArg){
    if(!this.length){
        return undefined;
    }
    for(let i = 0; i < this.length; i++){
        if (i in this){
            if(callbackfn(this[i], i, this)){
                return i;
            }
        }
    }
    return undefined;
}

//testing 

let numbers = [15, 17, 21, 56, 4, , 0];
console.log(numbers.myFindIndex((num) => {
    return num > 20;
}, globalThis));
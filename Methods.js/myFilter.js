//Array.prototype.myFilter(callback, thisArg) — 
// creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test.

Array.prototype.myFilter = function (callbackfn, thisArg){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(i in this){
            if(callbackfn(this[i], i, this)){
                newArray.push(this[i]);
            }
        }
    }
    return newArray;
}

//testing

let numbers = [10, 5, 8, 3, , ,9];
let newname = numbers.myFilter((num) => {
    return num % 2 !== 0 ;
}, globalThis);
console.log(newname);
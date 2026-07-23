//Array.prototype.myMap(callback, thisArg) — 
// creates a new array populated with the results of calling the provided function on every element.

Array.prototype.myMap = function(callbackfn, thisArg){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(i in this){
            newArray.push(callbackfn(this[i], i, this));
        }else{
            newArray.length++;
        }
    }
    return newArray;
}

//testing

let numbers = [10, 5, 8, 3, , ,9];
let newname = numbers.myMap((num) => {
    return num*2;
}, globalThis);
console.log(newname);
//Array.prototype.myForEach(callback, thisArg) — executes a provided function once for
//  each array element.

Array.prototype.myforEach = function(callbackfn, thisArg){
    for(let i = 0; i < this.length; i++){
        if(i in this){
            callbackfn(this[i], i, this);
        }
    }
    return undefined;
}

//testing

let numbers = [10, 5, 8, 3, , 9];
numbers.myforEach((num) => {
    console.log(num*2);
}, globalThis);
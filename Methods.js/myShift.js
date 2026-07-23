//Array.prototype.myShift() — removes the first element, shifting the rest down, and returns it.

Array.prototype.myShift = function () {
    if(this.length){
    let firstElement = this[0];
    delete this[0];
    for(let i = 0; i < this.length - 1; i++){
        if((i+1) in this) {
            this[i] = this[i+1];
        } else {
            delete this[i];
        }
     }
     this.length--;
     return firstElement;
    } else {
        return undefined;
    }
}

//testing 

let numbers = [25, 10, , 4, 3];
console.log(numbers.myShift());
console.log(numbers);
let numberss = [];
console.log(numberss.myShift());
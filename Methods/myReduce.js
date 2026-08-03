//Array.prototype.myReduce(callback, initialValue) —
//  executes a reducer function on each element, resulting in a single output value 
// (make sure to handle the logic when initialValue is NOT provided!).

Array.prototype.myReduce = function(callbackfn, InitialValue){
    if(this.length == 0 && arguments.length <= 1){
        throw new Error("error occured");
    }
    let acc;
    if(arguments.length > 1){
        acc = InitialValue;
        for(let i = 0; i < this.length; i++){
            acc = callbackfn(acc, this[i], i, this);
        }
    }else{
        acc = this[0];
        for(let i = 1; i < this.length; i++){
            acc = callbackfn(acc, this[i], i, this);
        }
    }
    return acc;
}

//testing

let numbers = [1, 2, 4, 17, 0, 3];
let res = numbers.myReduce((x,y) => x + y, 2);
console.log(res);
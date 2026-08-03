//Array.prototype.mySlice(start, end) — 
// returns a shallow copy of a portion of an array into a new array object.

Array.prototype.mySlice = function(start, end){
    let result = [];
    let funcStart = start;
    let funcEnd = end;
    if(start < -this.length || start == undefined){
        funcStart = 0;
    }else if(start >= this.length){
        return [];
    }else if(start < 0){
        funcStart = this.length + start;
    }

    if(end < -this.length){
        funcEnd = 0;
    }else if(end >= this.length || end == undefined){
        funcEnd = this.length
    }else if(end < 0){
        funcEnd = this.length + end;
    }

    for(let i = funcStart; i < funcEnd; i++){
        if(i in this){
            result.push(this[i]);
        }else {
            result.length++;
        }
    }
    return result;
}

//testing

let numbers = [10,20,30,40, ,60,70];
console.log(numbers.mySlice(1,5));
console.log(numbers.mySlice());
console.log(numbers.mySlice(-6,-2));
console.log(numbers.mySlice(8,2));
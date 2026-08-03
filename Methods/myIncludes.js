//Array.prototype.myIncludes(searchElement, fromIndex) — 
//determines whether an array includes a certain value (make sure it handles NaN correctly!).

Array.prototype.myIncludes = function(searchElement, indexFrom){
    let start = indexFrom;
    if(indexFrom >= this.length){
        return false;
    }else if(indexFrom < -this.length || indexFrom == undefined){
        start = 0;
    }else if(indexFrom < 0){
        start = this.length + indexFrom;
    }
    if(Number.isNaN(searchElement)){
        for(let i = start; i < this.length; i++){
            if(Number.isNaN(this[i])){
                return true;
            }
        }
        return false;
    }
    for(let i = start; i < this.length; i++){
            if(searchElement === this[i]){
                return true;
            }
    }
    return false;

}

//testing

let numbers = [ ,5, 0, undefined, NaN];
console.log(numbers.myIncludes(undefined));
console.log(numbers.myIncludes(6,2));
console.log(numbers.myIncludes(NaN));
console.log(numbers.myIncludes(6,25));
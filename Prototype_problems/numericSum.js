Array.prototype.mySum = function (){
    if( !this || this.length <= 0){
        return 0;
    }
    let copy = [...this];
    let summary = 0;
    for(let i = 0; i < copy.length; i++){
        if(Number.isNaN(copy[i]) || typeof(copy[i]) != "number"){
            throw new Error("Error: there are Invalid members in the array");
        }
        summary += copy[i];
    }
    return summary;
}
console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0
console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error

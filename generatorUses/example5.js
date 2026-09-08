// Data Passing to Generator (.next(val)): Create a storeGenerator() generator that accepts an 
// initial value, stores it, and when the .next(newValue) method is called, 
// updates the current value and yields the doubled result.

function* doubleIt(initialValue){
    let currentValue = initialValue;

    while(true){

       let newValue = yield `${currentValue * 2}`;
       currentValue = newValue;
    }
}

let funcGen = doubleIt(5);

console.log(funcGen.next());
console.log(funcGen.next(7));
console.log(funcGen.next(10));
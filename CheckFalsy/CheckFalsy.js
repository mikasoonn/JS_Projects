//Write a function that returns true if a given value is falsy and false otherwise;
//test it with 0, “”, null, undefined, NaN, and false.
function CheckFalsy(variable){
    return !variable;
}
console.log(CheckFalsy(false));
console.log(CheckFalsy(undefined));
console.log(CheckFalsy(null));
console.log(CheckFalsy(NaN));
console.log(CheckFalsy(""));
console.log(CheckFalsy(0));
//Write a function that returns the sum of two values only if both are numbers; 
//otherwise return the string “Invalid input”.
function SumNumbers(num1, num2){
    if(typeof(num1) === "number" && typeof(num2) === "number" && !Number.isNaN(num1) && !Number.isNaN(num2)){
        return num1 + num2;
    }
    return "Invalid Inputs";
}

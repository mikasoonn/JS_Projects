//Function.prototype.myApply(context, argsArray) — calls a function with a given this value,
//  and arguments provided as an array.


Function.prototype.myApply = function(context, ArgsArray){
    if(context == null || context == undefined){
        context = globalThis;
    }
    context.function = this;
    let result = context.function(...ArgsArray);
    delete context.function;
    return result;
}

//testing

const obj = {
    name: "Sona",
    age: 19,
    city: "Yerevan",
};
function greet(num){
    for(let i = 0; i < num; i++){
        console.log(`Hello ${this.name} from ${this.city}`);
    }
}
greet.myApply(obj, [3,4,3]);
greet.myApply(obj, [3,4,3]);
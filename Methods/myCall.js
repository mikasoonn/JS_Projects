//Function.prototype.myCall(context, ...args) — calls a function with a given 
// this value and arguments provided individually.


Function.prototype.myCall = function(context, ...args){
     if(context == null || context == undefined){
        context = globalThis;
    }
    context.function = this;
    let result = context.function(...args);
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
greet.myCall(obj, 5);
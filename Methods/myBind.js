//Function.prototype.myBind(context, ...args) — creates a new function that, when called, has its
// this keyword set to the provided value, with a given sequence of arguments preceding any
//  provided when the new function is called (currying).


Function.prototype.myBind = function(context, ...args){
    const fn = this;
    return function(...Args){
        context.func = fn;
        let res = context.func([...args, ...Args]);
        delete context.func;
        return res;
    }

    
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
 let funct = greet.myBind(obj, 3);
 funct();
 funct();
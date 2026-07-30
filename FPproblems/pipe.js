function pipe(...funcs) {
    return function(initialVal){
        return funcs.reduce(((acc, currentFunc) => {
            return currentFunc(acc);
        }),initialVal);
    }
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); 
console.log(func(2));

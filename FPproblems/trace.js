function trace(cb) {
    return function traceFunc(...args){
        traceFunc.history ??= [];
        let res = cb(...args);
        let pushArgs = [];
        let i = 0;
        while(i < cb.length){
            pushArgs.push(args[i]);
            i++;
        }
        (traceFunc.history).push({
            args: pushArgs,
            output: res,
        });
        return res;
    }
}

function foo(a, b) {
 return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); 
console.log(tracedFunc(2, 4, 6)); 
console.log(tracedFunc(5, 7, 3)); 


console.log(tracedFunc.history);
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let cache = [];
    return function(num){
        if(num in cache){
            return cache[num];
        }
        let res = cb(num);
        cache[num] = res;
        return res;
    }
 }

const foo = memoize(factorial);
console.log(foo(5)); 
console.log(foo(5)); 
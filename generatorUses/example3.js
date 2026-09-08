// Fibonacci Number Generator: Implement an infinite fibonacci()
//  generator that yields Fibonacci numbers one at a time.

function* fibonacci(){
    let value1 = 1;
    let value2 = 1;
    let temp = 0;

    while(true){
        yield value1;
        temp = value1;
        value1 = value2;
        value2 += temp;
    }
}

const funcGen = fibonacci();

// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// Basic Sequence Generator: Write a generator function numberGenerator(start, end)
//  that yields all integers sequentially from start to end inclusive.

function* numberGenerator(start, end){
    for(let i = start; i <= end ;i++){
        yield i;
    }
}

const funcgen = numberGenerator(1,9);
// console.log(funcgen.next().value);
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// console.log(funcgen.next());
// Infinite ID Generator: Create an idGenerator() generator that yields unique string identifiers 
// in the format id_1, id_2, id_3, and so on with each .next() call

function* idGenerator(){
    let i = 1;
    
    while(true){
        yield `id_${i++}`;
    }
}

const funcGen = idGenerator();

// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next());
// console.log(funcGen.next().value);
// Pagination via Generator: Write a generator function paginate(array, pageSize) that takes an array and a 
// page size, then yields chunks of data on each .next() call.

function* paginate(array, pageSize){
    let index = 0;
    while(index < array.length){
        let count = 0;
        let arr = [];
        for(;index < array.length && count < pageSize; count++, index++){
            arr.push(array[index]);
        }
        yield arr;
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10];

const funcGen = paginate(arr,3);

// console.log(funcGen.next().value);
// console.log(funcGen.next().value);
// console.log(funcGen.next().value);
// console.log(funcGen.next().value);

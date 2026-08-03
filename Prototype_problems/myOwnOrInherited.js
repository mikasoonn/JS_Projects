function checkProperty(obj, key){
    let copy = obj;
    let count = 0;
    while(copy != null){
        let keyNames = Object.getOwnPropertyNames(copy);
            if(keyNames.includes(key)){
                if(count == 0){
                    return "own";
                }else if(count > 0){
                    return "inherited";
                }
            }
            
            // console.log((k + "") == key);
        
        count++;
        copy = copy.__proto__;
    }
    return "not found";
}
const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";
console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found
// // Additional edge cases:
const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited
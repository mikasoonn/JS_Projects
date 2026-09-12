const User = {
 [Symbol.hasInstance](value) {
  const keys = Object.getOwnPropertyNames(value);
   if(keys.includes("name") && keys.includes("email")){
    return true;
   }else{
    return false;
   }
 }
};

const user = {
 name: 'John',
 email: 'john@gmail.com'
};

const product = {
 title: 'iPhone',
 price: 1000
};

console.log(user instanceof User);
console.log(product instanceof User);


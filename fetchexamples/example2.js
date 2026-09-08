fetch('https://randomuser.me/api/?results=20')
.then(response => response.json())
.then(users => users.results)
.then((results) => {
    console.log("People info who are older than 50:\n");
   console.log( results.filter((user) => user.dob.age > 50));
   console.log("\n");
   console.log( `The number of people who are older than 30: ${results.reduce((count,user) => {
    if(user.dob.age > 30)count++;
    return count;
   },0)}\n`);
   console.log("People names who are younger than 60:");
   results.filter((user) => {
    return user.dob.age < 60;
   }).forEach((user) => {
    console.log(user.name.first);
   })
})
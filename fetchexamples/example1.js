fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {
    console.log("Names:\n");
    users.forEach((user) => {
        console.log(user.name);
    })
    console.log("\n");

    console.log("Emails:\n");
    users.forEach((user) => {
        console.log(user.email);
    })
    console.log("\n");

    console.log("Patricia's info:\n");
    const userPatricia =  users.find((user) => user.name.startsWith('Patricia'));
    console.log(userPatricia);
})
.catch((error) => console.log(error.message));





fetch('https://jsonplaceholder.typicode.com/todos?userId=3')
.then(response => response.json())
.then((tasks) => {
    console.log("Only the completed tasks:");
    console.log(tasks.filter((task) => task.completed === true));
    console.log("Only the Incompleted tasks:");
    console.log(tasks.filter((task) => task.completed === false));

    console.log(`Completed ${tasks.filter((task) => task.completed === true).reduce((count) => count + 1, 0)} out of ${tasks.reduce((count) => count + 1,0)}`)
});


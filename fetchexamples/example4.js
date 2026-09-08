fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
.then((response) => response.json())
.then(posts => {
    console.log("The number of posts this user has:");
    console.log(posts.reduce((count,post) => count + 1, 0));
    console.log("The titles of the posts:");
    posts.forEach((post) => console.log(post.title));
    console.log("The post with id === 15:");
    console.log(posts.find((post) => post.id === 15));
});
function promiseAll(promises){
    if(promises.length <= 0){
        return new Promise((resolve,reject) => {
            resolve(promises);
        })
    }
    return new Promise((resolve,reject) => {
        let result = [];
        let finishedPromises = 0;
        promises.forEach((promise,index) => {
            if(!(promise instanceof Promise)){
                let myPromise = new Promise((resolve,reject) => {
                    resolve(promise);
                })
                promise = myPromise;
            }
            promise.then((res) => {
                finishedPromises++;
                result[index] = res;
                if(finishedPromises === promises.length){
                    resolve(result);
                }
            }).catch((err) => reject(err))
        })
        
    })
}

// Test 1
// const p1 = Promise.resolve("Hello");
// const p2 = Promise.resolve("World");

// promiseAll([p1, p2])
//     .then(result => console.log("Test 1:", result));


// // Test 2
// const p3 = Promise.resolve(10);
// const p4 = Promise.resolve(20);
// const p5 = Promise.resolve(30);

// promiseAll([p3, p4, p5])
//     .then(result => console.log("Test 2:", result));


// // Test 3 
// const slow = new Promise(resolve => {
//     setTimeout(() => resolve("slow"), 2000);
// });

// const fast = new Promise(resolve => {
//     setTimeout(() => resolve("fast"), 500);
// });

// promiseAll([slow, fast])
//     .then(result => console.log("Test 3:", result));

//test 4
// const success = Promise.resolve("success");

// const failed = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Something went wrong"), 1000);
// });

// promiseAll([success, failed])
//     .then(result => console.log("Test 4:", result))
//     .catch(error => console.log("Test 4 error:", error));


// Test 5 
console.log("Test 5:", promiseAll([]));


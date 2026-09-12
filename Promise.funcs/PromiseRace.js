function promiseRace(promises){
     if(promises.length <= 0){
        return new Promise((resolve,reject) => {
            resolve(promises);
        })
    }
    return new Promise((resolve,reject) => {
        promises.forEach((promise) => {
             if(!(promise instanceof Promise)){
                let myPromise = new Promise((resolve,reject) => {
                    resolve(promise);
                })
                promise = myPromise;
            }
            promise.then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
        })
    })
}
//Test 1
// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("slow"), 2000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("fast"), 500);
// });

// promiseRace([p1, p2])
//     .then(result => console.log("Test 1:", result));


//Test 2

// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("success"), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("error"), 500);
// });

// Promise.race([p1, p2])
//     .then(result => console.log("Test 2:", result))
//     .catch(error => console.log("Test 2:", error));

//Test3

const p1 = Promise.resolve("first");
const p2 = new Promise(resolve => {
    setTimeout(() => resolve("second"), 1000);
});

Promise.race([p1, p2])
    .then(result => console.log("Test 3:", result));
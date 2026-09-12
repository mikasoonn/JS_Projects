function promiseAllSettled(promises){
    if(promises.length <= 0){
        return new Promise((resolve,reject) => {
            resolve(promises);
        })
    }
    return new Promise((resolve,reject) => {
        let finishedPromises = 0;
        let result = [];
        promises.forEach((promise, index) => {
            if(!(promise instanceof Promise)){
                let myPromise = new Promise((resolve,reject) => {
                    resolve(promise);
                })
                promise = myPromise;
            }
            promise.then((res) => {
                finishedPromises++;
                result[index] = {
                    status: "fulfilled",
                    value: res
                }
                 if(finishedPromises == promises.length){
                resolve(result);
                }

            }).catch((err) => {
                finishedPromises++;
                result[index] = {
                    status: "rejected",
                    reason: err
                }
                 if(finishedPromises == promises.length){
                resolve(result);
                }
            })
           
        })
    })

}

//Test1
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// promiseAllSettled([p1, p2, p3])
//     .then(result => console.log("Test 1:", result));


//Test 2
// const p4 = Promise.resolve(10);

// const p5 = Promise.reject("Error");

// const p6 = Promise.resolve(30);

// promiseAllSettled([p4, p5, p6])
//     .then(result => console.log("Test 2:", result));


//Test 3
// const p7 = Promise.reject("Error 1");
// const p8 = Promise.reject("Error 2");

// promiseAllSettled([p7, p8])
//     .then(result => console.log("Test 3:", result));

//Test 4
// const slow = new Promise(resolve => {
//     setTimeout(() => resolve("slow"), 2000);
// });

// const fast = new Promise((resolve, reject) => {
//     setTimeout(() => reject("fast error"), 500);
// });

// promiseAllSettled([slow, fast])
//     .then(result => console.log("Test 4:", result));

//Test 5
// const p1 = 10;

// const p2 = Promise.resolve("Hello");

// const p3 = Promise.reject("Something went wrong");

// promiseAllSettled([p1, p2, p3])
//     .then(result => console.log(result));
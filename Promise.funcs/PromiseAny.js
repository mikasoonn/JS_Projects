function promiseAny(promises){
    if(promises.length <= 0){
        return new Promise((resolve,reject) => {
            reject(promises);
        })
    }
    let finishedPromises = 0;
    let reasons = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise,index) => {
            if(!(promise instanceof Promise)){
                let myPromise = new Promise((resolve,reject) => {
                    resolve(promise);
                })
                promise = myPromise;
            }
            promise.then((res) => {
                resolve(res);
            }).catch((err) => {
                finishedPromises++;
                reasons[index] = err;
                if(finishedPromises === promises.length){
                    reject({
                        reason: "AggregateError",
                        errors: reasons
                    });
                }
            })
        })
    })

}

//Test 1

// const p1 = Promise.reject("Error 1");

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error 2"), 500);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("Success"), 1000);
// });

// promiseAny([p1, p2, p3])
//     .then(result => console.log("Test 2:", result))
//     .catch(error => console.log("Test 2:", error));


//Test 2

// promiseAny([
//     Promise.reject("Error 1"),
//     Promise.reject("Error 2"),
//     Promise.reject("Error 3")
// ])
// .then(result => console.log("Test 3:", result))
// .catch(error => {
//     console.log("Test 3:", error);
// });
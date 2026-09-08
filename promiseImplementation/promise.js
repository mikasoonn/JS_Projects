function myPromise(executor){
    this.state = 'pending';
    this.value = null;
    this.reason = undefined;
    this.fulfilled = [];
    this.rejected = [];
    const resolve = (val) => {
        if(this.state !== 'pending') {
            return;
        }
        this.state = 'fulfilled';
        this.value = val;
        for(let cb of this.fulfilled){
           queueMicrotask( () => {
            cb(this.value);
           });
        }
    }
    const reject = (reason) => {
        if(this.state !== 'pending'){
            return;
        }
        this.state = 'rejected';
        this.reason = reason;
        for(let cb of this.rejected){            
            queueMicrotask( () => { 
                cb(this.reason);
            });
        }
    }

    try{
        executor(resolve, reject);
    }catch(err){
        reject(err);
    }

    this.then  = (onfulfilled, onrejected) => {
        
        return new myPromise((resolve,reject) => {
            const handlefulfilled = (val) =>{
                try{
                    if(typeof(onfulfilled) !== "function"){
                        resolve(val);
                        return;
                    }
                    queueMicrotask(() => {
                        let retVal = undefined;
                        try{
                            retVal = onfulfilled(val);
                        }catch(err){
                            reject(err);
                        }
                        if(retVal instanceof myPromise){
                            retVal.then(resolve,reject);
                        }else{
                            resolve(retVal);
                        }
                    })
                }catch(err){
                    reject(err);
                }
            }
            const handlerejected = (reason) => {
                try{
                    if(typeof(onrejected) !== "function"){
                        reject(reason);
                        return;
                    }
                    queueMicrotask(() => {
                        let retValr = undefined;
                        try{
                            retValr = onrejected(reason);
                        }catch(err){
                            reject(err);
                        }
                        if(retValr instanceof myPromise){
                            retValr.then(resolve,reject);
                        }else{
                            resolve(retValr);
                        }
                    })
                
            }catch(err){
                reject(err);
            }}
            if(this.state == 'fulfilled'){
                queueMicrotask(() => {
                handlefulfilled(this.value);
                })
            }else if(this.state == 'rejected'){
                queueMicrotask(() => {
                handlerejected(this.reason);
                })
            }else{
                this.fulfilled.push((val) => {
                    handlefulfilled(val);
                })
                this.rejected.push((reason) => {
                    handlerejected(reason);
                })
            }
            
        });
        
    
    }
    
    this.catch = (callback) => {
        return this.then(null,callback);
    }
}


// const pr = new myPromise((resolve, reject) => {
//     resolve(10);
// })
// pr.then((val) => {
//     console.log(val * 2);
// })


// const p = new myPromise((resolve, reject) => {
//     resolve(10);
// })
//     .then((val) => console.log(val))
//     .then((val) => {
//         console.log(val * 2);
//     }).catch()

// console.log(15);

// console.log("--- Test 1: Basic Async & Chaining ---");

// const p1 = new myPromise((resolve) => {
//     setTimeout(() => resolve(10), 300);
// });

// p1.then((val) => {
//     console.log("Step 1:", val);
//     return val * 2;
// }).then((val2) => {
//     console.log("Step 2:", val2);
// });

// //////////////////////////////////////////////////

// console.log("--- Test 2: Nested Promise Resolution ---");
// new myPromise((resolve) => {
//     setTimeout(() => resolve(5), 300);
// })
//     .then((val) => {
//         console.log("Step 1 received:", val);
//         return new myPromise((resolve) => {
//             setTimeout(() => resolve(val + 100), 300);
//         });
//     })
//     .then((finalVal) => {
//         console.log("Final step awaited nested promise:", finalVal);
//     });

// //////////////////////////////////////////////////

// console.log("--- Test 3: Error Handling & Recovery via Catch ---");
// new myPromise((resolve, reject) => {
//     setTimeout(() => reject("Server down"), 300);
// })
// .then((val) => {
//     console.log("Should not run:", val);
// })
// .catch((err) => {
//     console.log("Caught error:", err);
//     return "Recovered from backup";
// })
// .then((recoveredVal) => {
//     console.log("Chain revived:", recoveredVal);
// });

// //////////////////////////////////////////////////

// console.log("--- Test 4: Passthrough ---");
// new myPromise((resolve) => {
//     resolve("Secret Code 777");
// })
// .then(null, (err) => {
//     console.log("No error, this callback is skipped");
// })
// .then((val) => {
//     console.log("Value passed through:", val);
// });

// //////////////////////////////////////////////////

// console.log("--- Test 5: Exception Interception (try/catch) ---");
// new myPromise((resolve) => {
//     resolve(10);
// })
// .then((val) => {
//     throw new Error("Crash in user code!");
// })
// .then(
//     (val) => console.log("Success (should not run):", val),
//     (err) => console.log("Internal try/catch caught throw:", err.message)
// );

// //////////////////////////////////////////////////

// console.log("--- Test 6: Multiple Subscribers (Pending State) ---");
// const pendingPromise = new myPromise((resolve) => {
//     setTimeout(() => resolve("Shared Data"), 300);
// });

// pendingPromise.then((val) => console.log("Subscriber 1:", val));
// pendingPromise.then((val) => console.log("Subscriber 2:", val));
// pendingPromise.then((val) => console.log("Subscriber 3:", val));













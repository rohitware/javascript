const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise fullfill");
    } else {
        reject("Promise Rejected")
    }
});

myPromise
    .then(result => {
        console.log("Success", result);
    })
    .catch(error => {
        console.log("Fail", error);
    })
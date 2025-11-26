function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const networkOk = Math.random(); // true or false randomly
            if (networkOk) {
                resolve("Data loaded from server!");
            } else {
                reject("Network error! Try again.");
            }

        }, 2000);
    });
}

fetchData()
    .then(msg => console.log("success", msg))
    .catch(err => console.log("Error", err));



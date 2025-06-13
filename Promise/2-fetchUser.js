const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve({ name: "Rohit", age: 26 });
        } else {
            reject("unable to fetch data");
        }
    }, 2000);
})

fetchUser
    .then(data => {
        console.log("User data", data);
    })
    .catch(error => {
        console.log("Something wrong", error);
    })


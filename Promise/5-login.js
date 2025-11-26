function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "123") {
            resolve("Login successful");
        }
        else {
            reject("Invalid credintials");
        }
    });
}

login("admin", "123")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

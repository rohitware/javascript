function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3;
            if (isSuccess) {
                resolve({ name: "rohit", age: 30 });
            } else {
                reject("error");
            }
        }, 2000);
    });
}

async function displayUser() {

    try {
        console.log("Loading");
        const user = await fetchUser();
        console.log("User", user);
    } catch (error) {
        console.log(error);
    }
}
displayUser();
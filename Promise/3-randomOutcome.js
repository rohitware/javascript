function randomOutcome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chance = Math.random();
            console.log(chance);

            if (chance > 0.5) {
                resolve("You win");
            } else {
                reject("You lost");
            }
        }, 2000);
    });
}

randomOutcome()
    .then(result => {
        console.log("Success", result);

    })
    .catch(err => {
        console.log("Error", err);

    })
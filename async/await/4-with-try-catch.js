function fetchNumber() {
    return new Promise((resolve, reject) => {

        const num = 12;

        if (num > 10) {
            resolve("Number is greater than 10")
        } else {
            reject('Fnumber is less than 10');

        }
    });
}


async function Display() {
    try {
        let result = await fetchNumber();
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

Display();
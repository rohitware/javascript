function getValue() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
        }, 1000)
    });
}

async function showValue() {
    console.log("waiting");

    let value = await getValue()
    console.log(value);

}
showValue();
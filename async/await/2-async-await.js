function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("data loaded");
        }, 2000);
    })
}
async function getData() {
    console.log("waiting ");
    const result = await fetchData();
    console.log(result);

}
getData();
function cook(food, callback) {
    console.log("cooking " + food);
    callback();
}
cook("pasta", function () {
    console.log("pasta is ready to eat");
})
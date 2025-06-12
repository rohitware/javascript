function delayedGreeting(callback) {
    setTimeout(function () {
        console.log("2 seconds passed...");
        callback();
    }, 2000);
}

delayedGreeting(function () {
    console.log("This is your delayed message!");
});

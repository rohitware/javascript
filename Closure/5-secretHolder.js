function secretHolder() {
    let secret = "top secret";

    return function () {
        return secret;
    }
}
let getSecret = secretHolder();
console.log(getSecret());

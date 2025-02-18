var voteEligible = function (age) {
    if (age < 0 || age > 130 || age == null) {
        console.log(`Invalid data`);

    } else if (age < 18) {
        console.log(`you age ${age} years old and you are not eligible for voting`);
    } else {
        if (age >= 18) {
            console.log(`you are ${age} years old and you are eligible for voting`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
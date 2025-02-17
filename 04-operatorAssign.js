function squareOfWordLength(str) {
    var strLen = str.length;
    var strLenSqr = strLen * strLen;
    console.log(`The length of word "${str}" is ${strLen} and the square of it's length is : ${strLenSqr}`);

    return strLenSqr;
}
squareOfWordLength("javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");


console.log(`=========================================`);


function wordLengthOpr() {
    var str = "I am UI Developer";
    var strLen = str.length;
    var totalWordsInStr = str.split(" ").length;

    var result = strLen / totalWordsInStr;
    console.log(`string length: ${strLen} / word length: ${totalWordsInStr} = ${result}`);

    var result = strLen * totalWordsInStr;
    console.log(`string length: ${strLen} * word length: ${totalWordsInStr} = ${result}`);
}
wordLengthOpr();
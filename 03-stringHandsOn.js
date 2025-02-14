function stringHandsOn() {

    var str = "  Hey you are doing good, keep it up  ";
    console.log(str);

    console.log(`length of string is: ${str.length}`);

    var trimStr = str.trim();
    console.log(trimStr);

    var removedSpace = str.length - trimStr.length

    console.log(`total removed spaces is: ${removedSpace}`);

    console.log(`first character after trim: ${trimStr.charAt(0)} and last character is: ${trimStr.charAt(trimStr.length - 1)}`);

    let wordsArr = trimStr.split(" ");
    console.log(`total words available in the string is: ${wordsArr.length}`);

    var result = trimStr.indexOf("good");
    console.log(`index of word good is: ${result}`);

    var result =  trimStr.substring(12);
    console.log(`substring from index 12 is: ${result}`);

    var result = trimStr.endsWith("up");
    console.log(`is string ends with word up?: ${result}`);
    
    var result = trimStr.startsWith("Hey");
    console.log(`is string start with word Hey?: ${result}`);  


}
stringHandsOn();
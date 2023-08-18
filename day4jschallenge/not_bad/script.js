const sentence = "This dinner is not that bad ! You cook well";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log("Your string is:", sentence);
    console.log("--> the result is:", newSentence);
} else {
    console.log("Your string is:", sentence);
}

// first challenge
// function makeAllCaps(words) {
//     return new Promise((resolve, reject) => {
//         const allAreStrings = words.every(word => typeof word === 'string');
//         if (allAreStrings) {
//             const uppercaseWords = words.map(word => word.toUpperCase());
//             resolve(uppercaseWords);
//         } else {
//             reject(new Error('All elements in the array should be strings.'));
//         }
//     });
// }




// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


    //   second challenge
    const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`
    
function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse);
            if (Object.keys(morseJS).length === 0) {
                reject(new Error('Morse JavaScript object is empty.'));
            } else {
                resolve(morseJS);
            }
        } catch (error) {
            reject(error);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt('Enter a word or sentence:');
        if (userInput === null) {
            reject(new Error('User canceled input.'));
        } else {
            const translation = [];
            for (const char of userInput.toLowerCase()) {
                if (morseJS[char]) {
                    translation.push(morseJS[char]);
                } else {
                    reject(new Error(`Character '${char}' doesn't exist in the morse JavaScript object.`));
                }
            }
            resolve(translation);
        }
    });
}

function joinWords(morseTranslation) {
    const joinedMorse = morseTranslation.join('\n');
    console.log(joinedMorse);
    
}

toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
        console.error('Error:', error.message);
    });

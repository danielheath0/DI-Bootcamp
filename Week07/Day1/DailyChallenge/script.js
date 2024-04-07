// //Challenge 1

// const makeAllCaps = (array) => {
//   return new Promise((resolve, reject) => {
//     const allStrings = array.every((item) => typeof item === "string");
//     if (allStrings) {
//       const allCaps = array.map((item) => item.toUpperCase());
//       resolve(allCaps);
//     } else {
//       reject((`Not all strings!`));
//     }
//   });
// };

// const sortWords = (array) => {
//     return new Promise((resolve,reject) => {
//         if (array.length > 4) {
//             resolve(array.sort())
//         }
//         else {
//             reject(`Array too short!`)
//         }
//     })

// }

// const arr1 = [1, "pear", "banana"]
// const arr2 =["apple",'pear','banana']
// const arr3 = ["apple", "pear", "banana", "melon", "kiwi"]

// makeAllCaps(arr1)
// .then((arr)=>sortWords(arr))
// .then((result)=>console.log(result))
// .catch(error => console.log(error))
// makeAllCaps(arr2)
// .then((arr)=>sortWords(arr))
// .then((result)=>console.log(result))
// .catch(error => console.log(error))
// makeAllCaps(arr3)
// .then((arr)=>sortWords(arr))
// .then((result)=>console.log(result))
// .catch(error => console.log(error))

// //Challenge 2
// const morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-",
//     " ": "_______"
//   }`;

// const toJs = (jsonString) => {
//   return new Promise((resolve, reject) => {
//     if (jsonString.length > 0) {
//       const jsonObject = JSON.parse(jsonString);
//       resolve(jsonObject);
//     } else {
//       reject(`Empty JSON String!`);
//     }
//   });
// };

// const toMorse = (morseJS) => {
//   return new Promise((resolve, reject) => {
//     let userString = prompt(`Please enter a word or sentence!`).toLowerCase();
//     let convertedArray = [];
//     for (let char of userString) {
//       if (Object.keys(morseJS).includes(char)) {
//         convertedArray.push(morseJS[char]);
//       } else {
//         reject(`Invalid character: "${char}"!`);
//         return;
//       }
//     }
//     resolve(convertedArray);
//   });
// };

// const joinWords = (morseTranslation) => {
//   const container = document.getElementById("container");
//   morseTranslation.forEach((item) => {
//     container.innerHTML += `${item}<br>`;
//   });
// };

// toJs(morse)
//   .then((morseJS) => toMorse(morseJS))
//   .then((result) => joinWords(result))
//   .catch((error) => console.log(error));

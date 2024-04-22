let sentence = 'It\'s not that bad to be good you know'

let wordNot = sentence.indexOf('not')

console.log(wordNot);

let wordBad = sentence.indexOf('bad')

console.log(wordBad)

if (wordBad - wordNot > 0) {
    const newSentence = sentence.substring(0,wordNot) + "good" + sentence.substring(wordBad+3)
    console.log(newSentence);
}

else {
    console.log(sentence);
}
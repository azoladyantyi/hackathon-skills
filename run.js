const _ = require('lodash');

var max = _.maxBy(["apple", "pear", "banana"], (n) => n.length);

console.log(max);

// longest word
const sentence = "This is a test sentence that will test this";
const words = sentence.split(" ");
const longestWord = _.maxBy(words, function(word){ return word.length;});
console.log(longestWord);

//const sentence = "This is a test sentence that will test this";
//const words = sentence.split(" ");

const shortestWord = _.minBy(words, function(word){ return word.length;});
console.log(shortestWord);

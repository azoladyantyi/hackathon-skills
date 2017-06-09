# Data tricks

## Finding and filtering using JavaScript Arrays

## A data processing power tool

[Lodash](https://lodash.com) is a List and Object processing power tool, it makes processing data in Lists and Objects very easy.

### To find the longest word

To find the longest word in a sentence use [maxBy](https://lodash.com/docs/4.17.4#maxBy).

```javascript

const sentence = "This is a test sentence that will test this";
const words = sentence.split(" ");
const longestWord = _.maxBy(words, function(word){ return word.length;});
console.log(longestWord);

```

### To find the shortest word

To find the shortest word in a sentence use [maxBy](https://lodash.com/docs/4.17.4#minBy).

```javascript

const sentence = "This is a test sentence that will test this";
const words = sentence.split(" ");
const shortestWord = _.minBy(words, function(word){ return word.length;});
console.log(shortestWord);

```

### Other things to try

* [_.take](https://lodash.com/docs/4.17.4#minBy)
* [_.groupBy](https://lodash.com/docs/4.17.4#minBy)

There are lots more useful functions, see which ones do you find useful.



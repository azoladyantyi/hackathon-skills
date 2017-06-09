# Data tricks

## Finding and filtering using JavaScript Arrays

JavaScript Arrays have two very useful built in functions for finding and filtering data.

* [`find` method](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find) - find the first matching entry in an Array

* [`filter` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example) - find all the matching entries in an Array

### How to use it

To find the first fruit in the list more expensive than R5 you can use the find function like this:

```javascript

var fruits = [
    {name : 'apples', price : 3.75},
    {name : 'bananas', price : 5.20},
    {name : 'pears', price : 6.35},
    {name : 'grapes', price : 4.45},
    {name : 'oranges', price : 6.75}
];

var firstMoreThenFive = fruits.find(function(fruit){
    return fruit.price > 5;
});

// this will print 'bananas'
console.log(firstMoreThenFive);
```

To find all the fruits more expensive than R5 you can use the filter function like this:

```javascript

var fruits = [
    {name : 'apples', price : 3.75},
    {name : 'bananas', price : 5.20},
    {name : 'pears', price : 6.35},
    {name : 'grapes', price : 4.45},
    {name : 'oranges', price : 6.75}
];

var fiverOrMore = fruits.filter(function(fruit){
    return fruit.price > 5;
});

console.log(fiverOrMore);
```

## Data processing power tool

[Lodash](https://lodash.com) is a List and Object data processing 'power tool' utility, it makes processing data in Lists and Objects much easier.

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

* [_.take](https://lodash.com/docs/4.17.4#take)
* [_.groupBy](https://lodash.com/docs/4.17.4#groupBy)

There are lots more useful functions, see which other functions you find useful.

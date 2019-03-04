var counter = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
}

var adder = function(a, b){
    return `The sum of two numbers is ${a+b}`;
}

var pi = 3.1416;


//For this module to imported
// in other modules we need to use module.exports

//One way of exporting functions and variables in a module
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

//Another way of exporting functions and variables in a module
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
} 

// console.log(counter(['1', '2', '3']));
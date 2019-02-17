var counter = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
}


//For this module to imported
// in other modules we need to use module.exports

module.exports = counter;

// console.log(counter(['1', '2', '3']));
var fs = require('fs')

// var readMe = fs.readFileSync('readme.txt', 'utf8'); //blocking function
// fs.writeFileSync('writeme.txt', readMe);
// console.log(readMe);

//Non-blocking funtion
// fs.readFile('readme.txt', 'utf8', function(err, data){
//     console.log(data);
//     fs.writeFile('writeme.txt', data);
// }); 

// fs.writeFileSync('writeme.txt', readMe);
// console.log(readMe);

fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeFile.txt', data);
    });
});
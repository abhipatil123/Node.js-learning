var http = require('http');
var fs = require('fs');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received: ');
//     console.log(chunk);
//     myWriteStream.write(chunk);     
// });

//Same as previous code
// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});    
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    }else if(req.url === '/ninjas'){
        res.writeHead(200, {'Content-Type': 'application/json'}); 
        var myObj = {
            name: 'Ryu',
            job: 'Ninja',
            age: 29
        };
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        res.end(JSON.stringify(myObj));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'}); 
        var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myReadStream.pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');



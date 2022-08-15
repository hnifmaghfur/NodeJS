var http = require('http');
var qs = require('querystring');
var fs = require('fs');

http.createServer(function (req, res){

    if(req.url === "/login/" && req.method === "GET"){

        fs.readFile("login.html", function(gagal, data){
            if(gagal){
                res.writeHead(404, {'Content-Type' : 'text/html'});
                return res.end("404 not found");
            }

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        });
    }

    if(req.url === "/login/" && req.method === "POST"){
        var tampung = '';
        req.on('data', function(data){
            tampung += data;
        });
        
        req.on('end', function(){
            var DataTampung = qs.parse(tampung);

            if( DataTampung.username === "hnifmaghfur" && DataTampung.password === "windaku" ){
                res.writeHead( 200, {'Content-Text' : 'text/html'} ); 
                res.write( '<h2>Selamat Datang di Website Kami</h2>' );
                res.write('<p>apa kabarmu ' + DataTampung.username + '</p>');
                res.write('<p>Semoga Harimu Menyenangkan :) </p>');
                res.write("<p><a href='/login/'>Logout</a></p>");
                res.end();
            } else{
                res.writeHead(200, {'Content-Text' : 'text/html'});
                res.write('<p>Username atau Password anda Salah :( </p>');
                res.write("<p>Silahkan <a href='/login/'>Ulangi Lagi</a></p>");
                res.end();
            }
        });
    }
}).listen(8000);


console.log('Server running on http://localhost:8000');
console.log("Hello World Git ok")



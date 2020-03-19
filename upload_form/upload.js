var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer( function ( req, res ){
    if ( req.url === "/upload/" && req.method === "GET" ){
        fs.readFile( "upload.html", function ( err, data ){
            res.writeHead( 200, {'Content-Text' : 'text/html'});
            if( err ){ throw err }

            res.end(data);

            re
        });
    }

    if( req.url === "/upload/" && req.method === "POST" ){
        //mengambil data upload nya
        var getUpload = new formidable.IncomingForm();
    }

});
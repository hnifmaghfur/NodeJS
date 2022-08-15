var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function (req, res) {
    if (req.url === "/upload/" && req.method === "GET") {
        fs.readFile("upload.html", function (err, data) {
            res.writeHead(200, { 'Content-Text': 'text/html' });
            if (err) { throw err; }
            res.end(data);
        });
    }

    if (req.url === "/upload/" && req.method === "POST") {
        //mengambil data upload nya
        var getUpload = new formidable.IncomingForm();
        getUpload.parse(req, function (err, fields, files) {
            //bikin direktori untuk menyimpan file yang di upload
            var oldPath = files.filetoupload.path;
            var newPath = __dirname + "aset/" + files.filetoupload.name;

            //memindahkan file yang di upload
            mv(oldPath, newPath, function (err) {
                if (err) { throw err; }
                //notif jika berhasil upload
                console.log('File sukses di Upload.');
                return res.end("File sukses di Upload.");
            });
        });
    }

}).listen(8000);

console.log("server listening on http://localhost:8000");
console.log("EKO")
console.log("99999");

console.log('test conflict');
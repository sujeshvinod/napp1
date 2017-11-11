/*
File: index.js
Author: A.Vinod Kumar
Date: 11/11/2017
Purpose: Sample application server 1
*/

var http = require("http");

var server = http.createServer(function (req, res) {
    var content = "{'name':'Node JS Application 1'}";
    var contentLength = content.length;
    res.writeHead(200, {
        'Content-Type':'application/json',
        'Content-Length':contentLength,
        'X-Server-Version':'3.0.0.7'
    });
    res.end(content);
});
server.listen(9091, function() {
    console.log("Server listening on 9091....");
});
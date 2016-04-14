var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(8015);

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/public/index.html");

});

app.use(express.static('public'));

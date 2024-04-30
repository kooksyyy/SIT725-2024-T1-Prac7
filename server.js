var express = require("express");
var app = express();
require('./dbconnection');
let router = require('./route/router');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

var port = process.env.port || 3000;

// const server = app.listen(port, () => {
//     console.log("App listening to: " + port);
// })
// const io = require('socket.io')(server);

http.listen(port, () => {
    console.log("App listening to: " + port);
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});
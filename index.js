const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/styles', express.static(__dirname + '/styles'));
app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('message', (msg)=>console.log(msg))
})

http.listen(3000, () => console.log('listening on 3000'))
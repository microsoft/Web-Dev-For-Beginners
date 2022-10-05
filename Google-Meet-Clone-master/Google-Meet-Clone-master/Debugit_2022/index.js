//requiring express

const express = require('express');

//app has all the properties of express

const app = express();
//creting http server

const server = require('http').Server(app);

//socket runs on this server
const io = require('socket.io')(server);

//WebRTC api for real time media communication
const { ExpressPeerServer } = require('peer');
//port on which server runs 
const PORT = process.env.PORT || 8000;

const peerServer = ExpressPeerServer(server, {
    debug: true
});

//setting up static path
app.use(express.static('./assets'));
//setting up view engine
app.set('view engine', 'ejs');
//setting up view path
app.set('views', './views');


app.use('/', require('./routes/index'));


//socket handels users joining/leaving and messaging
io.on('connection', socket => {
    //request for joining room
    socket.on('join-room', (roomId, userId, userName) => {
//joining the mentioned room
        socket.join(roomId); 

        socket.broadcast.to(roomId).emit('user-connected', userId, userName);
        socket.on('send-message', (inputMsg, userName) => {
            io.to(roomId).emit('recieve-message', inputMsg, userName);
        })
        socket.on('disconnect', () => {
            socket.broadcast.to(roomId).emit('user-disconnected', userId, userName);
        })
    });
});

// running the server
server.listen(PORT, function(err) {
    if (err) {
        console.log(`Error :: ${err} occured while starting the server in index.js!`);
    }
    console.log(`Server is up and running on port ${PORT}`);
});
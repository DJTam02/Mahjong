import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const port = 8080;

const server = http.createServer(app);
const io = new socketio.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("connected");
    socket.on("joinRoom", (name, code, callback) => {
        callback("", "ABCD");
    });
    socket.on("createRoom", (name, callback) => {
        callback(name, "");
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    return console.log(`Server listening at http://localhost:${port} started`);
});

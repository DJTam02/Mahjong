import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './types/socket';

const app = express();
const port = 8080;

const server = http.createServer(app);
const io = new socketio.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
    socket.on("joinRoom", (name, code, callback) => {
        callback(code);
    });
    socket.on("createRoom", (name, callback) => {
        socket.emit("errorMessage", name);
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    return console.log(`Server listening at http://localhost:${port} started`);
});

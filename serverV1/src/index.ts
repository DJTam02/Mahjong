/* Depedency Imports */
import * as express from 'express';
import http from "http";
import { Server, Socket } from "socket.io";

/* Project imports */
import index from './routes/index';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './types/socket';

const port = process.env.PORT || 4000;

const app = express();  
app.use(index);

const server = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);

// Socket IO Connection
io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});

server.listen(port, () => console.log("Listening on port " + port));
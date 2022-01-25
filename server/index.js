const express = require("express");
const http = require("http");
const socketIO = require("socket.io");


const port = process.env.PORT || 4000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIO(server);

const getApiAndEmit = "TODO";
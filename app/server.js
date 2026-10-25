import express from 'express';
import router from './routes/index.js'; 

const server = express();
const port = 3000;

server.set('port', port);
server.use("/", router);

export default server;
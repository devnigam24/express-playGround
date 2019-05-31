import * as WebSocket from 'ws';
import Config from './Config';
 
const server = new WebSocket.Server({ port: Config.ports.websocket });
 
server.on('connection', socket => {
  socket.on('message', message => {
    console.log(`message received from a client: ${message}`);
    socket.send(`Recieved message ${message}`);
  });
});
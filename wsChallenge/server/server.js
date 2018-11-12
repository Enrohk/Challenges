const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let connections = 0;

io.on('connection', () => {
  connections ++;
  console.log('Total connections ' + connections); 
  if(connections === 100) {
    io.emit('broadcast', 'SEND');
  }  
});
server.listen(3000);
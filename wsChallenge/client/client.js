const io = require('socket.io-client');

for (let i=0; i<100; i++) {
  const socket = io('ws://localhost:3000');
 
  socket.on('connect', function() {
    const update = {
      message: {
        text: 'Hey there botmaster!'
      }
    };
 
    socket.send(update);
  });
}
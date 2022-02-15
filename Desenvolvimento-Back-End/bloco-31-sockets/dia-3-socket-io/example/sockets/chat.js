module.exports = (io) =>
  io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
      console.log(`Mensagem ${message}`);
      io.emit('serverMessage', message);

      socket.broadcast.emit(
        'serverMessage',
        `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`, //não envia para ele próprio
      );
    });
  });

const net = require('net');

const PORT = 2708;

// cliente
const sockets = [];

// nickname
let guestId = 0;

const server = net.createServer((socket) => {
  guestId++;

  socket.guest = 'Guest ' + guestId;

  socket.write('Boas vindas :) ');

  sockets.push(socket);

  disparo(socket.guest, socket.guest + ' acabou de se conectar');

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);

    const msg = socket.guest + 'deixou o chat :(';

    disparo(socket.guest, msg);
  });

  socket.on('data', (data) => {
    const message = socket.guest + ' > ' + data.toString();

    disparo(socket.guest, message);
  });
});

const disparo = (from, message) => {
  sockets.forEach((socket) => {
    if (socket.guest === from) return;

    socket.write(message);
  });
};

server.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`));
// const server = net.createServer((connection) => {
//   connections.push(connections);
//   connection.on('end', () => {
//     console.log('Cliente desconectado');
//   });

//   connection.on('data', (data) => {
//     console.log(`O cliente disse: ${data}`);
//   });
// });

// const { updateStatus } = require('../../database/services/saleService');

const { updateStatus } = require('../../database/services/saleService');

// console.log(io);

// io.on('connection', (socket) => {
//   socket.on('changeStatus', async ({ id, status, role }) => {
//     const arrayStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
//     const checkStatus = arrayStatus.includes(status);

//     await updateStatus(checkStatus, status, id, role);

//     // const order = await updateStatus(checkStatus, status, id, role);
//     // socket.emit('refreshStatus', order.status);
//   });
//   socket.on('disconnect', () => console.log('disconnected'))
// });
module.exports = (io) =>
  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('joinRoom', ({ id }) => {
      socket.join(id);
      console.log('join', id);
      socket.on('roomChangeStatus', async ({ status, role }) => {
        await updateStatus(true, status, id, role);
        io.to(id).emit('refreshStatus', status);
      });
    });
    socket.on('disconnect', () => console.log('disconnected'));
  });

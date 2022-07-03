const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http').createServer(app);
const { Server } = require('socket.io');

const io = new Server(http, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

require('./sokets/status')(io);

const routers = require('../database/routers');
const error = require('../database/middlewares/error');

app.use(cors());
app.use(bodyParser.json());
app.use(
  '/images',
  express.static(path.join(__dirname, '../../', 'public/images')),
);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routers);
app.use(error);

module.exports = { http, io };

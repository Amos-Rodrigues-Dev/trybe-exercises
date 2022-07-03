require('dotenv').config();

const port = process.env.PORT || 3001;
const { http: app } = require('./app');

app.listen(port);
console.log(`Api rodando na porta ${port}`);

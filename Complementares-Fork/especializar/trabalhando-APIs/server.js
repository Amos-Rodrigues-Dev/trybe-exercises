const app = require('./index');
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

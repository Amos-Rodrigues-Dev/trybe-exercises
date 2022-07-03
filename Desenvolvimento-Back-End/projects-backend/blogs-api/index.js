const express = require('express');

const app = express();

const routes = require('./routers');

const middlewares = require('./middlewares');

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', routes.userRouter);
app.use('/login', routes.loginRouter);
app.use('/categories', routes.categoryRouter);
app.use('/post', routes.blogRouter);
app.use(middlewares.error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT;

const controller = require('./controllers/controllerPlants');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(bodyParser.json());

app.post('/plants', controller.salvePlants);
app.get('/plants', controller.getAllPlants);
app.get('/plant/:id', controller.getPlantById);
app.delete('/plant/:id', controller.removePlantById);
app.post('/plant', controller.createNewPlant);
app.post('/plant/:id', controller.editPlant);
app.get('/sunny/:id', controller.getPlantsThatNeedsSunWithId);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Escutado na porta ${PORT}`));

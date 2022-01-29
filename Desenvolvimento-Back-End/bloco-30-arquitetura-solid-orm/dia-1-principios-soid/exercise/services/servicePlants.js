const PlantsModel = require('../models/plantsModel');
const { ObjectId } = require('mongodb');

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
};

const initPlant = ({ breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = async (plants) => {
  const mappedPlant = plants.map((plant) => initPlant({ ...plant }));

  const plantsID = await PlantsModel.create(mappedPlant);
  return { _id: plantsID, plants: mappedPlant };
};

const getPlants = async () => {
  const plants = await PlantsModel.getAll();
  if (!plants) throw { status: 404, message: 'Product not found' };
  return plants;
};

const getPlantById = async (id) => {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const plant = await PlantsModel.getById(id);

  if (!plant) throw { status: 404, message: 'Product not found' };

  return plant;
};

const removePlantById = async (id) => {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const plant = await PlantsModel.getById(id);

  if (!plant) throw { status: 400, message: 'Plant not exists' };

  await PlantsModel.exclude(id);
  return plant;
};

const getPlantsThatNeedsSunWithId = async (id) => {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const plants = await PlantsModel.getAll();

  const filteredPlants = plants.filter((plant) => {
    const pantId = JSON.stringify(plant._id);
    const parseId = JSON.stringify(id);

    if (plant.needsSun && pantId === parseId) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  if (!filteredPlants) throw { status: 400, message: 'Plant not exists' };

  return filteredPlants;
};

const createNewPlant = async (plant) => {
  const mappedPlant = initPlant({ ...plant });

  if (!plant) throw { status: 400, message: 'Plant not exists' };

  const plantId = await PlantsModel.add(mappedPlant);

  return { _id: plantId, ...mappedPlant };
};

const editPlant = async (plantId, newPlant) => {
  if (!ObjectId.isValid(plantId))
    throw { status: 404, message: 'Identificador Inválido' };

  const plant = await PlantsModel.getById(plantId);

  if (!plant) throw { status: 400, message: 'Plant not exists' };

  const plantEdited = await PlantsModel.update(plantId, newPlant);

  return plantEdited;
};

module.exports = {
  savePlants,
  getPlants,
  getPlantById,
  removePlantById,
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
};

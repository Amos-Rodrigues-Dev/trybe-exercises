const PlantsModel = require('../models/plantsModel');
const { ObjectId } = require('mongodb');

const defaultPlants = [
  {
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
];

const initPlant = (breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
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

const savePlants = async () => {
  const plantsID = await PlantsModel.create(defaultPlants);
  return { _id: plantsID, plants: defaultPlants };
};

const getPlants = async () => {
  const plants = await PlantsModel.getAll();
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

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem('plants', JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = async (plant) => {
  // const mappedPlant = initPlant({ ...plant });

  if (!plant) throw { status: 400, message: 'Plant not exists' };

  const plantId = await PlantsModel.add(plant);

  return { _id: plantId, ...plant };
};

module.exports = {
  savePlants,
  getPlants,
  getPlantById,
  removePlantById,
  createNewPlant,
};

const ServicePlants = require('../services/servicePlants');

const getAllPlants = async (req, res) => {
  try {
    const plants = await ServicePlants.getPlants();
    return res.status(200).json(plants);
  } catch (error) {
    console.error(error.message);
  }
};

const salvePlants = async (req, res) => {
  try {
    const plants = await ServicePlants.savePlants();
    return res.status(201).json(plants);
  } catch (error) {
    console.error(error.message);
  }
};

const getPlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plant = await ServicePlants.getPlantById(id);
    return res.status(200).json(plant);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const removePlantById = async (req, res, next) => {
  try {
    const plant = await ServicePlants.removePlantById(req.params.id);
    return res.status(200).json(plant);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const createNewPlant = async (req, res, next) => {
  try {
    const plant = await ServicePlants.createNewPlant(req.body);
    return res.status(201).json(plant);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = {
  getAllPlants,
  salvePlants,
  getPlantById,
  removePlantById,
  createNewPlant,
};

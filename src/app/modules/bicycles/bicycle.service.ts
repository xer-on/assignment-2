import { TBiCycle } from './bicycle.interface';
import BiCycle from './bicycle.model';

const createBicycleIntoDB = async (bicycleData: TBiCycle) => {
  if (await BiCycle.isBicycleExists(bicycleData.name)) {
    throw new Error('Bicycle already exists');
  }
  const result = await BiCycle.create(bicycleData);
  return result;
};

const getAllBicyclesFromDB = async () => {
  const result = await BiCycle.find();
  return result;
};

const getSingleBicycleFromDB = async (id: string) => {
  const result = await BiCycle.findById(id);
  return result;
};
const updateBicycleIntoDB = async (id: string, bicycleData: TBiCycle) => {
  const result = await BiCycle.findByIdAndUpdate(id, bicycleData);
  return result;
};

const deleteBicycleFromDB = async (id: string) => {
  const result = await BiCycle.findByIdAndDelete(id);
  return result;
};

export const BicycleService = {
  createBicycleIntoDB,
  getAllBicyclesFromDB,
  getSingleBicycleFromDB,
  updateBicycleIntoDB,
  deleteBicycleFromDB,
};

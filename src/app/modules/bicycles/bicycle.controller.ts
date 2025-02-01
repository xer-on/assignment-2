import { Request, Response } from 'express';
import { BicycleService } from './bicycle.service';
import bicycleValidationSchema from './bicycle.validation';
const createBicycle = async (req: Request, res: Response) => {
  try {
    const zodParsedData = bicycleValidationSchema.parse(req.body);
    const bicycleData = {
      ...zodParsedData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await BicycleService.createBicycleIntoDB(bicycleData);
    res.status(200).json({
      success: true,
      message: 'Bicycle is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};
const getAllBicycles = async (req: Request, res: Response) => {
  try {
    const result = await BicycleService.getAllBicyclesFromDB();
    res.status(200).json({
      success: true,
      message: 'Bicycles retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BicycleService.getSingleBicycleFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Bicycle retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};
const updateBicycle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BicycleService.updateBicycleIntoDB(id, req.body);
    const updatedBicycle = await BicycleService.getSingleBicycleFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Bicycle updated successfully',
      data: updatedBicycle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};

const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BicycleService.deleteBicycleFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Bicycle deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycles,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};

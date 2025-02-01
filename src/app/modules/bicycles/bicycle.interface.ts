import { Model } from "mongoose";

export type TBiCycle = {
  name: string;
  brand: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface BicycleModel extends Model<TBiCycle> {
  isBicycleExists(name: string): Promise<boolean>;
}
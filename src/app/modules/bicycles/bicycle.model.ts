import { model, Schema } from 'mongoose';
import { BicycleModel, TBiCycle } from './bicycle.interface';

const biCycleSchema = new Schema<TBiCycle>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

biCycleSchema.statics.isBicycleExists = async function (name: string) {
  const existingBicycle = await this.findOne({ name });
  return !!existingBicycle;
};

const BiCycle = model<TBiCycle, BicycleModel>('BiCycle', biCycleSchema);
export default BiCycle;

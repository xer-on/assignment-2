import { z } from 'zod';

const bicycleValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  brand: z.string({ required_error: 'Brand is required' }),
  price: z.number({ required_error: 'Price is required' }),
  type: z.string({ required_error: 'Type is required' }),
  description: z.string({ required_error: 'Description is required' }),
  quantity: z.number({ required_error: 'quantity is required' }),
  inStock: z.boolean({ required_error: 'inStock is required' }),
});

export default bicycleValidationSchema;

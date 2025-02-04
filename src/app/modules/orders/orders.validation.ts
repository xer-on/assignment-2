import {z }from 'zod'

const createOrderZodSchema = z.object({
    email: z.string().email(),
    product: z.string(),
    quantity: z.number(),
    totalPrice: z.number(),
})

export const OrderValidation = {
    createOrderZodSchema
}
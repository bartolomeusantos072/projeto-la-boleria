import joi from 'joi';

export const orderSchema = joi.object({
  clientId: joi.number().positive().required(),
  cakeId: joi.number().positive().required(),
  quantity: joi.number().positive().min(1).max(4).required(),
  totalPrice:joi.number().precision(2).positive().greater(0).required()
});


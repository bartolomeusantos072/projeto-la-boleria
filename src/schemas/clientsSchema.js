import joi from 'joi';

export const clientsSchema = joi.object({
  name: joi.string().min(2).required().trim(),
  address: joi.string().min(2).required().trim(),
  phone:joi.string().min(10).max(11).pattern(/^[0-9]+$/).required()
});


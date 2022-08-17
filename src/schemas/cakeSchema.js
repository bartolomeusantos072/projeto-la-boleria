import joi from 'joi';

const regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

export const cakeSchema = joi.object({
  name: joi.string().min(2).required().trim(),
  price: joi.number().precision(2).positive().greater(0).required(),
  image:joi.string().pattern(regex).required().trim(),
  description: joi.string().allow(null,''),
});


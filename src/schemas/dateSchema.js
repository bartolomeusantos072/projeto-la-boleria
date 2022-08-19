import joi from 'joi';

const date_regex =/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
export const dateSchema = joi.object({
    date: joi.string().pattern(date_regex).required()
  });
  
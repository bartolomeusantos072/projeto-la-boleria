import cakeRepository from "../repositories/cakeRepository.js";

export async function cakeValidate(req, res, next) {
  const {name} = req.body;
  try {

    const result = await cakeRepository.checkCake(name);

    if (result.rowCount > 0) {
      return res.sendStatus(409);
    }

    next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
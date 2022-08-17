import clientsRepository from "../repositories/clientsRepository.js";

export async function clientsValidate(req, res, next) {
  const {name} = req.body;
  try {

    const result = await clientsRepository.checkClients(name);

    if (result.rowCount > 0) {
      return res.sendStatus(409);
    }

    next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
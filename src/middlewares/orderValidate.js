import clientsRepository from "../repositories/clientsRepository.js";
import cakeRepository from "../repositories/cakeRepository.js";

export async function orderValidate(req, res, next) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  console.log(req.body)
  try {
    const msg =[];

    const verifyClient = await clientsRepository.checkClientId(clientId);
    if (verifyClient.rowCount < 1) {
      msg.push("client not exist");
    }

    const verifyCake = await cakeRepository.checkCakeId(cakeId);
    if(verifyCake.rowCount < 1){
      msg.push(" \n cake not exist");
    }
    

    res.status(400).send(msg);

    next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
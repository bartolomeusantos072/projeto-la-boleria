import clientsRepository from "../repositories/clientsRepository.js";
import cakeRepository from "../repositories/cakeRepository.js";
import orderRepository from "../repositories/orderRepository.js";

export async function orderValidate(req, res, next) {
  const { clientId, cakeId, quantity } = req.body;
  console.log(req.body)
  try {
    const msg =[];

    const verifyClient = await clientsRepository.checkClientId(clientId);
    if (verifyClient.rowCount ===0) {
      return res.sendStatus(400);
    }

    const verifyCake = await cakeRepository.checkCakeId(cakeId);
    if(verifyCake.rowCount < 1){
      return res.sendStatus(404);
    }
    if(quantity > 4 || quantity <1){
      return res.sendStatus(400)
    }
    next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
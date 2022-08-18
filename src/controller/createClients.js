import clientsRepository  from "../repositories/clientsRepository.js";
import orderRepository from "../repositories/orderRepository.js";

export async function createClients(req, res) {
    const clients = req.body;
    try{
        await clientsRepository.insertClients(clients);
        res.sendStatus(201);

    }catch (error){
        console.log(error.mesage);
        res.sendStatus(500);
    }
}

export async function getClientsIdOrders(req, res) {
    const {id} = req.params;
    
    try{
        const verifyClient = await clientsRepository.checkClientId(id);
        if (verifyClient.rowCount < 1) {
          return res.status(404).send("client not exist");
        }

        const result = await orderRepository.checkOrderForClient(id);
        if (result.rowCount < 1) {
            return res.status(404).send("order not exist");
          }
  
          res.status(200).send(result.rows);

    }catch (error){
        console.log(error.mesage);
        res.sendStatus(500);
    }
}
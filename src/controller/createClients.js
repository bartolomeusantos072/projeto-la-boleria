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
    const {id} = req.body;
    try{
        const verifyClient = await clientsRepository.checkClientId(id);
        if (verifyClient.rowCount < 1) {
          msg.push("client not exist");
        }

        const verifyOrder = await orderRepository.checkOrder(orderId)
        if (verifyOrder.rowCount < 1) {
            msg.push("client not exist");
        }

        const verifyAllOrderForClient = await orderRepository.checkOrderForClient()

    }catch (error){
        console.log(error.mesage);
        res.sendStatus(500);
    }
}
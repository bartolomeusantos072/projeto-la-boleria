import clientsRepository  from "../repositories/clientsRepository.js";


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
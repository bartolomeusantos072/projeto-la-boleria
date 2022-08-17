import cakeRepository  from "../repositories/cakeRepository.js";


export async function createCake(req, res) {
    const cake = req.body;
    try{
        await cakeRepository.insertCake(cake);
        res.sendStatus(201);

    }catch (error){
        console.log(error.mesage);
        res.sendStatus(500);
    }
}
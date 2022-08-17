import orderRepository  from "../repositories/orderRepository.js";


export async function createOrder(req, res) {
    const order = req.body;
    try{
        await orderRepository.insertOrder(order);
        res.sendStatus(201);

    }catch (error){
        console.log(error.mesage);
        res.sendStatus(500);
    }
}
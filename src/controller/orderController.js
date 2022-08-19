import orderRepository from "../repositories/orderRepository.js";


export async function createOrder(req, res) {
    const order = req.body;
    try {
        await orderRepository.insertOrder(order);
        res.sendStatus(201);

    } catch (error) {
        console.log(error.message);
        res.sendStatus(500);
    }
}

export async function getOrders(req, res) {
   try{

    let order = req.query;
    let result = "";

    const isEmpty = Object.keys(order).length === 0;
    if (isEmpty) {
        
        result = await orderRepository.getOrderByBody();
        if (result.rowCount === 0) {
            return res.sendStatus(404);
        }
        

    }else{
        result= await orderRepository.getOrderByQuery(order.date);
    }
    
    
    res.status(200).send(result.rows.map(mapOrderArrayToObject));
    
   }catch(error){
    console.log(error);
    res.sendStatus(500);
   } 
   

}

export async function getOrdersId(req, res) {
    const {id} = req.params;

    try{
         
       const result = await orderRepository.getOrderById(id);
         if (result.rowCount === 0) {
             return res.sendStatus(404);
         }
         res.status(200).send(result.rows.map(mapOrderArrayToObject));
     
     
    }catch(error){
     console.log(error);
     res.sendStatus(500);
    } 
    
 
 }

 function mapOrderArrayToObject(row) {

   let {clientId, nameClient, address, phone, cakeId, nameCake, price, description, image, orderId, createdAt, quantity, totalPrice} = row;
   
   
    return {

        client: {
            id: clientId,
            name: nameClient,
            address,
            phone
        },
        cake: {
            id: cakeId,
            name: nameCake,
            price,
            description,
            image
        },
        orderId,
        createdAt,
        quantity,
        totalPrice,
    };
}

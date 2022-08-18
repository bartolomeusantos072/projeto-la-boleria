import database from "../config/database.js"

async function checkOrder(order) {
    return database.query(`SELECT * FROM orders WHERE id = $1`, [order])

}

async function insertOrder(order) {
    const {clientId, cakeId, quantity, totalPrice} = order;
    return database.query('INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3,$4)', [clientId, cakeId, quantity, totalPrice]);
}

async function getOrderByBody(){
    return database.query(`SELECT clients.*, cakes.*, orders.id, orders."createdAt", orders.quantity, orders."totalPrice"  FROM orders JOIN clients ON clients.id=orders."clientId" JOIN cakes ON cakes.id=orders."cakeId"`)
}

async function getOrderByQuery(date){
    return database.query(`select clients.*, cakes.*, orders.id, orders."createdAt", orders.quantity, orders."totalPrice" 
    from orders
    JOIN clients ON clients.id=orders."clientId"
    JOIN cakes ON cakes.id=orders."cakeId"
    WHERE DATE(orders."createdAt")=$1`,[date])
}
 async function getOrderById(id){
    return database.query(`select clients.*, cakes.*, orders.id, orders."createdAt", orders.quantity, orders."totalPrice" 
    from orders
    JOIN clients ON clients.id=orders."clientId"
    JOIN cakes ON cakes.id=orders."cakeId"
    WHERE orders.id=$1`,[id])
 }
 async function checkOrderForClient(id){
    return database.query(`select clients.*, cakes.*, orders.id, orders."createdAt", orders.quantity, orders."totalPrice" 
    from orders
    JOIN clients ON clients.id=orders."clientId" AND orders."clientId"=$1
    JOIN cakes ON cakes.id=orders."cakeId"`,[id])
 }

const cakeRepository = {
    checkOrder,
    insertOrder,
    getOrderByBody,
    getOrderByQuery,
    getOrderById,
    checkOrderForClient
};

export default cakeRepository;

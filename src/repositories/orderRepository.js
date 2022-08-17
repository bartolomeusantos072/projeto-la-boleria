import database from "../config/database.js"






async function checkOrder(order) {
    return database.query(`SELECT * FROM orders WHERE id = $1`, [order])

}

async function insertOrder(order) {
    const {clientId, cakeId, quantity, totalPrice} = order;
    return database.query('INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3,$4)', [clientId, cakeId, quantity, totalPrice]);
}

const cakeRepository = {
    checkOrder,
    insertOrder
};

export default cakeRepository;

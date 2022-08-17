import database from "../config/database.js"

async function checkClients(nameClient) {
    return database.query(`SELECT * FROM clients WHERE name = $1`, [nameClient])
}

async function checkClientId(clientId) {
    return database.query(`SELECT * FROM clients WHERE id = $1`, [clientId])
}
async function insertClients(client) {
    const {name, address, phone} = client;
    return database.query('INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)', [name, address, phone]);
}

const cakeRepository = {
    checkClients,
    checkClientId,
    insertClients
};

export default cakeRepository;

import database from "../config/database.js"

async function checkClients(nameClients) {
    return database.query(`SELECT * FROM clients WHERE name = $1`, [nameClients])
  }
  
async function insertClients(client ){
  const {name, address, phone }=client;
  return database.query('INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)', [name, address, phone]);
}

const cakeRepository = {
    checkClients,
    insertClients
};

export default cakeRepository;
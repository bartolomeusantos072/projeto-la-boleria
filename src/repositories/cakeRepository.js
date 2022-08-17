import database from "../config/database.js"

async function checkCake(nameCake) {
    return database.query(`SELECT * FROM cakes WHERE name = $1`, [nameCake])
  }
  
async function insertCake(bolo ){
  const {name, price, image, description}=bolo;
  return database.query('INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)', [name, price, image, description]);
}

const cakeRepository = {
    checkCake,
    insertCake
};

export default cakeRepository;
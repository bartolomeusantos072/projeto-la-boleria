CREATE TABLE cakes (
id serial NOT NULL PRIMARY KEY,
`name`  VARCHAR(100) NOT NULL,
`price` NUMERIC(5,2) NOT NULL,
`image` VARCHAR(255) NOT NULL,
`description` TEXT NOT NULL,
);

CREATE TABLE clients (
    id serial NOT NULL PRIMARY KEY,
    `name`  VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(15) NOT NULL
);
   CREATE TABLE orders (
    id serial NOT NULL PRIMARY KEY,
     `clientId` INTEGER NOT NULL,
     `cakeId` INTEGER NOT NULL,
     `quantity` INTEGER NOT NULL,
     `createdAt` timestamp NOT NULL DEFAULT NOW(),
     `totalPrice` NUMERIC (5,2)
   );
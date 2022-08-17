import express from "express";
import router from './routers/index.js';


const app = express();
app.use(express.json());
app.use(router);


const port = 5500;
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})
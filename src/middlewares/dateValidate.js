import {dateSchema} from "../schemas/dateSchema.js";

export function dateValidate(req, res, next) {

    
    if(Object.keys(req.query).length===0){
       
       
       next(); 
       
    }else{

        
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        
        const {error, value} = dateSchema.validate(req.query, options);
        
        if (error) { 
           
            return res.status(400).send(error.details.map(detail => detail.message));

        } else { 
            req.query = value;
            next();
        }
    }
}

export function validateSchema(schema) {
    return (req, res, next) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
      
        if(!(error.details[0].context.key==='image')){

          return res.status(400).send(error.details.map(detail => detail.message));
        }else{

          return res.status(422).send(error.details[0].message);
        }
                
      }
  
      next();
    }
  }
  
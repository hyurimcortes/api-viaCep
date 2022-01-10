import { Router } from 'express';
const appRoutes = Router();


appRoutes.get("/", (request,response)=>{
    return  response.status(200).json([{
        "aplicação":"via-cep-back 1.0"
    }]);
})




export { appRoutes }

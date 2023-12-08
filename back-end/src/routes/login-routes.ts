import { Router } from "express";
import { loginnController } from "../controllers/login-controller";

class ActRoutes{
    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',loginnController.getUsers);
        this.router.get('/:id',loginnController.getByIdUsr);
        this.router.get('/:usr/:pwd',loginnController.getUsr);
        this.router.post('/:usr',loginnController.getUser);
        this.router.post('/',loginnController.insertUsr);
        this.router.put('/:id',loginnController.updateUsr);
        this.router.delete('/:id',loginnController.deleteUsr);
    }
}

const actRoutes=new ActRoutes();
export default actRoutes.router;
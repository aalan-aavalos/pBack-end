import { Router } from "express";
import { carreraController } from "../controllers/carreras-controller";

class CarRoutes{
    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',carreraController.getCar);
    }
}

const carRoutes=new CarRoutes();
export default carRoutes.router;
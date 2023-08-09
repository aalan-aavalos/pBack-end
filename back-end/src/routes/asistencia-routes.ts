import { Router } from "express";
import {asistenciaController} from "../controllers/asiste-controller";

class AsistRoutes{ 
    public router: Router=Router();
    constructor(){
        this.config ()
    }

    
config():void{
     
    this.router.get('/',asistenciaController.getasis);
    this.router.get('/:numCon',asistenciaController.getByIdasis);
}
}

const parRoutes = new AsistRoutes();
export default parRoutes.router;
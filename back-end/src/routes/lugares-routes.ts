import { lugaresController } from "../controllers/lugares-controller";
import { Router } from "express";

class LugaresRoutes{
    public router:Router =Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/',lugaresController.getLug);
    }
}

const lugaresRoutes=new LugaresRoutes();
export default lugaresRoutes.router;
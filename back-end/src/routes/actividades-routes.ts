import { Router } from "express";
import { actividadesController } from "../controllers/actividades-controller";

class ActRoutes{
    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',actividadesController.getAct);
        this.router.get('/:id',actividadesController.getByIdAct);
        this.router.post('/',actividadesController.insertAct);
        this.router.put('/:id',actividadesController.updateAct);
        this.router.delete('/:id',actividadesController.deleteAct)
    }
}

const actRoutes=new ActRoutes();
export default actRoutes.router;
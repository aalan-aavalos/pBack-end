import { Router } from "express";
import {participantesController } from "../controllers/participantes-controller";

class ParticipantesRoutes{ 
    public router: Router=Router();
    constructor(){
        this.config ()
    }

    
config():void{
     
    this.router.get('/',participantesController.getPar);
    this.router.get('/:numCon',participantesController.getByIdPar);
    this.router.post('/',participantesController.insPar);
    this.router.put('/:numCon',participantesController.updatePar);
    this.router.delete('/:numCon',participantesController.deletePar)
}
}

const parRoutes = new ParticipantesRoutes();
export default parRoutes.router;
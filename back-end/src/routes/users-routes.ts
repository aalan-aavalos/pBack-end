import { usersController } from "../controllers/users-controller";
import { Router } from "express";

class UsersRoutes{
    public router: Router=Router(); 

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/',usersController.getUsr);
    }
}

const usersRoutes=new UsersRoutes();
export default usersRoutes.router;
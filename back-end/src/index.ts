import express, { Application } from "express";
import morgan from 'morgan';
import IndexRoutes from './routes/index-routes';
import ActividadesRoutes from "./routes/actividades-routes";
import cors from 'cors';
import UsersRoutes from "./routes/users-routes";

class Server{
    public app:Application;

    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //acepta objetos tipo json
        this.app.use(express.urlencoded({extended:false})); //acepta formularios

    }

    routes():void{
        this.app.use('/',IndexRoutes);
        this.app.use('/actividades',ActividadesRoutes);
        this.app.use('/usuarios',UsersRoutes)
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server= new Server();
server.start();
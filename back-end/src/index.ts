import express, { Application } from "express";
import morgan from 'morgan';
import IndexRoutes from './routes/index-routes';
import ActividadesRoutes from "./routes/actividades-routes";
import cors from 'cors';
import UsersRoutes from "./routes/users-routes";
import loginRoutes from "./routes/login-routes";
import lugaresRoutes from "./routes/lugares-routes";
import ParticipantesRoutes from "./routes/Participantes-routes";
import asistenciaRoutes from "./routes/asistencia-routes";
import carrerasRoutes from "./routes/carreras-routes";
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
        this.app.use('/login',loginRoutes);
        this.app.use('/lugares',lugaresRoutes);
        this.app.use('/participantes',ParticipantesRoutes);
        this.app.use('/asistencia',asistenciaRoutes);
        this.app.use('/carreras', carrerasRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server= new Server();
server.start();
import {Request,Response} from 'express';
import {pool} from "../database";

class ActividadesController{
    async getAct(req:Request,res:Response){
        const result=await pool.query('SELECT * FROM vis_act;')
        res.json(result[0]);
    }
    async getByIdAct(req:Request,res:Response){
        const {idAct}=req.params;
        const result=await pool.query('SELECT * From vis_act where idAct= ?',[idAct]);
        res.json(result[0]);
    }
    async insertAct(req:Request,res:Response){
<<<<<<< HEAD
        await pool.query('INSERT INTO actividades SET ?',[req.body]);
=======
        await pool.query('INSERT INTO Actividades SET ?',[req.body]);
>>>>>>> origin/spotify
        res.json({Message:'Se inserto correctamente'});
    }
    async updateAct(req:Request,res:Response){
        const {idAct}=req.params;
<<<<<<< HEAD
        await pool.query('UPDATE actividades SET ? WHERE idAct=?',[req.body,idAct]);
=======
        await pool.query('UPDATE Actividades SET ? WHERE idAct=?',[req.body,idAct]);
>>>>>>> origin/spotify
        res.json({mesagge:'Se ha actualizado con exito'});
    }
    async deleteAct(req:Request,res:Response){
        const {idAct}=req.params;
<<<<<<< HEAD
        await pool.query('DELETE FROM actividades WHERE idAct=?',[idAct]);
=======
        await pool.query('DELETE FROM Actividades WHERE idAct=?',[idAct]);
>>>>>>> origin/spotify
        res.json({Message:'Se ha eliminado correctamente'});
    }
    
}

export const actividadesController= new ActividadesController;
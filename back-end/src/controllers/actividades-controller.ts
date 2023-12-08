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
        await pool.query('INSERT INTO actividades SET ?',[req.body]);
        res.json({Message:'Se inserto correctamente'});
    }
    async updateAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('UPDATE actividades SET ? WHERE idAct=?',[req.body,idAct]);
        res.json({mesagge:'Se ha actualizado con exito'});
    }
    async deleteAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('DELETE FROM actividades WHERE idAct=?',[idAct]);
        res.json({Message:'Se ha eliminado correctamente'});
    }
    
}

export const actividadesController= new ActividadesController;
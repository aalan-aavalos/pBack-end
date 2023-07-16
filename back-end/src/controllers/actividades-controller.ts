import {Request,Response} from 'express';
import {pool} from "../database";
import { createPool } from 'mysql2/promise';

class ActividadesController{
    async getAct(req:Request,res:Response){
        const result=await pool.query('SELECT*FROM Actividades')
        res.json(result[0]);
    }
    async getByIdAct(req:Request,res:Response){
        const {id}=req.params;
        const result=await pool.query('SELECT*FROM Actividades WHERE id=?',[id]);
        res.json(result[0]);
    }
    async insertAct(req:Request,res:Response){
        await pool.query('INSERT INTO Actividades SET ?',[req.body]);
        res.json({Message:'Se inserto correctamente'})
    }
    async updateAct(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('UPDATE Actividades SET ? WHERE id=?',[req.body,id]);
        res.json({mesagge:'Se ha actualizado con exito'});
    }
    async deleteAct(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('DELETE FROM Actividades WHERE id=?',[id]);
        res.json({Message:'Se ha eliminado correctamente'});
    }
    
}

export const actividadesController= new ActividadesController;
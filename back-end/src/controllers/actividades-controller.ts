import {Request,Response} from 'express';
import {pool} from "../database";

class ActividadesController{
    async getAct(req:Request,res:Response){
        const result=await pool.query('SELECT idAct, fecha, nomAct, usr, idLug, descripcion FROM Actividades a inner join usuarios u ON a.idUsr=u.idUsr')
        res.json(result[0]);
    }
    async getByIdAct(req:Request,res:Response){
        const {idAct}=req.params;
        const result=await pool.query('SELECT idAct, fecha, nomAct, usr, idLug, descripcion FROM Actividades a inner join usuarios u ON a.idUsr=u.idUsr where idAct= ?',[idAct]);
        res.json(result[0]);
    }
    async insertAct(req:Request,res:Response){
        await pool.query('INSERT INTO Actividades SET ?',[req.body]);
        res.json({Message:'Se inserto correctamente'})
    }
    async updateAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('UPDATE Actividades SET ? WHERE idAct=?',[req.body,idAct]);
        res.json({mesagge:'Se ha actualizado con exito'});
    }
    async deleteAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('DELETE FROM Actividades WHERE idAct=?',[idAct]);
        await pool.query('ALTER TABLE actividades AUTO_INCREMENT = 0');
        res.json({Message:'Se ha eliminado correctamente'});
    }
    
}

export const actividadesController= new ActividadesController;
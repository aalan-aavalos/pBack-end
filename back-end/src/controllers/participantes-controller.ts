import {Request,Response} from 'express';
import {pool} from "../database";

class ParticipantesController{
    
    async getPar(req:Request,res:Response){
        const result=await pool.query('Select * From partipantes;')
        res.json(result[0]);
    }
    async getByIdPar(req:Request,res:Response){
        const{numCon}=req.params;
        const result = await pool.query('Select * From partipantes where numCon = ?', [numCon]);
        res.json(result[0]);

    }
    async insPar(req:Request,res:Response){
        await pool.query('Insert Into partipantes Set ?',[req.body]);
        res.json({Message:'Insertado'});
    }
    async updatePar(req:Request,res:Response){
        const {numCon}=req.params;
        await pool.query('Update partipantes Set ? where numCon = ?', [req.body,numCon]);
        res.json({Message:'Actualizado'});
    }
    async deletePar(req:Request,res:Response){
        const {numCon}=req.params;
        await pool.query('Delete FROM partipantes Where numCon = ?', [numCon]);
        res.json({Message:'Eliminado'});
    }
    }
    export const participantesController = new ParticipantesController;
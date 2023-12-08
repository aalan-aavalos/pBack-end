import {Request,Response} from 'express';
import {pool} from "../database";

class CarreraController{
    
    async getCar(req:Request,res:Response){
        const result=await pool.query('Select * From carrera;')
        res.json(result[0]);
    }
}

export const carreraController= new CarreraController;
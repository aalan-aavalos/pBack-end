import { Request,Response } from 'express';
import { pool } from '../database';

class UsersController{
    async getUsr(req:Request,res:Response){
        const result=await pool.query('SELECT * FROM usuarios');
        res.json(result[0])
    }
}

export const usersController=new UsersController;
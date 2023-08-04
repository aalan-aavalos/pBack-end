import { Request,Response } from "express";
import { pool } from "../database";

class LugaresController{

    async getLug(req:Request,res:Response){
        const result=await pool.query('SELECT * FROM lugares');
        res.json(result[0])
    }
}

export const lugaresController= new LugaresController;
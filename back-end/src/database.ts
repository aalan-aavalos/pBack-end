import { createPool } from 'mysql2/promise';

export const pool =createPool(
    {
<<<<<<< HEAD
        host:'roundhouse.proxy.rlwy.net',
        user:'root',
        password:'A5aehBDFGABhEbACeh6ae2aAf-d6HfBe',
        port:36158,
        database:'railway'
=======
        host:'localhost',
        user:'root',
        password:'',
        port:3306,
        database:'pcont-Act'
>>>>>>> origin/spotify
    }
)
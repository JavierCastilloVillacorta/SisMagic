import { Request, Response } from 'express';

import pool from '../../database';

class UserController {
    public async list(req: Request, res: Response ){
      const users = await pool.query('SELECT * FROM store WHERE `stateStore` != 3 AND `idMatrix` IS NOT NULL;');
      res.json(users);
    }

    public async get(req: Request, res:  Response) : Promise<any> {
        const { id } = req.params;
        const store = await pool.query('SELECT * FROM store WHERE idStore = ?', [id]);
        if (store.length > 0){
            return res.json(store[0]);
        }
        res.status(404).json({text: 'Establecimiento no Existe'});  
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO store SET ?', [req.body]);       
        res.json({text: 'Establecimiento Guardado'});
    }

    public async update( req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE store SET ? WHERE idStore=?', [req.body,id]);
        res.json({text: 'Establecimiento Actualizado'});
    }

    public async delete( req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM store WHERE idStore=?', [id]);
        res.json({text: 'Usuario Eliminado'});
    }
}

const establishmentSucuController = new UserController();
export default establishmentSucuController;
import { Request, Response } from 'express';

import pool from '../../database';

class UserController {
    public async listUser(req: Request, res: Response ){
      const users = await pool.query('SELECT * FROM usuario');
      res.json(users);
    }

    public async getUser(req: Request, res:  Response) : Promise<any> {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
        if (user.length > 0){
            return res.json(user[0]);
        }
        res.status(404).json({text: 'Usuario no Existe'});  
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuario SET ?', [req.body]);       
        res.json({text: 'user Guardado'});
    }

    public async updateUser( req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE usuario set ? WHERE id=?', [req.body,id]);
        res.json({text: 'Usuario Actualizado'});
    }

    public async deleteUser( req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE id=?', [id]);
        res.json({text: 'Usuario Eliminado'});
    }
}

const userfController = new UserController();
export default userfController;
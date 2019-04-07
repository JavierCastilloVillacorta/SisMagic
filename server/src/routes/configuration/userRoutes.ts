import { Router } from 'express';

import userConfControllers  from '../../controllers/configuration/userControllers';

class ConfRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', userConfControllers.listUser);
        this.router.get('/:id', userConfControllers.getUser);
        this.router.post('/', userConfControllers.createUser);
        this.router.put('/:id', userConfControllers.updateUser);
        this.router.delete('/:id', userConfControllers.deleteUser);
    }

}

const userConfRoutes =  new ConfRoutes();
export default userConfRoutes.router;
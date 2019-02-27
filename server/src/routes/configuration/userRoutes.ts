import { Router } from 'express';

import confControllers  from '../../controllers/configuration/userControllers';

class ConfRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', confControllers.listUser);
        this.router.get('/:id', confControllers.getUser);
        this.router.post('/', confControllers.createUser);
        this.router.put('/:id', confControllers.updateUser);
        this.router.delete('/:id', confControllers.deleteUser);
    }

}

const confRoutes =  new ConfRoutes();
export default confRoutes.router;
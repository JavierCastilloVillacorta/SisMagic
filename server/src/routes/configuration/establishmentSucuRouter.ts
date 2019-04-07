import { Router } from 'express';

import establishmentSucuController  from '../../controllers/configuration/establishmentSucuController';

class ConfRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', establishmentSucuController.list);
        this.router.get('/:id', establishmentSucuController.get);
        this.router.post('/', establishmentSucuController.create);
        this.router.put('/:id', establishmentSucuController.update);
        this.router.delete('/:id', establishmentSucuController.delete);
    }

}

const establishmentconfSucuRoutes =  new ConfRoutes();
export default establishmentconfSucuRoutes.router;
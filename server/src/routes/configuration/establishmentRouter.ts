import { Router } from 'express';

import establishmentController  from '../../controllers/configuration/establishmentControllers';

class ConfRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', establishmentController.list);
        this.router.get('/:id', establishmentController.get);
        this.router.post('/', establishmentController.create);
        this.router.put('/:id', establishmentController.update);
        this.router.delete('/:id', establishmentController.delete);
    }

}

const establishmentconfRoutes =  new ConfRoutes();
export default establishmentconfRoutes.router;
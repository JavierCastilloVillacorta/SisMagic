import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import userConfRoutes from './routes/configuration/userRoutes';
import establishmentconfRoutes from './routes/configuration/establishmentRouter';
import establishmentconfSucuRoutes from './routes/configuration/establishmentSucuRouter';


class Server {

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/confi/usuario', userConfRoutes);
        this.app.use('/confi/estable', establishmentconfRoutes);
        this.app.use('/confi/sucur', establishmentconfSucuRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server on port`, this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
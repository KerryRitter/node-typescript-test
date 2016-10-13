import { Kernel } from 'inversify';
import { PeopleController } from './controllers/peopleController';
import { PeopleService } from './services/peopleService';
import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';

var bodyParser = require('body-parser');

export class MyAppKernel {
    public static get Kernel(): Kernel {
        var kernel = new Kernel();

        kernel.bind<interfaces.Controller>(TYPE.Controller).to(PeopleController).whenTargetNamed('PeopleController');

        kernel.bind<PeopleService>('PeopleService').to(PeopleService);

        return kernel;
    }
}
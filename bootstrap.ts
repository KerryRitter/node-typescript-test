import 'reflect-metadata';
import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { MyAppKernel } from './kernel';
import * as bodyParser from 'body-parser';

// start the server
let server = new InversifyExpressServer(MyAppKernel.Kernel);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');
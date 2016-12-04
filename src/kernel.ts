import { Kernel } from "inversify";
import { interfaces, Controller, InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as _ from "lodash";

import * as Controllers from "./controllers";
import * as DataServices from "./data/services";

import * as AuthServices from "./infrastructure/auth";
import * as DataAccessServices from "./infrastructure/dataAccess";

export class AppKernel {
    public static get Kernel(): Kernel {
        const kernel = new Kernel();

        // Controllers
        this.bindController(kernel, Controllers.PeopleController, "PeopleController");
        this.bindController(kernel, Controllers.HomeController, "HomeController");

        // Services
        kernel.bind("UsersService").to(DataServices.UsersService);
        kernel.bind("AuthService").to(AuthServices.AuthService);
        kernel.bind("LoginService").to(AuthServices.LoginService);
        kernel.bind("ConnectionFactory").to(DataAccessServices.ConnectionFactory);

        return kernel;
    }

    private static bindController(kernel: Kernel, controller: any, key: string) {
        kernel.bind<interfaces.Controller>(TYPE.Controller)
            .to(controller as any)
            .whenTargetNamed(key);
    }
}
import * as inversify from "inversify";
import * as inversifyExpress from "inversify-express-utils";
import { makeProvideDecorator } from "inversify-binding-decorators";
import * as Controllers from "../controllers";
import "reflect-metadata";

var container = new inversify.Container();
let provide = makeProvideDecorator(container);

function bindController(controller: any, key: string) {
    container.bind<inversifyExpress.interfaces.Controller>(inversifyExpress.TYPE.Controller)
        .to(controller as any)
        .whenTargetNamed(key);
}

this.bindController(Controllers.UsersController, "UsersController");
this.bindController(Controllers.HomeController, "HomeController");

export { container, provide };
export { TYPE } from "inversify-express-utils";
import { Kernel, inject } from "inversify";
import { TYPE } from "inversify-express-utils";
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";
import "reflect-metadata";

const kernel = new Kernel();

let provide = makeProvideDecorator(kernel);
let fluentProvider = makeFluentProvideDecorator(kernel);

let provideNamed = function(identifier, name) {
    return fluentProvider(identifier)
              .whenTargetNamed(name)
              .done();
};

export { kernel, autoProvide, provide, provideNamed, inject };
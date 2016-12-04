import * as inversify from "inversify";
import { TYPE } from "inversify-express-utils";
import { makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";
import "reflect-metadata";

const container = new inversify.Kernel();

const provideFluent = makeFluentProvideDecorator(container);
const provide = makeProvideDecorator(container);

export { container, provide, provideFluent };
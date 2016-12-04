import * as passport from "passport";
import * as LocalStrategy from "passport-local";
import { provide } from "../container";
import "reflect-metadata";

@provide(AuthService)
export class AuthService {
    public static authenticate() {
        return passport.authenticate("local");
    }

    public static configure() {
        const localStrategy = new LocalStrategy.Strategy((username, password, done) => {
            done("No logins enabled");
        });

        passport.use(localStrategy);
    }
}
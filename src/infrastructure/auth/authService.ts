import * as passport from "passport";

export class AuthService {
    public static authenticate() {
        return passport.authenticate("local");
    }
}
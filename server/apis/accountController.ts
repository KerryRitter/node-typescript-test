import {Controller, Get} from '../../node_modules/giuseppe/index';
import {UrlParam, Body} from '../../node_modules/giuseppe/params/ParamDecorators';
import {Put, Post, Delete} from '../../node_modules/giuseppe/routes/RouteDecorators';
import {DataContext, User} from "../data"

@Controller('api/account')
export class AccountController {
    @Get('register')
    public register(@Body({required: true}) body: User): any {
        DataContext.createConnection().then(context => {
            context.getRepository(User)
                .find({ email: "ritter@kerryritter.com" })
                .then(data => {
                    return data;
                });
        })
    }

    @Get('login')
    public login(@Body({required: true}) body: User): any {
        return {test: 1};
    }
}
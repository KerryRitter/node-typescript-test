import {Controller, Get} from '../../node_modules/giuseppe/index';
import {UrlParam, Body} from '../../node_modules/giuseppe/params/ParamDecorators';
import {Put, Post, Delete} from '../../node_modules/giuseppe/routes/RouteDecorators';
import {Demo} from '../models/demo';

@Controller('api/account')
export class AccountController {
    @Get('register')
    public register(@Body({required: true}) body: Demo): any {
        return {test: 1};
    }

    @Get('login')
    public login(@Body({required: true}) body: Demo): any {
        return {test: 1};
    }
}
import {Controller, Get} from '../../node_modules/giuseppe/index';
import {BaseController} from "./baseController";

@Controller("/")
export class HomeController extends BaseController {
    @Get()
    public index(): string {
        return this.view('home/index', { message: 'hey' });
    }
}
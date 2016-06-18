import * as ejs from "ejs";
import * as fs from "fs";

export abstract class BaseController {
    protected view(templateFile: string, data: any): string {
        let template = fs.readFileSync(`dist/views/${templateFile}.ejs`).toString();
        return ejs.render(template, data, {
            filename: `dist/views/${templateFile}.ejs`
        });
    }
}
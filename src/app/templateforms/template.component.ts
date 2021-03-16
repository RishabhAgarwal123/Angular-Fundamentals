import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: 'template-form',
    templateUrl: './template.component.html',
    styles: [
        `.margin {margin-top: 100px;}`
    ]
})
export class TemplateForm {
    constructor(private authService: AuthService) {

    }
    login(loginForm: any) {
        this.authService.loginUser(loginForm.userName, loginForm.password);
        console.log(loginForm);
    }


}
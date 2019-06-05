import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomFormsModule } from "../../infrastructure/forms/custom-forms.module";
import { LoginPageComponent } from "./login-page.component";
import { LoginPageRoutingModule } from "./login-page.routing.module";

@NgModule({
    imports: [
        CommonModule,
        CustomFormsModule,
        LoginPageRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [],
})
export class LoginPageModule {}
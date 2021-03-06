import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SetupStripePageComponent } from "./setup-stripe-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "../../infrastructure/layouts/layout.module";
import { MaterialModule } from "../../infrastructure/material/material.module";
import { PanelsModule } from "../../infrastructure/panels/panels.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        PanelsModule
    ],
    declarations: [
        SetupStripePageComponent
    ],
    exports: [
        SetupStripePageComponent
    ],
    providers: [],
})
export class SetupStripePageModule {}
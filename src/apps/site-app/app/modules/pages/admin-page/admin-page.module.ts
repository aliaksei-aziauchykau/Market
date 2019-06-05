import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./admin-page.component";
import { LayoutModule } from "../../infrastructure/layouts/layout.module";
import { MaterialModule } from "../../infrastructure/material/material.module";
import { FormsModule } from "@angular/forms";
import { CustomPipesModule } from "../../../pipes/custom-pipes.module";
import { MatUserDataTableComponent } from "./user-data/user-table.component";
import { MatStripeDataTableComponent } from "./stripe-data/stripe-data.component";
import { AdminPageRoutingModule } from "./admin-page.routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        MaterialModule,
        CustomPipesModule,
        AdminPageRoutingModule
    ],
    declarations: [
        MatUserDataTableComponent,
        MatStripeDataTableComponent,
        AdminPageComponent
    ],
    providers: [],
})
export class AdminPageModule {}
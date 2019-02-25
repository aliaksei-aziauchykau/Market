import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./admin-page.component";
import { LayoutModule } from "../../infrastructure/layouts/layout.module";
import { MaterialModule } from "../../infrastructure/material/material.module";
import { UserTableComponent } from "./user-data/user-table.component";
import { FormsModule } from "@angular/forms";
import { CustomPipesModule } from "../../../pipes/custom-pipes.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        MaterialModule,
        CustomPipesModule
    ],
    declarations: [
        UserTableComponent,
        AdminPageComponent
    ],
    exports: [
        AdminPageComponent
    ],
    providers: [],
})
export class AdminPageModule {}
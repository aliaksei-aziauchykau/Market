import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGenericTable } from "./models/mat-generic-table.abstract";

@NgModule({
    exports: [
        MatInputModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatExpansionModule
    ]
})

export class MaterialModule { }
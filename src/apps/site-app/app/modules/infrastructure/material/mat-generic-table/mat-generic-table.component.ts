import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { SafeComponent } from "../../../../utils/safe-component.abstract";
import { EditorModeEnum } from "../../../../enums/editor-mode.enum";
import { ITableDataSource } from "../interfaces/table-data-source.interface";

@Component({
    selector: "mc-mat-generic-table",
    templateUrl: "./mat-generic-table.component.html",
    styleUrls: ["./mat-generic-table.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatGenericTableComponent extends SafeComponent implements OnInit {

    @Input() displayedDataColumns: string[] = [];
    @Input() dataSource: MatTableDataSource<ITableDataSource>;

    displayedColumns: string[] = [...this.displayedDataColumns, "star"];
    selection = new SelectionModel<ITableDataSource>(true, []);
    mode: EditorModeEnum = EditorModeEnum.None;
    EditorModeEnum = EditorModeEnum;
    selectedItem: ITableDataSource = null;

    ngOnInit(): void {

    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    applyMode(mode: EditorModeEnum, selectedItem: ITableDataSource) {
        this.mode = mode;
        this.selectedItem = selectedItem;
    }
}

import { Input, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { SafeComponent } from "../../../../utils/safe-component.abstract";
import { EditorModeEnum } from "../../../../enums/editor-mode.enum";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ICrudService } from "../../../../interfaces/crud-service.interface";

export class MatGenericTable<TListEntity, TEntity> extends SafeComponent implements OnInit {

    @Input() displayedDataColumns: string[] = [];
    @Input() dataSource: MatTableDataSource<TEntity>;
    @Input() crudService: ICrudService<TListEntity, TEntity>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = [...this.displayedDataColumns, "star"];
    selection = new SelectionModel<TEntity>(true, []);
    mode: EditorModeEnum = EditorModeEnum.None;
    EditorModeEnum = EditorModeEnum;
    selectedItem: TEntity = null;

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

    applyMode(mode: EditorModeEnum, selectedItem: TEntity) {
        this.mode = mode;
        this.selectedItem = selectedItem;
    }
}

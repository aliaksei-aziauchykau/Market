import { Component, OnInit, ViewChild, Input, AfterViewInit, ElementRef } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { UserInfoModel, UserInfoListModel } from "../../../../models/user-info.model";
import { SelectionModel } from "@angular/cdk/collections";
import { SafeComponent } from "../../../../utils/safe-component.abstract";
import { check, trackExecution } from "../../../../utils/custom-operators";
import { EditorModeEnum } from "../../../../enums/editor-mode.enum";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { merge, observable, of, Observable } from "rxjs";
import { ICrudService } from "../../../../interfaces/crud-service.interface";
import { switchMap, catchError, startWith, tap, takeUntil, finalize, delay, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Locker } from "../../../../utils/locker";
import { LockerTypeEnum } from "../../../../utils/locker-type.enum";

@Component({
    selector: "mc-user-table",
    templateUrl: "./user-table.component.html",
    styleUrls: ["./user-table.component.scss"]
})
export class UserTableComponent extends SafeComponent implements OnInit, AfterViewInit {

    @ViewChild("apiFilterInput") apiFilterInput: ElementRef;

    locker = new Locker()
        .addLocker(LockerTypeEnum.HttpCall)
        .addLocker(LockerTypeEnum.UpdateHttpCall);

    displayedColumns: string[] = ["id", "nickName", "email", "star"];
    data: UserInfoListModel;
    dataSource: MatTableDataSource<UserInfoModel> = new MatTableDataSource([]);
    selection = new SelectionModel<UserInfoModel>(true, []);
    mode: EditorModeEnum = EditorModeEnum.None;
    EditorModeEnum = EditorModeEnum;

    apiFilterValue: string = null;

    private readonly debounceTime = 1000;
    private readonly debounceTimeOperator = debounceTime(this.debounceTime);
    private readonly distinctUntilChangedOperator = distinctUntilChanged();

    resultsLength = 0;
    isRateLimitReached = false;

    @Input() crudService: ICrudService<UserInfoListModel, UserInfoModel>;
    @Input() perPage: number;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    loaderOperator = () => trackExecution(LockerTypeEnum.HttpCall, this.locker);

    selectedItem: UserInfoModel = null;

    constructor() {
        super();
    }

    ngOnInit(): void {

        this.sort.sortChange
            .pipe(
                takeUntil(this.unsubscriber)
            ).subscribe(() => this.paginator.pageIndex = 0);

        const getAll = (pageSize: number, pageIndex: number, query: string, sort: string, order: string) => this.crudService.getAll({
                limit: pageSize,
                skip: pageIndex * pageSize,
                query,
                sort,
                order
            })
            .pipe(
                this.loaderOperator()
            );

        const apiFilterValue$ = Observable.fromEvent(this.apiFilterInput.nativeElement, "keyup")
                .pipe(
                    this.debounceTimeOperator,
                    this.distinctUntilChangedOperator,
                    tap(() => console.log("rerewe", this.apiFilterValue)),
                );

        merge(this.sort.sortChange, this.paginator.page, apiFilterValue$)
            .pipe(
                takeUntil(this.unsubscriber),
                startWith({}),
                switchMap(() => getAll(
                    this.paginator.pageSize || 5,
                    this.paginator.pageIndex || 0,
                    this.apiFilterValue || "",
                    this.sort.active,
                    this.sort.direction
                    )),
                check(this.unsubscriber, this.data, x => {
                    this.data = x;
                    this.resultsLength = x.count;
                    this.dataSource = new MatTableDataSource<UserInfoModel>(x.items);
                }),
                catchError(() => of([]))
            ).subscribe();

    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public get isLoading(): boolean {
        return this.locker.isLocked(LockerTypeEnum.HttpCall);
    }

    public isUpdateMode(element: UserInfoModel): boolean {
        return element === this.selectedItem && this.mode === EditorModeEnum.Update;
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
        this.resultsLength = this.dataSource.filteredData.length;
    }

    applyApiFilter(filterValue: string) {
        this.apiFilterValue = filterValue;
    }

    applyMode(mode: EditorModeEnum, selectedItem: UserInfoModel) {
        this.mode = mode;
        this.selectedItem = selectedItem;
    }

    addRow(): void {
        this.mode = EditorModeEnum.Add;
        this.confirm();
    }

    clearSelection(): void {
        this.mode = null;
        this.selectedItem = null;
    }

    confirm(): void {
        switch (this.mode) {
            case EditorModeEnum.Update: {
                const selectedItem = this.selectedItem;
                this.clearSelection();
                this.crudService.update(selectedItem.id, selectedItem)
                    .pipe(
                        this.loaderOperator()
                    )
                    .subscribe();
            } break;
            case EditorModeEnum.Remove: {
                this.crudService.delete(this.selectedItem.id);
            } break;
            case EditorModeEnum.Add: {
                this.crudService.add(<UserInfoModel>{})
                    .pipe(
                        this.loaderOperator()
                    )
                    .subscribe();
            } break;
            default: break;
        }
    }
}

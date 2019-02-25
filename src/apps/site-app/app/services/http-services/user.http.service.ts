import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { UserInfoModel, UserInfoListModel } from "../../models/user-info.model";
import { Observable, of } from "../../../../../../node_modules/rxjs";
import { Endpoints } from "../../../../../core/endpoints";
import { StorageSettings } from "../../models/storage-settings";
import { LockerTypeEnum } from "../../utils/locker-type.enum";
import { getQueryParams } from "../../utils/query-params.util";
import { ICrudService } from "../../interfaces/crud-service.interface";

@Injectable()
export class UserHttpService implements ICrudService<UserInfoListModel, UserInfoModel> {

    public getAll(queryParams?: {}, storageSettings?: StorageSettings): Observable<UserInfoListModel> {
        const source = this.httpService.invokeGet<UserInfoListModel>(
            Endpoints.Users(),
            { params: getQueryParams(queryParams) },
            <StorageSettings>{
                ...storageSettings,
                updateFuncOnResp: service => service.allUsers
            }
        );

        return source;
    }

    public get(id: string, storageSettings?: StorageSettings): Observable<UserInfoModel> {
        const source = this.httpService.invokeGet<UserInfoModel>(
            Endpoints.Users({id}),
            undefined,
            <StorageSettings>{ ...storageSettings, trackType: LockerTypeEnum.UserInfoGet }
        );
        return source;
    }

    public add(entity: UserInfoModel, storageSettings?:  StorageSettings): Observable<{}> {
        const source = this.httpService.invokePost<{}, UserInfoModel>(
            Endpoints.Users(),
            entity,
            undefined,
            <StorageSettings>{ ...storageSettings  }
        );
        return source;
    }

    public update(id: string, entity: UserInfoModel, storageSettings?: StorageSettings): Observable<{}> {
        const source = this.httpService.invokePut<{}, UserInfoModel>(
            Endpoints.Users({id}),
            entity,
            undefined,
            <StorageSettings>{ ...storageSettings  }
        );
        return source;
    }

    public delete(id: string, storageSettings?: StorageSettings): Observable<{}> {
        return of({});
    }

    constructor(
        private readonly httpService: HttpService
    ) {}
}
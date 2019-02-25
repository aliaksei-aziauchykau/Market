import { Observable } from "rxjs";
import { StorageSettings } from "../models/storage-settings";

export interface ICrudService<TListEntity, TEntity> {
    getAll(queryParams?: {}, storageSettings?: StorageSettings): Observable<TListEntity>;
    get(id: string, storageSettings?: StorageSettings): Observable<TEntity>;
    add(entity: TEntity, storageSettings?: StorageSettings): Observable<{}>;
    update(id: string, entity: TEntity, storageSettings?: StorageSettings): Observable<{}>;
    delete(id: string, storageSettings?: StorageSettings): Observable<{}>;
}
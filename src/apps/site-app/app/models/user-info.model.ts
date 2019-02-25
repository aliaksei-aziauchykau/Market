import { ICrudEntity } from "../interfaces/crud-entity.interface";

export class UserInfoModel implements ICrudEntity {
    public id: string;
    public nickName: string;
    public email: string;
}

export class UserInfoListModel {
    public items: UserInfoModel[];
    public count: number;
}
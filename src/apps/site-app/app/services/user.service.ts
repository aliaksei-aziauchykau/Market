import { Injectable } from "@angular/core";
import { UserInfoModel } from "../models/user-info.model";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {
    public $userInfo: BehaviorSubject<UserInfoModel> = new BehaviorSubject(null);
}
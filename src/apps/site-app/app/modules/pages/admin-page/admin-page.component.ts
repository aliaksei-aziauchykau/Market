import { Component, OnInit } from "@angular/core";
import { UserInfoModel } from "../../../models/user-info.model";
import { UserHttpService } from "./../../../services/http-services/user.http.service";
import { SafeComponent } from "../../../utils/safe-component.abstract";
import { check } from "../../../utils/custom-operators";

@Component({
    selector: "mc-admin-page",
    templateUrl: "./admin-page.component.html",
    styleUrls: ["./admin-page.component.scss"]
})
export class AdminPageComponent extends SafeComponent implements OnInit {
    constructor(private readonly userHttpService: UserHttpService) {
        super();
    }

    ngOnInit(): void {
    }
}

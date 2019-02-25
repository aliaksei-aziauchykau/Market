import { Component, OnInit, Input } from "@angular/core";
import { StripePlanInfo } from "../../../../models/stripe-info.model";

@Component({
    selector: "mc-plan-list",
    templateUrl: "./plan-list.component.html",
    styleUrls: ["./plan-list.component.scss"]
})
export class PlanListComponent implements OnInit {
    @Input() plans: StripePlanInfo[] = [];
    constructor() { }

    ngOnInit(): void { }
}

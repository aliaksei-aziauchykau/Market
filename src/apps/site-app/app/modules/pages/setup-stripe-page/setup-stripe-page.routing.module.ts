import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SetupStripePageComponent } from "./setup-stripe-page.component";

const routes: Routes = [
  {
    path: "",
    component: SetupStripePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupStripePageRoutingModule { }
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaymentModule } from "../../business/payment/payment.module";
import { LayoutModule } from "../../infrastructure/layouts/layout.module";
import { WidgetsModule } from "../../infrastructure/widgets/widgets.module";
import { ControlsModule } from "../../infrastructure/controls/controls.module";
import { HomePageComponent } from "./home-page.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { ProductModule } from "../../business/product/product.module";
import { HomePageRoutingModule } from "./home-page.routing.module";


@NgModule({
  imports: [
    CommonModule,
    PaymentModule,
    LayoutModule,
    ControlsModule,
    WidgetsModule,
    ProductModule,
    HomePageRoutingModule
  ],
  declarations: [
    SubscriptionComponent,
    WelcomeComponent,
    HomePageComponent
  ]
})
export class HomePageModule { }
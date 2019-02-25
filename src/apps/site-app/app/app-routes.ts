import { Routes } from "@angular/router";
import { HomePageComponent } from "./modules/pages/home-page/home-page.component";
import { LoginPageComponent } from "./modules/pages/login-page/login-page.component";
import { RegistrationPageComponent } from "./modules/pages/registration-page/registration-page.component";
import { UserPageComponent } from "./modules/pages/user-page/user-page.component";
import { ProductPageComponent } from "./modules/pages/product-page/product-page.component";
import { NotFoundPageComponent } from "./modules/pages/not-found-page/not-found-page.component";
import { AdminPageComponent } from "./modules/pages/admin-page/admin-page.component";

const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "admin",
        component: AdminPageComponent
    },
    {
        path: "login",
        component: LoginPageComponent
    },
    {
        path: "registration",
        component: RegistrationPageComponent
    },
    {
        path: "user",
        component: UserPageComponent
    },
    {
        path: "product/:id",
        component: ProductPageComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundPageComponent
    }
];

export const AppRoutes = routes;
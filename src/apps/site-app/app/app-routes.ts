import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "home",
        loadChildren: "./modules/pages/home-page/home-page.module#HomePageModule",
    },
    {
        path: "admin",
        loadChildren: "./modules/pages/admin-page/admin-page.module#AdminPageModule"
    },
    {
        path: "setup",
        loadChildren: "./modules/pages/setup-stripe-page/setup-stripe-page.module#SetupStripePageModule"
    },
    {
        path: "login",
        loadChildren: "./modules/pages/login-page/login-page.module#LoginPageModule",
    },
    {
        path: "registration",
        loadChildren: "./modules/pages/registration-page/registration-page.module#RegistrationPageModule"
    },
    {
        path: "user",
        loadChildren: "./modules/pages/user-page/user-page.module#UserPageModule"
    },
    {
        path: "product/:id",
        loadChildren: "./modules/pages/product-page/product-page.module#ProductPageModule"
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "**",
        loadChildren: "./modules/pages/not-found-page/not-found-page.module#NotFoundPageModule"
    }
];

export const AppRoutes = routes;
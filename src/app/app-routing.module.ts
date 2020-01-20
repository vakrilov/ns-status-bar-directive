import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { WrappedEmptyOutletComponent } from "./wrapped-empty-outlet";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: WrappedEmptyOutletComponent,
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab"
    },
    {
        path: "browse",
        component: WrappedEmptyOutletComponent,
        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "search",
        component: WrappedEmptyOutletComponent,
        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./pages/home/home.component";
import { AddFolderComponent } from "./pages/home/addFolder/addFolder.component";
import { FolderDetailsComponent } from "./components/list/folderDetails/folderDetails.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", component: HomeComponent },
    { path: "home/:id", component: FolderDetailsComponent },
    { path: "add", component: AddFolderComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

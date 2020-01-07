import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ListComponent } from "~/app/components/list/list.component";
import { BreadCrumbComponent } from "~/app/components/breadcrumb/breadcrumb.component";
import { ButtonsComponent } from "~/app/components/buttons/buttons.component";
import { AddFolderComponent } from "./addFolder/addFolder.component";
import { SearchBarModule } from "~/app/components/searchbar/searchbar.module";
import { ActionBarModule } from "~/app/components/actionbar/actionbar.module";
import { BreadCrumbModule } from "~/app/components/breadcrumb/breadcrumb.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        SearchBarModule,
        ActionBarModule,
        BreadCrumbModule
    ],
    declarations: [
        HomeComponent,
        AddFolderComponent,
        ListComponent,
        ButtonsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
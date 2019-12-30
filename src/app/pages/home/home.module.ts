import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ListComponent } from "~/app/components/list/list.component";
import { SearchBarComponent } from "~/app/components/searchbar/searchbar.component";
import { BreadCrumbComponent } from "~/app/components/breadcrumb/breadcrumb.component";
import { ButtonsComponent } from "~/app/components/buttons/buttons.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ListComponent,
        SearchBarComponent,
        BreadCrumbComponent,
        ButtonsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
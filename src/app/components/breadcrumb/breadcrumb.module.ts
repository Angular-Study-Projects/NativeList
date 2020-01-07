import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { BreadCrumbComponent } from "./breadcrumb.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DropDownModule,
        NativeScriptModule
    ],
    declarations: [BreadCrumbComponent],
    exports: [BreadCrumbComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class BreadCrumbModule {}
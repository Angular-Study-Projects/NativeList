import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { BreadCrumbComponent } from "./breadcrumb.component";


@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [BreadCrumbComponent],
    exports: [BreadCrumbComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class BreadCrumbModule {}
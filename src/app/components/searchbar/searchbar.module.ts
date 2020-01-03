import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SearchBarComponent } from "./searchbar.component";


@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class SearchBarModule {}
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ActionBarComponent } from "./actionbar.component";

@NgModule({
    imports:[NativeScriptCommonModule],
    declarations:[ActionBarComponent],
    exports:[ActionBarComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ActionBarModule {}
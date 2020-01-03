import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FavoritesComponent } from "./favorites.component";
import { SearchBarModule } from "~/app/components/searchbar/searchbar.module";
import { ActionBarModule } from "~/app/components/actionbar/actionbar.module";


@NgModule({
    imports: [
        NativeScriptCommonModule, 
        SearchBarModule,
        ActionBarModule
    ],
    declarations: [FavoritesComponent],
    exports: [FavoritesComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class FavoritesModule {}
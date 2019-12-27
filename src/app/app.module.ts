import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ListComponent } from "./components/list/list.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        ListComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

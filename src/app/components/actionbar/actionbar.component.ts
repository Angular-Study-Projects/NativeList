import { Component, OnInit } from "@angular/core";

import { AppComponent } from "~/app/app.component";

@Component({
    selector: 'action-bar-component',
    templateUrl: 'actionbar.component.html',
    styleUrls: ['actionbar.component.css']
})

export class ActionBarComponent implements OnInit{

    numberOfNotifications: number

    constructor(private sidebar: AppComponent) {
    }

    ngOnInit() {
        this.numberOfNotifications = 5 
    }

    public openDrawer() {
        this.sidebar.openDrawer()
    }

    public onCloseDrawerTap() {
        // this.drawer.closeDrawer();
    }

    


 }

import { Component, OnInit } from "@angular/core";
import { AppComponent } from "~/app/app.component";

@Component({
    selector: 'sidemenu-component',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['sidemenu.component.css']
})

export class SideMenuComponent implements OnInit {
    constructor(private sidebar: AppComponent){}

    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;
    }

    closeDrawer() {
        this.sidebar.onCloseDrawerTap();
    }
}
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sidemenu-component',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['sidemenu.component.css']
})

export class SideMenuComponent implements OnInit {
    constructor(){}

    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;
    }
}
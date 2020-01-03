import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'action-bar-component',
    templateUrl: 'actionbar.component.html',
    styleUrls: ['actionbar.component.css']
})

export class ActionBarComponent implements OnInit {
    
    numberOfNotifications: number
    
    constructor(){}
    ngOnInit(){
        this.numberOfNotifications = 4
    }
}
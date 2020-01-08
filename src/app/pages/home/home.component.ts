import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit {

    dialogOpen: boolean

    constructor(){

    }

    ngOnInit(){

    }

    showDialog() {
        this.dialogOpen = true;
    }

    closeDialog() {
        this.dialogOpen = false;
    }

}
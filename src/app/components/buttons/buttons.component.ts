import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";

@Component({
    selector: "buttons-component",
    templateUrl: "./buttons.component.html",
    styleUrls: ['./buttons.component.css']
}) 

export class ButtonsComponent implements OnInit {



    constructor(private listService: ListService){
    }
    
    ngOnInit(): void {
    }


    addFolder() {
        // this.listService.add()
    }

}
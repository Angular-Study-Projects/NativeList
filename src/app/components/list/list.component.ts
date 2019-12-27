import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";


@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
}) 

export class ListComponent implements OnInit {

    myList: Folder[];

    constructor( private listService: ListService ){
    }

    ngOnInit(): void {
        this.myList = this.listService.folderList;
    }

}
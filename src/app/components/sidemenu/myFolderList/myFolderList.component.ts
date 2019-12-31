import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";


@Component({
    selector: "my-folder-list-component",
    templateUrl: "./myFolderList.component.html",
    // styleUrls: ["./myFolderList.component.css"]
}) 

export class MyFolderListComponent implements OnInit {

    myList: Folder[];

    constructor( private listService: ListService ){
    }

    ngOnInit(): void {
        this.myList = this.listService.myList;
    }

}
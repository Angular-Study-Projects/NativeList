import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';;


@Component({
    selector: "my-folder-list-component",
    templateUrl: "./myFolderList.component.html",
    // styleUrls: ["./myFolderList.component.css"]
}) 

export class MyFolderListComponent implements OnInit {

    displayOfData: Observable<any[]>

    constructor( private listService: ListService ){
    }

    ngOnInit(): void {
        this.displayOfData = this.listService.myList.asObservable()
    }

}
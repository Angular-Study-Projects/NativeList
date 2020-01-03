import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Observable } from "rxjs";


@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
}) 

export class ListComponent implements OnInit {

    myList: Folder[];
    displayOfData: Observable<any[]>

    constructor( private listService: ListService ){
    }

    ngOnInit(): void {
        this.myList = this.listService.folderList;

        this.displayOfData = this.listService.list.asObservable()
    }

    showOptions(data: Folder) {
       setTimeout(()=>{
           data.options=false;
       }, 4000)
    }
}
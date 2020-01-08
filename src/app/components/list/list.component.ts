import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";
import { Observable } from "rxjs";


@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
}) 

export class ListComponent implements OnInit {

    myList: Folder[];
    displayOfData: Observable<any[]> 

    @Output() dialogOpen: EventEmitter<boolean> = new EventEmitter();

    constructor( private listService: ListService ){
    }

    ngOnInit(): void {
        this.myList = this.listService.folderList;

        this.displayOfData = this.listService.list.asObservable()
    }

    showOptions(data: Folder) {
    //    setTimeout(()=>{
    //        data.options=false;
    //    }, 4000)
    }

    openDialog(){
        this.dialogOpen.emit(true);
    }

    
}
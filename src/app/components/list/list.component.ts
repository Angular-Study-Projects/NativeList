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

    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.dismissSoftInput();
            event.object.android.clearFocus();
            event.object.android.setFocusable(false);
        }
    }

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        
        setTimeout(()=> {
            let text = searchBar.text;

            this.listService.filter( text )

            // this.myList = [... this.listService.myList.filter(it => it.title.toLowerCase().startsWith(text.toLowerCase()))]


        }, 100)

        
        // console.log(this.noResult)

        // console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
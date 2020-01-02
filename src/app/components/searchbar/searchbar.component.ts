import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";

@Component({
    selector: "search-bar-component",
    templateUrl: "./searchbar.component.html",
}) 

export class SearchBarComponent implements OnInit {

    dotsActive: boolean;
    searchPhrase: string;
    myList: Folder[] = [];
    noResult: boolean;


    constructor(private listService: ListService){
    }
    
    ngOnInit(): void {
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

        }, 100)
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }

}
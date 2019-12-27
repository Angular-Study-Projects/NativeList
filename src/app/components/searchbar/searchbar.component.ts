import { Component, OnInit, ViewContainerRef, OnChanges } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ListService } from "~/app/service/list.service";
import { Folder } from "~/app/service/folder";


interface documentTemplate {
    title: string;
    date: number;
    lastModification: number;
    option: boolean;
    id: number;
}

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


    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        

        setTimeout(()=> {
            let text = searchBar.text;

            this.myList = this.listService.filter( text )

        }, 100)

        // console.log(this.noResult)

        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
    



}
import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SearchBar } from "tns-core-modules/ui/search-bar/search-bar";

@Component({
    selector: 'favorites-component',
    templateUrl: './favorites.component.html',
    // styleUrls: ['']
})

export class FavoritesComponent implements OnInit {

    displayOfData: Observable<any[]>

    constructor(private listService: ListService){}
    ngOnInit(){
        this.displayOfData = this.listService.list.asObservable().pipe(map(item => item.filter(it => it.isFavorite)))
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

            if( text != "" ) {
                this.listService.list.next(this.listService.myList.value.filter(it => {
                    if(it.title.toLowerCase().startsWith(text.toLowerCase())){
                        console.log("aqui")
                        return it.title.toLowerCase().startsWith(text.toLowerCase());
                    };
                } ))
            }
            else{
                this.listService.list.next(this.listService.myList.value.filter(it => it.isFavorite))
            }

        }, 100)
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }

}

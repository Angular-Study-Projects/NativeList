import { Injectable } from "@angular/core";
import { Folder } from "./folder";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn: 'root'})
export class ListService {

    folderList: Folder[] = []
    listSize: number = 1;


    myList: BehaviorSubject<Folder[]> = new BehaviorSubject([]);
    list: BehaviorSubject<Folder[]> = new BehaviorSubject([])

    id: number = 0;

    constructor(){

        for(let i = 0; i < this.listSize; i++) {
            this.folderList.push( {id: this.id,title: 'Title ' + ++this.id, date: Date.now(), isFavorite: false, options: false} )
        }
        // this.myList = [... this.folderList];


        this.list.next(this.folderList)
        this.myList.next(this.folderList)

    }

    filter(text: string) {
        if( text != "" ) {
            this.list.next(this.myList.value.filter(it => {
                if(it.title.toLowerCase().startsWith(text.toLowerCase())){
                    console.log("aqui")
                    return it.title.toLowerCase().startsWith(text.toLowerCase());
                };
            } ))
        }
        else{
            this.list.next(this.myList.value)
        }
    }

    add(_title:string, _date:number) {
        this.folderList.push({ id: ++this.id, title: _title, date: _date, isFavorite: false, options: false})

        this.myList.next(this.folderList)

    }

    getFolderInfo(id: number): Folder {
        return this.myList.value.filter((item) => item.id === id)[0];
    }
}
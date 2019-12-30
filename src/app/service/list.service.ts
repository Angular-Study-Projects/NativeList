import { Injectable } from "@angular/core";
import { Folder } from "./folder";


@Injectable({providedIn: 'root'})
export class ListService {

    folderList: Folder[] = []
    listSize: number = 1;
    myList: Folder[]=[]

    id: number = 0;

    constructor(){

        for(let i = 0; i < this.listSize; i++) {
            this.folderList.push( {title: 'Title ' + ++this.id, date: Date.now()} )
        }
        this.myList = [... this.folderList];

    }

    filter(text: string) {
        if( text != "" ) {
            this.myList = [... this.folderList.filter( it => { it.title.toLowerCase().startsWith(text.toLowerCase()) })]
        }
        else{
            this.myList = [... this.folderList]
        }
    }

    add(_title:string, _date:number) {
        this.folderList.push({title: _title + " " + ++this.id, date: _date})
        this.myList = [... this.folderList];
    }


    // folderBtn:boolean = false;
    // _isEmpty: boolean = true;
    // id: number = 0;

    // myList: documentTemplate[] = []
    
    // folder = this.myList;
    // filter = ""

    // {title: 'folder title', date: Date.now(), lastModification: Date.now(), option:false, id: this.id}

    // searchFolder(title: string) {
    //     this.myList.filter((obj: documentTemplate) => {
    //         return obj.title === title;
    //     })
    // }


    // addFolder(newFolder: documentTemplate) {
    //     this.myList.push(newFolder);
    // }

    // deleteFolder( item: number ) {
    //     this.myList.splice(item, 1);
        
    // }

    // isEmpty() {
    //     this.myList.length == 0 ? this._isEmpty = true : this._isEmpty = false;
    // }

    // cleanClick(evt: any) {
    //     for (let i = 0; i < this.myList.length; i++) {
    //         this.myList[i].option=false;
    //     }
    //     evt.option = !evt.option;
    // }
}
import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListService } from "~/app/service/list.service";

@Component({
    selector: 'add-folder-component',
    templateUrl: "./addFolder.component.html"
})

export class AddFolderComponent implements OnInit {
    
    title = ""
    
    constructor(private listService: ListService){}

    ngOnInit(){}

    update(args) {
        let textField = <TextField>args.object;
        this.title = textField.text;
    }

    saveFolder() {
        this.listService.add(this.title, Date.now())
    }
}
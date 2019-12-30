import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListService } from "~/app/service/list.service";
import { Router } from "@angular/router";

@Component({
    selector: 'add-folder-component',
    templateUrl: "./addFolder.component.html",
    styleUrls: ['./addFolder.component.css']
})

export class AddFolderComponent implements OnInit {
    
    title = ""
    isCreated: boolean
    invalidInput: boolean
    
    constructor(private listService: ListService, private _router: Router){}

    ngOnInit(){
        this.isCreated = false;
        this.invalidInput = false;
        this.title = "Nova Pasta"
    }

    update(args) {
        let textField = <TextField>args.object;
        this.title = textField.text;
        this.invalidInput = false;
    }

    saveFolder() {
        this.listService.add(this.title, Date.now());

        if( this.title != "" || this.title != "" ){
            setTimeout(() => {
                this._router.navigate(['/home'])
            }, 1000);
            this.isCreated = true
        }
        else {
            this.invalidInput = true;
        }
    }
}
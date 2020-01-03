import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { ActivatedRoute } from "@angular/router";
import { Folder } from "~/app/service/folder";
import { AppComponent } from "~/app/app.component";

@Component({
    selector: 'folder-details-component',
    templateUrl: './folderDetails.component.html',
    // styleUrls: ['']
})

export class FolderDetailsComponent implements OnInit {

    data: Folder;

    constructor(private listService: ListService, private route: ActivatedRoute, private sidebar: AppComponent){}
    ngOnInit(){
        const id = +this.route.snapshot.params.id;
        this.data = this.listService.getFolderInfo(id);
    }
}
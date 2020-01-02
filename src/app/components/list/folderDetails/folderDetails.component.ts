import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/service/list.service";
import { ActivatedRoute } from "@angular/router";
import { Folder } from "~/app/service/folder";

@Component({
    selector: 'folder-details-component',
    templateUrl: './folderDetails.component.html',
    // styleUrls: ['']
})

export class FolderDetailsComponent implements OnInit {

    data: Folder;

    constructor(private listService: ListService, private route: ActivatedRoute){}
    ngOnInit(){
        const id = +this.route.snapshot.params.id;
        this.data = this.listService.getFolderInfo(id);
    }
}
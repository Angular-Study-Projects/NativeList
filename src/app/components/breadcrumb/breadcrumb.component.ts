import { Component, OnInit } from "@angular/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { Router } from "@angular/router";


@Component({
    selector: "breadcrumb-component",
    templateUrl:"./breadcrumb.component.html",
    styleUrls: ['breadcrumb.component.css']
})

export class BreadCrumbComponent implements OnInit {

    // public years: Array<number> = [1980, 1990, 2000, 2010, 2020];

    // public onSelectedIndexChanged(args: EventData) {
    //     const picker = <ListPicker>args.object;
    //     console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
    // }

    public selectedIndex = 1;
    public items: Array<string>;


    constructor(private route: Router) {}

    ngOnInit(){
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("INICIO / ... / Route " + i);
        }
    }
 
    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
        // this.route.navigate(['favorites'])
    }
 
    public onopen() {
        console.log("Drop Down opened.");
    }
 
    public onclose() {
        console.log("Drop Down closed.");
    }
}

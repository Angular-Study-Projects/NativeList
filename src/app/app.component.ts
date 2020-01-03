import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { DrawerTransitionBase, PushTransition, RadSideDrawer, DrawerStateChangingEventArgs, DrawerStateChangedEventArgs } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})

@Injectable()
export class AppComponent implements AfterViewInit, OnInit {
    private _currentNotification: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._sideDrawerTransition = new PushTransition();
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public get currentNotification(): string {
        return this._currentNotification;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public onDrawerOpening(args: DrawerStateChangingEventArgs) {
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing(args: DrawerStateChangingEventArgs) {
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer closed";
    }

    public onDrawerPan(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer pan";
    }
}
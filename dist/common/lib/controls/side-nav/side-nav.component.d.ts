import { EventEmitter } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { NavLinkModel } from '../../models/nav-link.model';
import { MatSidenav } from '@angular/material';
export declare class SideNavComponent {
    protected breakpointObserver: BreakpointObserver;
    isHandset$: Observable<boolean>;
    protected _navLinks: Array<NavLinkModel>;
    NavItemClicked: EventEmitter<any>;
    /**
     * The items in the button icon,title, link
     */
    MenuItems: Array<NavLinkModel>;
    /**
     * public openedSubject: Subject<boolean>;
     * detects if the button has been clicked
     */
    openedSubject: Subject<boolean>;
    /**
     * The color of the menu Icon
     */
    MenuColor: string;
    /**
     * The color of the menu icon when hover
     */
    HoverMenuColor: string;
    /**
     * The width of the side nav content
     */
    MatContentWidth: string;
    /**
     * The height of the side nav content
     */
    MatContentHeight: string;
    /**
     * The width of the side nav container
     */
    MatContainerWidth: string;
    /**
     * the background color of the buttons in menu
     */
    ButtonBackgroundColor: string;
    /**
     * TODO when hover color is assigned all buttons display that color
     */
    ButtonBackgroundColorHover: string;
    /**
     * The font color of both the icons and the text in the menu
     */
    FontColor: string;
    MenuBGColor: string;
    ButtonBGColor: string;
    ButtonHover: boolean;
    sidenav: MatSidenav;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ButtonClicked(button: any): void;
    toggleDrawer(): void;
    OnHover(): void;
    OnButtonHover(): void;
    LeaveHover(): void;
    LeaveButtonHover(): void;
    protected setStyles(): void;
    protected setDefaultStyles(): void;
}

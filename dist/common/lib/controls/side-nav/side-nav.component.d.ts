import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { NavLinkModel } from '../../models/nav-link.model';
import { MatSidenav } from '@angular/material';
export declare class SideNavComponent {
    protected breakpointObserver: BreakpointObserver;
    isHandset$: Observable<boolean>;
    protected _navLinks: Array<NavLinkModel>;
    MenuItems: Array<NavLinkModel>;
    openedSubject: Subject<boolean>;
    Color: string;
    HoverColor: string;
    MatContentWidth: string;
    MatContentHeight: string;
    MatContainerWidth: string;
    sidenav: MatSidenav;
    MenuColor: string;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    toggleDrawer(): void;
    OnHover(): void;
    LeaveHover(): void;
    protected setStyles(): void;
    protected setDefaultStyles(): void;
}

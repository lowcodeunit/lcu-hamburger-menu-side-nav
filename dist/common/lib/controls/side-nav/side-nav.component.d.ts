import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { NavLinkModel } from '../../models/nav-link.model';
import { MatSidenav } from '@angular/material';
export declare class SideNavComponent {
    protected breakpointObserver: BreakpointObserver;
    isHandset$: Observable<boolean>;
    protected _navLinks: Array<NavLinkModel>;
    SideOpen: boolean;
    MenuItems: Array<NavLinkModel>;
    openedSubject: Subject<boolean>;
    sidenav: MatSidenav;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    toggleDrawer(): void;
}

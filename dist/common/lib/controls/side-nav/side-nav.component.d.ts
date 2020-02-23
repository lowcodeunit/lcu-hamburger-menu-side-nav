import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NavLinkModel } from '../../models/nav-link.model';
export declare class SideNavComponent {
    protected breakpointObserver: BreakpointObserver;
    isHandset$: Observable<boolean>;
    protected _navLinks: Array<NavLinkModel>;
    SideOpen: boolean;
    MenuItems: Array<NavLinkModel>;
    sidenav: MatSidenav;
    constructor(breakpointObserver: BreakpointObserver);
    toggleDrawer(): void;
}

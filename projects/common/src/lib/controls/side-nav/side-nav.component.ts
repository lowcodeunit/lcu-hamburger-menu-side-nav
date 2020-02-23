import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavLinkModel } from '../../models/nav-link.model';


@Component({
  selector: 'lcu-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result: BreakpointState) => result.matches)
    );

  protected _navLinks: Array<NavLinkModel>;
  
  public SideOpen: boolean;

  @Input() 
  MenuItems: Array<NavLinkModel>;

  @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

  constructor(protected breakpointObserver: BreakpointObserver) {
    this.SideOpen = false;
  }

  public toggleDrawer() {
    if (this.sidenav.opened) {
      this.sidenav.close();
      this.SideOpen = false;
    } else {
      this.sidenav.open();
      this.SideOpen = true;
    }
  }

}


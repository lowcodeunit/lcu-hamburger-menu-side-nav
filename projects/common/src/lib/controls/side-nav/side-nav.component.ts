import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavLinkModel } from '../../models/nav-link.model';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'lcu-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  protected _navLinks: Array<NavLinkModel>;
  
  public SideOpen: boolean;

  @Input('menu-items') 
  MenuItems: Array<NavLinkModel>;

  @Input('close-side-nav') 
  set CloseSideNav(value:boolean){
    this.CloseDrawer(value);
  }

  @ViewChild('sidenav') public sidenav: MatSidenav;
  // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;


  constructor(protected breakpointObserver: BreakpointObserver) {
    this.SideOpen = false;
  }

  public ngOnInit(): void {
  }


  public toggleDrawer() {
    if (this.sidenav.opened) {
      this.sidenav.close();
      this.SideOpen = false
    } else {
      this.sidenav.open();
      this.SideOpen = true;
    }
  }

  public CloseDrawer(value: boolean){
    this.SideOpen = value;
    this.sidenav.close();
  }

}


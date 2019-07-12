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

  @Input() MenuItems: Array<NavLinkModel>;

  @ViewChild('sidenav') public sidenav: MatSidenav;



  /**
   * Input property for logo
   */
  // tslint:disable-next-line:no-input-rename
  // @Input('logo-url')
  // public LogoURL: string;

  // tslint:disable-next-line:no-input-rename
  // @Input('logo-class')
  // public LogoClass: string;

  /**
   * Input property for logo alt text
   */
  // tslint:disable-next-line:no-input-rename
  // @Input('logo-alt')
  // public LogoAlt: string;

  /**
   * Input property for navigation links
   */
  // tslint:disable-next-line:no-input-rename
  // @Input('nav-links')
  // public NavLinks: Array<NavLinkModel>;

  constructor(protected breakpointObserver: BreakpointObserver) {}

  public ngOnInit(): void {
  }


  public toggleDrawer() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

}


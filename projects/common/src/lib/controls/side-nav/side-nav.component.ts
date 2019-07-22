import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
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
  
  @Input('menu-items') 
  MenuItems: Array<NavLinkModel>;

  // @Input('opened-subject') 
  public openedSubject: Subject<boolean>;

  public SideOpen: boolean;

  @ViewChild('sidenav') public sidenav: MatSidenav;
  // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;


  constructor(protected breakpointObserver: BreakpointObserver) {
   this.openedSubject = new Subject<boolean>();
   this.SideOpen = false;
  }

  public ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    this.openedSubject.subscribe(
      keepOpen => this.sidenav[keepOpen ? 'open' : 'close']()
    );
  }


  public toggleDrawer() {
    this.openedSubject.next(!this.sidenav.opened);
    //so the hamburger menu doesnt come all the way across the screen when closing the menu
    if(this.SideOpen === true){
    setTimeout(()=>{
      this.SideOpen = !this.SideOpen;
    },100);
  }
  else{
    this.SideOpen = !this.SideOpen;
  }
  }

}


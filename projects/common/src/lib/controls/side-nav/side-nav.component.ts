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
  public MenuItems: Array<NavLinkModel>;

  //public openedSubject: Subject<boolean>;
  @Input('opened-subject') 
  public openedSubject: Subject<boolean>

  public MatContentWidth: string;

  public MatContentHeight: string;

  public MatContainerWidth: string;

  @ViewChild('sidenav',{static: false}) public sidenav: MatSidenav;

  constructor(protected breakpointObserver: BreakpointObserver) {
   this.openedSubject = new Subject<boolean>();
   this.MatContentWidth = "40px";
   this.MatContentHeight = "40px";
   this.MatContainerWidth= "40px";
  }

  public ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    this.openedSubject.subscribe((result: boolean)=>{
      this.sidenav[result ? 'open': 'close']()
      this.setStyles();
    });
  }


  public toggleDrawer() {
    this.openedSubject.next(!this.sidenav.opened);
    if(!this.sidenav.opened){
    this.MatContentWidth = "40px";
    this.MatContainerWidth = "40px";
    this.MatContentHeight = "40px";
    // console.log("sidenav closed", this.MatContentWidth);
  }
  else{
    this.MatContentWidth = "0px";
    this.MatContentHeight = "90vh";
    this.MatContainerWidth = "210px";
    // console.log("sidenav open", this.MatContentWidth);

  }
  }
  protected setStyles():void{
    this.MatContentWidth = "40px";
    this.MatContainerWidth = "40px";
    this.MatContentHeight = "40px";
  }
}


import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
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

  @Output('nav-item-clicked')
  public NavItemClicked: EventEmitter<any>;

  @Input('menu-items')
  public MenuItems: Array<NavLinkModel>;

  //public openedSubject: Subject<boolean>;
  @Input('opened-subject')
  public openedSubject: Subject<boolean>

  @Input('menu-color')
  public MenuColor: string;

  @Input('hover-menu-color')
  public HoverMenuColor: string;

  @Input('mat-content-width')
  public MatContentWidth: string;

  @Input('mat-content-height')
  public MatContentHeight: string;

  @Input('mat-container-width')
  public MatContainerWidth: string;

  @Input('button-background-color')
  public ButtonBackgroundColor: string;

  @Input('button-background-color-hover')
  public ButtonBackgroundColorHover:string;

  @Input('font-color')
  public FontColor: string;

  public MenuBGColor: string;
  public ButtonBGColor: string;
  public ButtonHover: boolean;


  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;

  // public MenuColor: string;

  constructor(protected breakpointObserver: BreakpointObserver) {
    this.NavItemClicked = new EventEmitter<any>();
    this.openedSubject = new Subject<boolean>();
    this.MatContentWidth = "50px";
    this.MatContentHeight = "40px";
    this.MatContainerWidth = "50px";
  }

  public ngOnInit(): void {
    this.setDefaultStyles();
  }

  ngAfterContentInit() {
    this.openedSubject.subscribe((result: boolean) => {
      this.sidenav[result ? 'open' : 'close']()
      this.setStyles();
    });
  }

  public ButtonClicked(button) {
    this.NavItemClicked.emit(button);
  }


  public toggleDrawer() {
    this.openedSubject.next(!this.sidenav.opened);
    if (!this.sidenav.opened) {
      this.MatContentWidth = "50px";
      this.MatContainerWidth = "50px";
      this.MatContentHeight = "40px";
      // console.log("sidenav closed", this.MatContentWidth);
    }
    else {
      this.MatContentWidth = "0px";
      this.MatContentHeight = "94vh";//94vh
      this.MatContainerWidth = "230px";
      // console.log("sidenav open", this.MatContentWidth);

    }
  }
  public OnHover(): void {
    this.MenuBGColor = this.HoverMenuColor;
  }

  public OnButtonHover():void{
    // this.ButtonBGColor = this.ButtonBackgroundColorHover;
    this.ButtonHover = true;
  }

  public LeaveHover(): void {
    this.MenuBGColor = this.MenuColor;
  }

  public LeaveButtonHover():void{
    // this.ButtonBGColor = this.ButtonBackgroundColor;
    this.ButtonHover = false;
  }

  // public setButtonStyles() {
  //   let styles = {
  //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
  //   };
  //   return styles;
  // }
  protected setStyles(): void {
    this.MatContentWidth = "50px";
    this.MatContainerWidth = "50px";
    this.MatContentHeight = "40px";
  }

  protected setDefaultStyles(): void {
    this.setStyles();

    if(!this.FontColor){
      this.FontColor = 'black';
    }

    if(!this.ButtonBackgroundColorHover){
      this.ButtonBackgroundColorHover = "grey"//#96957
    }
    if(!this.ButtonBackgroundColor){
      this.ButtonBGColor = "white"//#96957
    }

    if (!this.MenuColor) {
      this.MenuBGColor = 'black';
    }
    this.MenuBGColor = this.MenuColor;
    if (!this.HoverMenuColor) {
      this.HoverMenuColor = 'grey';
    }
  }
}


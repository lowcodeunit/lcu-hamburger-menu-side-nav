import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants{
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        {Label: 'Maps', Url:'/landingPage', Disabled:'false', Icon: 'home',},
        {Label: 'Iteneraries', Url:'', Disabled:'false', Icon: 'public'},
        {Label: 'Top Lists', Url:'www', Disabled:'true', Icon: 'map'},
        {Label: 'Albums', Url:'www', Disabled:'true', Icon: 'sort'},
        {Label: 'Friends', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'Profile', Url:'www', Disabled:'true', Icon: 'person'}];
}
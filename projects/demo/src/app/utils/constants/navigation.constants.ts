import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants{
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        {Label: 'Maps', Url:'/landingPage', Disabled:'false', Icon: 'map',},
        {Label: 'Iteneraries', Url:'', Disabled:'false', Icon: 'public'},
        {Label: 'Top Lists', Url:'www', Disabled:'true', Icon: 'sort'},
        {Label: 'Albums', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'Friends', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'Profile', Url:'www', Disabled:'true', Icon: 'account_circle'}];
}
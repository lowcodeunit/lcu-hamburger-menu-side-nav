import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants{
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        {Label: 'Home', Url:'/home', Disabled:'false', Icon: 'home',},
        {Label: 'My Modal', Url:'/home', Disabled:'false', Icon: 'public', Param:'modal' },
        {Label: 'My Itenerarries', Url:'www', Disabled:'true', Icon: 'map'},
        {Label: 'My Top Lists', Url:'www', Disabled:'true', Icon: 'sort'},
        {Label: 'My Albums', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'My Friends', Url:'www', Disabled:'true', Icon: 'group'},
        {Label: 'My Profile', Url:'www', Disabled:'true', Icon: 'person'}];
}
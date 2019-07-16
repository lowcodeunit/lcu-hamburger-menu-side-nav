import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants{
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        {Label: 'HOME', Url:'/home', Disabled:'false', Icon: 'home',},
        {Label: 'MY MODAL', Url:'/home', Disabled:'false', Icon: 'public', Param:'modal' },
        {Label: 'MY ITENERARIES', Url:'www', Disabled:'true', Icon: 'map'},
        {Label: 'MY TOP LISTS', Url:'www', Disabled:'true', Icon: 'sort'},
        {Label: 'MY ALBUMS', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'MY FRIENDS', Url:'www', Disabled:'true', Icon: 'group'},
        {Label: 'MY PROFILE', Url:'www', Disabled:'true', Icon: 'person'}];
}
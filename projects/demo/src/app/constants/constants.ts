import { HamburgerMenuModel } from '@lowcodeunit/lcu-hamburger-menu-common';

// @dynamic
/**
* @dynamic is used because this class contains static properties
*
* Used to build the items in the hamburger menu

'"[\'/home/\',modal]"'
*/
export class Constants{
    public static readonly VAR_NAMES_MENU: Array<HamburgerMenuModel> = [
        {Label: 'Home', Url:'/home', Disabled:'false', Icon: 'home',},
        {Label: 'My Modal', Url:'/home', Disabled:'false', Icon: 'public', Param:'modal' },
        {Label: 'My Itenerarries', Url:'www', Disabled:'true', Icon: 'map'},
        {Label: 'My Top Lists', Url:'www', Disabled:'true', Icon: 'sort'},
        {Label: 'My Albums', Url:'www', Disabled:'true', Icon: 'photo_library'},
        {Label: 'My Friends', Url:'www', Disabled:'true', Icon: 'group'},
        {Label: 'My Profile', Url:'www', Disabled:'true', Icon: 'person'}];
}
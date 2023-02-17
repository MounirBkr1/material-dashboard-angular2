import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //icons: https://fonts.google.com/icons
    { path: '/acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/etudiants', title: 'Etudiants',  icon:'person', class: '' },
    { path: '/professeurs', title: 'Professeurs',  icon:'group', class: '' },
    { path: '/notes', title: 'Notes',  icon:'library_books', class: '' },
    { path: '/programmes', title: 'Programmes',  icon:'edit_calendar', class: '' },
    { path: '/nouveautes', title: 'Nouveautés',  icon:'pending_actions', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'fact_check', class: '' },
    { path: '/instances', title: 'Instances',  icon:'list', class: '' },
    { path: '/contacs-us', title: 'Contactez nous',  icon:'contact-mail', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };


}

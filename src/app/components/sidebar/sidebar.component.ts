import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/utilisateur', title: 'utilisateur',  icon:'persons', class: '' },
    { path: '/parametres', title: 'recommandations',  icon:'library_books', class: '' },
    { path: '/reclamation', title: 'réclamation',  icon:'bubble_chart', class: '' },
    { path: '/supervision', title: 'supervision',  icon:'notifications', class: '' },
    { path: '../login', title: 'Déconnexion',  icon:'unarchive', class: 'active-pro' },
];
export const ROUTES2: RouteInfo[] = [
  { path: '/profile', title: 'Profile',  icon:'person', class: '' },

  { path: '/supervision', title: 'supervision',  icon:'notifications', class: '' },
  { path: '../login', title: 'Déconnexion',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }
grade:string;
  ngOnInit() {
    if(localStorage.length==0)
    {
      window.location.replace("login")
    }
    else 
    {
      this.grade=localStorage.getItem("grade");
    }
    if(this.grade=="visiteur")
    this.menuItems = ROUTES2.filter(menuItem => menuItem);
    else
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}

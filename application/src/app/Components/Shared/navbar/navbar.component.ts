import { style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  title = 'angular-clickoutside';
  
  constructor() { }

  ngOnInit(): void {
  }

  element!: HTMLElement;
  showNav = false;

  openNav(e: Event) {
    this.showNav = true; 
  }

  closeNav(e: Event) {
    this.showNav = false;
  }
}

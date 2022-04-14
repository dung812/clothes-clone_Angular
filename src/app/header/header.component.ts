import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeSearchArea() {
    const searchArea = document.querySelector("#search-area");
    searchArea?.classList.toggle("hidden");
  }
  
  showMenuMobile() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
    const close = document.querySelector('#close');
    menu?.classList.remove("hidden");
    menu?.classList.toggle("menu-active");
  }

  closeMenuMobile() {
    const menu = document.querySelector('#menu');
    menu?.classList.add("hidden");
    menu?.classList.toggle("menu-active");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.add("hidden");
    footer?.classList.add("hidden");
  }

  routingBackToMenu() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    this.router.navigate(['mainpage']);
  }
}

import { IOrder } from './../../models/order';
import { ICartItem } from './../../models/cartItem';
import { ServerHttpService } from './../../Services/server-http.service';
import { PRODUCT } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products: PRODUCT[] = [];
  public orders: IOrder[] = [];

  constructor(private router: Router, private _serverHttp : ServerHttpService) { }

  ngOnInit(): void {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.add("hidden");
    footer?.classList.add("hidden");

    this._serverHttp.getProducts().subscribe(data => {
      this.products = data;
    });

    this._serverHttp.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  routingBackToMenu() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    this.router.navigate(['mainpage']);
  }

  logout() {
    this.router.navigate(['admin']);
  }

  activeContentDashboard(event: any) {
    const tabTitles = document.querySelectorAll(".tab-title");
    const tabContents = document.querySelectorAll(".tab-content");
    const titleDataset = event.target.dataset.title;

    tabContents.forEach((item: any) => {
      if (item.dataset.content === titleDataset){
        tabContents.forEach(item => item.classList.add("hidden")); // hidden hết cả 2 tab content
        item.classList.remove("hidden"); // xóa hidden ở tab content thõa điều kiện dataset === với dataset của tab heading
      }
    }) 

    tabTitles.forEach(item =>item.classList.remove("active"));
    event.target.classList.add("active");
  }

  openModalAddProduct() {
    const modal = document.querySelector('#authentication-modal');
    modal?.classList.remove("hidden");
  }

  closeModalAddProduct() {
    const modal = document.querySelector('#authentication-modal');
    modal?.classList.add("hidden");
  }
}

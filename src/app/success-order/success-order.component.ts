import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItem } from '../models/cartItem';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.scss']
})
export class SuccessOrderComponent implements OnInit, AfterContentChecked {
  public cartList: ICartItem[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem("cartItem") || '[]') : [];
  public totalPrice: number = 0;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.add("hidden");
    footer?.classList.add("hidden");
  }

  ngAfterContentChecked(): void {
    this.totalPrice = this.cartList.reduce(function(previousValue, currentValue) {
      return previousValue += currentValue.price * currentValue.quanlity
    }, 0);   
  }

  routingBackToMenu() {
    // Delete header footer
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header?.classList.remove("hidden");
    footer?.classList.remove("hidden");

    // Delete all localStorage
    localStorage.clear();

    // Routing main page
    this.router.navigate(['mainpage']);
  }

}

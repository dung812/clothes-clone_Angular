import { ICartItem } from './../models/cartItem';
import { PRODUCT } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public cartList: ICartItem[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem("cartItem") || '[]') : [];
  public quanlityCartItem = this.cartList.reduce(function(previousValue, currentValue) {
        return previousValue += currentValue.quanlity
      }, 0);  
  public totalQuanlityCart = this.quanlityCartItem;
  public totalQuanlityCart$ = new BehaviorSubject<number>(this.quanlityCartItem);
  constructor() {}

  public increamentItemCart() {
    this.totalQuanlityCart++;
    this.totalQuanlityCart$.next(this.totalQuanlityCart);
  }

  public descreamentItemCart() {
    this.totalQuanlityCart--;
    this.totalQuanlityCart$.next(this.totalQuanlityCart);
  }

  public deleteItemCart(num: number) {
    this.totalQuanlityCart = this.totalQuanlityCart - num;
    this.totalQuanlityCart$.next(this.totalQuanlityCart);
  }

  public resetItemCart() {
    this.totalQuanlityCart = 0;
    this.totalQuanlityCart$.next(0);
  }

  getGenderRouting() {
    return [
      {id: 1, title: "Nam", name: "for-him", image: "for-him.jpeg", alt: "image-banner-him"},
      {id: 2, title: "Nữ", name: "for-her", image: "for-her.jpeg", alt: "image-banner-her"},
    ];
  }
}

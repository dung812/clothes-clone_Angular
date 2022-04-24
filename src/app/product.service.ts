import { Injectable } from '@angular/core';
import { PRODUCT } from './models/product';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from './models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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
  
  getProducts() {
    const products: PRODUCT[]  = [
      { id: 1, name: "side pants II", image: ["for-him/1a.jpeg", "for-him/1b.jpeg", "for-him/1c.jpeg", "for-him/1d.jpeg"], alt: "clothesforhim", price: 449000, color: 2, gender: "him"},
      { id: 2, name: "great life tee-2022", image: ["for-him/2a.jpeg", "for-him/2b.jpeg", "for-him/2c.jpeg", "for-him/2d.jpeg"], alt: "clothesforhim", price: 179000, color: 2, gender: "him"},
      { id: 3, name: "cuban basic shirt", image: ["for-him/3a.jpeg", "for-him/3b.jpeg", "for-him/3c.jpeg", "for-him/3d.jpeg"], alt: "clothesforhim", price: 399000,color: 3, gender: "him"},
      { id: 4, name: "sss wool polo shirt", image: ["for-him/4a.jpeg", "for-him/4b.jpeg", "for-him/4c.jpeg", "for-him/4d.jpeg"], alt: "clothesforhim", price: 449000, color: 2, gender: "him"},
      { id: 5, name: "Basic Logo Hoodie", image: ["for-him/5a.jpeg", "for-him/5b.jpeg", "for-him/5c.jpeg", "for-him/5d.jpeg"], alt: "clothesforhim", price: 419000, color: 2, gender: "him"},
      { id: 6, name: "cropped denim pants", image: ["for-him/6a.jpeg", "for-him/6b.jpeg", "for-him/6c.jpeg", "for-him/6d.jpeg"], alt: "clothesforhim", price: 449000, color: 1, gender: "him"},
      { id: 7, name: "Mr.S Teddy Polo Shirt", image: ["for-him/7a.jpeg", "for-him/7b.jpeg", "for-him/7c.jpeg", "for-him/7d.jpeg"], alt: "clothesforhim", price: 479000, color: 4, gender: "him"},
      { id: 8, name: "Premium Linen Shirt", image: ["for-him/8a.jpeg", "for-him/8b.jpeg", "for-him/8c.jpeg", "for-him/8d.jpeg"], alt: "clothesforhim", price: 419000, color: 1, gender: "him"},
      { id: 9, name: "Lady Knit" , image: ["for-her/1a.jpeg", "for-her/1b.jpeg", "for-her/1c.jpeg", "for-her/1d.jpeg"], alt: "clothesforher", price: 379000, color: 2, gender: "her"},
      { id: 10, name: "Compo Bodysuit" , image: ["for-her/2a.jpeg", "for-her/2b.jpeg", "for-her/2c.jpeg", "for-her/2d.jpeg"], alt: "clothesforhim", price: 319000, color: 2, gender: "her"},
      { id: 11, name: "Flaming Jacket" , image: ["for-her/3a.jpeg", "for-her/3b.jpeg", "for-her/3c.jpeg", "for-her/3d.jpeg"], alt: "clothesforhim", price: 899000, color: 3, gender: "her"},
      { id: 12, name: "Semi-Set Shirt" , image: ["for-her/4a.jpeg", "for-her/4b.png", "for-her/4c.jpeg", "for-her/4d.jpeg"], alt: "clothesforhim", price: 349000, color: 1, gender: "her"},      
      { id: 13, name: "Spaghetti Strap Dress" , image: ["for-her/5a.jpeg", "for-her/5b.png", "for-her/5c.jpeg", "for-her/5d.jpeg"], alt: "clothesforhim", price: 349000, color: 2, gender: "her"},  
      { id: 14, name: "Red Gingham Dress" , image: ["for-her/6a.jpeg", "for-her/6b.jpeg", "for-her/6c.jpeg", "for-her/6d.jpeg"], alt: "clothesforhim", price: 549000, color: 2, gender: "her"}, 
      { id: 15, name: "Pin Shirt" , image: ["for-her/7a.jpeg", "for-her/7b.jpeg", "for-her/7c.jpeg", "for-her/7d.jpeg"], alt: "clothesforhim", price: 249000, color: 1, gender: "her"}, 
      { id: 16, name: "Angie Dress" , image: ["for-her/8a.jpeg", "for-her/8b.jpeg", "for-her/8c.jpeg", "for-her/8d.jpeg"], alt: "clothesforhim", price: 479000, color: 3, gender: "her"},     
    ];
    return products;
  }
  getGenderRouting() {
    return [
      {id: 1, title: "Nam", name: "for-him", image: "for-him.jpeg", alt: "image-banner-him"},
      {id: 2, title: "Nữ", name: "for-her", image: "for-her.jpeg", alt: "image-banner-her"},
    ];
  }
}

import { Injectable } from '@angular/core';
import { PRODUCT } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    const products: PRODUCT[]  = [
      { id: 1, name: "side pants II", image: "../../../assets/images/product/for-him/him-1.jpeg", alt: "clothesforhim", price: 449000, color: 2, gender: "him"},
      { id: 2, name: "great life tee-2022", image: "../../../assets/images/product/for-him/him-2.jpeg", alt: "clothesforhim", price: 179000, color: 2, gender: "him"},
      { id: 3, name: "cuban basic shirt", image: "../../../assets/images/product/for-him/him-3.jpeg", alt: "clothesforhim", price: 399000,color: 3, gender: "him"},
      { id: 4, name: "sss wool polo shirt", image: "../../../assets/images/product/for-him/him-4.jpeg", alt: "clothesforhim", price: 449000, color: 2, gender: "him"},
      { id: 5, name: "cropped denim pants", image: "../../../assets/images/product/for-him/him-5.jpeg", alt: "clothesforhim", price: 419000, color: 2, gender: "him"},
      { id: 6, name: "Lady Knit" , image: "../../../assets/images/product/for-her/her-1a.jpeg", alt: "clothesforher", price: 379.000, color: 2, gender: "her"},
      { id: 7, name: "Compo Bodysuit" , image: "../../../assets/images/product/for-her/her-2.jpeg", alt: "clothesforhim", price: 319000, color: 2, gender: "her"},
      { id: 8, name: "Flaming Jacket" , image: "../../../assets/images/product/for-her/her-3.jpeg", alt: "clothesforhim", price: 899000, color: 3, gender: "her"},
      { id: 9, name: "Semi-Set Shirt" , image: "../../../assets/images/product/for-her/her-4.jpeg", alt: "clothesforhim", price: 349.000, color: 1, gender: "her"},      
      { id: 10, name: "Spaghetti Strap Dress" , image: "../../../assets/images/product/for-her/her-5.jpeg", alt: "clothesforhim", price: 349.000, color: 2, gender: "her"},      
    ];
    return products;
  }
}

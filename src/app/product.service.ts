import { Injectable } from '@angular/core';
import { PRODUCT } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    const products: PRODUCT[]  = [
      { id: 1, name: "side pants II", image: "../../../assets/images/product/for-him/him-1.jpeg", price: 449000, color: 2, gender: "him"},
      { id: 2, name: "great life tee-2022", image: "../../../assets/images/product/for-him/him-2.jpeg", price: 179000, color: 2, gender: "him"},
      { id: 3, name: "cuban basic shirt", image: "../../../assets/images/product/for-him/him-3.jpeg", price: 399000,color: 3, gender: "him"},
      { id: 4, name: "sss wool polo shirt", image: "../../../assets/images/product/for-him/him-4.jpeg", price: 449000, color: 2, gender: "him"},
      { id: 5, name: "cropped denim pants", image: "../../../assets/images/product/for-him/him-5.jpeg", price: 419000, color: 2, gender: "him"},
      { id: 6, name: "test" , image: "../../../assets/images/product/for-her/her-1.jpeg", price: 319000, color: 2, gender: "her"},
    ];
    return products;
  }
}

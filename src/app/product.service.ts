import { Injectable } from '@angular/core';
import { PRODUCT } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    const products: PRODUCT[]  = [
      { id: 1, name: "side pants II",image: "1.jpeg", price: 449000, promotionPrice: 404100, promotion: 10, color: 2, gender: "him"},
      { id: 2, name: "great life tee-2022",image: "2.jpeg", price: 179000, promotionPrice: 161100, promotion: 10, color: 2, gender: "him"},
      { id: 3, name: "cuban basic shirt",image: "3.jpeg", price: 399000, promotionPrice: 359100, promotion: 10, color: 3, gender: "him"},
      { id: 4, name: "sss wool polo shirt",image: "4.jpeg", price: 449000, promotionPrice: 404100, promotion: 10, color: 2, gender: "him"},
      { id: 5, name: "cropped denim pants",image: "5.jpeg", price: 419000, promotionPrice: 377100, promotion: 10, color: 2, gender: "him"},
      { id: 6, name: "mr.s teddy polo shirt",image: "6.jpeg", price: 420000, promotionPrice: 378000, promotion: 10, color: 3, gender: "him"},
      { id: 7, name: "sss teddy tee",image: "7.jpeg", price: 299000, promotionPrice: 269100, promotion: 10, color: 2, gender: "him"},
      { id: 8, name: "sss smiley tee",image: "8.jpeg", price: 319000, promotionPrice: 159500, promotion: 50, color: 2, gender: "him"},
    ];
    return products;
  }
}

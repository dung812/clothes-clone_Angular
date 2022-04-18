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
      { id: 5, name: "Basic Logo Hoodie", image: "../../../assets/images/product/for-him/him-5.jpeg", alt: "clothesforhim", price: 419000, color: 2, gender: "him"},
      { id: 6, name: "cropped denim pants", image: "../../../assets/images/product/for-him/him-6.jpeg", alt: "clothesforhim", price: 449000, color: 1, gender: "him"},
      { id: 7, name: "Mr.S Teddy Polo Shirt", image: "../../../assets/images/product/for-him/him-7.jpeg", alt: "clothesforhim", price: 479000, color: 4, gender: "him"},
      { id: 8, name: "Premium Linen Shirt", image: "../../../assets/images/product/for-him/him-8.jpeg", alt: "clothesforhim", price: 419000, color: 1, gender: "him"},
      { id: 9, name: "Lady Knit" , image: "../../../assets/images/product/for-her/her-1a.jpeg", alt: "clothesforher", price: 379000, color: 2, gender: "her"},
      { id: 10, name: "Compo Bodysuit" , image: "../../../assets/images/product/for-her/her-2.jpeg", alt: "clothesforhim", price: 319000, color: 2, gender: "her"},
      { id: 11, name: "Flaming Jacket" , image: "../../../assets/images/product/for-her/her-3.jpeg", alt: "clothesforhim", price: 899000, color: 3, gender: "her"},
      { id: 12, name: "Semi-Set Shirt" , image: "../../../assets/images/product/for-her/her-4.jpeg", alt: "clothesforhim", price: 349000, color: 1, gender: "her"},      
      { id: 13, name: "Spaghetti Strap Dress" , image: "../../../assets/images/product/for-her/her-5.jpeg", alt: "clothesforhim", price: 349000, color: 2, gender: "her"},  
      { id: 14, name: "Red Gingham Dress" , image: "../../../assets/images/product/for-her/her-6.jpg", alt: "clothesforhim", price: 549000, color: 2, gender: "her"}, 
      { id: 15, name: "Pin Shirt" , image: "../../../assets/images/product/for-her/her-7.jpg", alt: "clothesforhim", price: 249000, color: 1, gender: "her"}, 
      { id: 16, name: "Angie Dress" , image: "../../../assets/images/product/for-her/her-8.png", alt: "clothesforhim", price: 479000, color: 3, gender: "her"},     
    ];
    return products;
  }
  getGenderRouting() {
    return [
      {id: 1, title: "Nam", name: "for-him", image: "../../../assets/images/main-page/for-him.jpeg", alt: "image-banner-him"},
      {id: 2, title: "Nữ", name: "for-her", image: "../../../assets/images/main-page/for-her.jpeg", alt: "image-banner-her"},
    ];
  }
}

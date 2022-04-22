import { Component, HostBinding, OnInit } from '@angular/core';
import { ICartItem } from './models/cartItem';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  buttonTypes = ['primary', 'danger'];
  buttonType = 'primary';

  public cartList: ICartItem[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem("cartItem") || '[]') : [];
  public quanlityCartItem: number = 0;

  constructor(private _productService: ProductService) {

  }
  ngOnInit(): void {
     // this.quanlityCartItem = this.cartList.reduce(function(previousValue, currentValue) {
      //   return previousValue += currentValue.quanlity
      // }, 0);   

    this._productService.totalQuanlityCart$.subscribe((total) => {
      this.quanlityCartItem = total;
    });

  }
}

import { Component, HostBinding, AfterContentChecked } from '@angular/core';
import { ICartItem } from './models/cartItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  buttonTypes = ['primary', 'danger'];
  buttonType = 'primary';

  public cartList: ICartItem[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem("cartItem") || '[]') : [];
  public quanlityCartItem: number = 0;
  
  ngAfterContentChecked(): void {
    this.quanlityCartItem = this.cartList.reduce(function(previousValue, currentValue) {
      return previousValue += currentValue.quanlity
    }, 0);   
  }
}

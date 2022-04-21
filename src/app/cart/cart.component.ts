import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  changeQuanlity(event: any) {
    const currentInput = event.target.parentElement.querySelector('input');
    let num = parseInt(currentInput.value);
    if (event.target.dataset.quanlity === 'descrease') {
      if (num > 1) {
        num--;
        (currentInput as HTMLInputElement).value = String(num);
      }
    } else if (event.target.dataset.quanlity === 'inscreate') {
      num++;
      (currentInput as HTMLInputElement).value = String(num);
    }
  }

  activePayment(event: any) {
    const paymentItems = document.querySelectorAll('.payment_item');
    paymentItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const inputChecked = document.querySelectorAll('.checkbox-round');
    inputChecked.forEach(item => {
      const inputI = item as HTMLInputElement;
      inputI.checked = false;
    });
    const currentChecked = event.currentTarget.querySelector('.checkbox-round') as HTMLInputElement;
    currentChecked.checked = true;
  }

  deteleProductInCart(event: any) {
    const currentProduct = event.currentTarget.parentElement;
    const listItemCart = document.querySelector(".list_cart");
    listItemCart?.removeChild(currentProduct);

  }

}

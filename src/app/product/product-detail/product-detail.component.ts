import { PRODUCT } from './../../models/product';
import { ServerHttpService } from './../../Services/server-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CommonService } from './../../Services/common.service';
import { ICartItem } from '../../models/cartItem';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public idProduct: number = 0;
  public productDetail :any;
  public temp :any;

  constructor(private _commonService: CommonService, private _serverHttp : ServerHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id') || '');
      this.idProduct = id;
    });

    this._serverHttp.getProducts().subscribe((data: PRODUCT[]) => {
      this.productDetail = data.find(p => p.id === this.idProduct);
    });
  }

  activeSizeItem(event: any) {
    const sizeItem = document.querySelectorAll('.size_item');
    sizeItem.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }

  openModalTurorial(event: any) {
    const tutorialDataset = event.currentTarget.dataset.tutorial;
    const modal = document.querySelector('.modal');
    modal?.classList.add('active');

    const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
    tutorialContent?.forEach((item: any) => { // loop all content tutorial in modal
      if (item.dataset.content === tutorialDataset) {
        item.classList.remove('hidden');
      } 
    })
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('active');
    const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
    tutorialContent?.forEach((item: any) => item.classList.add('hidden'));
  }

  closeModalOutside(event: any) {
    if (event.target.matches(".modal")) {
      const modal = document.querySelector('.modal');
      modal?.classList.remove('active');
      const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
      tutorialContent?.forEach((item: any) => item.classList.add('hidden'));
    }
  }
 
  addItemCart(productDetail: any) {
    // kiểm tra xem có ls cartItem ko, nếu ko thì [], có thì lấy ra mảng cartItem và parse json
    const cartList: ICartItem[] = localStorage.length > 0 ? JSON.parse(localStorage.getItem("cartItem") || '[]') : [];
    const product = [...cartList].find(item => item.id === productDetail.id);
    const quanlityOfProduct = product?.quanlity ?? 1;
    
    let productItem;
    // Kiểm tra xem product id nhập vào đã tồn tại trong list hay chưa
    if (product) { // Nếu có tồn tại thì duyệt list lấy product quanlity + 1
      const itemIndex = [...cartList].findIndex(item => item.id === productDetail.id);
      cartList[itemIndex].quanlity = quanlityOfProduct + 1;
    }
    else { // Nếu không tồn tại trong list thì thêm mới
      productItem = {
        id: productDetail.id,
        name: productDetail.name,
        image: productDetail.image[1],
        price: productDetail.price,
        quanlity: quanlityOfProduct
      }
      cartList.push(productItem);
    }
    localStorage.setItem("cartItem", JSON.stringify(cartList));
    alert(`Thêm thành công sản phẩm "${productDetail.name}" vào giỏ hàng`);
    this._commonService.increamentItemCart();
  }
}

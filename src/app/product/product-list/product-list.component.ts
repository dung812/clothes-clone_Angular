import { CommonService } from './../../Services/common.service';
import { PRODUCT } from './../../models/product';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterContentChecked {

  public productGender: string = "";
  genderTitle: string = "";
  
  public categoryList = ['sơ mi & áo kiểu','áo thun', 'quần', 'leo dệt', 'phụ kiện', 'áo blazer & áo khoác', 'quần bò', 'quần short', 'giày', 'túi & ví', 'đồ bơi & đồ đi biển', 'hoodies & sweatshirt'];
  
  public filterList = [
    { id: 1, name: "màu sắc", items: ["trắng", "vàng chanh", "Oliu", "Oliu đậm", "Vàng gừng", "Khaki", "Nâu nhạt", "KhaKi Rêu"]},
    { id: 2, name: "size quần/áo", items: ["0", "1", "2", "3", "4", "5"]},
    { id: 3, name: "size quần jeans", items: ["29", "30", "31", "32", "33", "34", "35"]},
    { id: 4, name: "size giày", items: ["39", "40", "41", "42", "43", "44"]},
    { id: 5, name: "Mức giá", items: ["dưới 100k", "100k - 300k", "300k - 500k", "trên 500k"]},
    { id: 6, name: "Sắp xếp", items: ["giá tăng dần", "giá giảm dần"]},
  ]

  public products: PRODUCT[] = [];

  constructor(private _commonService: CommonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let gender = String(params.get('gender'));
      this.productGender = gender;
    });
  }
  
  ngAfterContentChecked() {
    if (this.productGender === "for-him") {
      this.products = this._commonService.getProducts().filter(e => e.gender === "him");
      // this.genderTitle = "for him";
      this.genderTitle = "Quần áo nam";
    }
    else if (this.productGender === "for-her") {
      this.products = this._commonService.getProducts().filter(e => e.gender === "her");
      // this.genderTitle = "for her";
      this.genderTitle = "Quần áo nữ";
    }
    else {
      this.router.navigate(['pagenotfound']);
    }
  }

  showFilterItem(event:any) {
    const filterItem = event.target.nextElementSibling.querySelector("ul");
    filterItem.style.height = `${filterItem.scrollHeight}px`;
    filterItem.classList.toggle("active");
    if (!filterItem.classList.contains("active")) {
      filterItem.style.height = "0px";
    }
  }

  showCategoryList() {
    const categoryItem = document.querySelector('.category_item');
    categoryItem?.classList.toggle('active');
  }

  showFilterList() {
    const filterList = document.querySelector('.filter_list');
    filterList?.classList.add('active');
  }

  closeFilterList() {
    const filterList = document.querySelector('.filter_list');
    filterList?.classList.remove('active');
  }

  showProductDetail(product: any) {
    this.router.navigate(['product-detail', product.id]);
  }

  scrollTop() {
    window.scrollTo(0,0);
  }
}

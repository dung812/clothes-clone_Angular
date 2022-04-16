import { Component, OnInit } from '@angular/core';
import { PRODUCT } from './../models/product';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  genderList: any = [];

  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.genderList = this._productService.getGenderRouting();
  }

  closeSearchArea() {
    const searchArea = document.querySelector("#search-area");
    searchArea?.classList.toggle("hidden");
  }
  
  showMenuMobile() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
    const close = document.querySelector('#close');
    menu?.classList.remove("hidden");
    menu?.classList.toggle("menu-active");
  }

  closeMenuMobile() {
    const menu = document.querySelector('#menu');
    menu?.classList.add("hidden");
    menu?.classList.toggle("menu-active");
  }

  onSelect(gender: any) {
    this.router.navigate(['product', gender.name]);
    // this.router.navigate(['product',{gender: gender.name}]);
    // this.router.navigate([product.gender], {relativeTo: this.route});
  }
}

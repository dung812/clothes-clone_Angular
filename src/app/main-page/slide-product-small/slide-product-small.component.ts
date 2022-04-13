import { ProductService } from './../../product.service';
import { PRODUCT } from './../../models/product';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slide-product-small',
  templateUrl: './slide-product-small.component.html',
  styleUrls: ['./slide-product-small.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideProductSmallComponent implements OnInit {

  public productHim: PRODUCT[] = []
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    const listProductHim = this._productService.getProducts().filter(e => e.gender === "him");
    this.productHim = listProductHim;
  };

  activeCategory():void {

  }
}

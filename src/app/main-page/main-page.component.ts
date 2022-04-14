import { PRODUCT } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {

  public productForHim: PRODUCT[] = [];
  public productForHer: PRODUCT[] = [];


  slides = [
    {
      id:1,
      srcDesktop:'../../assets/images/banner/banner-1.jpeg',
      srcMobile:'../../assets/images/banner/banner-1-mobile.jpeg',
      alt:'Banner_1',
      url:'/product'
    },
    {
      id:2,
      srcDesktop:'../../assets/images/banner/banner-2.jpeg',
      srcMobile:'../../assets/images/banner/banner-2-mobile.jpeg',
      alt:'Banner_2',
      url:'/product'
    },
  ];

  public productSlide = [
    { id: "1", name: "compo jeans", image: "../../../assets/images/main-page/style-pick/1.jpeg", alt: "quan nam", price: "299000", color: "2"},
    { id: "2", name: "cropped pants", image: "../../../assets/images/main-page/style-pick/2.jpeg", alt: "quan nam", price: "239000", color: "3"},
    { id: "3", name: "compo bodysuit", image: "../../../assets/images/main-page/style-pick/3.jpeg", alt: "bo do nam", price: "999000", color: "2"},
    { id: "4", name: "prince coat", image: "../../../assets/images/main-page/style-pick/4.jpeg", alt: "ao nam", price: "199000", color: "2"},
    { id: "5", name: "sss. sweatset", image: "../../../assets/images/main-page/style-pick/5.jpeg", alt: "quan nam", price: "299000", color: "2"},
    { id: "6", name: "prince flannel shirt", image: "../../../assets/images/main-page/style-pick/6.jpeg", alt: "ao nam", price: "329000", color: "3"},
  ];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.productForHim = this._productService.getProducts().filter(e => e.gender === "him");
    this.productForHer = this._productService.getProducts().filter(e => e.gender === "her");
  };

  activeCategory(event:any):void {
    const categoryItem = document.querySelectorAll(".category-item");
    const slides = document.querySelectorAll('.sliderProduct');
    const titleDataset = event.target.dataset.title;

    slides.forEach((item: any) => {
      if (item.dataset.content === titleDataset){
        slides.forEach(item => item.classList.add("hidden"));
        item.classList.remove("hidden")
      }
    });
    categoryItem.forEach(item =>item.classList.remove("active"));
    event.target.classList.add("active");
  }

  activeProduct(event: any):void {
    const tabsHeading = document.querySelectorAll(".tabs-heading");
    const tabsContent = document.querySelectorAll(".tabs-content");
    const titleDataset = event.target.dataset.title;

    tabsContent.forEach((item: any) => {
      if (item.dataset.content === titleDataset){
        tabsContent.forEach(item => item.classList.add("hidden")); // hidden hết cả 2 tab content
        item.classList.remove("hidden"); // xóa hidden ở tab content thõa điều kiện dataset === với dataset của tab heading
      }
    });

    tabsHeading.forEach(item =>item.classList.remove("active"));
    event.target.classList.add("active");
  }
}

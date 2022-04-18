import { PRODUCT } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  genderList: any = [];

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

  public blogs = [
    { id: "1", title: "6 BÍ QUYẾT PHỐI MÀU GIÚP OUTFIT CỦA BẠN TRỞ NÊN NỔI BẬT HƠN", image: "background-image:url(../../assets/images/main-page/ssstory/1644568834577.jpeg)" },
    { id: "2", title: "6 mẹo giúp tăng tuổi thọ của quần áo hơn 3 năm", image: "background-image:url(../../assets/images/main-page/ssstory/1636339479194.jpeg)" },
    { id: "3", title: "Những items làm từ vải Linen mà bạn không thể bỏ qua", image: "background-image:url(../../assets/images/main-page/ssstory/1636339044098.jpeg)" },
    { id: "4", title: "5 mẹo bất hủ để bảo quản chiếc áo trắng của bạn", image: "background-image:url(../../assets/images/main-page/ssstory/1636338432145.jpeg)" },
  ]

  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.genderList = this._productService.getGenderRouting();
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

  onSelect(gender: any) {
    this.router.navigate(['product', gender.name]);
  }

  showProductDetail(product: any) {
    this.router.navigate(['product-detail', product.id]);
  }
  scrollTop() {
    window.scrollTo(0,0);
  }

  routingBlogDetail() {
    this.router.navigate(['blog-detail']);
  }
}

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


  slidesStore = [
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
  constructor() {
  }

  ngOnInit(): void {

  }
}

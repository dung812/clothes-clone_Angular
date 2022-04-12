import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { SLIDE } from "../../models/slide";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CarouselComponent implements OnInit {
  width: number = document.documentElement.clientWidth;
  @Input() slides: SLIDE[] = [];


  constructor() {
  }


  ngOnInit(): void {

  }

}

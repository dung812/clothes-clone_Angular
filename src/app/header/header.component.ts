import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ICartItem } from '../models/cartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() quanlityCart: number = 0;

  genderList: any = [];

  constructor(private _commonService: CommonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.genderList = this._commonService.getGenderRouting();
  }

  ngAfterViewInit() {
    const navItem = document.querySelectorAll(".nav_item a");
    navItem.forEach(item => item.addEventListener("click", () => {
      const menu = document.querySelector('#menu');
      if (menu?.classList.contains("menu-active")) {
        const menu = document.querySelector('#menu');
        menu?.classList.add("hidden");
        menu?.classList.toggle("menu-active");
      }
    }));
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
  scrollTop() {
    window.scrollTo(0,0);
  }
}

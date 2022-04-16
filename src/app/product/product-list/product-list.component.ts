import { ProductService } from './../../product.service';
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

  public products: PRODUCT[] = [];

  constructor(private _productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let gender = String(params.get('gender'));
      this.productGender = gender;
    });
  }

  ngAfterContentChecked() {
    window.scrollTo(0,0); // Auto scroll top
    if (this.productGender === "for-him") {
      this.products = this._productService.getProducts().filter(e => e.gender === "him");
    }
    else if (this.productGender === "for-her") {
      this.products = this._productService.getProducts().filter(e => e.gender === "her");
    }
    else {
      this.router.navigate(['pagenotfound']);
    }
  }
}

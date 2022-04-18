import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public idProduct: number = 0;
  public productDetail : any;

  constructor(private _productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id') || '');
      this.idProduct = id;
    });
    this.productDetail = this._productService.getProducts().find(p => p.id === this.idProduct);
  }

}

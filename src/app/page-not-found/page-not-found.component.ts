import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../models/product';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

}

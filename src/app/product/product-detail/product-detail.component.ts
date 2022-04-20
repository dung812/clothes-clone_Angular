import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {

  }
  

  activeSizeItem(event: any) {
    const sizeItem = document.querySelectorAll('.size_item');
    sizeItem.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }

  openModalTurorial(event: any) {
    const tutorialDataset = event.currentTarget.dataset.tutorial;
    const modal = document.querySelector('.modal');
    modal?.classList.add('active');

    const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
    tutorialContent?.forEach((item: any) => { // loop all content tutorial in modal
      if (item.dataset.content === tutorialDataset) {
        item.classList.remove('hidden');
      } 
    })
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('active');
    const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
    tutorialContent?.forEach((item: any) => item.classList.add('hidden'));
  }

  closeModalOutside(event: any) {
    if (event.target.matches(".modal")) {
      const modal = document.querySelector('.modal');
      modal?.classList.remove('active');
      const tutorialContent = modal?.querySelectorAll(".tutorial_content"); 
      tutorialContent?.forEach((item: any) => item.classList.add('hidden'));
    }
  }
  
}

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { IOrder } from './../../models/order';
import { ICartItem } from './../../models/cartItem';
import { ServerHttpService } from './../../Services/server-http.service';
import { PRODUCT } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public products: PRODUCT[] = [];
  public orders: IOrder[] = [];
  public gender = ['him', 'her'];
  public selectedGender = this.gender[0];
  public listImage = [];
  public updateId = null;
  public orderDetail: IOrder = {
    id: 0,
    dayOrder: '',
    status: true,
    totalPrice: 0,
    products: [{
      id: 0,
      name: '',
      image: '',
      price: 0,
      quanlity: 0
    }],
    orderer: '',
    phone: 0,
    address: '',
    email: ''
  };

  public productForm = this.fb.group({
    name: [''],
    alt: [''],
    price: [''],
    color: [''],
    gender: [''],

    image: this.fb.array([this.fb.control('')]),
  });

  constructor( private router: Router, private _serverHttp: ServerHttpService, private fb: FormBuilder ) {
    document.title = 'Bảng điều khiển website';
    const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
    favIcon.href = '../../../assets/images/favicon/admin.png';
  }

  ngOnInit(): void {
    // Remove header & footer in customer page
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header?.classList.add('hidden');
    footer?.classList.add('hidden');

    // Change title website
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        document.title = 'Bảng điều khiển website';
        const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
        favIcon.href = '../../../assets/images/favicon/admin.png';
      } else {
        document.title = 'Quay lại bạn ơi!';
        const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
        favIcon.href = '../../../assets/images/favicon/hand.png';
      }
    });

    // Get data API
    this.getListProductHTTP();
    this.getListOrderHTTP();
  }


  // HANDLE API
  public getListOrderHTTP(): void {
    this._serverHttp.getOrders().subscribe((data) => {
      this.orders = data.sort((a: any, b: any) => (a.id < b.id ? 1 : -1)); // Sắp xếp giảm dần id (mới lên đầu)
    });
  }
  public getListProductHTTP(): void {
    this._serverHttp.getProducts().subscribe((data) => {
      this.products = data.sort((a: any, b: any) => (a.id < b.id ? 1 : -1)); // Sắp xếp giảm dần id (mới lên đầu)
    });
  }


  routingBackToMenu() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header?.classList.remove('hidden');
    footer?.classList.remove('hidden');
    this.router.navigate(['mainpage']);

    document.title = 'Clothes world';
    const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
    favIcon.href = '../../../assets/images/favicon/icon.png';
  }

  logout() {
    this.router.navigate(['admin']);
  }

  activeContentDashboard(event: any) {
    const tabTitles = document.querySelectorAll('.tab-title');
    const tabContents = document.querySelectorAll('.tab-content');
    const titleDataset = event.target.dataset.title;

    tabContents.forEach((item: any) => {
      if (item.dataset.content === titleDataset) {
        tabContents.forEach((item) => item.classList.add('hidden')); // hidden hết cả 2 tab content
        item.classList.remove('hidden'); // xóa hidden ở tab content thõa điều kiện dataset === với dataset của tab heading
      }
    });

    tabTitles.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
  }

  openModalProduct() {
    this.resetForm();
    this.updateId = null;
    const titleModal = document.querySelector("#title-modal") as HTMLElement;
    titleModal.textContent = "Thêm mới sản phẩm";
    const modal = document.querySelector('#authentication-modal');
    modal?.classList.remove('hidden');

    // Hide add image area  
    const addImageArea = document.querySelector("#add_images");
    addImageArea?.classList.remove("hidden");
    
    const displayImageArea = document.querySelector("#display_images");
    displayImageArea?.classList.add("hidden");
  }

  closeModalProduct() {
    const modal = document.querySelector('#authentication-modal');
    modal?.classList.add('hidden');
  }

  closeOrderModal() {
    const modal = document.querySelector('#order-modal');
    modal?.classList.add('hidden');
  }
  
  openOrderModal(order: IOrder) {
    const modal = document.querySelector('#order-modal');
    modal?.classList.remove('hidden');
    this.orderDetail = order;
  }

  // Handle delete product
  deleteProduct(productId: number) {
    let message = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if(message) {
      // this.deleteProductHTTP(productId);
      this._serverHttp.deleteProduct(productId).subscribe((data) => {
      this.products = this.products.filter(item => item.id !== productId);
        alert('Xóa thành công');
      });
      // this.getListProductHTTP();
    }
  }
  // Handle edit product
  editProduct(productId: number) {
    const titleModal = document.querySelector("#title-modal") as HTMLElement;
    titleModal.textContent = "Thêm mới sản phẩm";
    this._serverHttp.getSingleProduct(productId).subscribe((data) => {
      this.listImage = data.image;
      // Load data in form
      this.productForm.patchValue({
        name: data.name,
        price: data.price,
        alt: data.alt,
        color: data.color,
        gender: data.gender,
        });
      this.updateId = data.id;
    });
    this.openModalProduct();

    // Hide add image area
    const addImageArea = document.querySelector("#add_images");
    addImageArea?.classList.add("hidden");

    const displayImageArea = document.querySelector("#display_images");
    displayImageArea?.classList.remove("hidden");
  }

  // Handle add product
  public resetForm() {
    this.productForm.patchValue({
      name: '',
      price: null,
      alt: '',
      color: null,
      gender: '',
      image: []
      });
    this.productForm.reset();
  }

  selectGender(event: any) {
    this.selectedGender = event.target.value;
  }

  get image() {
    return this.productForm.get('image') as FormArray;
  }

  addImage() {
    this.image.push(this.fb.control(''));
  }

  public createNewData(): PRODUCT {
    let newProduct: PRODUCT;
    newProduct = this.productForm.value;
    newProduct.gender = this.selectedGender;
    return newProduct;
  }

  onSubmit() {
    /*
      console.log(this.productForm.controls['name'].value); // chỉ lấy 1 value input
      console.log(this.productForm); // lấy hết value input trả ra 1 object
      this.productForm.controls['gender'].setValue(this.selectedGender); // Sửa giá trị 1 key trong object
    */
    const newProduct =  this.createNewData();

    // Save data
    if(this.updateId) {
      let newListImage = []
      for(let i = 0; i < this.listImage.length; i++) {
        const input = document.querySelector(`#imageList-${i}`)as HTMLInputElement;
        newListImage.push(input.value);
      }
      newProduct.image = newListImage;
      this._serverHttp.modifyProduct(this.updateId, newProduct).subscribe((data) => {
        this.products.forEach(item => {
          if (item.id === this.updateId){
            item.name = newProduct.name;
            item.price = newProduct.price;
            item.image = newProduct.image;
            item.alt = newProduct.alt;
            item.color = newProduct.color;
            item.gender = newProduct.gender;
          }
        });
        alert('Sửa thành công sản phẩm: ' + data.name);
      });

    }
    else {
      this._serverHttp.addProduct(newProduct).subscribe((data) => {
        this.products.push({id: this.products.length + 1, ...newProduct});
        this.products = this.products.sort((a: any, b: any) => (a.id < b.id ? 1 : -1));
        alert('Thêm thành công sản phẩm: ' + data.name);
      });
      this.resetForm();
    }
    this.closeModalProduct();
  }

    // === ORDER ====
    checkingOrder(orderId: number) {
      this._serverHttp.modifyOrder(orderId, {status: true}).subscribe(data => {
        alert("Duyệt đơn hàng thành công!");
        [...this.orders].forEach(item => {
          if (item.id === orderId) {
            item.status = true;
          }
        });
        this.getListOrderHTTP();
        const modal = document.querySelector('#order-modal');
        modal?.classList.add('hidden');
      });
    }
  
    deleteOrder(orderId: number) {
      let message = confirm("Bạn có chắc muốn xóa đơn hàng này?");
      if(message) {
        this._serverHttp.deleteOrder(orderId).subscribe(data => {
          alert("Xóa thành công đơn hàng: #HD" + data);
          this.orders = this.orders.filter(item => item.id !== orderId);
          this.getListOrderHTTP(); 
          const modal = document.querySelector('#order-modal');
          modal?.classList.add('hidden');
        })
      }
    }
}

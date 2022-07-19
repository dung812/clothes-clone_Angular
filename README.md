# Giới thiệu dự án: Clone website bán quần áo https://ssstutter.com

## Mục tiêu
Xây dựng một project mini đơn giản để ứng dụng kiến thức đã học vào project Angular

* Đơn giản, không phức tạp
* Tập trung Clone giao diện, responsive giống website chính
* Fake các chức năng mua hàng như Web-App có backend xử lý
* Tương tác với dữ liệu qua RESTFULL API

## Project này build cái gì?

`SHOPPING CLOTHES APP`

* Web-App đơn giản bán quần áo clone từ website https://ssstutter.com
* Là project đầu tiên về Angular, mục đích project là để áp dụng các kiến thức đã học vào project thực tế

* Gồm có 2 trang:
	* `Main`: trang khách hàng để mua sản phẩm, đọc bài viết.
	* `Admin`: dùng để quản lý đơn hàng và sản phẩm.
* Mỗi product gồm: `name` + `image` + `alt` + `price` + `color` + `gender`

* Các chức năng:
  * Call API list sản phẩm render theo danh sách
  * Xem chi tiết sản phẩm
  * Xử lý thêm xóa sửa giỏ hàng lưu trên localStorage
  * Thanh toán đơn hàng và lưu lại đơn hàng trên dữ liệu ảo
  * Validate form
  * Đăng nhập trang quản lý Admin
  * CRUD operators list sản phẩm render dữ liệu lên trang bán hàng (Call API)
  * Xem, xóa đơn hàng, duyệt đơn hàng, In đơn hàng (Call API)
  * Dữ liệu ảo tạo từ JSON Server

## Công nghệ sử dụng trong project này
* `Angular Framework`  
* UI lib: `TailwindCC` và `SCSS`
* `JSON Server`

## Knowledge
* Structural directive ngIf, ngFor, ngReapet, ng-template,…: sử dụng để hiển thị HTML và hiển thị dữ liệu lên giao diện HTML
* Service: sử dụng để xử lý các đoạn code được tái sử dụng lại nhiều lần như khởi tạo dữ liệu, xử lý HTTP request được gọi để dùng chung cho nhiều component.
* Reactive form: sử dụng để xử lý nhập dữ liệu ở các biểu mẫu, validate và lưu trữ dữ liệu người dùng nhập.
* Pipe: sử dụng để định dạng dữ liệu từ controller trả ra view
* Behavios Subject: sử dụng cho chức năng giỏ hàng
* JSON Server: mô phỏng dữ liệu cho website
* HTTP Request: code các HTTP request như thêm, xóa, sửa, sản phẩm và cập nhập hóa đơn trong danh sách dữ liệu API trả về
* Router: sử dụng để định tuyến tới các component.
* LocalStorage: lưu trữ sản phẩm giỏ hàng và sử lý thanh toán.
* …

## Video demo
[Youtube](https://www.youtube.com/watch?v=7aDkhCzZJcw)
<a href="https://www.youtube.com/watch?v=7aDkhCzZJcw" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

# ClothesClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

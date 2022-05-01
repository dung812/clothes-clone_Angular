import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginAdminForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) {
    document.title = "Đăng nhập admin";
    const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
    favIcon.href = '../../../assets/images/favicon/login.png';
   }

  ngOnInit(): void {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.add("hidden");
    footer?.classList.add("hidden");

    document.addEventListener('visibilitychange', function(){
          if(document.visibilityState === "visible"){
              document.title = "Đăng nhập admin";
              const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
              favIcon.href = '../../../assets/images/favicon/login.png';
          }
          else {
              document.title = "Quay lại bạn ơi!";
              const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
              favIcon.href = '../../../assets/images/favicon/hand.png';
          }
      });
  }

  routingBackToMenu() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    this.router.navigate(['mainpage']);

    document.title = "Clothes world";
    const favIcon = document.querySelector('#favIcon') as HTMLLinkElement;
    favIcon.href = '../../../assets/images/favicon/icon.png';
  }

  submitFormAdmin(event :any) {
    let username = event.target.username.value;
    let password = event.target.password.value;

    if (username === "admin" && password === "admin") {
      this.router.navigate(['dashboard']);
    }
    else {
      document.querySelector("#message_error")?.classList.remove("hidden");
    }
  }

}

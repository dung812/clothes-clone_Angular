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

  constructor(private router: Router) { }

  ngOnInit(): void {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.add("hidden");
    footer?.classList.add("hidden");
  }

  routingBackToMenu() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    this.router.navigate(['mainpage']);
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

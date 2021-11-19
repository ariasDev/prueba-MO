import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formTitle: String = "Login";
  redirectionButtomText: String = "signup";

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goto(): void {
    this.router.navigate([this.redirectionButtomText]);
  }

}

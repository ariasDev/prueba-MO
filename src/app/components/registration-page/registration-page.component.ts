import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  formTitle: String = "SIGNUP";
  redirectionButtomText: String = "login";

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goto(): void {
    this.router.navigate([this.redirectionButtomText]);
  }

}

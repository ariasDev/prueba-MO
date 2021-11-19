import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formTitle: String = "Login";
  redirectionButtomText: String = "signup";
  userForm: FormGroup;

  constructor(
    public readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  goto(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigate(['profile']);
    } else {
      alert('Invalid form');
    }
  }

}

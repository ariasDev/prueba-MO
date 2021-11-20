import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginResponseModel } from 'src/app/models/LoginResponseModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  formTitle: String = "Login";
  redirectionButtomText: String = "signup";
  userForm: FormGroup;
  loginSubscription: Subscription;

  constructor(
    public readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly authServiceService: AuthServiceService
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
      const loginModel: LoginModel = {
        email: this.userForm.get('email').value,
        password: this.userForm.get('password').value,
      };
      this.loginSubscription = this.authServiceService.login(loginModel).subscribe((response: LoginResponseModel) => {
        if (response !== null && response.token !== null) {
          this.router.navigate(['profile']);
        } else {
          alert('Internal server error');
        }
      });
    } else {
      alert('Invalid form');
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

}

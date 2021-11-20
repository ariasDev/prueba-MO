import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginResponseModel } from 'src/app/models/LoginResponseModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';

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
    private readonly authServiceService: AuthServiceService,
    private readonly browserStorageService: BrowserStorageService
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

  login(): void {
    if (this.userForm.valid) {
      const loginModel: LoginModel = {
        email: this.userForm.get('email').value,
        password: this.userForm.get('password').value,
      };
      this.callAuthService(loginModel);
    } else {
      alert('Invalid form');
    }
  }

  callAuthService(loginModel: LoginModel): void {
    this.loginSubscription = this.authServiceService.login(loginModel).subscribe((response: LoginResponseModel) => {
      if (response !== null && response.token !== null) {
        this.saveUserInfoIntoBrowserStorage(response.token);
        this.router.navigate(['profile']);
      } else {
        alert('Internal server error');
      }
    });
  }

  saveUserInfoIntoBrowserStorage(token: string): void {
    this.browserStorageService.setItem('token', token);
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

}

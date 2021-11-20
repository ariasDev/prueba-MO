import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationModel } from 'src/app/models/RegistrationModel';
import { RegistrationResponseModel } from 'src/app/models/RegristrationResponseModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit, OnDestroy {

  formTitle: String = "SIGNUP";
  redirectionButtomText: String = "login";
  userForm: FormGroup;
  registrationSubscription: Subscription;

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
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  register(): void {
    if (this.userForm.valid) {
      const registrationModel: RegistrationModel = {
        email: this.userForm.get('email').value,
        name: this.userForm.get('fullName').value,
        password: this.userForm.get('password').value,
      }
      this.callAuthService(registrationModel);
    } else {
      alert('Invalid form');
    }
  }

  callAuthService(registrationModel: RegistrationModel): void {
    this.registrationSubscription = this.authServiceService.register(registrationModel).subscribe((response: RegistrationResponseModel) => {
      if (response !== null && response.id !== null) {
        this.router.navigate(['login']);
      } else {
        alert('Internal server error');
      }
    });
  }

  ngOnDestroy(): void {
    this.registrationSubscription.unsubscribe();
  }

}

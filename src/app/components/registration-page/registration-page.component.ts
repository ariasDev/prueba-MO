import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { RegistrationModel } from 'src/app/models/RegistrationModel';
import { RegistrationResponseModel } from 'src/app/models/RegristrationResponseModel';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  formTitle: String = "SIGNUP";
  redirectionButtomText: String = "login";
  userForm: FormGroup;

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

  goto(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const registrationModel: RegistrationModel = {
        email: this.userForm.get('email').value,
        name: this.userForm.get('fullName').value,
        password: this.userForm.get('password').value,
      }
      this.authServiceService.register(registrationModel).subscribe((response: RegistrationResponseModel) => {
        if (response !== null && response.id !== null) {
          this.router.navigate(['profile']);
        } else {
          alert('Internal server error');
        }
      })
    } else {
      alert('Invalid form');
    }
  }

}

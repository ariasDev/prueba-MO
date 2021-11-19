import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

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
    private readonly fb: FormBuilder
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
    } else {
      alert('Invalid form')
    }
  }

}

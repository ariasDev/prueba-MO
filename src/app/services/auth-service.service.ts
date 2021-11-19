import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { RegistrationModel } from '../models/RegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private BASE_URL = "https://private-anon-a4ebb85096-henrybravo.apiary-mock.com";

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel) {
    return this.http.post(`${this.BASE_URL}/login`, loginModel)
  }

  register(registrationModel: RegistrationModel) {
    return this.http.post(`${this.BASE_URL}/register`, registrationModel)
  }
}

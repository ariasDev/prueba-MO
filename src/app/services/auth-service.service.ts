import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { RegistrationModel } from '../models/RegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private BASE_URL = "https://6053e8e145e4b3001729271d.mockapi.io/api/";

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel) {
    return this.http.post(`${this.BASE_URL}/login`, loginModel)
  }

  register(registrationModel: RegistrationModel) {
    return this.http.post(`${this.BASE_URL}/register`, registrationModel)
  }
  
}

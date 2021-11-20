import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
}

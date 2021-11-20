import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoguedGuardService implements CanActivate {

  constructor(
    private router: Router,
    private readonly browserStorageService: BrowserStorageService
  ) { }

  canActivate(): boolean {
    if (this.browserStorageService.getItem('token') !== null) {
      this.router.navigate(['profile']);
      return false;
    }
    return true;
  }
}

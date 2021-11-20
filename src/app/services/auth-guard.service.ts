import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private readonly browserStorageService: BrowserStorageService
  ) { }

  canActivate(): boolean {
    if (this.browserStorageService.getItem('token') === null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

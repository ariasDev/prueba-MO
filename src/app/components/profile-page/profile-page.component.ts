import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/models/UserInfoModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  userInfo: UserInfoModel;
  getUserInfoSubscription: Subscription;

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly browserStorageService: BrowserStorageService,
    private readonly router: Router
  ) {
    this.getUserInfo();
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.browserStorageService.logOut();
    this.router.navigate(['login']);
  }

  getUserInfo(): void {
    this.getUserInfoSubscription = this.authServiceService.getUserInfo().subscribe((response: UserInfoModel) => {
      if (response !== null) {
        this.userInfo = response;
      } else {
        alert('Internal server error')
      }
    })
  }

  ngOnDestroy(): void {
    this.getUserInfoSubscription.unsubscribe;
  }

}

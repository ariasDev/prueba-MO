import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewUrlResponseModel } from 'src/app/models/NewUrlResponseModel';
import { UserInfoModel } from 'src/app/models/UserInfoModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';
import { LinkServiceService } from 'src/app/services/link-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  userInfo: UserInfoModel;
  urlList: NewUrlResponseModel[];
  getUserInfoSubscription: Subscription;
  getUrlListSubscription: Subscription;

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly browserStorageService: BrowserStorageService,
    private readonly router: Router,
    private readonly linkServiceService: LinkServiceService
  ) {
    this.getUserInfo();
    this.getUrlList();
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

  getUrlList(): void {
    this.getUrlListSubscription = this.linkServiceService.getUrlList().subscribe((response: NewUrlResponseModel[]) => {
      this.urlList = response;
    });
  }

  ngOnDestroy(): void {
    this.getUserInfoSubscription.unsubscribe;
    this.getUrlListSubscription.unsubscribe;
  }

}

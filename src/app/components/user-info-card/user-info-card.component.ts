import { Component, Input, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/models/UserInfoModel';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  @Input() userInfo: UserInfoModel;

  constructor() { }

  ngOnInit(): void {
  }

}

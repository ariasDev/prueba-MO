import { Component, Input, OnInit } from '@angular/core';
import { NewUrlResponseModel } from 'src/app/models/NewUrlResponseModel';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  @Input() urlList: NewUrlResponseModel[];

  constructor() { }

  ngOnInit(): void {
  }

}

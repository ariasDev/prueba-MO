import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewUrlResponseModel } from 'src/app/models/NewUrlResponseModel';
import { LinkServiceService } from 'src/app/services/link-service.service';
import { NewUrlBehaviorSubjectService } from 'src/app/services/new-url-behavior-subject.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit, OnDestroy {

  listenNewUrlSubscription: Subscription;

  @Input() urlList: NewUrlResponseModel[];

  constructor(
    private readonly linkServiceService: LinkServiceService,
    private readonly newUrlBehaviorSubjectService: NewUrlBehaviorSubjectService
  ) { }

  ngOnInit(): void {
    this.listForNewUrl();
  }

  delete(id: string) {
    this.linkServiceService.deleteUrl(id).subscribe((response: NewUrlResponseModel) => {
      if (response !== null && response.id !== null) {
        const newList: NewUrlResponseModel[] = this.urlList.filter((item: NewUrlResponseModel) => item.id !== id);
        this.urlList = newList;
      } else {
        alert('Internal server error');
      }
    });
  }

  listForNewUrl(): void {
    this.listenNewUrlSubscription = this.newUrlBehaviorSubjectService.getNewUrl().subscribe((newUrl: NewUrlResponseModel) => {
      if (newUrl !== null) {
        this.urlList.push(newUrl);
      }
    });
  }
  ngOnDestroy(): void {
    this.listenNewUrlSubscription.unsubscribe();
  }

}

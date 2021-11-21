import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewUrlResponseModel } from '../models/NewUrlResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NewUrlBehaviorSubjectService {
  newUrlManager$: BehaviorSubject<NewUrlResponseModel> = new BehaviorSubject(null);

  constructor() { }

  setNewUrl(newUrl: NewUrlResponseModel): void {
    this.newUrlManager$.next(newUrl);
  }

  getNewUrl() {
    return this.newUrlManager$.asObservable();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUrlModel } from 'src/app/models/NewUrlModel';
import { NewUrlResponseModel } from 'src/app/models/NewUrlResponseModel';
import { LinkServiceService } from 'src/app/services/link-service.service';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  newUrlForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly linkServiceService: LinkServiceService
  ) {
    this.createForm();
  }


  createForm(): void {
    this.newUrlForm = this.fb.group({
      url: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  saveUrl(): void {
    if (this.newUrlForm.valid) {
      const newUrl: NewUrlModel = {
        url: this.newUrlForm.get('url').value,
        name: this.newUrlForm.get('name').value
      };
      this.linkServiceService.saveNewUrl(newUrl).subscribe();
    } else {
      alert('Invalid Form');
    }
  }

}

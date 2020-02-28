import { Component, OnInit, Input } from '@angular/core';
import { Roster } from '../../models/index';
import { forEach } from '@angular/router/src/utils/collection';
import { error } from 'util';

@Component({
  selector: 'app-payroll-action-upload',
  templateUrl: './payroll-action-upload.component.html',
  styleUrls: ['./payroll-action-upload.component.scss']
})
export class PayrollActionUploadComponent implements OnInit {

  @Input() roster: Roster;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  uploads: any[];
  uploadURL: string;
  showError: boolean;

  maxSize: number;
  errorMessage: string;

  constructor() {}

  ngOnInit() {
    this.uploads = [];
    this.uploadURL = 'https://js.devexpress.com/Content/Services/upload.aspx';
    this.maxSize = 5;
    this.errorMessage = '';
  }

  clearList(fileUploader) {
    fileUploader.instance.reset();
    this.showError = false;
    this.errorMessage = '';
  }

  onUploaded(event) {
    this.showError = false;
    this.errorMessage = '';
  }

  onUploadedError(event) {
    this.showError = true;
    this.errorMessage = '';
  }

  closeErrorMessage() {
    this.showError = false;
    this.errorMessage = '';
  }

  onOptionChanged(event) {
    if (event.value != null && event.value.length > 0) {
      const toRemove = [];
      event.value.forEach(file => {
        if (file.size > this.maxSize * 1000000) {
          toRemove.push(file);
          this.errorMessage = 'This files are too big: ';
        }
      });

      let count = 0;
      toRemove.forEach(r => {
        count++;
        const index = event.value.indexOf(r, 0);
        if (index > -1) {
          this.errorMessage += r.name;
          if (count < toRemove.length) {
            this.errorMessage += ', ';
          } else {
            this.errorMessage += ' (limit ' + this.maxSize + ' mb)';
          }
          this.showError = true;
          event.value.splice(index, 1);
        }
      });
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-un-enroll-from-paperless',
  templateUrl: './un-enroll-from-paperless.component.html',
  styleUrls: ['./un-enroll-from-paperless.component.scss']
})
export class UnEnrollFromPaperlessComponent implements OnInit {
  @Input() closeModalFunction;

  unEnrollFromPaperlessConfirmation: boolean;

  constructor() {
    this.closeModalFunction = null;
    this.unEnrollFromPaperlessConfirmation = true;
  }

  ngOnInit() {
  }

  public onSubmitModal(event) {
    if (this.closeModalFunction) {
      this.closeModalFunction(event);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details-documents',
  templateUrl: './employee-details-documents.component.html',
  styleUrls: ['./employee-details-documents.component.scss'],
  providers: [NgbActiveModal, NgbModal]

})
export class EmployeeDetailsDocumentsComponent implements OnInit {

  actionModalHandle: NgbModalRef;

  downloadItems = [{
    ID: 1,
    title: 'Separation Form'
  }, {
    ID: 2,
    title: 'Employee Leave and Return'
  }, {
    ID: 3,
    title: 'Employee Rehire Form'
  }, {
    ID: 4,
    title: 'HIPAA Privacy Notice'
  }];

  constructor(private modalService: NgbModal,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  openDocumentUploadModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

}

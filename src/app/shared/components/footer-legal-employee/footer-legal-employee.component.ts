import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer-legal-employee',
  templateUrl: './footer-legal-employee.component.html',
  styleUrls: ['./footer-legal-employee.component.scss'],
})
export class FooterLegalEmployeeComponent implements OnInit {

  actionModalHandle: NgbModalRef;

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.getDOMReferences();
  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  openModal(content, size) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

}

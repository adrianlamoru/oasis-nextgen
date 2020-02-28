import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer-privacy-employee',
  templateUrl: './footer-privacy-employee.component.html',
  styleUrls: ['./footer-privacy-employee.component.scss']
})
export class FooterPrivacyEmployeeComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer-privacy',
  templateUrl: './footer-privacy.component.html',
  styleUrls: ['./footer-privacy.component.scss']
})
export class FooterPrivacyComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {UserType} from '../../models/user-type.enum';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-footer-requirements',
  templateUrl: './footer-requirements.component.html',
  styleUrls: ['./footer-requirements.component.scss']
})
export class FooterRequirementsComponent implements OnInit {
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  userType: string;
  constructor(
      private authService: AuthService
  ) {}

  ngOnInit() {
    this.userType = this.authService.getUserType();
  }

  isClient(): boolean {
    return this.userType === UserType.client;
  }

  isEmployee(): boolean {
    return this.userType === UserType.employee;
  }
}

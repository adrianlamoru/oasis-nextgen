import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services';
import { UserType } from '../../../shared/models';

@Component({
  selector: 'app-footer-requirements-employee',
  templateUrl: './footer-requirements-employee.component.html',
  styleUrls: ['./footer-requirements-employee.component.scss']
})
export class FooterRequirementsEmployeeComponent implements OnInit {
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

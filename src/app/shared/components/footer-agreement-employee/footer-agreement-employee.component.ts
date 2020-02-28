import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../shared/services';
import { UserType } from '../../../shared/models';

@Component({
  selector: 'app-footer-agreement-employee',
  templateUrl: './footer-agreement-employee.component.html',
  styleUrls: ['./footer-agreement-employee.component.scss']
})
export class FooterAgreementEmployeeComponent implements OnInit {

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

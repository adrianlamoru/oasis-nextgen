import { Component, OnInit, Input } from '@angular/core';
import {UserType} from '../../models/user-type.enum';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-footer-agreement',
  templateUrl: './footer-agreement.component.html',
  styleUrls: ['./footer-agreement.component.scss']
})
export class FooterAgreementComponent implements OnInit {

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

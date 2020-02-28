import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, AgreementService } from '../../shared/services';

import { LoginModel } from '../../shared/models/login-model.interface';
import { IAgreement } from '../../shared/models';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {UserType} from '../../shared/models/user-type.enum';
import {ClientLoginNewsService} from '../../shared/services/client-login-news.service';
import {NewsModal} from '../../shared/models/news-modal.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('agreementModal') agreementModal: ViewContainerRef;
  @ViewChild('newsModal') newsModal: ViewContainerRef;

  agreementContent: IAgreement;
  actionModalHandle: NgbModalRef;

  redirect: string;
  boarded = false;

  loginModel: LoginModel = {
    loginType: 'Client',
    email: '',
    password: '',
    rememberMe: false
  };

  message: string;

  loginTypes: string[] = ['Client', 'Employee', 'Internal Employee'];
  newsContent: NewsModal[];

  constructor(
    private agreementService: AgreementService,
    public authService: AuthService,
    private modalService: NgbModal,
    public router: Router,
    private clientLoginNews: ClientLoginNewsService
  ) {
    this.newsContent = [];
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ChangeLoginType(newLoginType: string) {
    this.loginModel.loginType = newLoginType;
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.loginModel).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default

        const isOnboardingDone = localStorage.getItem('isOnboardingDone');
        this.boarded = isOnboardingDone !== null && isOnboardingDone === 'done' ? true : false;

        const defaultURL = this.loginModel.loginType === 'Client' ? (this.boarded ? 'client/dashboard' : 'client/onboarding') : 'employee/dashboard';
        this.redirect = this.authService.redirectUrl ? this.authService.redirectUrl : defaultURL;

        this.clientLoginNews.getNewsContent().subscribe((news: NewsModal[]) => {
          this.newsContent = news;
        });

        if (this.agreementService.getCheckForAgreement(this.loginModel.loginType)) {
          this.agreementContent = this.agreementService.getAgreementContent(this.loginModel.loginType);
          this.openModal('lg', this.agreementModal);
        } else if (this.newsContent.length > 0) {
          this.openModal('lg', this.newsModal);
        } else {
          this.router.navigate([this.redirect]);
        }
      }
    });
  }

  openModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, {
      size: size,
      backdrop: 'static',
      keyboard: false
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

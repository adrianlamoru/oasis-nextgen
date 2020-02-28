import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {AgreementService, AuthService, ClientLoginNewsService} from '../../shared/services';
import {NewsModal} from '../../shared/models/news-modal.interface';
import {LoginComponent} from '../login/login.component';
import {UserType} from '../../shared/models';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  @ViewChild('newsModal') newsModal: ViewContainerRef;

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @Input() agreementContent;
  @Input() redirect;

  newsContent: NewsModal[];
  actionModalHandle: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private clientLoginNews: ClientLoginNewsService,
    private agreementService: AgreementService
  ) {
    this.newsContent = [];
  }

  ngOnInit() {
  }

  clickedAgree() {
    const userType = this.agreementService.getUserType().toLowerCase();

    if (userType === UserType.client) {
      localStorage.setItem('userClientConsent', 'agreed');
    } else if (userType === UserType.employee) {
      localStorage.setItem('userEmployeeConsent', 'agreed');
    }

    this.clientLoginNews.getNewsContent(true).subscribe((news: NewsModal[]) => {
      this.newsContent = news;
    });

    if (this.newsContent.length !== 0) {
      this.openModal('lg', this.newsModal);
    }

    this.modalCloseFunc();
  }

  openModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, {
      size: size,
      backdrop: 'static',
      keyboard: false
    });
  }
}

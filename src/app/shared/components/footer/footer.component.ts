import { Employee } from './../../../client/models/payroll.interface';
import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { portalType } from '../../models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  actionModalHandle: NgbModalRef;

  @Input() footerType: portalType;

  @ViewChild('footerLegal')
  private footerLegal: ViewContainerRef;

  @ViewChild('footerLegalEmployee')
  private footerLegalEmployee: ViewContainerRef;

  @ViewChild('footerPrivacy')
  private footerPrivacy: ViewContainerRef;

  @ViewChild('footerPrivacyEmployee')
  private footerPrivacyEmployee: ViewContainerRef;

  @ViewChild('footerRequirements')
  private footerRequirements: ViewContainerRef;

  @ViewChild('footerRequirementsEmployee')
  private footerRequirementsEmployee: ViewContainerRef;

  @ViewChild('footerAgreement')
  private footerAgreement: ViewContainerRef;

  @ViewChild('footerAgreementEmployee')
  private footerAgreementEmployee: ViewContainerRef;

  @ViewChild('footerSecurity')
  private footerSecurity: ViewContainerRef;

  @ViewChild('footerSecurityEmployee')
  private footerSecurityEmployee: ViewContainerRef;

  employee: number;
  client: number;

  constructor(private modalService: NgbModal) {
    this.footerType = portalType.employee;
   }

  ngOnInit() {
  }

  openModal(content, size) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  openModalLegal(size) {
    if (this.footerType === portalType.client) {
      this.actionModalHandle = this.modalService.open(this.footerLegal, { size: size });
    } else {
      this.actionModalHandle = this.modalService.open(this.footerLegalEmployee, { size: size });
    }
  }

  openModalSecurity(size) {
    if (this.footerType === portalType.client) {
      this.actionModalHandle = this.modalService.open(this.footerSecurity, { size: size });
    } else {
      this.actionModalHandle = this.modalService.open(this.footerSecurityEmployee, { size: size });
    }
  }

  openModalAgreement(size) {
    if (this.footerType === portalType.client) {
      this.actionModalHandle = this.modalService.open(this.footerAgreement, { size: size });
    } else {
      this.actionModalHandle = this.modalService.open(this.footerAgreementEmployee, { size: size });
    }
  }

  openModalRequirement(size) {
    if (this.footerType === portalType.client) {
      this.actionModalHandle = this.modalService.open(this.footerRequirements, { size: size });
    } else {
      this.actionModalHandle = this.modalService.open(this.footerRequirementsEmployee, { size: size });
    }
  }

  openModalPrivacy(size) {
    if (this.footerType === portalType.client) {
      this.actionModalHandle = this.modalService.open(this.footerPrivacy, { size: size });
    } else {
      this.actionModalHandle = this.modalService.open(this.footerPrivacyEmployee, { size: size });
    }
  }
}

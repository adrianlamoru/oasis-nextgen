import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './hr-onboarding.component.html',
  styleUrls: ['./hr-onboarding.component.scss']
})
export class HrOnboardingComponent implements OnInit {
  @Input() available: string;
  @ViewChild('onboardingModal') onboardingModal: ViewContainerRef;

  ratCardData = {
    title: 'Onboarding',
    subText: `Our Electronic Onboarding solution is online and simple for you and your employees.`,
    previewItemsList: ['Provides a clear list of tasks to new employees',
      'Enables employees to onboard with little instruction',
      // `As Soon as they are onboarded, they have access to the
      // Employee Web Portals and you can see all their information in the Client Web Portal.`
    ],
    websiteLink: 'http://www.oasisadvantage.com/'
  };

  activeOnboardingData = {
		usVerifyURL: 'http://www.oasisadvantage.com/',
		activeOnboardingList: [
						{ employeeName: 'Nicholas A. Furr', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 5},
						{ employeeName: 'Christina L. Hale', title: 'Accountant', dept: 'Accounting', totalSteps: 6, stepsCompleted: 4},
						{ employeeName: 'Michael M. Gossett', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 2},
						{ employeeName: 'Cheryl M. Gatlin', title: 'Product Owner', dept: 'Tech', totalSteps: 6, stepsCompleted: 3},
						{ employeeName: 'Richard J. Hulsey', title: 'Product Owner', dept: 'Tech', totalSteps: 6, stepsCompleted: 2},
						{ employeeName: 'Katherine J. Brown', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1},
						{ employeeName: 'Nichol Furr', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 4},
						{ employeeName: 'Christi Hale', title: 'Accountant', dept: 'Accounting', totalSteps: 4, stepsCompleted: 4},
						{ employeeName: 'Mich Gossett', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1},
						{ employeeName: 'Rich Hulsey 2', title: 'Product Owner', dept: 'Tech', totalSteps: 5, stepsCompleted: 3},
						{ employeeName: 'Christi Hale 2', title: 'Accountant', dept: 'Accounting', totalSteps: 4, stepsCompleted: 4},
						{ employeeName: 'Mich Gossett 2', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1},
						{ employeeName: 'Rich Hulsey 2', title: 'Product Owner', dept: 'Tech', totalSteps: 5, stepsCompleted: 3},
						{ employeeName: 'Nicholas A. Furr 2', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 5}
					]
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openButtonAction(link) {
    window.open(link, '_blank');
  }

  openCardModal(size, content) {
    this.modalService.open(this.onboardingModal, {size: 'lg'});
  }

  openSpecifiedSection(link) {
    window.open(link, '_blank');
  }

}


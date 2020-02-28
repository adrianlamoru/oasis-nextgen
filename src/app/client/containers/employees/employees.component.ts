import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild('onboardingModal') onboardingModal: ViewContainerRef;

  activeOnboardingData = {
		usVerifyURL: 'http://www.oasisadvantage.com/',
		activeOnboardingList: [
      { employeeName: 'Nicholas A. Furr', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 5, statusDesc: 'Documentation expiring' },
			{ employeeName: 'Christina L. Hale', title: 'Accountant', dept: 'Accounting', totalSteps: 6, stepsCompleted: 4, statusDesc: 'Requires action' },
			{ employeeName: 'Michael M. Gossett', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 2, statusDesc: 'SSN applied For' },
			{ employeeName: 'Cheryl M. Gatlin', title: 'Product Owner', dept: 'Tech', totalSteps: 6, stepsCompleted: 3, statusDesc: 'Verification pending' },
			{ employeeName: 'Richard J. Hulsey', title: 'Product Owner', dept: 'Tech', totalSteps: 6, stepsCompleted: 2, statusDesc: 'Work authorization expiring' },
			{ employeeName: 'Katherine J. Brown', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1, statusDesc: 'Documentation expiring' },
			{ employeeName: 'Nichol Furr', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 4, statusDesc: 'Requires action' },
			{ employeeName: 'Christi Hale', title: 'Accountant', dept: 'Accounting', totalSteps: 4, stepsCompleted: 4, statusDesc: 'Requires action' },
			{ employeeName: 'Mich Gossett', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1, statusDesc: 'Verification pending' },
			{ employeeName: 'Rich Hulsey 2', title: 'Product Owner', dept: 'Tech', totalSteps: 5, stepsCompleted: 3, statusDesc: 'SSN applied For' },
			{ employeeName: 'Christi Hale 2', title: 'Accountant', dept: 'Accounting', totalSteps: 4, stepsCompleted: 4, statusDesc: 'Verification pending' },
			{ employeeName: 'Mich Gossett 2', title: 'UI Designer', dept: 'UX Team', totalSteps: 4, stepsCompleted: 1, statusDesc: 'SSN applied For' },
			{ employeeName: 'Rich Hulsey 2', title: 'Product Owner', dept: 'Tech', totalSteps: 5, stepsCompleted: 3, statusDesc: 'Documentation expiring' },
			{ employeeName: 'Nicholas A. Furr 2', title: 'Designer', dept: 'UX Team', totalSteps: 6, stepsCompleted: 5, statusDesc: 'Work authorization expiring' }
					]
  };
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openOnboarding() {
    // window.open('http://www.google.com', '_blank');
    this.modalService.open(this.onboardingModal, {size: 'lg'});
  }

  openSpecifiedSection(link) {
    window.open(link, '_blank');
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services';
import { NgbActiveModal, NgbModal, NgbModalRef } from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { PayrollService } from '../../../../services';
import { Router } from '../../../../../../../node_modules/@angular/router';
import { Batch, Roster } from '../../../../models';
import { StepWidget } from '../../../../../shared/models/step-widget';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class OnboardingComponent implements OnInit {

  gettingStartedSteps: StepWidget[] = [
    {
      step: 1,
      stepName: 'Getting Started',
      subSteps: 3,
      status: 'Ready',
      date: new Date(),
      percent: 100,
      color: 'green',
      img: '../../../../assets/images/getting-started/step-1.svg',
      error: false
    },
    {
      step: 2,
      stepName: 'Client Information',
      subSteps: 3,
      status: 'Ready',
      date: new Date(),
      percent: 100,
      color: 'green',
      img: '../../../../../../assets/images/getting-started/step-2.svg',
      error: false
    },
    {
      step: 3,
      stepName: 'Employee Information',
      subSteps: 2,
      status: 'In Progress',
      date: new Date(),
      percent: 80,
      color: 'red',
      img: '../../../../../../assets/images/getting-started/step-3.svg',
      error: true

    },
    {
      step: 4,
      stepName: 'Payroll Information',
      subSteps: 4,
      status: 'In Progress',
      date: new Date(),
      percent: 60,
      color: 'blue',
      img: '../../../../../../assets/images/getting-started/step-4.svg',
      error: false
    },
    {
      step: 5,
      stepName: 'Benefits Information',
      subSteps: 2,
      status: 'Not Started',
      date: new Date(),
      percent: 0,
      color: 'red',
      img: '../../../../../../assets/images/getting-started/step-5.svg',
      error: false
    },
    {
      step: 6,
      stepName: 'Finalize & Submit',
      subSteps: 2,
      status: 'Not Started',
      date: new Date(),
      percent: 0,
      color: 'red',
      img: '../../../../../../assets/images/getting-started/step-6.svg',
      error: false
    }
  ];
  constructor(private router: Router,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.setFirstTimeLogin(true);
  }

  goToSupport() {
    this.router.navigate(['/client/support']);
  }
}

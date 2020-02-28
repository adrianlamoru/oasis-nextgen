import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { WizardStep } from '../models';

@Injectable()
export class OnboardingWizardService {
  readonly BASE_PATH = '/client/onboarding/wizard/';
  readonly GO_BACK_PATH = '/client/onboarding';

  currentStep: WizardStep = null;
  wizardSteps: WizardStep[] = [{
    title: 'Getting Started',
    path: 'getting-started',
    id: 'gettingStarted',
    children: [{
      path: 'getting-started/general-information',
      backPath: '../../../',
      nextPath: 'getting-started/primary-decision-maker-information',
      formAPIURL: '' // set the api url here
    }, {
      path: 'getting-started/primary-decision-maker-information',
      backPath: 'getting-started/general-information',
      nextPath: 'getting-started/authorized-client-contacts-web-access'
    }, {
      path: 'getting-started/authorized-client-contacts-web-access',
      backPath: 'getting-started/primary-decision-maker-information',
      nextPath: 'setup-client'
    }
    ]
  }, {
    title: 'Client Information',
    path: 'setup-client',
    id: 'setupClient',
    children: [{
      path: 'setup-client/business-structure',
      backPath: 'getting-started',
      nextPath: 'setup-client/job-costing'
    }, {
      path: 'setup-client/job-costing',
      backPath: 'setup-client/business-structure',
      nextPath: 'setup-client/job-title'
    }, {
      path: 'setup-client/job-title',
      backPath: 'setup-client/job-costing',
      nextPath: 'employee-information'
    }
    ]
  }, {
    title: 'Employee Information',
    path: 'employee-information',
    id: 'employeeInformation',
    children: [{
      path: 'employee-information/employee-status',
      backPath: 'setup-client',
      nextPath: 'employee-information/employee-taxes'
    }, {
      path: 'employee-information/employee-taxes',
      backPath: 'employee-information/employee-status',
      nextPath: 'payroll-information'
    }]
  }, {
    title: 'Payroll Information',
    path: 'payroll-information',
    id: 'payrollInformation',
    children: [{
      path: 'payroll-cycle',
      backPath: 'employee-information/employee-taxes',
      nextPath: 'payroll-information/payroll-processing'
    },
    {
      path: 'payroll-processing',
      backPath: 'payroll-information/payroll-cycle',
      nextPath: 'payroll-information/payroll-structure'
    },
    {
      path: 'payroll-structure',
      backPath: 'payroll-information/payroll-processing',
      nextPath: 'payroll-information/payroll-reports'
    },
    {
      path: 'payroll-reports',
      backPath: 'payroll-information/payroll-structure',
      nextPath: 'benefits-information'
    },
    ]
  }, {
    title: 'Benefits Information',
    path: 'benefits-information',
    id: 'benefitsInformation',
    children: [ {
      path: 'benefits-structure',
      backPath: 'payroll-information/payroll-reports',
      nextPath: 'benefits-information/benefits-orientation'
    }, {
     path: 'benefits-orientation',
     backPath: 'benefits-information/benefits-structure',
     nextPath: 'finalize-and-submit'
    }]
  }, {
    title: 'Finalize & Submit',
    path: 'finalize-and-submit',
    id: 'finalizeAndSubmit',
    backPath: 'benefits-information'
  }];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentStep = this.getCurrentStep(router.url);
      }
    });
  }

  private getCurrentStep(url: string) {
    for (const step of this.wizardSteps) {
      if (step.path && !step.children && url.includes(step.path)) {
        return step;
      } else if (step.children) {
        for (const child of step.children) {
          if (child.path && url.includes(child.path)) {
            return child;
          }
        }
      }
    }

    return null;
  }

  setCurrentForm(form: any) {
    if (this.currentStep) {
      this.currentStep.currentForm = form;
    }
  }

  back() {
    if (this.currentStep.path.includes('getting-started/general-information')) {
      this.router.navigateByUrl(this.GO_BACK_PATH);
    } else {
      // this.router.navigateByUrl(this.BASE_PATH + this.currentStep.backPath);
        this.saveAndGo(this.currentStep.backPath);
    }

  }

  saveAndExit() {
    if (this.currentStep) {
      this.saveAndGo();
    }
  }

  next() {
    if (this.currentStep) {
      this.saveAndGo(this.currentStep.nextPath);
    }
  }

  finalSubmit() {

  }

  saveAndGo(path: string = '') {
    const url = path ? this.BASE_PATH + path : this.GO_BACK_PATH;
    console.log('Inside Save And Go');

    if (this.currentStep) {
      if (this.currentStep.currentForm && this.currentStep.currentForm.form.valid && this.currentStep.formAPIURL) {
        console.log('Inside Save And Go If');
        // Server call to send current form and wait for the response before go to next route
        this.http.post(this.currentStep.formAPIURL, this.currentStep.currentForm.form)
          .subscribe(response => {
            // If sucessfull response goto next route
            this.router.navigateByUrl(url);
            window.scrollTo(0, 0);
          });
      } else if (!this.currentStep.currentForm || !this.currentStep.formAPIURL) {
        this.router.navigateByUrl(url);
      }
    }
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../shared/services';

import {
  OnboardingComponent,
  OnboardingWizardComponent,
  GettingStartedComponent,
  EmployeeInformationComponent,
  SetupClientComponent,
  PayrollInformationComponent,
  BenefitsEnrollmentComponent,
  FinalizeAndSubmitComponent,
  OnboardingCompletedComponent,
  
} from './containers';

const routes: Routes = [{
  path: 'wizard',
  canActivate: [AuthGuard],
  component: OnboardingWizardComponent,
  children: [{
    path: 'getting-started',
    redirectTo: 'getting-started/general-information',
    pathMatch: 'full'
  }, {
    path: 'getting-started/general-information',
    canActivate: [AuthGuard],
    component: GettingStartedComponent
  }, {
    path: 'getting-started/primary-decision-maker-information',
    canActivate: [AuthGuard],
    component: GettingStartedComponent
  }, {
    path: 'getting-started/authorized-client-contacts-web-access',
    canActivate: [AuthGuard],
    component: GettingStartedComponent
  }, {
    path: 'setup-client',
    redirectTo: 'setup-client/business-structure',
    pathMatch: 'full'
  }, {
    path: 'setup-client/business-structure',
    canActivate: [AuthGuard],
    component: SetupClientComponent
  }, {
    path: 'setup-client/job-costing',
    canActivate: [AuthGuard],
    component: SetupClientComponent
  }, {
    path: 'setup-client/job-title',
    canActivate: [AuthGuard],
    component: SetupClientComponent
  }, {
    path: 'employee-information',
    redirectTo: 'employee-information/employee-status',
    pathMatch: 'full'
  }, {
    path: 'employee-information/employee-status',
    canActivate: [AuthGuard],
    component: EmployeeInformationComponent
  }, {
    path: 'employee-information/employee-taxes',
    canActivate: [AuthGuard],
    component: EmployeeInformationComponent
  }, {
    path: 'payroll-information',
    redirectTo: 'payroll-information/payroll-cycle',
    pathMatch: 'full'
  }, {
    path: 'payroll-information/payroll-cycle',
    canActivate: [AuthGuard],
    component: PayrollInformationComponent
  }, {
    path: 'payroll-information/payroll-processing',
    canActivate: [AuthGuard],
    component: PayrollInformationComponent
  }, {
    path: 'payroll-information/payroll-structure',
    canActivate: [AuthGuard],
    component: PayrollInformationComponent
  }, {
    path: 'payroll-information/payroll-reports',
    canActivate: [AuthGuard],
    component: PayrollInformationComponent
  }, {
    path: 'benefits-information',
    redirectTo: 'benefits-information/benefits-structure',
    pathMatch: 'full'
  }, {
    path: 'benefits-information/benefits-structure',
    canActivate: [AuthGuard],
    component: BenefitsEnrollmentComponent
  }, {
    path: 'benefits-information/benefits-orientation',
    canActivate: [AuthGuard],
    component: BenefitsEnrollmentComponent
  }, {
    path: 'finalize-and-submit',
    canActivate: [AuthGuard],
    component: FinalizeAndSubmitComponent
  }, {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  }
  ]
},
{
  path: 'onbording-completed',
  canActivate: [AuthGuard],
  component: OnboardingCompletedComponent
},
{
  path: '',
  canActivate: [AuthGuard],
  component: OnboardingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }

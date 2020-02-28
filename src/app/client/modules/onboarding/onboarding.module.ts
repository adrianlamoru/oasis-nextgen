import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from '../../../../../node_modules/angular-in-memory-web-api';
import { MockDatabaseService } from '../../../in-memory-data.service';

import { OnboardingRoutingModule } from './onboarding-routing.module';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import {
  GettingStartedFeaturedLinksComponent,
  AnnouncementAreaComponent,
  ClientInformationJobTitleComponent,
  ClientInformationBusinessStructureComponent,
  JobCostingComponent,
  JobCostingDepartmentsComponent,
  JobCostingDivisionsComponent,
  JobCostingProjectsComponent,
  JobCostingShiftsComponent,
  GeneralInformationComponent,
  ClientAndEmployeeOrientationComponent,
  Step1PrimaryDecisionMakerComponent,
  Step1AuthorizedClientContactsComponent,
  Step4PayrollCycleComponent,
  Step4PayrollProcessingComponent,
  Step4PayrollStructureComponent,
  Step4PayrollReportsComponent,
  EmployeeInformationEmployeeStatusComponent,
  EmployeeInformationEmployeeTaxesComponent,
  BenefitsOrientationComponent,
  BenefitsStructureComponent
} from './components';

import {
  OnboardingComponent,
  OnboardingWizardComponent,
  GettingStartedComponent,
  SetupClientComponent,
  EmployeeInformationComponent,
  PayrollInformationComponent,
  // GettingStartedStep1GeneralInformationComponent
  BenefitsEnrollmentComponent,
  OnboardingCompletedComponent,
} from './containers';

import {
  ClientEmployeeOrientationService,
  OnboardingWizardService
} from './services';
import { OnboardingFormService } from './services/onboarding-form.service';
import { FinalizeAndSubmitComponent } from './containers/finalize-and-submit/finalize-and-submit.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    // Third party modules
    HttpClientInMemoryWebApiModule.forFeature(
    MockDatabaseService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    OnboardingRoutingModule
  ],
  declarations: [
    OnboardingComponent,
    GettingStartedComponent,
    SetupClientComponent,
    EmployeeInformationComponent,
    OnboardingComponent,
    GettingStartedFeaturedLinksComponent,
    PayrollInformationComponent,
    GettingStartedFeaturedLinksComponent,
    FinalizeAndSubmitComponent,
    OnboardingWizardComponent,
    AnnouncementAreaComponent,
    ClientInformationJobTitleComponent,
    ClientInformationBusinessStructureComponent,
    JobCostingComponent,
    JobCostingDepartmentsComponent,
    JobCostingDivisionsComponent,
    JobCostingProjectsComponent,
    JobCostingShiftsComponent,
    GeneralInformationComponent,
    ClientAndEmployeeOrientationComponent,
    Step1PrimaryDecisionMakerComponent,
    Step1AuthorizedClientContactsComponent,
    OnboardingWizardComponent,
    PayrollInformationComponent,
    Step4PayrollCycleComponent,
    Step4PayrollProcessingComponent,
    Step4PayrollStructureComponent,
    Step4PayrollReportsComponent,
    BenefitsEnrollmentComponent,
    BenefitsOrientationComponent,
    BenefitsStructureComponent,
    EmployeeInformationEmployeeStatusComponent,
    EmployeeInformationEmployeeTaxesComponent,
    FinalizeAndSubmitComponent,
    OnboardingCompletedComponent
  ],
  exports: [
    GettingStartedComponent,
    GettingStartedFeaturedLinksComponent,
    ClientAndEmployeeOrientationComponent,
    OnboardingComponent,
    PayrollInformationComponent,
    AnnouncementAreaComponent,
    ClientInformationJobTitleComponent,
    ClientInformationBusinessStructureComponent,
    JobCostingComponent,
    JobCostingDepartmentsComponent,
    JobCostingDivisionsComponent,
    JobCostingProjectsComponent,
    JobCostingShiftsComponent
  ],
  providers: [
    ClientEmployeeOrientationService,
    OnboardingWizardService,
    OnboardingFormService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class OnboardingModule { }

import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';

// MockDatabase
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { MockDatabaseService } from '../in-memory-data.service';

// Components
import {
  BenefitsDetailComponent,
  ClientDetailComponent,
  PaySummaryComponent,
  OfferDetailComponent,
  DashboardNextStepsComponent,
  My401kComponent,
  MyLeaveTrackerComponent,
  BenefitsCollegeSavingsComponent,
  EmployeeDetailsSubnavComponent,
  Benefits401Component,
  CompensationPayStubComponent,
  CompensationPayStubReportsComponent,
  EmployeeProfileComponent,
  EmployeeDetailsDirectDepositComponent,
  PerksDiscountsCardComponent,
  PayrollDebitCardComponent,
  UnEnrollFromPaperlessComponent,
  CompensationDeductionDetailComponent,
  CompensationEarningDetailsComponent,
  CompensationEarningSummaryComponent,
  CompensationTaxComponent,
  EmployeeDetailsHistoryComponent,
  RecentPayStubsComponent
} from './components';

// Containers

import {
  DashboardComponent,
  EmployeeComponent,
  BenefitsComponent,
  PerksDiscountComponent,
  ProfileComponent,
  CompensationComponent,
  HumanResourcesComponent,
  CompensationAnnualPaySummaryComponent
} from './containers';

// Services

import {
  HeaderService,
  EthnicityService,
  GenderService,
  MartialStatusService,
  InterRelationshipService,
} from '../shared/services';

import {
  PaySummaryService,
  ClientDetailService,
  BenefitsService,
  OfferDetailService,
  LeaveTrackerService,
  Employee401kService,
  CompensationService,
  PerksDiscountService,
  EmployeeBenefitsPlanService,
  GarnishmentsHistoryReportService,
  AnnualPaySummaryService
} from './services';

import { SupportTicketsService, SubnavService } from '../client/services';
import { DirectDepositService } from '../shared/services';
import { CompensationDetailsSubnavComponent } from './components/compensation-details-subnav/compensation-details-subnav.component';
import { CompensationPaidTimeOffComponent } from './components/compensation-paid-time-off/compensation-paid-time-off.component';
import { CompensationGarnishmentsComponent } from './components/compensation-garnishments/compensation-garnishments.component';
import { CompensationGarnishmentsDocketReportComponent } from './components/compensation-garnishments-docket-report/compensation-garnishments-docket-report.component';
import { CompensationGarnishmentsDocketHistoryComponent } from './components/compensation-garnishments-docket-history/compensation-garnishments-docket-history.component';
import { CompensationPaidTimeOffModalComponent } from './components/compensation-paid-time-off-modal/compensation-paid-time-off-modal.component';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    // Third party modules
    HttpClientInMemoryWebApiModule.forFeature (
      MockDatabaseService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    EmployeeRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardComponent,
    ClientDetailComponent,
    BenefitsDetailComponent,
    PaySummaryComponent,
    OfferDetailComponent,
    DashboardNextStepsComponent,
    My401kComponent,
    MyLeaveTrackerComponent,
    EmployeeComponent,
    BenefitsComponent,
    PerksDiscountComponent,
    ProfileComponent,
    CompensationComponent,
    EmployeeProfileComponent,
    HumanResourcesComponent,
    BenefitsCollegeSavingsComponent,
    Benefits401Component,
    EmployeeDetailsSubnavComponent,
    CompensationPayStubComponent,
    CompensationPayStubReportsComponent,
    EmployeeDetailsDirectDepositComponent,
    PerksDiscountsCardComponent,
    PayrollDebitCardComponent,
    UnEnrollFromPaperlessComponent,
    CompensationDetailsSubnavComponent,
    CompensationPaidTimeOffComponent,
    CompensationGarnishmentsComponent,
    CompensationGarnishmentsDocketReportComponent,
    CompensationGarnishmentsDocketHistoryComponent,
    CompensationAnnualPaySummaryComponent,
    CompensationDeductionDetailComponent,
    CompensationEarningDetailsComponent,
    CompensationEarningSummaryComponent,
    CompensationTaxComponent,
    CompensationPaidTimeOffModalComponent,
    EmployeeDetailsHistoryComponent,
    RecentPayStubsComponent
  ],
  providers: [
    ClientDetailService,
    BenefitsService,
    OfferDetailService,
    PaySummaryService,
    LeaveTrackerService,
    Employee401kService,
    SupportTicketsService,
    CompensationService,
    DirectDepositService,
    HeaderService,
    EthnicityService,
    GenderService,
    MartialStatusService,
    InterRelationshipService,
    PerksDiscountService,
    EmployeeBenefitsPlanService,
    GarnishmentsHistoryReportService,
    AnnualPaySummaryService,
    SubnavService
  ]
})
export class EmployeeModule { }

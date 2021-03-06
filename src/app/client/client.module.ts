import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';

import { ClientRoutingModule } from './client-routing.module';

// MockDatabase
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { MockDatabaseService } from '../in-memory-data.service';

// Components
import {
  EmployeeSearchComponent,
  EmployeeAnalyticsComponent,
  ManagerOnboardingComponent,
  WorksiteUpdateComponent,
  SetupDivisionsComponent,
  SetupDepartmentsComponent,
  SetupProjectsComponent,
  SetupJobcodesComponent,
  SetupGeneralLedgercodesComponent,
  SetupEventsComponent,
  SetupSkillCodeMaintenanceComponent,
  EmployeePayrollLoansComponent,
  EmployeeScheduledPaymentsComponent,
  EmployeePayRateChangeComponent,
  EmployeeRecurringDeductionsComponent,
  EmployeePayrollPayCodeComponent,
  EmployeePayrollAllocationsComponent,
  EmployeePayrollCostAllocationComponent,
  EmployeePayrollPtoRegisterAdjustmentsComponent,
  PayrollNavbarComponent,
  EmployeeDetailsComponent,
  EmployeeDetailsEmploymentComponent,
  EmployeeDetailsPtoComponent,
  EmployeeDetailsBenefitsComponent,
  EmployeeDetails401kComponent,
  EmployeeDetailsEmployeeReportsComponent,
  EmployeeDetailsDocumentsComponent,
  EmployeeDetailsPtoSummaryComponent,
  EmployeeStatusChangeComponent,
  EmployeeSupervisorChangeComponent,
  PayrollRunDeductionsComponent,
  PayrollAnalyticsComponent,
  PayrollRunHoursEarningsComponent,
  PayrollRunConfirmationComponent,
  PayrollRunReviewSubmitComponent,
  EmployeeHrEventAssignmentComponent,
  EmployeePayrollJobRatesComponent,
  EmployeeSkillCodeAssignmentComponent,
  EmployeeTerminationComponent,
  PayrollRunCheckMemoModalComponent,
  PayrollHoursEarningsAddDeductionComponent,
  PayrollActionDownloadComponent,
  PayrollActionNotesComponent,
  PayrollRunBreadcrumbComponent,
  PayrollRunReviewSubmitQuickSummaryComponent,
  PayrollRunComponent,
  PayrollRunReviewSubmitPtoOverLimitComponent,
  PayrollRunReviewSubmitEeDefaultsComponent,
  PayrollActionUploadComponent,
  PayrollActionBatchNotesComponent,
  PayrollRunOffCycleBatchComponent,
  PayrollCalendarComponent,
  PayrollRunAutopayModalComponent,
  BenefitsMedicalComponent,
  BenefitsAncillaryComponent,
  BenefitsSupplementalComponent,
  SupportTicketsListComponent,
  PayrollAnalyticsBreadcrumbComponent,
  PayrollAnalyticsSingleBatchComponent,
  PayrollAnalyticsSingleBatchInvoiceSummaryComponent,
  PayrollAnalyticsPayStubComponent,
  SupportOpenTicketComponent,
  WorkersCompOpenClaimsComponent,
  WorkersCompAllClaimsComponent,
  HrBirthdaysComponent,
  HrCensusComponent,
  HrEmployeeChangeComponent,
  HrEmployeeListingComponent,
  HrEmployeePersonalChangeComponent,
  HrEmployeeDetailComponent,
  ReportsClientBenefitSummaryComponent,
  PayrollRunManualReviewSubmitSummaryComponent,
  HrELearningComponent,
  HrRecruitmentAndAppTrackingComponent,
  HrActivitiesComponent,
  HrComplianceComponent,
  WorkersCompRiskComponent,
  WorkersCompClaimDetailsModalComponent,
  DashboardEmployeeActivityComponent,
  DashboardReportsWidgetComponent,
  Reports401kSummaryComponent,
  Reports401kSummaryByDateComponent,
  ReportsEmployeeBenefitsRegisterComponent,
  ReportsBenefitsPayrollRegisterDownloadComponent,
  DashboardActiveOnboardingComponent,
  DashboardPayrollSummaryComponent,
  DashboardMarketplaceComponent,
  DashbaordProjectsAndServicesComponent,
  ReportsListingComponent,
  ReportsInvoiceReprintComponent,
  InvoiceReprintDetailsComponent,
  ReportsPayrollPtoAbsenceSummaryComponent,
  ReportsAverageHoursComponent,
  ReportsGrossNetLastnameComponent,
  ReportsWagesEarningsComponent,
  ReportsPayrollClientAllocationGridComponent,
  ReportsPayrollClientAllocationComponent,
  ReportsEmployeePayrollPayStubsComponent,
  ReportsEarningsSummaryComponent,
  ReportsPayrollVoucherDetailComponent,
  ReportsPayrollPtoHoursTakenComponent,
  EmployeeDetailsSubnavComponent,
  ReportsClientAllocationChecknumberComponent,
  EmployeeReportsBenefits401kSummaryComponent,
  EmployeeReportsHrPayHistoryComponent,
  PayrollPayAndJobOverridesComponent,
  EmployeeReports401kSummaryByDateComponent,
  EmployeeReportsHrEmployeePersonalChangeComponent,
  ReportsGrossToNetSortOptionsComponent,
  EmployeeReportsPayrollDeductionCodeSummaryComponent,
  EmployeeReportsPayrollAverageHoursComponent,
  EmployeeReportsPayrollVoucherDetailComponent,
  EmployeeReportsHrUnemployementWagesComponent,
  ReportsPayrollVoucherSummaryComponent,
  EmployeeReportsGrossNetSortOptionsComponent,
  ReportsGrossToNetSortOptionsGridComponent,
  EmployeeReportsEmployeeInformationInquiryComponent,
  ReportsPayrollStatusDownloadComponent,
  EmployeeReportsPayrollVoucherSummaryComponent,
  EmployeeReportsPtoHoursTakenComponent,
  EmployeeReportsStatusDownloadComponent,
  ReportsSupervisorByDepartmentComponent,
  EmployeeReportsPayrollPayAndJobOverridesComponent,
  EmployeeReportsPayrollWebChangesComponent,
  ReportsOasisComponent,
  ReportsPayrollAccountingDownloadComponent,
  ReportsUnpaidEmployeesComponent,
  ReportsHrReviewsComponent,
  ReportsDeductionCodeDetailComponent,
  ReportsWcBillingHistoryComponent,
  ReportsReportCreatorComponent,
  ReportsPayrollGarnishmentsComponent,
  ReportsHrTerminationComponent,
  EmployeeReportsEarningsSummaryComponent,
  EmployeeReportsWagesEarningsComponent,
  ReportsPayrollGarnishmentsDocketInfoComponent,
  ReportsPayrollGarnishmentsHistoryComponent,
  ReportsAccountingSetupListingComponent,
  ReportsOsha300LogComponent,
  ReportsPayrollDeductionInArrearsComponent,
  ReportsHrW2AddressChangeComponent,
  ReportsEmployeeStatisticsComponent,
  ReportsPayrollBenefitsBillingComponent,
  EmployeeReportsHrEmployeePersonalInfomationComponent,
  EmployeeReportsPersonalEeInfoComponent,
  EmployeeReportsPersonalEmploymentInfoComponent,
  EmployeeReportsPersonalAddressComponent,
  EmployeeReportsPersonalCompensationComponent,
  EmployeeReportsPersonalTaxComponent,
  EmployeeReportsPersonalOtherComponent,
  EmployeeReportsPersonalAllInfoComponent,
  EmployeeReportsJobHistoryComponent,
  EmployeeReportsStatusInquiryComponent,
  EmployeeReportsPayrollInquiryComponent,
  EmployeeReportsPtoComponent,
  EmployeeReportsScheduledDeductionsComponent,
  PerksDiscountsListComponent
} from './components';

import {
  BenefitsComponent,
  ClientComponent,
  DashboardComponent,
  EmployeesComponent,
  HrResourcesComponent,
  MarketplaceComponent,
  PayrollComponent,
  ProjectsComponent,
  ReportsComponent,
  RequirementsComponent,
  SetupComponent,
  SupportComponent,
  WorkersCompAndSafetyComponent,
  DiscountsComponent
} from './containers';

// Services
import {
  NewsService,
  HeaderService,
  EthnicityService,
  GenderService,
	MartialStatusService,
  InterRelationshipService,
} from '../shared/services';



// CLient Services
import {
  SubnavService,
  ClientContactsService,
  ClientEmployeeBarchartDetailsService,
  ClientEmployeePayrollLoansService,
  ClientEmployeeProjectDetailsService,
  ClientEmployeeScheduledPaymentsService,
  ClientEmployeeSkillCodeAssignmentService,
  ClientEmployeeRecurringDeductionsService,
  ClientSetupDivisionsService,
  ClientSetupDepartmentsService,
  ClientEmployeePTOService,
  ClientSetupProjectsService,
  ClientSetupEventsService,
  ClientSetupSkillMaintenanceService,
  ClientSetupWorksiteupdateService,
  ClientSetupJobcodeService,
  ClientSetupGeneralLedgerService,
  ClientEmployeePersonalDetailsService,
  ClientEmployee401kService,
  ClientBenefitSummaryReportService,
  PayrollService,
  ClientEmployeeHrEventAssignmentService,
  ClientEmployeeJobRatesService,
  ClientBenefitsPlanService,
  PayrollAnalyticsService,
  SupportAnalyticsService,
  SupportTicketsService,
  ClientEmployeeDetailBeniftsService,
  WorkersCompClaimsService,
  Reports401kSummaryReportService,
  Reports401kSummaryReportByDateService,
  ReportsEmployeeBenefitsRegisterService,
  ReportsService,
  EmployeeReportsService,
  ReportsInvoiceReprintService,
  InvoiceReprintDataService,
  ReportsPtoAbsenceSummaryService,
  ReportsAverageHoursService,
  ReportsWagesEarningsService,
  ReportsClientAllocationService,
  ReportsEarningsSummaryService,
  ReportsPayrollVoucherDetailService,
  ReportsClientAllocationChecknumberService,
  ReportsPtoHoursTakenService,
  EmployeeReportPayHistoryService,
  ReportsClientGrossNetSortService,
  ReportsPersonalChangeService,
  EmployeeReportsEmployeeInformationService,
  ReportsPayrollVoucherSummaryService,
  SupervisorByDepartmentService,
  ReportsUnpaidEmployeesReportService,
  ReportsWcBillingHistoryService,
  ReportsReportCreatorService,
  ReportsHRTerminationService,
  ReportsOsha300LogService,
  ReportsW2AddressChangeService,
  EmployeeStatisticsService,
  ReportsPayrollBenefitsBillingService,
  EmployeeReportJobHistoryService,
  EmployeeReportStatusInquiryService,
  EmployeeReportsPersonalInformationService,
  EmployeeReportScheduledDeductionService
} from './services';

import {
  FormatDatePipe
} from './pipes';
import { HrEventTrackingComponent } from './components/hr-event-tracking/hr-event-tracking.component';
import { HrOnboardingComponent } from './components/hr-onboarding/hr-onboarding.component';
import { HrI9VerificationStatusComponent } from './components/hr-i9-verification-status/hr-i9-verification-status.component';
import { PayrollDeductionSummaryComponent } from './components/payroll-deduction-summary/payroll-deduction-summary.component';
import { HrUnemploymentWagesComponent } from './components/hr-unemployment-wages/hr-unemployment-wages.component';
import { PayrollWebChangesComponent } from './components/payroll-web-changes/payroll-web-changes.component';
import { PayrollLoansComponent } from './components/payroll-loans/payroll-loans.component';
import {
  ReportsPayrollCheckRegisterDownloadComponent
} from './components/reports-payroll-check-register-download/reports-payroll-check-register-download.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    OnboardingModule,
    // Third party modules
    HttpClientInMemoryWebApiModule.forFeature(
      MockDatabaseService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    ClientRoutingModule
  ],
  declarations: [
    BenefitsComponent,
    ClientComponent,
    DashboardComponent,
    EmployeesComponent,
    HrResourcesComponent,
    MarketplaceComponent,
    PayrollComponent,
    SetupComponent,
    PayrollRunComponent,
    ReportsComponent,
    RequirementsComponent,
    SupportComponent,
    WorkersCompAndSafetyComponent,
    ProjectsComponent,
    EmployeeSearchComponent,
    EmployeeAnalyticsComponent,
    ManagerOnboardingComponent,
    PayrollNavbarComponent,
    WorksiteUpdateComponent,
    SetupDivisionsComponent,
    SetupDepartmentsComponent,
    SetupProjectsComponent,
    SetupJobcodesComponent,
    SetupGeneralLedgercodesComponent,
    SetupEventsComponent,
    SetupSkillCodeMaintenanceComponent,
    EmployeePayrollLoansComponent,
    EmployeeScheduledPaymentsComponent,
    EmployeePayRateChangeComponent,
    EmployeeRecurringDeductionsComponent,
    EmployeePayrollPayCodeComponent,
    EmployeePayrollAllocationsComponent,
    EmployeePayrollCostAllocationComponent,
    EmployeePayrollPtoRegisterAdjustmentsComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsEmploymentComponent,
    EmployeeDetailsPtoComponent,
    EmployeeDetailsBenefitsComponent,
    EmployeeDetails401kComponent,
    EmployeeDetailsEmployeeReportsComponent,
    EmployeeDetailsDocumentsComponent,
    EmployeeDetailsPtoSummaryComponent,
    EmployeeSupervisorChangeComponent,
    EmployeeSupervisorChangeComponent,
    PayrollRunDeductionsComponent,
    PayrollAnalyticsComponent,
    PayrollAnalyticsBreadcrumbComponent,
    PayrollAnalyticsSingleBatchComponent,
    PayrollAnalyticsSingleBatchInvoiceSummaryComponent,
    PayrollAnalyticsPayStubComponent,
    PayrollRunHoursEarningsComponent,
    PayrollRunConfirmationComponent,
    PayrollRunReviewSubmitComponent,
    EmployeeHrEventAssignmentComponent,
    EmployeePayrollJobRatesComponent,
    EmployeeStatusChangeComponent,
    PayrollRunCheckMemoModalComponent,
    PayrollRunReviewSubmitQuickSummaryComponent,
    PayrollActionDownloadComponent,
    PayrollActionNotesComponent,
    PayrollHoursEarningsAddDeductionComponent,
    EmployeeTerminationComponent,
    EmployeeSkillCodeAssignmentComponent,
    PayrollRunBreadcrumbComponent,
    PayrollCalendarComponent,
    PayrollRunComponent,
    PayrollRunReviewSubmitPtoOverLimitComponent,
    PayrollRunReviewSubmitEeDefaultsComponent,
    PayrollRunOffCycleBatchComponent,
    PayrollActionUploadComponent,
    PayrollActionBatchNotesComponent,
    PayrollRunAutopayModalComponent,
    BenefitsSupplementalComponent,
    BenefitsAncillaryComponent,
    BenefitsMedicalComponent,
    PayrollRunManualReviewSubmitSummaryComponent,
    SupportTicketsListComponent,
    SupportOpenTicketComponent,
    HrELearningComponent,
    HrRecruitmentAndAppTrackingComponent,
    HrActivitiesComponent,
    HrBirthdaysComponent,
    HrCensusComponent,
    HrEmployeeChangeComponent,
    HrEmployeeListingComponent,
    HrEmployeePersonalChangeComponent,
    HrEmployeeDetailComponent,
    WorkersCompRiskComponent,
    WorkersCompOpenClaimsComponent,
    WorkersCompAllClaimsComponent,
    ReportsClientBenefitSummaryComponent,
    DiscountsComponent,
    HrComplianceComponent,
    WorkersCompClaimDetailsModalComponent,
    ReportsClientBenefitSummaryComponent,
    WorkersCompClaimDetailsModalComponent,
    ReportsClientBenefitSummaryComponent,
    Reports401kSummaryComponent,
    Reports401kSummaryByDateComponent,
    ReportsEmployeeBenefitsRegisterComponent,
    ReportsBenefitsPayrollRegisterDownloadComponent,
    HrComplianceComponent,
    WorkersCompClaimDetailsModalComponent,
    DashboardEmployeeActivityComponent,
    DashboardReportsWidgetComponent,
    DashboardActiveOnboardingComponent,
    DashboardPayrollSummaryComponent,
    DashboardMarketplaceComponent,
    DashbaordProjectsAndServicesComponent,
    FormatDatePipe,
    ReportsListingComponent,
    HrEventTrackingComponent,
    HrOnboardingComponent,
    HrI9VerificationStatusComponent,
    ReportsOasisComponent,
    ReportsInvoiceReprintComponent,
    InvoiceReprintDetailsComponent,
    ReportsPayrollPtoAbsenceSummaryComponent,
    ReportsAverageHoursComponent,
    ReportsGrossNetLastnameComponent,
    PayrollDeductionSummaryComponent,
    ReportsWagesEarningsComponent,
    ReportsPayrollClientAllocationComponent,
    ReportsPayrollClientAllocationGridComponent,
    ReportsEmployeePayrollPayStubsComponent,
    ReportsEarningsSummaryComponent,
    ReportsPayrollVoucherDetailComponent,
    ReportsPayrollPtoHoursTakenComponent,
    EmployeeDetailsSubnavComponent,
    ReportsClientAllocationChecknumberComponent,
    HrUnemploymentWagesComponent,
    EmployeeReportsBenefits401kSummaryComponent,
    EmployeeReportsHrPayHistoryComponent,
    EmployeeReports401kSummaryByDateComponent,
    PayrollPayAndJobOverridesComponent,
    ReportsGrossToNetSortOptionsComponent,
    ReportsGrossToNetSortOptionsGridComponent,
    EmployeeReportsHrEmployeePersonalChangeComponent,
    ReportsGrossToNetSortOptionsComponent,
    EmployeeReportsPayrollDeductionCodeSummaryComponent,
    EmployeeReportsPayrollAverageHoursComponent,
    EmployeeReportsPayrollVoucherDetailComponent,
    EmployeeReportsPayrollDeductionCodeSummaryComponent,
    EmployeeReportsEmployeeInformationInquiryComponent,
    EmployeeReportsHrUnemployementWagesComponent,
    ReportsPayrollVoucherSummaryComponent,
    EmployeeReportsGrossNetSortOptionsComponent,
    ReportsPayrollStatusDownloadComponent,
    EmployeeReportsPayrollVoucherSummaryComponent,
    PayrollWebChangesComponent,
    EmployeeReportsEarningsSummaryComponent,
    EmployeeReportsPtoHoursTakenComponent,
    EmployeeReportsStatusDownloadComponent,
    ReportsSupervisorByDepartmentComponent,
    EmployeeReportsPayrollPayAndJobOverridesComponent,
    EmployeeReportsPayrollWebChangesComponent,
    EmployeeReportsWagesEarningsComponent,
    ReportsPayrollAccountingDownloadComponent,
    ReportsUnpaidEmployeesComponent,
    ReportsHrReviewsComponent,
    ReportsDeductionCodeDetailComponent,
    ReportsWcBillingHistoryComponent,
    ReportsReportCreatorComponent,
    ReportsPayrollGarnishmentsComponent,
    PayrollLoansComponent,
    ReportsHrTerminationComponent,
    ReportsPayrollGarnishmentsDocketInfoComponent,
    ReportsPayrollGarnishmentsHistoryComponent,
    PayrollLoansComponent,
    ReportsAccountingSetupListingComponent,
    ReportsOsha300LogComponent,
    ReportsPayrollDeductionInArrearsComponent,
    ReportsHrW2AddressChangeComponent,
    ReportsEmployeeStatisticsComponent,
    EmployeeReportsJobHistoryComponent,
    ReportsPayrollBenefitsBillingComponent,
    ReportsPayrollCheckRegisterDownloadComponent,
    EmployeeReportsStatusInquiryComponent,
    EmployeeReportsHrEmployeePersonalInfomationComponent,
    EmployeeReportsPersonalEeInfoComponent,
    EmployeeReportsPersonalEmploymentInfoComponent,
    EmployeeReportsPersonalAddressComponent,
    EmployeeReportsPersonalCompensationComponent,
    EmployeeReportsPersonalTaxComponent,
    EmployeeReportsPersonalOtherComponent,
    EmployeeReportsPersonalAllInfoComponent,
    EmployeeReportsPayrollInquiryComponent,
    EmployeeReportsPtoComponent,
    EmployeeReportsScheduledDeductionsComponent,
    PerksDiscountsListComponent,
    ReportsOasisComponent
    ],
  exports: [
    HrELearningComponent,
  ],
  providers: [
    HeaderService,
    SubnavService,
    ClientContactsService,
    ClientEmployeeBarchartDetailsService,
    ClientEmployeeHrEventAssignmentService,
    ClientEmployeeJobRatesService,
    ClientEmployeePayrollLoansService,
    ClientEmployeeProjectDetailsService,
    ClientEmployeeScheduledPaymentsService,
    ClientEmployeeSkillCodeAssignmentService,
    ClientEmployeeRecurringDeductionsService,
    ClientSetupDivisionsService,
    ClientSetupDepartmentsService,
    ClientSetupProjectsService,
    ClientSetupEventsService,
    ClientSetupSkillMaintenanceService,
    ClientSetupWorksiteupdateService,
    ClientSetupJobcodeService,
    ClientSetupGeneralLedgerService,
    ClientEmployeePersonalDetailsService,
    ClientEmployeePTOService,
    ClientEmployee401kService,
    ClientBenefitSummaryReportService,
    Reports401kSummaryReportService,
    ClientBenefitsPlanService,
    ClientEmployeeDetailBeniftsService,
    EthnicityService,
    GenderService,
    MartialStatusService,
    InterRelationshipService,
    PayrollService,
    PayrollAnalyticsService,
    SupportAnalyticsService,
    SupportTicketsService,
    WorkersCompClaimsService,
    Reports401kSummaryReportByDateService,
    ReportsEmployeeBenefitsRegisterService,
    ReportsService,
    EmployeeReportsService,
    ReportsOasisComponent,
    ReportsInvoiceReprintService,
    ReportsPtoAbsenceSummaryService,
    InvoiceReprintDataService,
    ReportsAverageHoursService,
    ReportsWagesEarningsService,
    ReportsClientAllocationService,
    ReportsEarningsSummaryService,
    ReportsPayrollVoucherDetailService,
    ReportsClientAllocationChecknumberService,
    ReportsPtoHoursTakenService,
    EmployeeReportPayHistoryService,
    ReportsClientGrossNetSortService,
    ReportsPersonalChangeService,
    EmployeeReportsEmployeeInformationService,
    ReportsPayrollVoucherSummaryService,
    SupervisorByDepartmentService,
    ReportsUnpaidEmployeesReportService,
    ReportsWcBillingHistoryService,
    ReportsReportCreatorService,
    ReportsHRTerminationService,
    ReportsOsha300LogService,
    ReportsW2AddressChangeService,
    EmployeeStatisticsService,
    ReportsPayrollBenefitsBillingService,
    EmployeeReportJobHistoryService,
    EmployeeReportStatusInquiryService,
    EmployeeReportsPersonalInformationService,
    EmployeeReportScheduledDeductionService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ClientModule { }

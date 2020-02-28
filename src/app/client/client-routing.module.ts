import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../shared/services';

import {
	PayrollRunComponent,
	PayrollAnalyticsComponent,
	PayrollRunReviewSubmitComponent,
	PayrollRunConfirmationComponent,
	EmployeeSearchComponent,
	EmployeeAnalyticsComponent,
	ManagerOnboardingComponent,
	WorksiteUpdateComponent,
	SetupJobcodesComponent,
	SetupGeneralLedgercodesComponent,
	SetupEventsComponent,
	SetupProjectsComponent,
	SetupDepartmentsComponent,
	SetupDivisionsComponent,
	SetupSkillCodeMaintenanceComponent,
	EmployeePayrollLoansComponent,
	EmployeeRecurringDeductionsComponent,
	EmployeeDetailsComponent,
	PayrollRunDeductionsComponent,
	PayrollRunHoursEarningsComponent,
	BenefitsMedicalComponent,
	BenefitsAncillaryComponent,
	BenefitsSupplementalComponent,
	PayrollAnalyticsSingleBatchComponent,
	WorkersCompOpenClaimsComponent,
	WorkersCompAllClaimsComponent,
	HrEmployeeChangeComponent,
	HrEmployeeListingComponent,
	HrEmployeePersonalChangeComponent,
	HrCensusComponent,
	HrBirthdaysComponent,
	ReportsClientBenefitSummaryComponent,
	Reports401kSummaryComponent,
	Reports401kSummaryByDateComponent,
	ReportsEmployeeBenefitsRegisterComponent,
	ReportsBenefitsPayrollRegisterDownloadComponent,
	ReportsListingComponent,
	HrEventTrackingComponent,
	ReportsInvoiceReprintComponent,
	InvoiceReprintDetailsComponent,
	ReportsPayrollPtoAbsenceSummaryComponent,
	ReportsAverageHoursComponent,
	ReportsGrossNetLastnameComponent,
	ReportsWagesEarningsComponent,
	ReportsPayrollClientAllocationComponent,
	ReportsEmployeePayrollPayStubsComponent,
	ReportsEarningsSummaryComponent,
	ReportsPayrollVoucherDetailComponent,
	ReportsPayrollPtoHoursTakenComponent,
	EmployeeDetailsEmploymentComponent,
	EmployeeDetailsPtoComponent,
	EmployeeDetailsBenefitsComponent,
	EmployeeDetails401kComponent,
	EmployeeDetailsEmployeeReportsComponent,
	EmployeeDetailsDocumentsComponent,
	ReportsClientAllocationChecknumberComponent,
	EmployeeReportsBenefits401kSummaryComponent,
	EmployeeReportsHrPayHistoryComponent,
	EmployeeReportsHrEmployeePersonalChangeComponent,
	ReportsGrossToNetSortOptionsComponent,
	EmployeeReports401kSummaryByDateComponent,
	EmployeeReportsPayrollDeductionCodeSummaryComponent,
	EmployeeReportsEmployeeInformationInquiryComponent,
	EmployeeReportsPayrollAverageHoursComponent,
	EmployeeReportsHrUnemployementWagesComponent,
	ReportsPayrollVoucherSummaryComponent,
	EmployeeReportsGrossNetSortOptionsComponent,
	EmployeeReportsPayrollVoucherDetailComponent,
	ReportsPayrollStatusDownloadComponent,
	EmployeeReportsPayrollVoucherSummaryComponent,
	EmployeeReportsEarningsSummaryComponent,
	EmployeeReportsPtoHoursTakenComponent,
	EmployeeReportsStatusDownloadComponent,
	ReportsSupervisorByDepartmentComponent,
	EmployeeReportsPayrollPayAndJobOverridesComponent,
	EmployeeReportsPayrollWebChangesComponent,
	EmployeeReportsWagesEarningsComponent,
	ReportsOasisComponent,
	ReportsPayrollAccountingDownloadComponent,
	ReportsUnpaidEmployeesComponent,
	ReportsHrReviewsComponent,
	ReportsDeductionCodeDetailComponent,
	ReportsWcBillingHistoryComponent,
	ReportsReportCreatorComponent,
	ReportsPayrollGarnishmentsComponent,
	ReportsHrTerminationComponent,
	ReportsPayrollDeductionInArrearsComponent,
	ReportsAccountingSetupListingComponent,
	ReportsOsha300LogComponent,
	ReportsHrW2AddressChangeComponent,
	ReportsEmployeeStatisticsComponent,
	EmployeeReportsJobHistoryComponent,
	ReportsPayrollBenefitsBillingComponent,
	EmployeeReportsStatusInquiryComponent,
	EmployeeReportsHrEmployeePersonalInfomationComponent,
	EmployeeReportsPayrollInquiryComponent,
	EmployeeReportsPtoComponent,
	EmployeeReportsScheduledDeductionsComponent

} from './components';

import {
	EmployeeDetailsPersonalComponent,
	EmployeeDetailsTaxComponent,
	EmployeeDetailsDirectDepositComponent,
} from "../shared/components";

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
	DiscountsComponent,
} from './containers';
import {HrI9VerificationStatusComponent} from './components/hr-i9-verification-status/hr-i9-verification-status.component';
import {PayrollDeductionSummaryComponent} from './components/payroll-deduction-summary/payroll-deduction-summary.component';
import {HrUnemploymentWagesComponent} from './components/hr-unemployment-wages/hr-unemployment-wages.component';
import {PayrollPayAndJobOverridesComponent} from './components/payroll-pay-and-job-overrides/payroll-pay-and-job-overrides.component';
import {PayrollWebChangesComponent} from './components/payroll-web-changes/payroll-web-changes.component';
import {PayrollLoansComponent} from './components/payroll-loans/payroll-loans.component';
import {ReportsPayrollCheckRegisterDownloadComponent} from './components/reports-payroll-check-register-download/reports-payroll-check-register-download.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: ClientComponent,
		children: [
			{
				path: 'benefits',
				canActivate: [AuthGuard],
				component: BenefitsComponent,
				children: [
					{
						path: 'medical',
						component: BenefitsMedicalComponent
					},
					{
						path: 'ancillary',
						component: BenefitsAncillaryComponent
					},
					{
						path: 'supplemental',
						component: BenefitsSupplementalComponent
					},
					{
						path: '',
						redirectTo: 'medical',
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'dashboard',
				canActivate: [AuthGuard],
				component: DashboardComponent
			},
			{
				path: 'employees',
				canActivate: [AuthGuard],
				component: EmployeesComponent,
				children: [
					{
						path: 'employeeSearch',
						component: EmployeeSearchComponent,
						children: [
							// {
							//  path: 'employee/:employeeId',
							//  component: EmployeeDetailsComponent
							// }
						]
					},
					// {
					//  path: 'employeeSearch/:employeeName/:employeeId',
					//  component: EmployeeDetailsComponent
					// },
					{
						path: 'employee/:employeeId',
						redirectTo: 'employee/:employeeId/details',
						pathMatch: 'full'
					},
					{
						path: 'employee/:employeeId/details',
						component: EmployeeDetailsComponent,
						children: [
							{
								path: 'personal',
								component: EmployeeDetailsPersonalComponent,
							},
							{
								path: 'taxWithholding',
								component: EmployeeDetailsTaxComponent,
							},
							{
								path: 'employment',
								component: EmployeeDetailsEmploymentComponent,
							},
							{
								path: 'paidTimeOff',
								component: EmployeeDetailsPtoComponent,
							},
							{
								path: 'benefitSummary',
								component: EmployeeDetailsBenefitsComponent
							},
							{
								path: 'emp401KSummary',
								component: EmployeeDetails401kComponent
							},
							{
								path: 'employeeReports',
								component: EmployeeDetailsEmployeeReportsComponent,
								// children: [
								//   {
								//     path: 'employee-pay-stubs',
								//     component: ReportsEmployeePayrollPayStubsComponent
								//   }
								// ]
							},
							{
								path: 'employeeReports/employee-pay-stubs',
								component: ReportsEmployeePayrollPayStubsComponent
							},
							{
								path: 'employeeReports/employee-401k-summary',
								component: EmployeeReportsBenefits401kSummaryComponent
							},
							{
								path: 'employeeReports/employee-401k-summary-by-date-range',
								component: EmployeeReports401kSummaryByDateComponent
							},
							{
								path: 'employeeReports/employee-pay-history',
								component: EmployeeReportsHrPayHistoryComponent
							}, {
								path: 'employeeReports/employee-personal-change',
								component: EmployeeReportsHrEmployeePersonalChangeComponent
							}, {
								path: 'employeeReports/employee-deduction-code-summary',
								component: EmployeeReportsPayrollDeductionCodeSummaryComponent
							}, {
								path: 'employeeReports/employee-average-hours',
								component: EmployeeReportsPayrollAverageHoursComponent
							},
							{
								path: 'employeeReports/employee-voucher-detail',
								component: EmployeeReportsPayrollVoucherDetailComponent
							}, {
								path: 'employeeReports/employee-unemployement-wages',
								component: EmployeeReportsHrUnemployementWagesComponent
							},
							{
								path: 'employeeReports/employee-gross-net-sort-options',
								component: EmployeeReportsGrossNetSortOptionsComponent
							},
							{
								path: 'employeeReports/employee-information-inquiry',
								component: EmployeeReportsEmployeeInformationInquiryComponent
							},
							{
								path: 'employeeReports/employee-voucher-summary',
								component: EmployeeReportsPayrollVoucherSummaryComponent
							},
							{
								path: 'employeeReports/employee-earnings-summary',
								component: EmployeeReportsEarningsSummaryComponent
							},
							{
								path: 'employeeReports/employee-pto-hours-taken',
								component: EmployeeReportsPtoHoursTakenComponent
							},
							{
								path: 'employeeReports/employee-status-download',
								component: EmployeeReportsStatusDownloadComponent
							},
							{
								path: 'employeeReports/employee-pay-and-job-overrides',
								component: EmployeeReportsPayrollPayAndJobOverridesComponent
							},
							{
								path: 'employeeReports/employee-web-changes',
								component: EmployeeReportsPayrollWebChangesComponent
							},
							{
								path: 'employeeReports/employee-wages-earnings',
								component: EmployeeReportsWagesEarningsComponent
							},
							{
								path: 'employeeReports/employee-personal-information',
								component: EmployeeReportsHrEmployeePersonalInfomationComponent
							},
							{
								path: 'employeeReports/employee-job-history',
								component: EmployeeReportsJobHistoryComponent
							},
							{
								path: 'employeeReports/employee-status-inquiry',
								component: EmployeeReportsStatusInquiryComponent
							},
							{
								path: 'employeeReports/employee-payroll-inquiry',
								component: EmployeeReportsPayrollInquiryComponent
							},
							{
								path: 'employeeReports/employee-pto',
								component: EmployeeReportsPtoComponent
							},
							{
								path: 'employeeReports/employee-scheduled-deductions',
								component: EmployeeReportsScheduledDeductionsComponent
							},
							{
								path: 'empDirectDeposit',
								component: EmployeeDetailsDirectDepositComponent
							},
							{
								path: 'empDocuments',
								component: EmployeeDetailsDocumentsComponent
							},
							{
								path: '',
								redirectTo: 'personal',
								pathMatch: 'full'
							}
						]
					},
					{
						path: 'analytics',
						component: EmployeeAnalyticsComponent
					},
					{
						path: 'manager-onboarding',
						component: ManagerOnboardingComponent
					},
					{
						path: '',
						redirectTo: 'employeeSearch',
						pathMatch: 'full'
					},
					{
						path: 'employeePayrollLoan',
						component: EmployeePayrollLoansComponent
					},
					{
						path: 'employeeRecurringDeduction',
						component: EmployeeRecurringDeductionsComponent
					}
				]
			},
			{
				path: 'hr-resources',
				canActivate: [AuthGuard],
				component: HrResourcesComponent
			},
			{
				path: 'bizvault',
				canActivate: [AuthGuard],
				component: MarketplaceComponent
			},
			{
				path: 'discounts',
				canActivate: [AuthGuard],
				component: DiscountsComponent
			},
			{
				path: 'payroll',
				canActivate: [AuthGuard],
				component: PayrollComponent,
				children: [
					{
						path: 'run',
						component: PayrollRunComponent
					},
					{
						path: 'analytics',
						component: PayrollAnalyticsComponent
					},
					{
						path: 'analytics/batch/:batchId',
						component: PayrollAnalyticsSingleBatchComponent
					},
					{
						path: 'run/batch/roster/hours-earnings',
						component: PayrollRunHoursEarningsComponent
					},
					{
						path: 'run/batch/:batchId/roster/:rosterId/hours-earnings',
						component: PayrollRunHoursEarningsComponent
					},
					{
						path: 'run/batch/:batchId/roster/:rosterId/deductions',
						component: PayrollRunDeductionsComponent
					},
					{
						path: 'run/batch/:batchId/roster/:rosterId/review-submit',
						component: PayrollRunReviewSubmitComponent
					},
					{
						path: 'run/batch/:batchId/roster/:rosterId/confirmation',
						component: PayrollRunConfirmationComponent
					},
					{
						path: '',
						redirectTo: 'run',
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'projects',
				canActivate: [AuthGuard],
				component: ProjectsComponent
			},
			{
				path: 'onboarding',
				canActivate: [AuthGuard],
				loadChildren: 'app/client/modules/onboarding/onboarding.module#OnboardingModule'
			},
			{
				path: 'reports',
				canActivate: [AuthGuard],
				component: ReportsComponent,
				children: [
					{
						path: 'reports-favorites',
						component: ReportsListingComponent,
						data: {
							title: 'favorites'
						}
					},
					{
						path: 'reports-oasis',
						component: ReportsOasisComponent
					},
					{
						path: 'reports-listing',
						component: ReportsListingComponent,
						data: {
							title: 'all available reports'
						}
					},
					{
						path: 'report-creator',
						component: ReportsReportCreatorComponent,
					},
					{
						path: 'reports-listing/company-benefits-summary',
						component: ReportsClientBenefitSummaryComponent
					},
					{
						path: 'reports-listing/employee-benefits-register',
						component: ReportsEmployeeBenefitsRegisterComponent
					},
					{
						path: 'reports-listing/benefits-payroll-register',
						component: ReportsBenefitsPayrollRegisterDownloadComponent
					},
					{
						path: 'reports-listing/employee-personal-change-summary',
						component: HrEmployeePersonalChangeComponent
					},
					{
						path: 'reports-listing/birthdays-summary',
						component: HrBirthdaysComponent
					},
					{
						path: 'reports-listing/census-summary',
						component: HrCensusComponent
					},
					{
						path: 'reports-listing/employee-change-summary',
						component: HrEmployeeChangeComponent
					},
					{
						path: 'reports-listing/employee-listing-summary',
						component: HrEmployeeListingComponent
					},
					{
						path: 'reports-listing/401k-summary-report',
						component: Reports401kSummaryComponent
					},
					{
						path: 'reports-listing/401k-summary-report-by-date',
						component: Reports401kSummaryByDateComponent
					},
					{
						path: 'reports-listing/event-tracking',
						component: HrEventTrackingComponent
					},
					{
						path: 'reports-listing/i9-verification-status',
						component: HrI9VerificationStatusComponent
					},
					{
						path: 'reports-listing/unemployment-wages',
						component: HrUnemploymentWagesComponent
					},
					{
						path: 'reports-listing/invoice-reprint',
						component: ReportsInvoiceReprintComponent
					},
					{
						path: 'reports-listing/invoice-reprint-details/:invoiceNumber',
						component: InvoiceReprintDetailsComponent
					},
					{
						path: 'reports-listing/pto-absence-summary',
						component: ReportsPayrollPtoAbsenceSummaryComponent
					},
					{
						path: 'reports-listing/average-hours',
						component: ReportsAverageHoursComponent
					},
					{
						path: 'reports-listing/gross-net-lastname',
						component: ReportsGrossNetLastnameComponent
					},
					{
						path: 'reports-listing/gross-net-sort-options',
						component: ReportsGrossToNetSortOptionsComponent
					},
					{
						path: 'reports-listing/deduction-summary',
						component: PayrollDeductionSummaryComponent
					},
					{
						path: 'reports-listing/wages-earnings',
						component: ReportsWagesEarningsComponent
					},
					{
						path: 'reports-listing/client-allocation',
						component: ReportsPayrollClientAllocationComponent
					},
					{
						path: 'reports-listing/earnings-summary',
						component: ReportsEarningsSummaryComponent
					},
					{
						path: 'reports-listing/voucher-detail',
						component: ReportsPayrollVoucherDetailComponent
					},
					{
						path: 'reports-listing/voucher-summary',
						component: ReportsPayrollVoucherSummaryComponent
					},
					{
						path: 'reports-listing/pto-hours-taken',
						component: ReportsPayrollPtoHoursTakenComponent
					},
					{
						path: 'reports-listing/client-allocation-checknumber',
						component: ReportsClientAllocationChecknumberComponent
					},
					{
						path: 'reports-listing/pay-and-job-overrides',
						component: PayrollPayAndJobOverridesComponent
					},
					{
						path: 'reports-listing/status-download',
						component: ReportsPayrollStatusDownloadComponent
					},
					{
						path: 'reports-listing/web-changes',
						component: PayrollWebChangesComponent
					},
					{
						path: 'reports-listing/supervisor-by-department',
						component: ReportsSupervisorByDepartmentComponent
					},
					{
						path: 'reports-listing/accounting-download',
						component: ReportsPayrollAccountingDownloadComponent
					},
					{
						path: 'reports-listing/unpaid-employees',
						component: ReportsUnpaidEmployeesComponent
					},
					{
						path: 'reports-listing/reviews',
						component: ReportsHrReviewsComponent
					},
					{
						path: 'reports-listing/deduction-code-detail',
						component: ReportsDeductionCodeDetailComponent
					},
					{
						path: 'reports-listing/wc-billing-history',
						component: ReportsWcBillingHistoryComponent
					},
					{
						path: 'reports-listing/garnishments',
						component: ReportsPayrollGarnishmentsComponent
					},
					{
						path: 'reports-listing/loans',
						component: PayrollLoansComponent
					},
					{
						path: 'reports-listing/termination',
						component: ReportsHrTerminationComponent
					},
					{
						path: 'reports-listing/payroll-deductions-arrears',
						component: ReportsPayrollDeductionInArrearsComponent
					},
					{
						path: 'reports-listing/accounting-setup-listing',
						component: ReportsAccountingSetupListingComponent
					},
					{
						path: 'reports-listing/osha-300-log',
						component: ReportsOsha300LogComponent
					},
					{
						path: 'reports-listing/w2-address-change',
						component: ReportsHrW2AddressChangeComponent
					},
					{
						path: 'reports-listing/employee-statistics',
						component: ReportsEmployeeStatisticsComponent
					},
					{
						path: 'reports-listing/benefits-billing',
						component: ReportsPayrollBenefitsBillingComponent
					},
					{
						path: 'reports-listing/check-register-download',
						component: ReportsPayrollCheckRegisterDownloadComponent
					},
					{
						path: '',
						redirectTo: 'reports-favorites',
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'requirements',
				canActivate: [AuthGuard],
				component: RequirementsComponent
			},
			{
				path: 'setup',
				canActivate: [AuthGuard],
				component: SetupComponent,
				children: [
					{
						path: 'worksite-update',
						component: WorksiteUpdateComponent
					},
					{
						path: 'divisions',
						component: SetupDivisionsComponent
					},
					{
						path: 'departments',
						component: SetupDepartmentsComponent
					},
					{
						path: 'projects',
						component: SetupProjectsComponent
					},
					{
						path: 'job-codes',
						component: SetupJobcodesComponent
					},
					{
						path: 'general-ledger',
						component: SetupGeneralLedgercodesComponent
					},
					{
						path: 'events',
						component: SetupEventsComponent
					},
					{
						path: 'skill-maintenance',
						component: SetupSkillCodeMaintenanceComponent
					},
					{
						path: '',
						redirectTo: 'worksite-update',
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'support',
				canActivate: [AuthGuard],
				component: SupportComponent
			},
			{
				path: 'workers-comp-and-safety',
				canActivate: [AuthGuard],
				component: WorkersCompAndSafetyComponent
			},
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientRoutingModule {
}

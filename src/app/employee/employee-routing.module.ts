import { CompensationTaxComponent } from './components/compensation-tax/compensation-tax.component';
import { CompensationEarningSummaryComponent } from './components/compensation-earning-summary/compensation-earning-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {
  BenefitsCollegeSavingsComponent,
  Benefits401Component,
  CompensationDeductionDetailComponent,
  CompensationEarningDetailsComponent,
  EmployeeDetailsDirectDepositComponent,
  CompensationPayStubReportsComponent,
  CompensationPaidTimeOffComponent,
  CompensationGarnishmentsComponent,
  CompensationGarnishmentsDocketReportComponent,
  CompensationGarnishmentsDocketHistoryComponent,
  EmployeeDetailsHistoryComponent,
} from './components';

import {
	EmployeeDetailsPersonalComponent,
  EmployeeDetailsTaxComponent
} from '../shared/components';

import {
	AuthGuard
} from '../shared/services';

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

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: EmployeeComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
				children: [
					{
						path: 'personal',
						component: EmployeeDetailsPersonalComponent
					},
					{
						path: 'taxWithholding',
						component: EmployeeDetailsTaxComponent
					},
					{
						path: 'empDirectDeposit',
						component: EmployeeDetailsDirectDepositComponent
          },
          {
            path: 'employeeHistory',
            component: EmployeeDetailsHistoryComponent
          },
					{
						path: '',
						redirectTo: 'personal',
						pathMatch: 'full'
					}
				]
      },
      {
        path: 'benefits',
        canActivate: [AuthGuard],
        component: BenefitsComponent,
        children: [
          {
            path: '401k',
            component: Benefits401Component
          },
          {
            path: 'college-savings',
            component: BenefitsCollegeSavingsComponent
          }
        ]
      },
      {
        path: 'compensation',
        canActivate: [AuthGuard],
        component: CompensationComponent,
        children: [
            {
              path: 'payStubs',
              component: CompensationPayStubReportsComponent
            },
    		    {
              path: 'annualPaySummary',
              component: CompensationAnnualPaySummaryComponent,
                children: [
                    {
                      path: 'earnings-summary',
                      component: CompensationEarningSummaryComponent
                    },
                    {
                      path: 'deduction-detail',
                      component: CompensationDeductionDetailComponent
                    },
                    {
                      path: 'earnings-detail',
                      component: CompensationEarningDetailsComponent
                    },
                    {
                      path: 'tax',
                      component: CompensationTaxComponent,
                    },
                    {
                      path: '',
                      redirectTo: 'earnings-summary',
                      pathMatch: 'full'
                    }
                  ]
              },
              {
                path: 'paidTimeOff',
                component: CompensationPaidTimeOffComponent
              },
              {
                path: 'garnischments',
                component: CompensationGarnishmentsComponent
          },
          {
						path: '',
						redirectTo: 'payStubs',
						pathMatch: 'full'
					}
        ]
        
      },
      {
        path: 'human-resources',
        canActivate: [AuthGuard],
        component: HumanResourcesComponent
      },
      {
        path: 'perks-discounts',
        canActivate: [AuthGuard],
        component: PerksDiscountComponent
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
export class EmployeeRoutingModule { }

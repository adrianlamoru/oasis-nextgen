import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../shared/services';
import { ClientEmployeeDetailBeniftsService } from '../../services/client-employee-detail-benifts.service';
import { IClientEmployeeBenefitsDetail } from '../../models/client-employee-benefits-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details-benefits',
  templateUrl: './employee-details-benefits.component.html',
  styleUrls: ['./employee-details-benefits.component.scss']
})
export class EmployeeDetailsBenefitsComponent implements OnInit {
  @Input() employeeId: string;
  private tokenData: String = '';
  private employeeIdSubscription: any;
  
  showError = false;
  errorMsg = '';
  benefitsSummaryTableDataRows: IClientEmployeeBenefitsDetail[];
  // benefitsSummaryTableDataRows = [
  //   {
  //     planName: 'Aetna Hno 0/100 FL',
  //     planData: {
  //       planType: 'Employee',
  //       planStatus: 'Active',
  //       section125: 'Yes',
  //       effectiveDate: '10/01/2018',
  //       startDate: '10/01/2018',
  //       coverageEnd: '10/01/2019',
  //       totalPremium: '426.00',
  //       companyContribution: '426.00',
  //       employeeContribution: '0.00'
  //     }
  //   },
  //   {
  //     planName: 'Superior Vision',
  //     planData: {
  //       planType: 'Employee',
  //       planStatus: 'Active',
  //       section125: 'Yes',
  //       effectiveDate: '10/01/2018',
  //       startDate: '10/01/2018',
  //       coverageEnd: '10/01/2019',
  //       totalPremium: '3.50',
  //       companyContribution: '0.00',
  //       employeeContribution: '3.50'
  //     }
  //   },
  //   {
  //     planName: 'Unum Life - 15K',
  //     planData: {
  //       planType: '',
  //       planStatus: 'Active',
  //       section125: 'Yes',
  //       effectiveDate: '10/01/2018',
  //       startDate: '10/01/2018',
  //       coverageEnd: '10/01/2019',
  //       totalPremium: '0.98',
  //       companyContribution: '0.98',
  //       employeeContribution: ''
  //     }
  //   }
  // ];

  constructor(
    private authService: AuthService,
    private clientEmployeeDetailBenifitService: ClientEmployeeDetailBeniftsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.employeeId);
    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getBenfitSummaryData(this.tokenData);
    },
    err => {
      console.log(err);
    });
  }

  getBenfitSummaryData(sessionToken) {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.clientEmployeeDetailBenifitService.getEmployeeBenefitsData(sessionToken, this.employeeId)
      .subscribe( (clientEmployeeBenfitData: any) => {
        if (clientEmployeeBenfitData.JSONOUT.errorMessage) {
          // alert(clientEmployeeBenfitData.JSONOUT.errorMessage);
          this.showError = true;
          this.errorMsg = clientEmployeeBenfitData.JSONOUT.errorMessage;
        } else {
          this.benefitsSummaryTableDataRows = clientEmployeeBenfitData.JSONOUT.responseBody.employeeBenefitsSummary;
          this.benefitsSummaryTableDataRows.filter(item => {
            item.section125 = item.section125.toString() === 'true' ? 'Yes' : 'No';
          });
        }
        }
      );
    });
  }

}

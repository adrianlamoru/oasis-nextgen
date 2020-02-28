import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {ClientEmployeesService} from "../../../shared/services";
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details-employment',
  templateUrl: './employee-details-employment.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-details-employment.component.scss']
})
export class EmployeeDetailsEmploymentComponent implements OnInit {

  
  @Input() employeeId: string;
  private tokenData: String = '';
  private employeeIdSubscription: any;

  checkSumCount = '';
  employmentData = {
    jobTitle: '',
    jobCodeDate: '',
    statusDate: '',
    typeDate: '',
    benefitGroup: '',
    benefitsThruDate: '',
    workShift: '',
    unionCode: '',
    employeeClock: '',
    payGroupMethod: '',
    wcClassCode: '',
    clientName: '',
    employerID: '',
    projectCode: '',
    department: '',
    division: '',
    location: '',
    peoStartDate: '',
    clientStartDate: ''
  };

  compensationData = {
    currentPayRate: '',
    payPeriod: '',
    currentAnnualizedPay: '',
    standardHours: '',
    autoAcceptTS: '',
    defaultTSHours: '',
    dailyTimesheets: '',
    lastHireDate: '',
    origHireDate: '',
    seniorityDate: '',
    peoStartDate: '',
    lastPerformanceReview: '',
    reasonTerminated: '',
  };

  constructor(
    private clientEmployeesService: ClientEmployeesService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEmploymentData(this.tokenData);
    },
    err => {
      console.log(err);
    });
  }

  getEmploymentData(sessionToken) {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.clientEmployeesService.getEmployeeEmploymentData(sessionToken, this.employeeId).subscribe (
        (res: any) => {
          if (res.JSONOUT.errorMessage) {
            alert(res.JSONOUT.errorMessage);
          } else {
            this.employmentData = res.JSONOUT.responseBody.employmentDetailsSection[0];
            this.compensationData = res.JSONOUT.responseBody.compensationDetailsSection[0];
            // this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
          }
        },
        err => {
          alert('Error occurred');
        }
      );
    });
  }


}

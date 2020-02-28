import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employee401k } from '../../models/index';
import { ClientEmployee401kService } from '../../services';
import { AuthService } from '../../../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details-401k',
  templateUrl: './employee-details-401k.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-details-401k.component.scss']
})
export class EmployeeDetails401kComponent implements OnInit {
  private tokenData: String = '';
  @Input() employeeId: string;
  private employeeIdSubscription: any;

  employee401kSummary: Employee401k[];
  simpleYears: number[];
  selectedYear: number;

  constructor(
    private clientEmployee401kService: ClientEmployee401kService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getYears();
    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEmployee401KSummary(this.selectedYear, this.tokenData);
    },
    err => {
      console.log(err);
    });
  }

  // Get simpleYears array
  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 3;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  getEmployee401KSummary(year, sessionToken) {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      const myObject = { 'sessionToken': sessionToken, 'year': year.toString(), 'employeeId': this.employeeId };
      this.clientEmployee401kService.getEmployee401kSummary(myObject)
      .subscribe(
        (employee401kSummary: any) => {
          this.employee401kSummary = employee401kSummary.JSONOUT.responseBody.employee401kSummary;
        }
      );
    });
  }

  onSelectionChanged(year) {
    this.selectedYear = year;
    this.getEmployee401KSummary(this.selectedYear, this.tokenData);
    // this.clientEmployee401kService.getEmployee401kSummaryByYear(this.selectedYear)
    // .subscribe(
    //   employee401kSummary => {
    //     this.employee401kSummary = employee401kSummary;
    //   }
    // );
  }



}

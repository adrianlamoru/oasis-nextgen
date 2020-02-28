import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriven } from '../../models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { WebChange } from '../../models/payroll-web-changes';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-payroll-web-changes',
  templateUrl: './payroll-web-changes.component.html',
  styleUrls: ['./payroll-web-changes.component.scss']
})
export class PayrollWebChangesComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  disableViewReportButton: boolean;
  isLoading = true;
  reportGeneratedDate: string;
  selectedEndDate: NgbDateStruct;
  selectedStartDate: NgbDateStruct;
  selectedStatus: DataDriven;
  statusTypes: DataDriven[];
  webChangesDataRows: WebChange[];
  filteredWebChangesDataRows: WebChange[];
  dropdownOptions: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService) { }

  ngOnInit() {
    this.disableViewReportButton = true;
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    this.initStatusTypes();
    if (this.statusTypes.length > 0) {
      this.selectedStatus = this.statusTypes[0];
    }

    const today = new Date();
    this.selectedStartDate = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    setTimeout(() => {
      this.initWebChangesData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  initStatusTypes() {
    this.statusTypes = [{
      ID: 'ALL',
      Text: '- ALL -'
    }, {
      ID: 'H',
      Text: 'New Hire'
    }, {
      ID: 'P',
      Text: 'Pay Rate Change'
    }, {
      ID: 'J',
      Text: 'Job Change'
    }, {
      ID: 'L',
      Text: 'Leave of Absence'
    }, {
      ID: 'E',
      Text: 'Reactivation'
    }, {
      ID: 'T',
      Text: 'Termination'
    }, {
      ID: 'R',
      Text: 'Rehire'
    }, {
      ID: 'S',
      Text: 'Status/Type Change'
    }, {
      ID: 'D',
      Text: 'Department Transfer'
    }];
  }

  selectStatus(statusType: DataDriven) {
    this.selectedStatus = statusType;
    this.disableViewReportButton = false;
  }

  viewReport() {

    if (this.pageSource !== 'employeeReports' ) {
      this.filteredWebChangesDataRows = this.webChangesDataRows
      .filter(c => (this.selectedStatus.ID === 'ALL' || c.statusCode === this.selectedStatus.ID) &&
        this.compareDates(c.date, this.selectedStartDate) >= 0 &&
        this.compareDates(c.date, this.selectedEndDate) <= 0
      );
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.filteredWebChangesDataRows = this.webChangesDataRows
      .filter(c => (this.selectedStatus.ID === 'ALL' || c.statusCode === this.selectedStatus.ID) &&
        this.compareDates(c.date, this.selectedStartDate) >= 0 &&
        this.compareDates(c.date, this.selectedEndDate) <= 0 &&
        c.empID === this.employeeId
      );
    }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
  }

  goToBack() {
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 3000);
  }

  initWebChangesData() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);
    const twentyAgo = new Date();
    twentyAgo.setDate(today.getDate() - 20);
    this.webChangesDataRows = [{
      statusCode: 'T',
      statusDesc: 'Termination',
      userName: 'BF3688',
      date: tenAgo,
      time: '02:22:03',
      effDate: twentyAgo,
      empID: 'A17447',
      ssn: '###-##-3333',
      empName: 'DYLAN ABRAHAMS',
      newValue: '',
      oldValue: ''
    },
    {
      statusCode: 'P',
      statusDesc: 'Pay Rate Change',
      userName: 'BF3688',
      date: tenAgo,
      time: '10:22:52',
      effDate: twentyAgo,
      empID: 'A17447',
      ssn: '###-##-6789',
      empName: 'DYLAN ABRAHAMS',
      newValue: '1200.00/wk',
      oldValue: '1103.85/wk'
    },
    {
      statusCode: 'J',
      statusDesc: 'Job Change',
      userName: 'BF3688',
      date: today,
      time: '02:34:59',
      effDate: yesterday,
      empID: 'R98845',
      ssn: '###-##-9876',
      empName: 'KEELEY ABRAMO',
      newValue: 'HRAST',
      oldValue: 'PAYCLE'
    },
    {
      statusCode: 'D',
      statusDesc: 'Department Transfer',
      userName: 'BF3688',
      date: today,
      time: '09:40:35',
      effDate: yesterday,
      empID: 'R98845',
      ssn: '###-##-4321',
      empName: 'KEELEY ABRAMO',
      newValue: '500',
      oldValue: '400'
    },
    {
      statusCode: 'D',
      statusDesc: 'Department Transfer',
      userName: 'BF3688',
      date: today,
      time: '10:24:31',
      effDate: yesterday,
      empID: 'G85782',
      ssn: '###-##-7890',
      empName: 'ANTON ACOSTA',
      newValue: '300',
      oldValue: '400'
    }];
  }

  compareDates(date: Date, dateNg: NgbDateStruct) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (year > dateNg.year) {
      return 1;
    } else if (year < dateNg.year) {
      return -1;
    } else {
      if (month > dateNg.month) {
        return 1;
      } else if (month < dateNg.month) {
        return -1;
      } else {
        if (day > dateNg.day) {
          return 1;
        } else if (day < dateNg.day) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }

}

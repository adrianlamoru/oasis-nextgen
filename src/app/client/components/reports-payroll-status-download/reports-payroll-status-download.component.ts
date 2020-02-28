import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from '../../services';
import { Router } from '@angular/router';
import { FileService } from '../../../shared/services';

@Component({
  selector: 'app-reports-payroll-status-download',
  templateUrl: './reports-payroll-status-download.component.html',
  styleUrls: ['./reports-payroll-status-download.component.scss']
})
export class ReportsPayrollStatusDownloadComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  originalHireStart: any;
  originalHireEnd: any;
  lastHireStart: any;
  lastHireEnd: any;

  statusData: any[];
  filteredStatusDataRows: any[];

  dropdownOptions: any[];
  disableViewReportButton: boolean;
  displayReport: boolean;
  isLoading = false;
  reportGeneratedDate: string;

  employeeStatusDD: any[];
  selectedEmployeeStatus: string;

  constructor(
    private router: Router,
    private fileService: FileService,
    private reportsService: ReportsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.displayReport = false;

    this.initData();
    this.initStatusData();

    this.dropdownOptions = this.reportsService.getDownloadOptions();
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
      this.displayReport = true;
    }, 3000);
  }

  viewReport() {
    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredStatusDataRows = this.statusData;

    this.disableViewReportButton = true;

  }

  initData() {
    this.employeeStatusDD =  [
      {
          ID: 1,
          Text: 'ALL'
      },
      {
          ID: 2,
          Text: 'ACTIVE'
      },
      {
          ID: 3,
          Text: 'LEAVE - PD'
      },
      {
          ID: 4,
          Text: 'LEAVE - UP'
      },
      {
          ID: 5,
          Text: 'TERM'
      },
      {
          ID: 6,
          Text: 'W COMP'
      }
    ];

    this.disableViewReportButton = false;
  }

  selectedDownloadOption(item) {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    if (this.pageSource !== 'employeeReports') {
      this.fileService.downloadFileByUrl('/assets/csv/BenefitsPayrollRegister.csv', 'Status Download');
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      // need to integrate employee service here
      this.fileService.downloadFileByUrl('/assets/csv/BenefitsPayrollRegister.csv', 'Status Download - ' + this.employeeId);
    }
  }

  onSelectionEmpStatusDD(selectedStatusItem) {
    this.selectedEmployeeStatus = selectedStatusItem.Text;

    this.enableViewReportButton();
  }

  enableViewReportButton() {
    if ((this.originalHireStart === null || this.originalHireStart === undefined) ||
        (this.originalHireEnd === null || this.originalHireEnd === undefined) ||
        (this.lastHireStart === null || this.lastHireStart === undefined) ||
        (this.lastHireEnd === null || this.lastHireEnd === undefined) ||
        (this.selectedEmployeeStatus === '' || this.selectedEmployeeStatus === undefined)) {
      this.disableViewReportButton = true;
    } else {
      this.disableViewReportButton = false;
    }
  }

  dateValueChanged(event, source) {
    if (source === 'originalHireStart') {
      this.originalHireStart = event;
    } else if (source === 'originalHireEnd') {
      this.originalHireEnd = event;
    } else if (source === 'lastHireStart') {
      this.lastHireStart = event;
    } else if (source === 'lastHireEnd') {
      this.lastHireEnd = event;
    }
  }

  goToBack() {
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

  initStatusData() {
    this.statusData = [{
      'EmployeeNumber': '207',
      'Exempt': 'N',
      'AnnualPay': '41,600.00',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '1234',
      'LastName': 'ABRAHAMS',
      'ClientID': '114',
      'ProjCostCenter': '3',
      'EmployeeID': 'A17447',
      'HomeDepartment': '324234',
      'FirstName': 'DYLAN',
      'HourlyRate': '20.00',
      'OrigHireDate': '10/28/2017',
      'SSN': '###-##-8752',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '05/06/1993',
      'EmploymentType': 'F',
      'CurrentJob': 'ACCOUNTINGCOORDINATOR1',
      'Gender': 'M',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'ACCOUNTING COORDINATOR 1',
      'LastHireDate': '10/28/2017'
    },
    {
      'EmployeeNumber': '215',
      'Exempt': 'N',
      'AnnualPay': '24,710.40',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '',
      'LastName': 'VAN GOEVERDEN',
      'ClientID': '114',
      'ProjCostCenter': '',
      'EmployeeID': 'A17543',
      'HomeDepartment': '35',
      'FirstName': 'DAYNE',
      'HourlyRate': '11.88',
      'OrigHireDate': '10/28/2017',
      'SSN': '###-##-3452',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '04/21/1996',
      'EmploymentType': 'SF',
      'CurrentJob': 'SERVER',
      'Gender': 'M',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'SERVER',
      'LastHireDate': '10/28/2017'
    },
    {
      'EmployeeNumber': '221',
      'Exempt': 'N',
      'AnnualPay': '24,710.40',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '',
      'LastName': 'NENE',
      'ClientID': '114',
      'ProjCostCenter': '',
      'EmployeeID': 'A17783',
      'HomeDepartment': '35',
      'FirstName': 'BANDILE',
      'HourlyRate': '11.88',
      'OrigHireDate': '10/28/2017',
      'SSN': '###-##-1906',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '03/21/1986',
      'EmploymentType': 'SF',
      'CurrentJob': 'SERVER',
      'Gender': 'M',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'SERVER',
      'LastHireDate': '10/28/2017'
    },
    {
      'EmployeeNumber': '228',
      'Exempt': 'N',
      'AnnualPay': '24,710.40',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '',
      'LastName': 'WARD',
      'ClientID': '114',
      'ProjCostCenter': '',
      'EmployeeID': 'A18071',
      'HomeDepartment': '35',
      'FirstName': 'ELEANOR',
      'HourlyRate': '11.88',
      'OrigHireDate': '10/28/2017',
      'SSN': '###-##-0365',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '08/13/1997',
      'EmploymentType': 'SF',
      'CurrentJob': 'SERVER',
      'Gender': 'F',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'SERVER',
      'LastHireDate': '10/28/2017'
    },
    {
      'EmployeeNumber': '230',
      'Exempt': 'N',
      'AnnualPay': '18,720.00',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '',
      'LastName': 'NORTON',
      'ClientID': '114',
      'ProjCostCenter': '',
      'EmployeeID': 'A18095',
      'HomeDepartment': '22',
      'FirstName': 'JOHN',
      'HourlyRate': '9.00',
      'OrigHireDate': '10/26/2017',
      'SSN': '###-##-0197',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '02/25/1952',
      'EmploymentType': 'P',
      'CurrentJob': 'CSEMON',
      'Gender': 'M',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'COURSE MONITOR',
      'LastHireDate': '10/26/2017'
    },
    {
      'EmployeeNumber': '200',
      'Exempt': 'N',
      'AnnualPay': '24,710.40',
      'workersCompensationClass': 'FL.9060',
      'HomeDivision': '',
      'LastName': 'NGWENYA',
      'ClientID': '114',
      'ProjCostCenter': '',
      'EmployeeID': 'B17376',
      'HomeDepartment': '35',
      'FirstName': 'KENNETH',
      'HourlyRate': '11.88',
      'OrigHireDate': '10/28/2017',
      'SSN': '###-##-2546',
      'Location': 'MAIN',
      'EmploymentStatus': 'A',
      'TermDate': '',
      'BirthDate': '09/21/1989',
      'EmploymentType': 'SF',
      'CurrentJob': 'SERVER',
      'Gender': 'M',
      'PayMethod': 'H',
      'PayGroup': 'BIWEEKLY',
      'JobTitle': 'SERVER',
      'LastHireDate': '10/28/2017'
    }];
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { DataDriven, EarningsSummary } from '../../models';
import { ReportsService, ReportsEarningsSummaryService } from '../../services';

@Component({
  selector: 'app-reports-earnings-summary',
  templateUrl: './reports-earnings-summary.component.html',
  styleUrls: ['./reports-earnings-summary.component.scss']
})
export class ReportsEarningsSummaryComponent implements OnInit {

  @Input() employeeId?: string;
  @Input() pageSource?: string;

  detailedPayCodeCheckboxGroup = {
    yes: false
  };

  public yesAnswered: boolean;

  reportsEarningsDetailReportData: EarningsSummary;
  filteredEarningsDetailReportData: EarningsSummary [];

  reportsEarningsSummaryReportData: EarningsSummary;
  filteredEarningsSummaryReportData: EarningsSummary [];

  locationCodes: DataDriven[];
  divisionCodes: DataDriven[];
  departmentCodes: DataDriven[];
  payCodes: DataDriven[];

  selectedLocationCode: DataDriven;
  selectedDivisionCodes: DataDriven;
  selectedDepartmentCode: DataDriven;
  selectedPayCode: DataDriven;

  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor (
  private router: Router,
  private reportsService: ReportsService,
  private reportsEarningsSummaryService: ReportsEarningsSummaryService) {

    this.yesAnswered = false;

  }

  ngOnInit() {

    const today = new Date();

    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    this.disableViewReportButton = false;

    this.initLocations();
    this.initDivisions();
    this.initDepartments();
    this.initPayCodes();

    if (this.locationCodes.length > 0) {
      this.selectedLocationCode = this.locationCodes[0];
    }
    if (this.divisionCodes.length > 0) {
      this.selectedDivisionCodes = this.divisionCodes[0];
    }
    if (this.departmentCodes.length > 0) {
      this.selectedDepartmentCode = this.departmentCodes[0];
    }
    if (this.payCodes.length > 0) {
      this.selectedPayCode = this.payCodes[0];
    }

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  selectLocation(locationCode: DataDriven) {
    this.selectedLocationCode = locationCode;
    this.disableViewReportButton = false;
  }

  selectDivision(divisionCode: DataDriven) {
    this.selectedDivisionCodes = divisionCode;
    this.disableViewReportButton = false;
  }

  selectDepartment(departmentCode: DataDriven) {
    this.selectedDepartmentCode = departmentCode;
    this.disableViewReportButton = false;
  }

  selectPayCode(payCode: DataDriven) {
    this.selectedPayCode = payCode;
    this.disableViewReportButton = false;
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }


  viewReport() {

    this.isLoading = true;

    if (this.pageSource !== 'employeeReports') {

      this.reportsEarningsSummaryService.getEarningsSummary()
      .subscribe(reportsEarningsSummaryReportData => {
          this.filteredEarningsSummaryReportData = reportsEarningsSummaryReportData;



      this.filteredEarningsSummaryReportData = this.filteredEarningsSummaryReportData.
      filter(e => ((this.selectedLocationCode.ID === 'LOC.ALL' || e.locationCodeID === this.selectedLocationCode.ID) &&
          (this.selectedDivisionCodes.ID === 'DIV.ALL' || e.divisionCodeID === this.selectedDivisionCodes.ID) &&
          (this.selectedDepartmentCode.ID === 'DEP.ALL' || e.deptCodeID === this.selectedDepartmentCode.ID) &&
          (this.selectedPayCode.ID === 'PAY.ALL' || e.payCodeID === this.selectedPayCode.ID)) &&

          ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1 &&
          this.compareDates(e.payDate, this.selectedEndDate) === -1 ||
          this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
          this.compareDates(e.payDate, this.selectedEndDate) === 0)));

          this.isLoading = false;

      });

  } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {

    this.reportsEarningsSummaryService.getEarningsSummary()
    .subscribe(reportsEarningsSummaryReportData => {
        this.filteredEarningsSummaryReportData = reportsEarningsSummaryReportData;



    this.filteredEarningsSummaryReportData = this.filteredEarningsSummaryReportData.
    filter(e => ((this.selectedLocationCode.ID === 'LOC.ALL' || e.locationCodeID === this.selectedLocationCode.ID) &&
        (this.selectedDivisionCodes.ID === 'DIV.ALL' || e.divisionCodeID === this.selectedDivisionCodes.ID) &&
        (this.selectedDepartmentCode.ID === 'DEP.ALL' || e.deptCodeID === this.selectedDepartmentCode.ID) &&
        (this.selectedPayCode.ID === 'PAY.ALL' || e.payCodeID === this.selectedPayCode.ID)) &&

        (this.employeeId === e.empId) &&

        ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1 &&
        this.compareDates(e.payDate, this.selectedEndDate) === -1 ||
        this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
        this.compareDates(e.payDate, this.selectedEndDate) === 0)));

        this.isLoading = false;

    });

  }

  if (this.pageSource !== 'employeeReports') {

    this.reportsEarningsSummaryService.getEarningsDetail()
    .subscribe(reportsEarningsDetailReportData => {
        this.filteredEarningsDetailReportData = reportsEarningsDetailReportData;

    this.filteredEarningsDetailReportData = this.filteredEarningsDetailReportData.filter(e => ((this.selectedLocationCode.ID === 'LOC.ALL'
    || e.locationCodeID === this.selectedLocationCode.ID) &&
        (this.selectedDivisionCodes.ID === 'DIV.ALL' || e.divisionCodeID === this.selectedDivisionCodes.ID) &&
        (this.selectedDepartmentCode.ID === 'DEP.ALL' || e.deptCodeID === this.selectedDepartmentCode.ID) &&
        (this.selectedPayCode.ID === 'PAY.ALL' || e.payCodeID === this.selectedPayCode.ID)) &&

        ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1 &&
        this.compareDates(e.payDate, this.selectedEndDate) === -1 ||
        this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
        this.compareDates(e.payDate, this.selectedEndDate) === 0)));

        this.isLoading = false;

    });

  } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {

    this.reportsEarningsSummaryService.getEarningsDetail()
    .subscribe(reportsEarningsDetailReportData => {
        this.filteredEarningsDetailReportData = reportsEarningsDetailReportData;

    this.filteredEarningsDetailReportData = this.filteredEarningsDetailReportData.filter(e => ((this.selectedLocationCode.ID === 'LOC.ALL'
    || e.locationCodeID === this.selectedLocationCode.ID) &&
        (this.selectedDivisionCodes.ID === 'DIV.ALL' || e.divisionCodeID === this.selectedDivisionCodes.ID) &&
        (this.selectedDepartmentCode.ID === 'DEP.ALL' || e.deptCodeID === this.selectedDepartmentCode.ID) &&
        (this.selectedPayCode.ID === 'PAY.ALL' || e.payCodeID === this.selectedPayCode.ID)) &&

        (this.employeeId === e.empId) &&

        ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1 &&
        this.compareDates(e.payDate, this.selectedEndDate) === -1 ||
        this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
        this.compareDates(e.payDate, this.selectedEndDate) === 0)));

        this.isLoading = false;

      });

  }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;

  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

  initLocations() {
    this.locationCodes = [{
      ID: 'LOC.ALL',
      Text: 'ALL LOCATIONS'
    }, {
      ID: '230',
      Text: '230 - PEMBROKE PINES'
    }, {
      ID: '340',
      Text: '340 - CLEARWATER'
    }, {
      ID: '800',
      Text: '800 - FORT LAUDERDALE'
    }, {
      ID: '900',
      Text: '900 - WEST PALM BEACH'
    }];
  }

  initDivisions() {
    this.divisionCodes = [{
      ID: 'DIV.ALL',
      Text: 'ALL DIVISIONS'
    }, {
      ID: '100',
      Text: '100 - CORPORATE'
    }, {
      ID: '110',
      Text: '110 - SOUTH FLORIDA AREA'
    }, {
      ID: '120',
      Text: '120 - CENTRAL FLORIDA'
    }, {
      ID: '130',
      Text: '130 - NORTH FLORIDA'
    }];
  }

  initDepartments() {
    this.departmentCodes = [{
      ID: 'DEP.ALL',
      Text: 'ALL DEPARTMENTS'
    }, {
      ID: '1001',
      Text: '1001 - GENERAL EDUCATION DEPARTMENT'
    }, {
      ID: '1044',
      Text: '1044 - GRANTS'
    }, {
      ID: '1049',
      Text: '1049 - ADMIN'
    }, {
      ID: '1059',
      Text: '1059 - ATHLETICS'
    }];
  }

  initPayCodes() {
    this.payCodes = [{
      ID: 'PAY.ALL',
      Text: 'ALL PAY CODES'
    }, {
      ID: 'REG',
      Text: 'REGULAR BI-WEEKLY FULL-TIME PAY CODE'
    }, {
      ID: 'OT',
      Text: 'OVERTIME PAY'
    }, {
      ID: 'VAC',
      Text: 'VACATION PAY'
    }, {
      ID: 'HOL',
      Text: 'HOLIDAY PAY'
    },
    {
      ID: 'INC',
      Text: 'INCENTIVE PAY'
    }];
  }

  compareDates(date: Date, dateNg: NgbDateStruct) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
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

  onGroupedCheckBoxChanged(group, variable, event) {
    if (!event.value) {
      return;
    }
    this.disableViewReportButton = false;
    for (const property in this[group]) {
      if (property !== variable) {
        this[group][property] = false;
      }
    }
  }

  goToBack() {
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

  calculateSelectedRow(options) {
    if (options.name === 'SelectedRowsSummary') {
        if (options.summaryProcess === 'start') {
            options.totalValue = 0;
        } else if (options.summaryProcess === 'calculate') {
                options.totalValue = options.value.empSsn;
        }
    }
}

  print() {
    let printContents, popupWin;
    printContents = document.getElementById('contentToRender').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>    <script src="dist/styles.bundle.js"></script>

          <style>
          //........Customized style.......
          .header {
            font-weight: bold;
          }

          .content {
            table {
              border: 1px solid black;
            }
          }
          </style>
        </head>
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }

}

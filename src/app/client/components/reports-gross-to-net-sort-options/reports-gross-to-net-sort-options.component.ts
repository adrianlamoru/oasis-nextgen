import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../shared/services';
import { DxDropDownBoxComponent } from 'devextreme-angular';
import { ReportsClientGrossNetSortService, ReportsService } from '../../services';

@Component({
  selector: 'app-reports-gross-to-net-sort-options',
  templateUrl: './reports-gross-to-net-sort-options.component.html',
  styleUrls: ['./reports-gross-to-net-sort-options.component.scss']
})
export class ReportsGrossToNetSortOptionsComponent implements OnInit {

  @Input() employeeId?: string;
  @Input() pageSource?: string;

  @ViewChild(DxDropDownBoxComponent) ddb;

  reportGeneratedDate: any;

  sortOptions: any[];
  yearsData: any[];
  selectedYear: any;
  excludeNoPayCheckbox: boolean;
  batchesData: any[];
  selectedBatch: any;
  disableViewReportButton = true;
  isLoading = true;
  dropdownOptions: any[];

  selectedSorting = {
    position1: '',
    position2: '',
    position3: '',
    position4: ''
  };
  columnOrderSorting = [
    {
      position: 0,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }, {
      position: 1,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }, {
      position: 2,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }, {
      position: 3,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }
  ];

  clientGrossNetSort: any[];
  filteredColumnOrderSorting: any[];
  filteredColumnOrderSubTotals: any[];
  clientGrossNetSortArrSubTotals = new Array();

  availableLocations: any[];
  availableDivisions: any[];
  availableDepartments: any[];
  availableClockNo: any[];
  availableProjectNo: any[];

  pageBreakCount = 0;

  contentReady = false;

  constructor(
    private router: Router,
    private sortServices: SortService,
    private reportsService: ReportsService,
    private reportsClientGrossNetSortService: ReportsClientGrossNetSortService
  ) {
  }

  ngOnInit() {

   this.initData();

    this.getFilteredData();
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  initData() {
    this.sortOptions = this.sortServices.getGrossToNetSortOptions();
    this.yearsData = this.sortServices.getYears();
    this.batchesData = this.sortServices.getBatches();

    const today = new Date();
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
  }

   /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;

    if (this.pageSource !== 'employeeReports') {
      this.clientGrossNetSort = this.reportsClientGrossNetSortService.getClientGrossNetSortData();
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.clientGrossNetSort = this.reportsClientGrossNetSortService.getEmployeeGrossNetSortData(this.employeeId);
    }

    this.availableLocations = this.reportsClientGrossNetSortService.getAvailableLocations();
    this.availableDivisions = this.reportsClientGrossNetSortService.getAvailableDivisions();
    this.availableDepartments = this.reportsClientGrossNetSortService.getAvailableDepartments();
    this.availableClockNo = this.reportsClientGrossNetSortService.getAvailableClockNo();
    this.availableProjectNo = this.reportsClientGrossNetSortService.getAvailableProjectNo();
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.filterDataRow();
      this.findSpecificSortType();
      this.findSpecificSubTotals();

      if (this.filteredColumnOrderSorting.length > 0) {
        this.sortDataSet();
      }

      if (this.filteredColumnOrderSubTotals.length === 1) {
        this.calcSubTotalForOne(this.filteredColumnOrderSubTotals);
      } else if (this.filteredColumnOrderSubTotals.length > 1) {
        this.calcSubTotalForSelected(this.filteredColumnOrderSubTotals, this.clientGrossNetSort);
      }
      this.isLoading = false;
    }, 3000);
  }

  findSpecificSortType() {
    const tempArr = [];
    this.columnOrderSorting.forEach(item => {
        if (item.sort !== '') {
          if (item.sort === 'Clock No.') {
            tempArr.push('ClockNo');
          } else if (item.sort === 'Project No.') {
            tempArr.push('ProjectNo');
          } else {
            tempArr.push(item.sort);
          }
        }
    });
    this.filteredColumnOrderSorting = tempArr;

  }

  findSpecificSubTotals() {
    const tempArr = [];
    this.columnOrderSorting.forEach(item => {
      if (item.sort !== '' && item.subtotal !== '') {
        if (item.subtotal) {
          tempArr.push(item);
        }
      }
    });

    this.filteredColumnOrderSubTotals = tempArr;
  }
  sortDataSet() {

    const sortBy = (prop, arr) => arr.sort(
      (i, j) => prop.map(v => {
        return i[v] < j[v] ? -1 : i[v] > j[v] ? 1 : 0;
      }).find(r => r)
    );

    sortBy(this.filteredColumnOrderSorting, this.clientGrossNetSort);

  }

  calcSubTotalForOne(inputSubTotalArr) {
    this.clientGrossNetSortArrSubTotals = [];
    let tempArr = [];

      if (inputSubTotalArr[0].sort === 'Location') {
        this.availableLocations.forEach((locationItem, index) => {
          tempArr = this.clientGrossNetSort.filter(item => {
            return (item.Location.toLocaleString() === locationItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Location');

          tempArr.push(newRowForSubTotal);

          // this.clientGrossNetSortArrSubTotals[index] = new Array();
          // this.clientGrossNetSortArrSubTotals[index].push(tempArr);
          // this.clientGrossNetSortArrSubTotals = new Array();
          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });
        this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Division') {
        
        this.availableDivisions.forEach((divisionItem, index) => {
          tempArr = this.clientGrossNetSort.filter(item => {
            return (item.Division.toLocaleString() === divisionItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Division');

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });
        this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Department') {
        this.availableDepartments.forEach((departmentItem, index) => {
          tempArr = this.clientGrossNetSort.filter(item => {
            return (item.Department.toLocaleString() === departmentItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Department');

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });
        this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Clock No.') {
        this.availableClockNo.forEach((clockNoItem, index) => {
          tempArr = this.clientGrossNetSort.filter(item => {
            return (item.ClockNo.toLocaleString() === clockNoItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'ClockNo');

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });
        this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Project No.') {
        this.availableProjectNo.forEach((projectNoItem, index) => {
          tempArr = this.clientGrossNetSort.filter(item => {
            return (item.ProjectNo.toLocaleString() === projectNoItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'ProjectNo');

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });
        this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;
      }

  }

  calcSubTotalForSelected(inputSubTotalArr, inputCAData) {

    this.clientGrossNetSortArrSubTotals = [];
    let tempArr = [];
    let tempSubTotalArr = inputSubTotalArr;
    if (inputSubTotalArr != null || inputSubTotalArr.length !== 0) {
    // for (let i = 0; i < inputSubTotalArr.length; i++) {
      if (inputSubTotalArr[0].sort === 'Location') {
        this.availableLocations.forEach((locationItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Location.toLocaleString() === locationItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Location');

          if (this.availableLocations.length - 1 === index) {
            inputSubTotalArr.shift();
            tempSubTotalArr = inputSubTotalArr;

          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);
          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Division') {
        this.availableDivisions.forEach((divisionItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Division.toLocaleString() === divisionItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Division');

          if (this.availableDivisions.length - 1 === index) {
            inputSubTotalArr.shift();
            tempSubTotalArr = inputSubTotalArr;
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Department') {
        this.availableDepartments.forEach((departmentItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Department.toLocaleString() === departmentItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Department');

          if (this.availableDepartments.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Clock No.') {
        this.availableClockNo.forEach((clockNoItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.ClockNo.toLocaleString() === clockNoItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'ClockNo');

          if (this.availableClockNo.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Project No.') {
        this.availableProjectNo.forEach((projectNoItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.ProjectNo.toLocaleString() === projectNoItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'ProjectNo');

          if (this.availableProjectNo.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientGrossNetSortArrSubTotals.push(...tempArr);
        });

      }
      this.clientGrossNetSort = this.clientGrossNetSortArrSubTotals;

    }
    // }

  }

  calcSubTotalsForSpecificCol(inputArr, colName) {
    const tempObj = {
      Location: '',
      Division: '',
      Department: '',
      ClockNo: '',
      ProjectNo: '',
      SSN: '',
      CheckDate: '',
      EmployeeName: '',
      Voucher: '',
      Description: '',
      Code: '',
      Type: '',
      Units: '',
      UnitRate: '',
      Amount: '',
      CheckType: '',
      TotalGrossPay: 0,
      TotalExpenses: 0,
      GrossEarnings: 0,
      TotalDeductions: 0,
      TotalTaxes: 0,
      TotalNetPay: 0,

      itemRef: '',
    };

    inputArr.forEach(item => {
      tempObj.SSN = 'SubTotal for ' + colName + '-' + item[colName];

      for (const prop in item) {
        if (prop === 'TotalGrossPay') {
          tempObj.TotalGrossPay += +item[prop];
        } else if (prop === 'TotalExpenses') {
          tempObj.TotalExpenses += +item[prop];
        } else if (prop === 'GrossEarnings') {
          tempObj.GrossEarnings += +item[prop];
        } else if (prop === 'TotalDeductions') {
          tempObj.TotalDeductions += +item[prop];
        } else if (prop === 'TotalTaxes') {
          tempObj.TotalTaxes += +item[prop];
        } else if (prop === 'TotalNetPay') {
          tempObj.TotalNetPay += +item[prop];
        }
      }

    });

    return tempObj;
  }

  onSelectionYears(item) {
    this.selectedYear = item.Text;
    this.disableViewReportButton = false;
  }

  onSelectionBatches(item) {
    this.selectedBatch = item.Text;
    this.disableViewReportButton = false;
  }

  onSelectionSortDD(selectedItem, sortIndex, selectedSortIndex, sortSource) {
    this.columnOrderSorting[sortIndex].sort = selectedItem.text;
    this.disableViewReportButton = false;
  }

  makeSortingItemsDisabled(sortText) {
    const index = this.columnOrderSorting.findIndex(x => {
      if (x.sort !== null || x.sort !== '') {
        return (x.sort === sortText);
      }
    });
    return (index === -1) ? false : true;
  }

  checkBoxSubTotalChanged(event, index) {
    this.columnOrderSorting[index].subtotal = event.value;
    this.disableViewReportButton = false;
  }

  checkBoxPageBreakChanged(event, index) {
    this.columnOrderSorting[index].pageBreak = event.value;
    this.disableViewReportButton = false;

    if (event.value) {
      this.pageBreakCount++;
    } else {
      this.pageBreakCount--;
    }
  }

  makeSortingPageBreakDisabled(index) {
    let checkboxesToDisable = [];

    // only run the logic if atleast 3 checkboxes are checked
    if (this.pageBreakCount >= 3) {
      this.columnOrderSorting.forEach( item => {
        if (item.pageBreak === '' || item.pageBreak === null || !item.pageBreak) {
          checkboxesToDisable.push(item.position);
        }
      });

      const result = checkboxesToDisable.findIndex(x => {
        if (x !== null || x !== '') {
          return (x === index);
        }
      });

      return (result === -1) ? false : true;
    } else {
      checkboxesToDisable = [];
      return false;
    }
  }

  onExcludeNoPayCheckboxChanged(event) {
    this.excludeNoPayCheckbox = event.value;
    this.disableViewReportButton = false;
  }

  goToBack() {
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
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

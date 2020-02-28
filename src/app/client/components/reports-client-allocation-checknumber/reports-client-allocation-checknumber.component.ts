import { Component, OnInit } from '@angular/core';
import { SortService } from '../../../shared/services';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ReportsClientAllocationChecknumberService, ReportsService } from '../../services';

@Component({
  selector: 'app-reports-client-allocation-checknumber',
  templateUrl: './reports-client-allocation-checknumber.component.html',
  styleUrls: ['./reports-client-allocation-checknumber.component.scss']
})
export class ReportsClientAllocationChecknumberComponent implements OnInit {

  clientAllocationChecknumberRadioType = [
    'By Date Range',
    'By Year'
  ];

  byDateRangeValue: boolean;
  byYearValue: boolean;

  reportGeneratedDate: any;
  sortOptions: any[];
  yearsData: any[];
  selectedYear: any;
  selectedBatch: any;
  batchesData: any[];
  selectedStartDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;
  dropdownOptions: any[];

  disableViewReportButton = true;
  isLoading = true;

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
    }, {
      position: 4,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }, {
      position: 5,
      sort: '',
      subtotal: '',
      pageBreak: ''
    }
  ];

  clientAllocationChecknumberData: any[];
  filteredColumnOrderSorting: any[];
  filteredColumnOrderSubTotals: any[];
  clientAllocationChecknumberDataArrSubTotals = new Array();

  availableDivisions: any[];
  availableDepartments: any[];
  availableLocations: any[];
  availableProject: any[];
  availablePaymethod: any[];
  availableJobcode: any[];

  pageBreakCount = 0;

  constructor(private router: Router,
              private sortServices: SortService,
              private reportsService: ReportsService,
              private reportsClientAllocationChecknumberService: ReportsClientAllocationChecknumberService) { }

  ngOnInit() {
    this.byDateRangeValue = false;
    this.byYearValue = true;

    this.initData();

    this.getFilteredData();
    this.dropdownOptions = this.reportsService.getDownloadOptions();

  }

  initData() {
    this.sortOptions = this.sortServices.getClientAllocationSortOptions();
    this.yearsData = this.sortServices.getYears();
    this.batchesData = this.sortServices.getBatches();

    const today = new Date();
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.selectedStartDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }

  filterDataRow() {

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;

    this.clientAllocationChecknumberData = this.reportsClientAllocationChecknumberService.getClientAllocationData();
    this.availableDivisions = this.reportsClientAllocationChecknumberService.getAvailableDivisions();
    this.availableDepartments = this.reportsClientAllocationChecknumberService.getAvailableDepartments();
    this.availableLocations = this.reportsClientAllocationChecknumberService.getAvailableLocations();
    this.availableProject = this.reportsClientAllocationChecknumberService.getAvailableProjects();
    this.availablePaymethod = this.reportsClientAllocationChecknumberService.getAvailablePaymethod();
    this.availableJobcode = this.reportsClientAllocationChecknumberService.getAvailableJobcode();
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
        this.calcSubTotalForSelected(this.filteredColumnOrderSubTotals, this.clientAllocationChecknumberData);
      }
      this.isLoading = false;
    }, 3000);
  }

  findSpecificSortType() {
    const tempArr = [];
    this.columnOrderSorting.forEach(item => {
        if (item.sort !== '') {
          if (item.sort === 'Pay method') {
            tempArr.push('PayMethod');
          } else if (item.sort === 'Job code') {
            tempArr.push('JobCode');
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

    sortBy(this.filteredColumnOrderSorting, this.clientAllocationChecknumberData);
  }

  calcSubTotalForOne(inputSubTotalArr) {
    this.clientAllocationChecknumberDataArrSubTotals = [];
    let tempArr = [];

      if (inputSubTotalArr[0].sort === 'Division') {
        this.availableDivisions.forEach((divisionItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.Division === divisionItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Division');

          tempArr.push(newRowForSubTotal);

          // this.clientAllocationDataArrSubTotals[index] = new Array();
          // this.clientAllocationDataArrSubTotals[index].push(tempArr);
          // this.clientAllocationDataArrSubTotals = new Array();
          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Department') {
        this.availableDepartments.forEach((departmentItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.Department === departmentItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Department');

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Location') {
        this.availableLocations.forEach((locationItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.Location === locationItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Location');

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Project') {
        this.availableProject.forEach((projectItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.Project === projectItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Project');

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Pay method') {
        this.availablePaymethod.forEach((payMethodItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.PayMethod === payMethodItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'PayMethod');

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      } else if (inputSubTotalArr[0].sort === 'Job code') {
        this.availableJobcode.forEach((jobCodeItem, index) => {
          tempArr = this.clientAllocationChecknumberData.filter(item => {
            return (item.JobCode === jobCodeItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'JobCode');

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
        this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;
      }
  }

  calcSubTotalForSelected(inputSubTotalArr, inputCAData) {

    this.clientAllocationChecknumberDataArrSubTotals = [];
    let tempArr = [];
    let tempSubTotalArr = inputSubTotalArr;
    if (inputSubTotalArr != null || inputSubTotalArr.length !== 0) {
    // for (let i = 0; i < inputSubTotalArr.length; i++) {
      if (inputSubTotalArr[0].sort === 'Division') {
        this.availableDivisions.forEach((divisionItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Division === divisionItem);
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
          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Department') {
        this.availableDepartments.forEach((departmentItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Department === departmentItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Department');

          if (this.availableDepartments.length - 1 === index) {
            inputSubTotalArr.shift();
            tempSubTotalArr = inputSubTotalArr;
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Location') {
        this.availableLocations.forEach((locationItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Location === locationItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Location');

          if (this.availableLocations.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Project') {
        this.availableProject.forEach((projectItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.Project === projectItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'Project');

          if (this.availableProject.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });

      } else if (inputSubTotalArr[0].sort === 'Pay method') {
        this.availablePaymethod.forEach((payMethodItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.PayMethod === payMethodItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'PayMethod');

          if (this.availablePaymethod.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });
      } else if (inputSubTotalArr[0].sort === 'Job code') {
        this.availableJobcode.forEach((jobCodeItem, index) => {
          tempArr = inputCAData.filter(item => {
            return (item.JobCode === jobCodeItem);
          });

          const newRowForSubTotal = this.calcSubTotalsForSpecificCol(tempArr, 'JobCode');

          if (this.availableJobcode.length - 1 === index) {
            inputSubTotalArr.shift();
          } else {
            tempSubTotalArr.shift();
          }

          if (tempSubTotalArr.length > 0) {
            this.calcSubTotalForSelected(tempSubTotalArr, tempArr);
          }

          tempArr.push(newRowForSubTotal);

          this.clientAllocationChecknumberDataArrSubTotals.push(...tempArr);
        });

      }
      this.clientAllocationChecknumberData = this.clientAllocationChecknumberDataArrSubTotals;

    }
  }

  calcSubTotalsForSpecificCol(inputArr, colName) {
    const tempObj = {
      WorkComp: 0,
      FicaMedicare: 0,
      EeRetDeduct: 0,
      CheckNumber: '',
      Location: '',
      JobCode: '',
      delHireOthrFee: 0,
      EmployeeTotal: 0,
      AdminFee: 0,
      Suta: 0,
      OtherChgs: 0,
      HrsWorked: 0,
      ErBenefits: 0,
      Futa: 0,
      Division: '',
      GrossWages: 0,
      PayMethod: '',
      Project: '',
      Department: '',
      EmployeeSsn: '',
      EmployeeName: '',

      itemRef: '',
    };

    inputArr.forEach(item => {
      tempObj.EmployeeName = 'SubTotal for ' + colName + '-' + item[colName];

      for (const prop in item) {
        if (prop === 'HrsWorked') {
          tempObj.HrsWorked += +item[prop];
        } else if (prop === 'GrossWages') {
          tempObj.GrossWages += +item[prop];
        } else if (prop === 'FicaMedicare') {
          tempObj.FicaMedicare += +item[prop];
        } else if (prop === 'Futa') {
          tempObj.Futa += +item[prop];
        } else if (prop === 'Suta') {
          tempObj.Suta += +item[prop];
        } else if (prop === 'WorkComp') {
          tempObj.WorkComp += +item[prop];
        } else if (prop === 'AdminFee') {
          tempObj.AdminFee += +item[prop];
        } else if (prop === 'ErBenefits') {
          tempObj.ErBenefits += +item[prop];
        } else if (prop === 'EeRetDeduct') {
          tempObj.EeRetDeduct += +item[prop];
        } else if (prop === 'delHireOthrFee') {
          tempObj.delHireOthrFee += +item[prop];
        } else if (prop === 'OtherChgs') {
          tempObj.OtherChgs += +item[prop];
        } else if (prop === 'EmployeeTotal') {
          tempObj.EmployeeTotal += +item[prop];
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

  onAllocationTypeRadioValueChanged(event) {
    if (event.value === 'By Date Range') {
      this.byYearValue = true;
      this.byDateRangeValue = false;
    } else if (event.value === 'By Year') {
      this.byYearValue = false;
      this.byDateRangeValue = true;
    }
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {}

}

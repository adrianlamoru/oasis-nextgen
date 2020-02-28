import { ViewEncapsulation } from '@angular/core';
// Angular
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

// Bootstrap
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import { IPayStub } from '../../models';

// Services
import { CompensationService } from '../../services';

@Component({
  selector: 'app-compensation-pay-stub-reports',
  templateUrl: './compensation-pay-stub-reports.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./compensation-pay-stub-reports.component.scss']
})
export class CompensationPayStubReportsComponent implements OnInit {

  @ViewChild('payStubModal') payStubModal: ViewContainerRef;
  private actionModalHandle: NgbModalRef;

  isLoading = true;

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay: number = 2018;
  payStubs: IPayStub[];
  selectedPayStub: IPayStub;
  reportGeneratedDate: string;
  openedYearBox: boolean;
  disableViewReportButton: boolean = true;

  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'Open',
      name: 'Open'
    }, {
      id: 'ElectronicPayStatement',
      name: 'Electronic Pay Statement'
    }]
  }];

  constructor(private modalService: NgbModal,
    private compensationService: CompensationService) {
    this.openedYearBox = false;
  }

  ngOnInit() {
    this.getYears();
    this.getFilteredData();
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

  onSelectionChanged(year: number) {
    this.selectedYearDisplay = year;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = this.selectedYear === year;
        
  }


  filterDataRow() {

    this.selectedYear = this.selectedYearDisplay;

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;

    // filter by Year
    this.payStubs = this.compensationService.getPayStubs(this.selectedYear);

  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  onDropdownClick(args, obj, menu) {
    console.log(args);
    console.log(obj);
    console.log(menu);
    if (!args.itemData) {
      return;
    }

    this.selectedPayStub = obj.data;

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          menu.instance._visibleSubmenu.hide();
        }, 100);
        return;
      }
    }

    if (args.itemData.id === 'Open') {
      this.onClickPayStub();
    } else if (args.itemData.id === 'ElectronicPayStatement') {
      this.onClickElectronicPayStatement();
    }
  }

  onClickPayStub() {
    this.openActionModal('sm', this.payStubModal);
  }

  onClickElectronicPayStatement() {
    window.open("https://www.google.com", "_blank");
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

}

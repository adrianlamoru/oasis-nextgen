import { StatusService } from '../../../shared/services';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { DataDriven, HrEmployeeListing } from '../../models/index';
import { Router } from '@angular/router';
import { Status } from '../../../shared/models';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hr-employee-listing',
  templateUrl: './hr-employee-listing.component.html',
  styleUrls: ['./hr-employee-listing.component.scss']
})
export class HrEmployeeListingComponent implements OnInit {

  @ViewChild('employeeDetailModal') employeeDetailModal: ViewContainerRef;
  private actionModalHandle: NgbModalRef;

  employeeListingDataRows: HrEmployeeListing[];
  filteredEmployeeListingDataRows: HrEmployeeListing[]; // test purpose
  selectedStatus: any[];

  isLoading = true;

  status: Status[];
  contentReady = false;
  statusSelectionComponent: any;

  selectedEmployee: HrEmployeeListing;

  reportGeneratedDate: any;

  disableViewReportButton = true;

  isDropDownBoxOpened = false;

  constructor(private router: Router, private statusServices: StatusService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.status = this.statusServices.getStatusData();
    this.selectedStatus = [];

    setTimeout(() => {
      this.initHrEmployeeListingDataRow();
      // this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  syncTreeViewSelection(e: any): void {
    const component = e && e.component;
    this.statusSelectionComponent = component;

    if (!component) {
      return;
    }

    this.contentReady = false;
    component.unselectAll();

    if (this.selectedStatus === undefined) {
      this.selectedStatus = [];
    }

    if (this.selectedStatus.length > 0) {
      this.selectedStatus.forEach(item => {
        component.selectItem(item);
      });
    }

    this.contentReady = true;

    const selectAll = document
      .getElementsByClassName('dx-treeview-select-all-item')
      .item(0);
    selectAll.addEventListener(
      'click',
      function() {
        this.selectedStatus = component.getSelectedNodesKeys();

        // Enable view report button when there is a change in dropdown
        this.disableViewReportButton = false;
      }.bind(this)
    );
  }

  statusSelectionChanged(e: any) {
    const component = e && e.component;

    if (!component) {
      return;
    }

    // cell.setValue(component.getSelectedNodesKeys());
    this.selectedStatus = component.getSelectedNodesKeys();

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  onClickEmployeeDetail(data) {
    this.selectedEmployee = data;
    this.openActionModal('lg', this.employeeDetailModal);
  }

  onKeyDownEmployeeDetail(event, data) {
    if (event.keyCode === 13) {
        this.onClickEmployeeDetail(data);
    }
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {
    this.filteredEmployeeListingDataRows =
          this.employeeListingDataRows.filter(c => this.selectedStatus.findIndex(p => p === c.status.ID) !== -1);

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

     this.isLoading = false;
    }, 3000);
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  initHrEmployeeListingDataRow() {
    this.employeeListingDataRows = [{
      clientID: 'A04754',
      employeeID: 'V04587',
      address: '5th Ave',
      alternatePhone: '123141234',
      telephone: '34358434',
      name: 'Ana Barse',
      city: 'New York',
      state: 'New York',
      zipCode: '10543',
      status: {
        ID: 2,
        Text: 'Inactive'
      },
      email: 'test@gmail.com',
      homeDivision: 'home1',
      homeLocation: 'location1',
      jobTitle: 'programmer',
      workPhone: '797468746',
      employeeType: 'type1'
    },
    {
      clientID: 'A04754',
      employeeID: 'V04587',
      address: '5th Ave',
      alternatePhone: '123141234',
      telephone: '34358434',
      name: 'Ana Barse',
      city: 'New York',
      state: 'New York',
      zipCode: '10543',
      status: {
        ID: 1,
        Text: 'Active'
      },
      email: 'test@gmail.com',
      homeDivision: 'home1',
      homeLocation: 'location1',
      jobTitle: 'programmer',
      workPhone: '797468746',
      employeeType: 'type1'
    },
    {
      clientID: 'A04754',
      employeeID: 'V04587',
      address: '5th Ave',
      alternatePhone: '123141234',
      telephone: '34358434',
      name: 'Ana Barse',
      city: 'New York',
      state: 'New York',
      zipCode: '10543',
      status: {
        ID: 2,
        Text: 'Inactive'
      },
      email: 'test@gmail.com',
      homeDivision: 'home1',
      homeLocation: 'location1',
      jobTitle: 'programmer',
      workPhone: '797468746',
      employeeType: 'type1'
    },
    {
      clientID: 'A04754',
      employeeID: 'V04587',
      address: '5th Ave',
      alternatePhone: '123141234',
      telephone: '34358434',
      name: 'Ana Barse',
      city: 'New York',
      state: 'New York',
      zipCode: '10543',
      status: {
        ID: 1,
        Text: 'Active'
      },
      email: 'test@gmail.com',
      homeDivision: 'home1',
      homeLocation: 'location1',
      jobTitle: 'programmer',
      workPhone: '797468746',
      employeeType: 'type1'
    },
    {
      clientID: 'A04754',
      employeeID: 'V04587',
      address: '5th Ave',
      alternatePhone: '123141234',
      telephone: '34358434',
      name: 'Ana Barse',
      city: 'New York',
      state: 'New York',
      zipCode: '10543',
      status: {
        ID: 2,
        Text: 'Inactive'
      },
      email: 'test@gmail.com',
      homeDivision: 'home1',
      homeLocation: 'location1',
      jobTitle: 'programmer',
      workPhone: '797468746',
      employeeType: 'type1'
    }];
  }

  onEnterKeyDown(event) {
    if (event.event.code === 'Enter') {
      this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
      event.event.stopPropagation();
    }
  }
}

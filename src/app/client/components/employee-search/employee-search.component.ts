import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  NgbModal,
  NgbTypeaheadConfig,
  NgbDatepickerConfig,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbActiveModal,
  NgbModalRef,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

/* Serivces */
import { WorkersCompClaimsService } from '../../services';
import {ClientEmployeesService} from "../../../shared/services";
import { AuthService } from '../../../shared/services/auth.service';

/* Models */
import { ClientEmployees, ClientEmployeeDetails, ClientLstEmployees, IWorkersCompClaim } from '../../models';

/* Other Components */
import { EmployeePayrollLoansComponent } from '../../components/employee-payroll-loans/employee-payroll-loans.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss'],
  providers: [NgbTypeaheadConfig, { provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }, NgbActiveModal, NgbModal]
})
export class EmployeeSearchComponent implements OnInit {

  @ViewChild('employeeHrEventAssignmentModal') employeeHrEventAssignmentModal: ViewContainerRef;
  @ViewChild('employeeStatusChangeModal') employeeStatusChangeModal: ViewContainerRef;
  @ViewChild('employeeTerminationModal') employeeTerminationModal: ViewContainerRef;
  @ViewChild('employeeSupervisorChangeModal') employeeSupervisorChangeModal: ViewContainerRef;
  @ViewChild('employeeSkillCodeAssignmentModal') employeeSkillCodeAssignmentModal: ViewContainerRef;
  @ViewChild('payRateChangeModal') payRateChangeModal: ViewContainerRef;
  @ViewChild('employeeCostAllocationModal') employeeCostAllocationModal: ViewContainerRef;
  @ViewChild('employeeAllocationsModal') employeeAllocationsModal: ViewContainerRef;
  @ViewChild('employeePayrollPayCodeModal') employeePayrollPayCodeModal: ViewContainerRef;
  @ViewChild('employeeRecurringDeductionModal') employeeRecurringDeductionModal: ViewContainerRef;
  @ViewChild('employeeScheduledPaymentsModal') employeeScheduledPaymentsModal: ViewContainerRef;
  @ViewChild('employeePayrollLoanModal') employeePayrollLoanModal: ViewContainerRef;
  @ViewChild('employeePayrollPtoRegisterModal') employeePayrollPtoRegisterModal: ViewContainerRef;
  @ViewChild('employeePayrollJobRatesModal') employeePayrollJobRatesModal: ViewContainerRef;

  @ViewChild('employeeWorkersCompDetailsViewModal') employeeWorkersCompDetailsViewModal: ViewContainerRef;
  @ViewChild('employeeWorkersCompNoDataModal') employeeWorkersCompNoDataModal: ViewContainerRef;

  isLoading = true;

  employeeWorkersClaimsData: IWorkersCompClaim[];

  employeesList: ClientLstEmployees[];
  employeesSearchList: ClientLstEmployees[];
  employeeUnsortedList: ClientLstEmployees[];
  selectedEmployee: ClientLstEmployees;
  actionModalHandle: NgbModalRef;
  closeResult: string;
  showAllToggle = true;
  private tokenData: String = '';

  dropdownActions: any[] = [
    {
      key: '',
      items: [
        { id: 'Open', name: 'Open' }
      ]
    },
    {
      key: 'HUMAN RESOURCES',
      items: [
        { id: 'eventAssignment', name: 'Event Assignment' },
        { id: 'statusChange', name: 'Status Change' },
        { id: 'termination', name: 'Termination' },
        { id: 'supervisorChange', name: 'Supervisor Change' },
        { id: 'skillCodeAssignment', name: 'Skill Code Assignment' },
        { id: 'workersCompClaims', name: 'Workers\' Comp Claim' }
      ]
    }, {
      key: 'PAYROLL',
      items: [
        { id: 'payRateChange', name: 'Pay Rate Change' },
        { id: 'costAllocationDefaults', name: 'Cost Allocation Defaults' },
        { id: 'employeeAllocations', name: 'Employee Allocations' },
        { id: 'payCodeOverrides', name: 'Pay Code Overrides' },
        { id: 'recurringDeductions', name: 'Recurring Deductions' },
        { id: 'scheduledPayments', name: 'Scheduled Payments' },
        { id: 'loans', name: 'Loans' },
        { id: 'ptoRegisterAdjustments', name: 'Adjust PTO Register' },
        { id: 'employeeJobRates', name: 'Employee Job Rates' },
        { id: 'viewTotalCompStatement', name: 'Total Comp Statement' }
      ]
    }];
  checkSumCount = '';
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private clientEmployeeService: ClientEmployeesService,
    private workersCompClaimsService: WorkersCompClaimsService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.getEmployeesList();
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEmployeesList(this.tokenData);
    },
      err => {
        console.log(err);
      });
  }

  /* getEmployeesList() {
    this.clientEmployeeService.getEmployeesList()
      .subscribe(employeesList => {
        this.employeesList = employeesList;
        this.employeesSearchList = employeesList;
      });
  } */

  getEmployeesList(tokendata) {
    this.clientEmployeeService.getEmployeeSearchData(tokendata)
      .subscribe((res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.employeesList = res.JSONOUT.responseBody.employeesList;
          this.employeesSearchList = res.JSONOUT.responseBody.employeesList;
          this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
          // console.log('Employee List: ' + this.employeesList);

          this.isLoading = false;
        }
      },
        err => {
          alert('Error occurred');
        }
      );
  }

  // function to Search autocomplete dropdown
  searchAutocompleteField = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.employeesSearchList.filter(empRec => {
          const fullName: string = empRec.firstName + ' ' + empRec.lastName;
          if (empRec.firstName !== undefined || empRec.lastName !== undefined) {
            if (empRec.firstName.toLowerCase().includes(term.toLowerCase()) ||
              empRec.lastName.toLowerCase().includes(term.toLowerCase()) ||
              fullName.toLowerCase().includes(term.toLowerCase())
            ) {
              return true;
            }
          }
        })
          .splice(0, 10))

  // autocomplete search field formatter
  searchAutocompleteFormatter = (x: any) => x.firstName + ' ' + x.lastName;

  // function to search the list of employees
  searchEmployees(searchString) {
    if (searchString === '' || searchString === null) {
      this.getEmployeesList(this.tokenData);
      this.showAllToggle = true;
    } else {
      this.showAllToggle = false;
      this.employeesList = this.employeesSearchList.filter(empRec => {
        const fullName: string = empRec.firstName + ' ' + empRec.lastName;
        if (empRec.firstName !== undefined || empRec.lastName !== undefined) {
          if (empRec.firstName.toLowerCase().includes(searchString.toLowerCase()) ||
            empRec.lastName.toLowerCase().includes(searchString.toLowerCase()) ||
            fullName.toLowerCase().includes(searchString.toLowerCase())
          ) {
            return true;
          }
        }
      });
    }
  }

  onOpened(e) {
    e.component.content().style.position = 'relative';
    e.component.content().style.left = '-100px';
    e.component.content().style.width = '210px';
    e.component.content().style.paddingTop = '30px';
    e.component.content().style.paddingBottom = '30px';
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

  openEmployeeActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  setSelectedEmployee(clientEmployee: ClientLstEmployees): void {
    this.selectedEmployee = clientEmployee;
  }

  onEmployeeActionsDropdownClick(args, menu, employeeItem) {
    this.selectedEmployee = employeeItem;
    const selectedOption = args.itemData.id;

    if (!args.itemData) {
      return;
    }

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          menu.instance._visibleSubmenu.hide();
        }, 100);
        return;
      }
    }

    // if (args.itemData.id === 'Open') {
    //   // this.runRegularPayroll();

    //   console.log('Clicked Open');
    // } else if (args.itemData.id === 'eventAssignment') {
    //   console.log('Clicked Event Assignment');
    //   this.openEmployeeActionModal('xl', this.employeeHrEventAssignmentModal);
    // } else if (args.itemData.id === 'statusChange') {
    //   console.log('Clicked Status Change');
    //   this.openEmployeeActionModal('sm', this.employeeStatusChangeModal);
    // }

    switch (selectedOption) {
      case 'Open': {
        this.router.navigate(['client/employees/employee', this.selectedEmployee.employeeId]);
        break;
      }
      case 'eventAssignment': {
        this.openEmployeeActionModal('xl', this.employeeHrEventAssignmentModal);
        break;
      }
      case 'statusChange': {
        this.openEmployeeActionModal('sm', this.employeeStatusChangeModal);
        break;
      }
      case 'termination': {
        this.openEmployeeActionModal('lg', this.employeeTerminationModal);
        break;
      }
      case 'supervisorChange': {
        this.openEmployeeActionModal('sm', this.employeeSupervisorChangeModal);
        break;
      }
      case 'skillCodeAssignment': {
        this.openEmployeeActionModal('xl', this.employeeSkillCodeAssignmentModal);
        break;
      }
      case 'workersCompClaims': {

        let workersCompClaimsData: any[] = [];
        let employeeClaimsItemData: any[] = [];
        this.workersCompClaimsService.getWorkersCompClaims().subscribe(
          (workersCompClaims) => {
            workersCompClaimsData = workersCompClaims;

            workersCompClaimsData = workersCompClaimsData.filter(function (item) {
              return item.status === 'Open';
            });

            employeeClaimsItemData = workersCompClaimsData.filter(claimItem => {
              const employeeFullName = employeeItem.firstName + ' ' + employeeItem.lastName;
              if (employeeFullName.toLowerCase() === claimItem.employeeName.toLowerCase()) {
                return true;
              } else {
                return false;
              }
            });

            if (employeeClaimsItemData.length > 1) {
              // redirect to Works Comp page
              this.router.navigate(['/client/workers-comp-and-safety']);
            } else if (employeeClaimsItemData.length === 1) {
              // Open Workers Comp Modal
              this.employeeWorkersClaimsData = employeeClaimsItemData[0];

              this.openEmployeeActionModal('lg', this.employeeWorkersCompDetailsViewModal);
            } else {
              // Display No workers comp data modal
              this.openEmployeeActionModal('xs', this.employeeWorkersCompNoDataModal);
            }
          });

        break;
      }
      case 'payRateChange': {
        this.openEmployeeActionModal('xl', this.payRateChangeModal);
        break;
      }
      case 'costAllocationDefaults': {
        this.openEmployeeActionModal('xl', this.employeeCostAllocationModal);
        break;
      }
      case 'employeeAllocations': {
        this.openEmployeeActionModal('sm', this.employeeAllocationsModal);
        break;
      }
      case 'payCodeOverrides': {
        this.openEmployeeActionModal('xl', this.employeePayrollPayCodeModal);
        break;
      }
      case 'recurringDeductions': {
        this.openEmployeeActionModal('xl', this.employeeRecurringDeductionModal);
        break;
      }
      case 'scheduledPayments': {
        this.openEmployeeActionModal('xl', this.employeeScheduledPaymentsModal);
        break;
      }
      case 'loans': {
        this.openEmployeeActionModal('xl', this.employeePayrollLoanModal);
        break;
      }
      case 'ptoRegisterAdjustments': {
        this.openEmployeeActionModal('sm', this.employeePayrollPtoRegisterModal);
        break;
      }
      case 'employeeJobRates': {
        this.openEmployeeActionModal('xl', this.employeePayrollJobRatesModal);
        break;
      }
      case 'viewTotalCompStatement': {
        // TODO replace google.com with actual URL that backend service provides
        this.goToUrl('https://www.google.com');
        break;
      }
    }
  }

  sortEmployeeListBy(searchKey) {
    // Storing the unsorted list of employees (Initial List that we get from the backend service)
    this.employeeUnsortedList = this.employeesList;

    // Resetting the employee list to intial list before performing any sort function/case
    this.employeesList = this.employeeUnsortedList;

    switch (searchKey) {
      case 'Name': {
        this.employeesList.sort(
          function (a, b) {
            if (a.firstName === b.firstName) {
              return a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0;
            }
            return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
          });
        break;
      }
      case 'Title': {
        this.employeesList.sort(
          function (a, b) {
            return a.titleDescription < b.titleDescription ? -1 : a.titleDescription > b.titleDescription ? 1 : 0;
          });
        break;
      }
      case 'Department': {
        this.employeesList.sort(
          function (a, b) {
            return a.homeDepartmentDescription < b.homeDepartmentDescription ? -1
              : a.homeDepartmentDescription > b.homeDepartmentDescription ? 1 : 0;
          });
        break;
      }
      case 'Type': {
        this.employeesList.sort(
          function (a, b) {
            return a.typeDescription < b.typeDescription ? -1 : a.typeDescription > b.typeDescription ? 1 : 0;
          });
        break;
      }
      case 'Status': {
        this.employeesList.sort(
          function (a, b) {
            return a.statusDescription < b.statusDescription ? -1 : a.statusDescription > b.statusDescription ? 1 : 0;
          });
        break;
      }
      case 'ClientID': {
        this.employeesList.sort(
          function (a, b) {
            return a.clientId < b.clientId ? -1 : a.clientId > b.clientId ? 1 : 0;
          });
        break;
      }

    }
  }
}


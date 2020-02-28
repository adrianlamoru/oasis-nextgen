import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { IWorkersCompClaim, ClientEmployeeDetails, ClientLstEmployees } from '../../models';
import { WorkersCompClaimsService } from '../../services';
import { AuthService, ClientEmployeesService} from "../../../shared/services";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class EmployeeDetailsComponent implements OnInit {

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

  @ViewChild('tabSet') tabSet: NgbTabset;
  private tokenData: String = '';
  employeeId: string;
  employeeIdSubscription: any;
  activatedTabsDictionary = {};

  actionModalHandle: NgbModalRef;

  selectedEmployee: ClientLstEmployees = null;
  employeeWorkersClaimsData: IWorkersCompClaim[];

  selectedTab:string;
  isEmployeeReportsTabSelected: boolean;

  clientEmployeeModel = <ClientEmployeeDetails>
    {
      employeeEmergencyContact: [{
        name: '',
        relationship: {
          id: 1,
          name: ''
        },
        phone: ''
      }],
      employeeHomeAddress: [],
      employeeMailingAddress: [],
      employeeOtherDetails: [],
      employeePersonalDetails: [],
      employeeW2Address: []
    };

  dropdownActions: any[] = [
    {
      key: 'HUMAN RESOURCES',
      items: [
        { id: 'eventAssignment', name: 'Event Assignment' },
        { id: 'statusChange', name: 'Status Change' },
        { id: 'termination', name: 'Termination' },
        { id: 'supervisorChange', name: 'Supervisor Change' },
        { id: 'skillCodeAssignment', name: 'Skill Code Assignment' },
        { id: 'workersCompClaims', name: 'Worker\'s Comp Claim' }
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private authService: AuthService,
    private clientEmployeesService: ClientEmployeesService,
    private workersCompClaimsService: WorkersCompClaimsService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url.includes('/details/employeeReports')) {
          this.isEmployeeReportsTabSelected = true;
        } else {
          this.isEmployeeReportsTabSelected = false;
        }
      }
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEmployeeDetailList(this.tokenData);
    },
      err => {
        console.log(err);
      });
    
  }

  fromEmployeeDetailsToClientLstEmployees(): ClientLstEmployees {

    const personalDetails = this.clientEmployeeModel.employeePersonalDetails[0];

    const result: ClientLstEmployees = {
      employeeId: this.employeeId,
      clientId: '114',
      birthDate: new Date(),
      firstName: personalDetails.firstName,
      homeDepartment: 'H2b F&B Culinary Staff',
      homeDepartmentDescription: 'H2b F&B Culinary Staff Deparment',
      homeDivision: '',
      homeDivisionDescription: '',
      homeLocation: '',
      homeLocationDescription: '',
      lastName: personalDetails.lastName,
      sortName: '',
      statusCode: 'Active',
      statusDescription: '',
      titleCode: '',
      titleDescription: '',
      typeCode: 'Seasonalft',
      typeDescription: ''
    };

    return result;
  }



  onEmployeeActionsDropdownClick(args, menu) {
    this.selectedEmployee = this.fromEmployeeDetailsToClientLstEmployees();

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

    switch (selectedOption) {
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
              const employeeFullName = this.selectedEmployee.firstName + ' ' + this.selectedEmployee.lastName;
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

  openEmployeeActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  getEmployeeDetailList(sessionData): void {
    this.employeeIdSubscription = this.route.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      let employeeInfo: ClientEmployeeDetails;
      let storingResponse: any;
      this.clientEmployeesService.getEmployeeDetailData(sessionData, this.employeeId)
        .subscribe(response => {
          // console.log('response =>', response);
          storingResponse = response;
          employeeInfo = storingResponse.JSONOUT.responseBody;
          this.clientEmployeeModel = employeeInfo;
        });
    });
  }

  onTabChange(e): void {
    console.log(e);
    this.activatedTabsDictionary[e.nextId] = true;
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

}

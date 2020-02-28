import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent, DxDropDownBoxComponent, DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

/* Models */
import { Employee, Roster, Batch, DeductionCode } from '../../models';

/* Serivces */
import { PayrollService, PayrollAnalyticsService } from '../../services';
import { debug } from 'util';

@Component({
  selector: 'app-payroll-run-review-submit',
  templateUrl: './payroll-run-review-submit.component.html',
  styleUrls: ['./payroll-run-review-submit.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class PayrollRunReviewSubmitComponent implements OnInit {
  private employees: Employee[];
  private selectedEmployee: Employee;
  private roster: Roster;
  private batchId: string;
  private rosterId: string;
  private queryStringSubscription: any;
  private tabTitle: string;
  private tabTitleDate: string;

  private deletePopupVisible = false;

  constructor(
    private router: Router,
    private payrollService: PayrollService,
    private payrollAnalyticsService: PayrollAnalyticsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.queryStringSubscription = this.route.params.subscribe(params => {
      this.batchId = params['batchId'];
      this.rosterId = params['rosterId'];

      this.roster = this.payrollService.getBatch(this.batchId).rosters
        .filter(x => x.id === this.rosterId)[0];

      this.employees = this.roster.employees;

      if (this.roster.isManual) {
        this.selectedEmployee = this.employees[0];
        this.tabTitle = this.selectedEmployee.employeeName + ' - ' + this.roster.frequency;
        this.tabTitleDate = this.roster.checkDate.toLocaleString();
      } else {
        this.tabTitle = 'Batch: ' + this.batchId + ' - ' + this.roster.frequency;
        this.tabTitleDate = this.roster.checkDate.toLocaleString();
      }

      this.payrollService.setCurrentStep(this.batchId, this.rosterId, 3);
    });
  }

  tryCancelBatch() {
    this.deletePopupVisible = true;
  }

  onNoClick() {
    this.deletePopupVisible = false;
  }

  cancelBatch() {
    this.router.navigate(['/client/payroll/run']);
  }

  saveAndExit() {
    this.router.navigate(['/client/payroll/run']);
  }

  goToBack() {
    this.router.navigate(['/client/payroll/run/batch/' + this.roster.batchNumber + '/roster/' + this.roster.id + '/deductions']);
  }

  submitPayroll() {
    this.payrollAnalyticsService.addRosterToHistory(this.roster);
    this.router.navigate(['/client/payroll/run/batch/' + this.roster.batchNumber + '/roster/' + this.roster.id + '/confirmation']);
  }

}

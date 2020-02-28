import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* Models */
import { Employee, Roster, Batch } from '../../models/payroll.interface';

/* Serivces */
import { PayrollService } from '../../services';

@Component({
  selector: 'app-payroll-run-confirmation',
  templateUrl: './payroll-run-confirmation.component.html',
  styleUrls: ['./payroll-run-confirmation.component.scss']
})
export class PayrollRunConfirmationComponent implements OnInit {
  private confirmation: any;
  private payrollSummary: any;
  private batch: Batch;
  private roster: Roster;
  private batchId: string;
  private rosterId: string;
  private queryStringSubscription: any;
  private tabTitle: string;

  constructor(
    private router: Router,
    private payrollService: PayrollService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.configureConfirmationMessage();
    this.getData();
  }

  getData(): void {
    this.queryStringSubscription = this.route.params.subscribe(params => {
      this.batchId = params['batchId'];
      this.rosterId = params['rosterId'];

      this.batch = this.payrollService.getBatch(this.batchId);
      this.roster = this.payrollService
        .getBatch(this.batchId)
        .rosters.filter(x => x.id === this.rosterId)[0];

      this.tabTitle =
        'Batch: ' +
        this.batchId +
        ' - ' +
        this.roster.frequency +
        ', ' +
        this.roster.checkDate;

      this.payrollService.setCurrentStep(this.batchId, this.rosterId, 4);
    });
  }

  goToPayrollLandingPage() {
    this.router.navigate(['/client/payroll/run']);
  }

  configureConfirmationMessage() {
    this.confirmation = {
      title: 'Congratulations, your payroll submission is complete!',
      message: `Wasn't that Fun? Okay, maybe not as fun as riding a roller coaster,
                   but your employees will love you for it. Ready to run another one?`
    };
  }
}

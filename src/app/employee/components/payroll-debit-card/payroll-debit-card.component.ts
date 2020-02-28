import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-payroll-debit-card',
  templateUrl: './payroll-debit-card.component.html',
  styleUrls: ['./payroll-debit-card.component.scss']
})
export class PayrollDebitCardComponent implements OnInit {
  @Input() closeModalFunction;

  payrollDebitCardConfirmation: boolean;

  constructor() {
    this.closeModalFunction = null;
    this.payrollDebitCardConfirmation = true;
  }

  ngOnInit() {
  }

  public onSubmitModal(event) {
    if (this.closeModalFunction) {
      this.closeModalFunction(event);
    }
  }
}

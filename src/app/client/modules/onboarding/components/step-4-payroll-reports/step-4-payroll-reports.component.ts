import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-4-payroll-reports',
  templateUrl: './step-4-payroll-reports.component.html',
  styleUrls: ['./step-4-payroll-reports.component.scss']
})
export class Step4PayrollReportsComponent extends AbstractStep implements OnInit {
  groupId = 'payrollReports';

  isDropDownBoxSOpened: boolean;
  isDropDownBoxIOpened: boolean;
  isDropDownBoxCheckDeliveredOpened: boolean;
  isDropDownBoxOpened4: boolean;
  isDropDownBoxPayStubsOpened: boolean;
  selectedCheckDeliveredOption: '';
  selectedOption4: '';
  selectedPayStubsOption: '';
  otherOptionForReport: boolean;
  otherOptionForPayStubs: boolean;

  selectedInvoiceOptions: string;
  selectedReportsOptions: string;
  selectedPayStubsOptions: string;

  invoiceOptions: any[] = [
    {
      id: 1,
      name: 'Totals Only'
    },
    {
      id: 2,
      name: 'By Location'
    },
    {
      id: 3,
      name: 'By Department'
    },
    {
      id: 4,
      name: 'Other'
    }
  ];

  reportsOptions: any[] = [
    {
      id: 1,
      name: 'Totals Only'
    },
    {
      id: 2,
      name: 'By Location'
    },
    {
      id: 3,
      name: 'By Department'
    },
    {
      id: 4,
      name: 'Other'
    }
  ];

  payStubsOptions: any[] = [
    {
      id: 1,
      name: 'Employee Last Name '
    },
    {
      id: 2,
      name: 'By Location'
    },
    {
      id: 3,
      name: 'By Department'
    },
    {
      id: 4,
      name: 'Other'
    }
  ];

  deliveredOptions: any[] = [
    {
      id: 1,
      name: 'Main Location'
    },
    {
      id: 2,
      name: 'Worksite Location'
    },
    {
      id: 3,
      name: 'Employee Home Address'
    }
  ];

  deliveringOptions: any[] = [
    {
      id: 1,
      name: 'FedEx'
    },
    {
      id: 2,
      name: 'US Mail'
    }
  ];

  constructor(private modalService: NgbModal,
    protected formService: OnboardingFormService) {
      super(formService);
  }

  ngOnInit() {
    super.ngOnInit();

    window.scrollTo(0, 0);
  }

  openUploadModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  get employerBenefitContributionGroup(): FormGroup {
    return this.formGroup.get('employerBenefitContributionGroup') as FormGroup;
  }

  get employer401kContributionGroup(): FormGroup {
    return this.formGroup.get('employer401kContributionGroup') as FormGroup;
  }

  get generalLedgerGroup(): FormGroup {
    return this.formGroup.get('generalLedgerGroup') as FormGroup;
  }

  get generalLedgerName(): string {
    for (const name in this.generalLedgerGroup.controls) {
      if (this.generalLedgerGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get certifiedPayrollGroup(): FormGroup {
    return this.formGroup.get('certifiedPayrollGroup') as FormGroup;
  }

  get certifiedPayrollName(): string {
    for (const name in this.certifiedPayrollGroup.controls) {
      if (this.certifiedPayrollGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'employerBenefitContributionGroup') {
      for (const formControlName in this.employerBenefitContributionGroup.controls) {
        if ( controlName !== formControlName) {
            this.employerBenefitContributionGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'employer401kContributionGroup') {
      for (const formControlName in this.employer401kContributionGroup.controls) {
        if ( controlName !== formControlName) {
            this.employer401kContributionGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'generalLedgerGroup') {
      for (const formControlName in this.generalLedgerGroup.controls) {
        if ( controlName !== formControlName) {
            this.generalLedgerGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'certifiedPayrollGroup') {
      for (const formControlName in this.certifiedPayrollGroup.controls) {
        if ( controlName !== formControlName) {
            this.certifiedPayrollGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }

  invoicesSortedDDSelected(eventId) {
    this.selectedInvoiceOptions = this.invoiceOptions[eventId].name;
  }

  reportsSortedDDSelected(eventId) {
    this.selectedReportsOptions = this.reportsOptions[eventId].name;
  }

  payStubsSortedDDSelected(eventId) {
    this.selectedPayStubsOptions = this.payStubsOptions[eventId].name;
  }

  checksDeliveredDDSelected(eventId) {

  }

  deliveringChecksDDSelected(eventId) {

  }
}

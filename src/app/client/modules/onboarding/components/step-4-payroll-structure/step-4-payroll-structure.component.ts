import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-4-payroll-structure',
  templateUrl: './step-4-payroll-structure.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-4-payroll-structure.component.scss']
})
export class Step4PayrollStructureComponent extends AbstractStep implements OnInit {
  groupId = 'payrollStructure';

  otherValue = false;

  rules = { 'X': /[01-9]/ };

  companySponsored = [{
    'ID': 1,
    'EmployeeName': 'asdasd',
    'SocialSecurityNumber': '999-99-9999',
    'Description': '100',
    'DeductionAmount': 60,
    'DeductionPeriods': '1',
    'PlanType': 'AL',
    'TrackArrears': true,
    'ClientId': 'AL',
    'EffectiveDate': new Date('07/5/2018'),
    'inserting': false
    },
    {
      'ID': 2,
    'EmployeeName': 'asdasd',
    'SocialSecurityNumber': '999-99-9999',
    'Description': '100',
    'DeductionAmount': 60,
    'DeductionPeriods': '1',
    'PlanType': 'AL',
    'TrackArrears': true,
    'ClientId': 'AL',
    'EffectiveDate': new Date('07/5/2018'),
    'inserting': false
    }, {
      'ID': 3,
    'EmployeeName': 'asdasd',
    'SocialSecurityNumber': '999-99-9999',
    'Description': '100',
    'DeductionAmount': 60,
    'DeductionPeriods': '2',
    'PlanType': 'AL',
    'TrackArrears': true,
    'ClientId': 'AL',
    'EffectiveDate': new Date('07/5/2018'),
    'inserting': false
    }, {
      'ID': 4,
    'EmployeeName': 'asdasd',
    'SocialSecurityNumber': '999-99-9999',
    'Description': '100',
    'DeductionAmount': 60,
    'DeductionPeriods': '3',
    'PlanType': 'AL',
    'TrackArrears': true,
    'ClientId': 'AL',
    'EffectiveDate': new Date('07/5/2018'),
    'inserting': false
    }, {
      'ID': 5,
    'EmployeeName': '',
    'SocialSecurityNumber': '555-55-5555',
    'Description': '',
    'DeductionAmount': 0,
    'DeductionPeriods': '',
    'PlanType': '',
    'TrackArrears': true,
    'ClientId': '',
    'EffectiveDate': new Date(),
    'inserting': true
    }
  ];

  statesDropdown: any[] = [{
    name: '1',
    abbr: '1',
    value: true
    },
    {
      name: '2',
      abbr: '2',
      value: false
    },
    {
      name: '3',
      abbr: '3',
      value: false
    },
    {
      name: '4',
      abbr: '4',
      value: false
    },
    {
      name: '5',
      abbr: '5',
      value: false
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

  onAddRow(data, sampleData) {
    sampleData[data.rowIndex].inserting = false;
    const inserted = {
      'ID': sampleData[data.rowIndex].ID + 1,
      'EmployeeName': '',
      'SocialSecurityNumber': '',
      'Description': '',
      'DeductionAmount': 0,
      'DeductionPeriods': '',
      'PlanType': '',
      'TrackArrears': true,
      'ClientId': '',
      'EffectiveDate': new Date(),
      'inserting': true
    };
    sampleData.push(inserted);
  }

  onDeleteRow(data, dxDataGrid) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        dxDataGrid.splice(data.rowIndex, 1);
      }
    });
  }

  onValueChanged(evt: any, data: any): void {
    data.setValue(evt.value);
  }

  onAddKeyDown(event, data, sampleData) {
      if (event.keyCode === 13) {
          this.onAddRow(data, sampleData);
      }
  }

  onDeleteKeyDown(event, data, dxDataGrid) {
      if (event.keyCode === 13) {
          this.onDeleteRow(data, dxDataGrid);
      }
  }

  get nonTaxableReimbursementsGroup(): FormGroup {
    return this.formGroup.get('nonTaxableReimbursementsGroup') as FormGroup;
  }

  get nonTaxableReimbursementsName(): string {
    for (const name in this.nonTaxableReimbursementsGroup.controls) {
      if (this.nonTaxableReimbursementsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get taxableAllowancesGroup(): FormGroup {
    return this.formGroup.get('taxableAllowancesGroup') as FormGroup;
  }

  get taxableAllowancesName(): string {
    for (const name in this.taxableAllowancesGroup.controls) {
      if (this.taxableAllowancesGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get miscDeductionsGroup(): FormGroup {
    return this.formGroup.get('miscDeductionsGroup') as FormGroup;
  }

  get miscDeductionsName(): string {
    for (const name in this.miscDeductionsGroup.controls) {
      if (this.miscDeductionsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get ptoEmployeesGroup(): FormGroup {
    return this.formGroup.get('ptoEmployeesGroup') as FormGroup;
  }

  get ptoEmployeesName(): string {
    for (const name in this.ptoEmployeesGroup.controls) {
      if (this.ptoEmployeesGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'nonTaxableReimbursementsGroup') {
      for (const formControlName in this.nonTaxableReimbursementsGroup.controls) {
        if ( controlName !== formControlName) {
            this.nonTaxableReimbursementsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'taxableAllowancesGroup') {
      for (const formControlName in this.taxableAllowancesGroup.controls) {
        if ( controlName !== formControlName) {
            this.taxableAllowancesGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'miscDeductionsGroup') {
      for (const formControlName in this.miscDeductionsGroup.controls) {
        if ( controlName !== formControlName) {
            this.miscDeductionsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'ptoEmployeesGroup') {
      for (const formControlName in this.ptoEmployeesGroup.controls) {
        if ( controlName !== formControlName) {
            this.ptoEmployeesGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }
}

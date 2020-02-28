import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';
import { link } from 'fs';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '../../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-employee-information-employee-taxes',
  templateUrl: './employee-information-employee-taxes.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-information-employee-taxes.component.scss']
})
export class EmployeeInformationEmployeeTaxesComponent extends AbstractStep implements OnInit {
  groupId = 'employeeTaxes';

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  insertingRow = false;
  tabSelected = 'details';

  leaveTypes = [{
    'ID': 1,
    'Type': 'Personal',
    'FirstName': 'Lillian',
    'LastName': 'McKenzie',
    'MiddleName': 'Riley',
    'inserting': false
    }, {
      'ID': 2,
    'Type': 'FMLA',
    'FirstName': 'Leah',
    'LastName': 'Copeland',
    'MiddleName': 'Moore',
    'inserting': false
    }, {
      'ID': 3,
      'Type': '',
      'FirstName': '',
      'LastName': '',
      'MiddleName': '',
      'inserting': true
    }];

  constructor(private modalService: NgbModal,
              protected formService: OnboardingFormService) {
    super(formService);
  }

  ngOnInit() {
    super.ngOnInit();

    window.scrollTo(0, 0);
  }

  updateTabSelection(tabSelected): void {
    this.tabSelected = tabSelected;
  }
  onAddRow(data) {
    this.leaveTypes[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.leaveTypes[data.rowIndex].ID + 1,
      'Type': '',
      'FirstName': '',
      'LastName': '',
      'MiddleName': '',
      'inserting': true
        };
      this.leaveTypes.push(inserted);
      }

  onDeleteRow(data) {
  const confirmDialog = confirm('Are you sure you want to delete this record?', null);
  confirmDialog.then((dialogResult: any) => {
    if (dialogResult) {
      this.leaveTypes.splice(data.rowIndex, 1);
    }
  });
}

get workOutsidePhyLocGroup(): FormGroup {
  return this.formGroup.get('workOutsidePhyLocGroup') as FormGroup;
}

get workFromHomeGroup(): FormGroup {
  return this.formGroup.get('workFromHomeGroup') as FormGroup;
}

get workStateNotResidentGroup(): FormGroup {
  return this.formGroup.get('workStateNotResidentGroup') as FormGroup;
}

get workStateNotResidentName(): string {
  for (const name in this.workStateNotResidentGroup.controls) {
    if (this.workStateNotResidentGroup.get(name).value) {
      return name;
    }
  }
  return '';
}

get coveredEmplrFLMAGroup(): FormGroup {
  return this.formGroup.get('coveredEmplrFLMAGroup') as FormGroup;
}

get wantOfferFLMAGroup(): FormGroup {
  return this.formGroup.get('wantOfferFLMAGroup') as FormGroup;
}

get firstPayrollGroup(): FormGroup {
  return this.formGroup.get('firstPayrollGroup') as FormGroup;
}

get courtOrderGroup(): FormGroup {
  return this.formGroup.get('courtOrderGroup') as FormGroup;
}

get courtOrderName(): string {
  for (const name in this.courtOrderGroup.controls) {
    if (this.courtOrderGroup.get(name).value) {
      return name;
    }
  }
  return '';
}

onGroupedCheckBoxChanged(controlName, groupName, event) {
  if (!event.value) {
    return;
  }

  if (groupName === 'workOutsidePhyLocGroup') {
    for (const formControlName in this.workOutsidePhyLocGroup.controls) {
      if ( controlName !== formControlName) {
          this.workOutsidePhyLocGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'workFromHomeGroup') {
    for (const formControlName in this.workFromHomeGroup.controls) {
      if ( controlName !== formControlName) {
          this.workFromHomeGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'workStateNotResidentGroup') {
    for (const formControlName in this.workStateNotResidentGroup.controls) {
      if ( controlName !== formControlName) {
          this.workStateNotResidentGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'coveredEmplrFLMAGroup') {
    for (const formControlName in this.coveredEmplrFLMAGroup.controls) {
      if ( controlName !== formControlName) {
          this.coveredEmplrFLMAGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'wantOfferFLMAGroup') {
    for (const formControlName in this.wantOfferFLMAGroup.controls) {
      if ( controlName !== formControlName) {
          this.wantOfferFLMAGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'firstPayrollGroup') {
    for (const formControlName in this.firstPayrollGroup.controls) {
      if ( controlName !== formControlName) {
          this.firstPayrollGroup.get(formControlName).patchValue(false);
      }
    }
  } else if (groupName === 'courtOrderGroup') {
    for (const formControlName in this.courtOrderGroup.controls) {
      if ( controlName !== formControlName) {
          this.courtOrderGroup.get(formControlName).patchValue(false);
      }
    }
  }
}

onAddKeyDown(event, data) {
  if (event.keyCode === 13) {
      this.onAddRow(data);
  }
}

onDeleteKeyDown(event, data) {
  if (event.keyCode === 13) {
      this.onDeleteRow(data);
  }
}

openUploadModal(size, content) {
  this.modalService.open(content, { size: size });
}

openPdf() {
  window.open('/assets/pdf/WebUserAuthorization.pdf', '_blank');
}
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormArray } from '../../../../../../../node_modules/@angular/forms';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';


@Component({
  selector: 'app-employee-information-employee-status',
  templateUrl: './employee-information-employee-status.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-information-employee-status.component.scss']
})
export class EmployeeInformationEmployeeStatusComponent extends AbstractStep implements OnInit {
  groupId = 'employeeStatus';

  disableInputs = true;

  dynamicEverifiedStates: any;

  constructor(private modalService: NgbModal,
              protected formService: OnboardingFormService) {
    super(formService);
  }

  ngOnInit() {
    super.ngOnInit();

    window.scrollTo(0, 0);

    this.getDynamicEverifiedStates();
  }

  get employementContractsGroup(): FormGroup {
    return this.formGroup.get('employementContractsGroup') as FormGroup;
  }

  get employementContractsName(): string {
    for (const name in this.employementContractsGroup.controls) {
      if (this.employementContractsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get independantContractorsGroup(): FormGroup {
    return this.formGroup.get('independantContractorsGroup') as FormGroup;
  }

  get federalContractsGroup(): FormGroup {
    return this.formGroup.get('federalContractsGroup') as FormGroup;
  }

  get federalContractsName(): string {
    for (const name in this.federalContractsGroup.controls) {
      if (this.federalContractsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get unionEmployeesGroup(): FormGroup {
    return this.formGroup.get('unionEmployeesGroup') as FormGroup;
  }

  get unionEmployeesName(): string {
    for (const name in this.unionEmployeesGroup.controls) {
      if (this.unionEmployeesGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get stateContractGroup(): FormGroup {
    return this.formGroup.get('stateContractGroup') as FormGroup;
  }

  get eVerifyAwareGroup(): FormGroup {
    return this.formGroup.get('eVerifyAwareGroup') as FormGroup;
  }

  get eVerifyUsingGroup(): FormGroup {
    return this.formGroup.get('eVerifyUsingGroup') as FormGroup;
  }

  get eVerifyContinueGroup(): FormGroup {
    return this.formGroup.get('eVerifyContinueGroup') as FormGroup;
  }

  get eVerifyContinueName(): string {
    for (const name in this.eVerifyContinueGroup.controls) {
      if (this.eVerifyContinueGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  getDynamicEverifiedStates() {
    // Need to get E-verified states from backend.
    this.dynamicEverifiedStates = 'AL, AZ, GA, LA, NC, MS, SC, TN, UT';
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'employementContractsGroup') {
      for (const formControlName in this.employementContractsGroup.controls) {
        if ( controlName !== formControlName) {
            this.employementContractsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'independantContractorsGroup') {
      for (const formControlName in this.independantContractorsGroup.controls) {
        if ( controlName !== formControlName) {
            this.independantContractorsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'federalContractsGroup') {
      for (const formControlName in this.federalContractsGroup.controls) {
        if ( formControlName !== controlName && formControlName !== 'dunsNumber') {
            this.federalContractsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'unionEmployeesGroup') {
      for (const formControlName in this.unionEmployeesGroup.controls) {
        if ( formControlName !== controlName) {
            this.unionEmployeesGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'stateContractGroup') {
      for (const formControlName in this.stateContractGroup.controls) {
        if ( formControlName !== controlName) {
            this.stateContractGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'eVerifyAwareGroup') {
      for (const formControlName in this.eVerifyAwareGroup.controls) {
        if ( formControlName !== controlName) {
            this.eVerifyAwareGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'eVerifyUsingGroup') {
      for (const formControlName in this.eVerifyUsingGroup.controls) {
        if ( formControlName !== controlName) {
            this.eVerifyUsingGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'eVerifyContinueGroup') {
      for (const formControlName in this.eVerifyContinueGroup.controls) {
        if ( formControlName !== controlName) {
            this.eVerifyContinueGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }

  openUploadModal(size, content) {
    this.modalService.open(content, { size: size });
  }

}

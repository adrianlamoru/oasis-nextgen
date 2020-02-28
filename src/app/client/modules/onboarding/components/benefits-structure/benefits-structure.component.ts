import { Component, OnInit } from '@angular/core';
import { AbstractStep } from '../../AbstractStep';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '../../../../../../../node_modules/@angular/forms';
import { OnboardingFormService } from '../../services/onboarding-form.service';

import { confirm } from 'devextreme/ui/dialog';

import {
  ScheduledDeductionForm,
  Saving401kDeductionForm,
  COBRAParticipantForm
} from '../../models';

@Component({
  selector: 'app-benefits-structure',
  templateUrl: './benefits-structure.component.html',
  styleUrls: ['./benefits-structure.component.scss']
})
export class BenefitsStructureComponent extends AbstractStep implements OnInit {

  groupId = 'benefitsStructure';

  aleCheckboxGroup = {
    yes: false,
    no: false
  };

  oasisSponsoredPlans = {
    health: false,
    longTermDisablity: false,
    life: false,
    vision: false,
    shortTermDisability: false,
    dental: false,
    adAndD: false
  };

  ownPlanCheckboxGroup = {
    yes: false,
    no: false
  };

  clientMaintainOwnPlanGroup = {
    health: false,
    dental: false,
    life: false,
    vision: false,
    voluntary: false,
    other: false
  };

  // deductionFreqAndPeriodsGroup = {
  //   p12xYr: false,
  //   p24xYr: false,
  //   p26xYr: false,
  //   p48xYr: false,
  //   p52xYr: false
  // };

  deductionsToAddCheckboxGroup = {
    yes: false,
    no: false
  };

  variableTrackingReportCheckboxGroup = {
    yes: false,
    no: false
  };

  cobraParticipantsCheckboxGroup = {
    yes: false,
    no: false
  };

  deductionPeriods = [
    {
      id: 1,
      name: '1'
    }, {
      id: 2,
      name: '2'
    }, {
      id: 3,
      name: '3'
    }, {
      id: 4,
      name: '4'
    }, {
      id: 5,
      name: '5'
    }
  ];

  // retirementPlanGroup = {
  //   retirementPlanNA: false,
  //   retirementPlanClientSponsored: false,
  //   retirementPlanOasisSponsored: false
  // };

  scheduledDeductionData: ScheduledDeductionForm[] = [{
    ID: 1,
    employeeName: 'John Doe',
    socialSecurity: '494-484-4893',
    benefitPlanName: 'Plan 1',
    deductionAmount: 100.2,
    deductionPeriod: { id: 1, name: '1'},
    planType: 'Plan Type 1',
    tracksArrears: true,
    effectiveDate: '05/07/2018',
    inserting: false
  }, {
    ID: 2,
    employeeName: '',
    socialSecurity: '',
    benefitPlanName: '',
    deductionAmount: 0,
    deductionPeriod:  { id: 1, name: '1'},
    planType: '',
    tracksArrears: true,
    effectiveDate: '',
    inserting: true
  }];

  savingDeductionData: Saving401kDeductionForm[] = [{
    ID: 1,
    employeeName: 'John Doe',
    socialSecurity: '494-484-4893',
    effectiveDate: '05/07/2018',
    traditionalDeducitonElectedPercentage: '4%',
    traditionalDeductionPeriod: 'Bi-Weekly',
    rothDeductionPeriodPercentage: '4%',
    rothDeductionPeriod: 'Bi-Weekly',
    loanBalance: '20.000',
    perPayPeriod: '350.00',
    inserting: false
  }, {
    ID: 2,
    employeeName: '',
    socialSecurity: '',
    effectiveDate: '',
    traditionalDeducitonElectedPercentage: '',
    traditionalDeductionPeriod: '',
    rothDeductionPeriodPercentage: '',
    rothDeductionPeriod: '',
    loanBalance: '',
    perPayPeriod: '',
    inserting: true
  }];

  cobraParticipantForm: COBRAParticipantForm[] = [{
    ID: 1,
    employeeName: 'John Doe',
    beneficiaryAddress: '1530 Forest Lakes Cir, 33407',
    city: 'West Palm Beach',
    state: 'Fl',
    zip: '33406',
    qualifyingEventDate: '05/07/2018',
    cobraEffectiveDate: '05/07/2018',
    eventCode: 'LR',
    inserting: false
  }, {
    ID: 2,
    employeeName: '',
    beneficiaryAddress: '',
    city: '',
    state: '',
    zip: '',
    qualifyingEventDate: '',
    cobraEffectiveDate: '',
    eventCode: '',
    inserting: true
  }];

  constructor(private modalService: NgbModal,
    protected formService: OnboardingFormService) {
    super(formService);
}

  ngOnInit() {
    window.scrollTo(0, 0);
    super.ngOnInit();
  }

  get applicableLargeEmployerGroup(): FormGroup {
    return this.formGroup.get('applicableLargeEmployerGroup') as FormGroup;
  }

  get oasisSponsoredGroup(): FormGroup {
    return this.formGroup.get('oasisSponsoredGroup') as FormGroup;
  }

  get ownPlanGroup(): FormGroup {
    return this.formGroup.get('clientSponseredGroup.ownPlanGroup') as FormGroup;
  }

  get ownPlanYesGroup(): FormGroup {
    return this.formGroup.get('clientSponseredGroup.ownPlanYesGroup') as FormGroup;
  }

  get ownPlanYesName(): string {
    for (const name in this.ownPlanYesGroup.controls) {
      if (this.ownPlanYesGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get ownPlanName(): string {
    for (const name in this.ownPlanGroup.controls) {
      if (this.ownPlanGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get deductionFreqAndPeriodsGroup(): FormGroup {
    return this.formGroup.get('variableTrackingReportGroup') as FormGroup;
  }

  get deductionsToAddGroup(): FormGroup {
    return this.formGroup.get('deductionsToAddGroup') as FormGroup;
  }

  get deductionsToAddName(): string {
    for (const name in this.deductionsToAddGroup.controls) {
      if (this.deductionsToAddGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get variableTrackingReportGroup(): FormGroup {
    return this.formGroup.get('variableTrackingReportGroup') as FormGroup;
  }

  get retirementPlanGroup(): FormGroup {
    return this.formGroup.get('retirementPlanGroup') as FormGroup;
  }

  get retirementPlanName(): string {
    for (const name in this.retirementPlanGroup.controls) {
      if (this.retirementPlanGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get cobraParticipantsGroup(): FormGroup {
    return this.formGroup.get('cobraParticipantsGroup') as FormGroup;
  }

  get cobraParticipantsName(): string {
    for (const name in this. cobraParticipantsGroup.controls) {
      if (this. cobraParticipantsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  // Begin: Table scheduled deductions data form
  onScheduledDeductionAddRow(data) {
    this.scheduledDeductionData[data.rowIndex].inserting = false;
    const inserted = {
      ID: this.scheduledDeductionData[data.rowIndex].ID + 1,
      employeeName: '',
      socialSecurity: '',
      benefitPlanName: '',
      deductionAmount: 0,
      deductionPeriod: {id: 1, name: '1'},
      planType: '',
      tracksArrears: true,
      effectiveDate: '',
      inserting: true
    };
    this.scheduledDeductionData.push(inserted);
  }

  onScheduledDeductionDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.scheduledDeductionData.splice(data.rowIndex, 1);
      }
    });
  }

  onScheduledDeductionAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onScheduledDeductionAddRow(data);
    }
  }

  onScheduledDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onScheduledDeductionDeleteRow(data);
    }
  }

  // End: Table scheduled deductions data form

  // Begin: Table saving deductions data form
  onSavingDeductionAddRow(data) {
    this.savingDeductionData[data.rowIndex].inserting = false;
    const inserted = {
      ID: this.savingDeductionData[data.rowIndex].ID + 1,
      employeeName: '',
      socialSecurity: '',
      effectiveDate: '',
      traditionalDeducitonElectedPercentage: '',
      traditionalDeductionPeriod: '',
      rothDeductionPeriodPercentage: '',
      rothDeductionPeriod: '',
      loanBalance: '',
      perPayPeriod: '',
      inserting: true
    };
    this.savingDeductionData.push(inserted);
  }

  onSavingDeductionDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.savingDeductionData.splice(data.rowIndex, 1);
      }
    });
  }

  onSavingDeductionAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onSavingDeductionAddRow(data);
    }
  }

  onSavingDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onSavingDeductionDeleteRow(data);
    }
  }

  // End: Table saving deductions data form

  // Begin: Table COBRA participant data form
  onCobraParticipantAddRow(data) {
    this.cobraParticipantForm[data.rowIndex].inserting = false;
    const inserted = {
      ID: this.cobraParticipantForm[data.rowIndex].ID + 1,
      employeeName: '',
      beneficiaryAddress: '',
      city: '',
      state: '',
      zip: '',
      qualifyingEventDate: '',
      cobraEffectiveDate: '',
      eventCode: '',
      inserting: true
    };
    this.cobraParticipantForm.push(inserted);
  }

  onCobraParticipantDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.cobraParticipantForm.splice(data.rowIndex, 1);
      }
    });
  }

  onCobraParticipantAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onCobraParticipantAddRow(data);
    }
  }

  onCobraParticipantDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onCobraParticipantDeleteRow(data);
    }
  }
  // End: Table COBRA participant data form

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'applicableLargeEmployerGroup') {
      for (const formControlName in this.applicableLargeEmployerGroup.controls) {
        if ( controlName !== formControlName) {
            this.applicableLargeEmployerGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'oasisSponsoredGroup') {
      for (const formControlName in this.oasisSponsoredGroup.controls) {
        if ( controlName !== formControlName) {
            this.oasisSponsoredGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'ownPlanGroup') {
      for (const formControlName in this.ownPlanGroup.controls) {
        if ( controlName !== formControlName) {
            this.ownPlanGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'deductionFreqAndPeriodsGroup') {
      for (const formControlName in this.deductionFreqAndPeriodsGroup.controls) {
        if ( controlName !== formControlName) {
            this.deductionFreqAndPeriodsGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'deductionsToAddGroup') {
      for (const formControlName in this.deductionsToAddGroup.controls) {
        if ( controlName !== formControlName) {
            this.deductionsToAddGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'variableTrackingReportGroup') {
      for (const formControlName in this.variableTrackingReportGroup.controls) {
        if ( controlName !== formControlName) {
            this.variableTrackingReportGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'retirementPlanGroup') {
      for (const formControlName in this.retirementPlanGroup.controls) {
        if ( controlName !== formControlName) {
            this.retirementPlanGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'cobraParticipantsGroup') {
      for (const formControlName in this.cobraParticipantsGroup.controls) {
        if ( controlName !== formControlName) {
            this.cobraParticipantsGroup.get(formControlName).patchValue(false);
        }
      }
     }
  }
}

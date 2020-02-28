import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../../../shared/utils/ngbDateCustomFormatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '../../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-step-4-payroll-processing',
  templateUrl: './step-4-payroll-processing.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-4-payroll-processing.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class Step4PayrollProcessingComponent extends AbstractStep implements OnInit {
  groupId = 'payrollProcessing';

  private _typesWithRequiredDirectSubmit = [
    'Direct Submit via Client Services Web Timesheet'
  ];

  private _typesWithRequiredTimeClockImport = [
    'Time Clock Import'
  ];

  private _typesWithRequiredCustomSheet = [
    'Custom Excel Spreadsheet'
  ];

  private _typesWithRequiredFaxTimeSheet = [
    'Fax Timesheet'
  ];

  selectedPreferredDay: '';
  selectedPreferredProcessingName: '';
  processingMethodDropDownID: '';
  isDropDownBoxOpened = false;
  outOfCyclePayrollYes = false;
  outOfCyclePayrollNo = false;
  selectTimeSheetSortName = false;
  selectTimeSheetSortLoc = false;
  selectTimeSheetSortDep = false;
  selectTimeSheetSortDiv = false;
  selectFaxTimeSheetSortName = false;
  selectFaxTimeSheetSortLoc = false;
  selectFaxTimeSheetSortDep = false;
  selectFaxTimeSheetSortDiv = false;
  selectOvertimeIncluded = false;
  selectOvertimeSeparate = false;
  selectTipsPaidYes = false;
  selectTipsPaidNo = false;
  selectServiceChargeYes = false;
  selectServiceChargeNo = false;
  selectChargeTipsYes = false;
  selectChargeTipsNo = false;
  selectCashTipsYes = false;
  selectCashTipsNo = false;


  processingDayDropDown: any[] = [{
    id: 1,
    name: 'Sunday'
  },
  {
    id: 2,
    name: 'Monday'
  },
  {
    id: 3,
    name: 'Tuesday'
  },
  {
    id: 4,
    name: 'Wednesday'
  },
  {
    id: 5,
    name: 'Thursday'
  },
  {
    id: 6,
    name: 'Friday'
  },
  {
    id: 7,
    name: 'Saturday'
  }];

  processingMethodDropDown: any[] = [{
    id: 1,
    name: 'Direct Submit via Client Services Web Timesheet'
  },
  {
    id: 2,
    name: 'Time Clock Import'
  },
  {
    id: 3,
    name: 'Custom Excel Spreadsheet'
  },
  {
    id: 4,
    name: 'Fax Timesheet'
  }];


  constructor(private modalService: NgbModal, protected formService: OnboardingFormService) {
  super(formService);
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    super.ngOnInit();

  }

  changePreferredDay(item) {
    this.selectedPreferredDay = item.name;
    this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
  }

  changePreferredProcessing(item) {
    this.selectedPreferredProcessingName = item.name;
    this.processingMethodDropDownID = item.id;
    this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
  }

  get outofcyclePayrollGroup(): FormGroup {
    return this.formGroup.get('outofcyclePayrollGroup') as FormGroup;
  }

  get outofcyclePayrollName(): string {
    for (const name in this.outofcyclePayrollGroup.controls) {
      if (this.outofcyclePayrollGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get timeSheetSortedGroup(): FormGroup {
    return this.formGroup.get('timeSheetSortedGroup') as FormGroup;
  }

  get timeSheetSortedName(): string {
    for (const name in this.payOutTipsGroup.controls) {
      if (this.payOutTipsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get isOverTimeGroup(): FormGroup {
    return this.formGroup.get('isOverTimeGroup') as FormGroup;
  }

  get faxTimeSheetSortedGroup(): FormGroup {
    return this.formGroup.get('faxTimeSheetSortedGroup') as FormGroup;
  }

  get payOutTipsGroup(): FormGroup {
    return this.formGroup.get('payOutTipsGroup') as FormGroup;
  }

  get payOutTipsName(): string {
    for (const name in this.payOutTipsGroup.controls) {
      if (this.payOutTipsGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get selectChargeTipsGroup(): FormGroup {
    return this.formGroup.get('selectChargeTipsGroup') as FormGroup;
  }

  get cashTipsGroup(): FormGroup {
    return this.formGroup.get('cashTipsGroup') as FormGroup;
  }

  get serviceChargeGroup(): FormGroup {
    return this.formGroup.get('serviceChargeGroup') as FormGroup;
  }

  get serviceChargeName(): string {
    for (const name in this.serviceChargeGroup.controls) {
      if (this.serviceChargeGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get showDirectSubmit() {
    const businessTypeId = this.formGroup.get('preferredProcessingMethod').value;
    const businessType = this.processingMethodDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredDirectSubmit.includes(businessType);
  }

  get showTimeClockImport() {
    const businessTypeId = this.formGroup.get('preferredProcessingMethod').value;
    const businessType = this.processingMethodDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredTimeClockImport.includes(businessType);
  }

  get showCustomSheet() {
    const businessTypeId = this.formGroup.get('preferredProcessingMethod').value;
    const businessType = this.processingMethodDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredCustomSheet.includes(businessType);
  }

  get showFaxTimeSheet() {
    const businessTypeId = this.formGroup.get('preferredProcessingMethod').value;
    const businessType = this.processingMethodDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredFaxTimeSheet.includes(businessType);
  }

  clickOutOfCyclePayroll(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.outOfCyclePayrollYes = true;
        this.outOfCyclePayrollNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.outOfCyclePayrollYes = false;
        this.outOfCyclePayrollNo = true;
      }
    }
  }

  clickTimeSheetSort(event: any) {
    if (event.element.innerText === 'Employee Last Name') {
      if (event.value) {
        this.selectTimeSheetSortName = true;
        this.selectTimeSheetSortLoc = false;
        this.selectTimeSheetSortDep = false;
        this.selectTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Location') {
      if (event.value) {
        this.selectTimeSheetSortLoc = true;
        this.selectTimeSheetSortName = false;
        this.selectTimeSheetSortDep = false;
        this.selectTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Department') {
      if (event.value) {
        this.selectTimeSheetSortDep = true;
        this.selectTimeSheetSortLoc = false;
        this.selectTimeSheetSortName = false;
        this.selectTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Division') {
      if (event.value) {
        this.selectTimeSheetSortDiv = true;
        this.selectTimeSheetSortLoc = false;
        this.selectTimeSheetSortName = false;
        this.selectTimeSheetSortDep = false;
      }
    }
  }

  clickFaxTimeSheetSort(event: any) {
    if (event.element.innerText === 'Employee Last Name') {
      if (event.value) {
        this.selectFaxTimeSheetSortName = true;
        this.selectFaxTimeSheetSortLoc = false;
        this.selectFaxTimeSheetSortDep = false;
        this.selectFaxTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Location') {
      if (event.value) {
        this.selectFaxTimeSheetSortLoc = true;
        this.selectFaxTimeSheetSortName = false;
        this.selectFaxTimeSheetSortDep = false;
        this.selectFaxTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Department') {
      if (event.value) {
        this.selectFaxTimeSheetSortDep = true;
        this.selectFaxTimeSheetSortLoc = false;
        this.selectFaxTimeSheetSortName = false;
        this.selectFaxTimeSheetSortDiv = false;
      }
    } else if (event.element.innerText === 'Division') {
      if (event.value) {
        this.selectFaxTimeSheetSortDiv = true;
        this.selectFaxTimeSheetSortLoc = false;
        this.selectFaxTimeSheetSortName = false;
        this.selectFaxTimeSheetSortDep = false;
      }
    }
  }

  clickOvertime(event: any) {
    if (event.element.innerText === 'Included in all hours worked') {
      if (event.value) {
        this.selectOvertimeIncluded = true;
        this.selectOvertimeSeparate = false;
      }
    } else if (event.element.innerText === 'Separate from all hours worked') {
      if (event.value) {
        this.selectOvertimeIncluded = false;
        this.selectOvertimeSeparate = true;
      }
    }
  }

  clickTipsPaid(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.selectTipsPaidYes = true;
        this.selectTipsPaidNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.selectTipsPaidYes = false;
        this.selectTipsPaidNo = true;
      }
    }
  }

  clickServiceCharge(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.selectServiceChargeYes = true;
        this.selectServiceChargeNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.selectServiceChargeYes = false;
        this.selectServiceChargeNo = true;
      }
    }
  }

  clickChargeTips(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.selectChargeTipsYes = true;
        this.selectChargeTipsNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.selectChargeTipsYes = false;
        this.selectChargeTipsNo = true;
      }
    }
  }

  clickCashTips(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.selectCashTipsYes = true;
        this.selectCashTipsNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.selectCashTipsYes = false;
        this.selectCashTipsNo = true;
      }
    }
  }

  openUploadModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'outofcyclePayrollGroup') {
      for (const formControlName in this.outofcyclePayrollGroup.controls) {
        if ( controlName !== formControlName) {
            this.outofcyclePayrollGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'timeSheetSortedGroup') {
      for (const formControlName in this.timeSheetSortedGroup.controls) {
        if ( controlName !== formControlName) {
            this.timeSheetSortedGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'isOverTimeGroup') {
      for (const formControlName in this.isOverTimeGroup.controls) {
        if ( controlName !== formControlName) {
            this.isOverTimeGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'faxTimeSheetSortedGroup') {
      for (const formControlName in this.faxTimeSheetSortedGroup.controls) {
        if ( controlName !== formControlName) {
            this.faxTimeSheetSortedGroup.get(formControlName).patchValue(false);
        }
      }
     } else if (groupName === 'payOutTipsGroup') {
      for (const formControlName in this.payOutTipsGroup.controls) {
        if ( controlName !== formControlName) {
            this.payOutTipsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'selectChargeTipsGroup') {
      for (const formControlName in this.selectChargeTipsGroup.controls) {
        if ( controlName !== formControlName) {
            this.selectChargeTipsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'cashTipsGroup') {
      for (const formControlName in this.cashTipsGroup.controls) {
        if ( controlName !== formControlName) {
            this.cashTipsGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'serviceChargeGroup') {
      for (const formControlName in this.serviceChargeGroup.controls) {
        if ( controlName !== formControlName) {
            this.serviceChargeGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }

  preferredProcessingMethodSelected(eventId) {
  }
}

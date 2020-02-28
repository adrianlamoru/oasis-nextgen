import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../../../shared/utils/ngbDateCustomFormatter';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-4-payroll-cycle',
  templateUrl: './step-4-payroll-cycle.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-4-payroll-cycle.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class Step4PayrollCycleComponent extends AbstractStep implements OnInit {
  groupId = 'payrollCycle';

  private _typesWithRequiredSevenDayWorkFields = [
    'Weekly',
    'Bi-Weekly'
  ];

  private _typesWithRequiredTwiceMonthFields = [
    'Semi-Monthly'
  ];

  private _typesWithRequiredOnceMonthFields = [
    'Monthly'
  ];



  isDropDownBoxOpened = false;
  checkDateSaturdayMon = false;
  checkDateSaturdayFri = false;
  checkDateSundayMon = false;
  checkDateSundayFri = false;
  checkDateHolidayBefore = false;
  checkDateHolidayAfter = false;
  additionalPayCyclesYes = false;
  additionalPayCyclesNo = false;
  disableCheckDay = true;
  disableAddlCheckDay = true;


  payFrequencyDropDown: any[] = [{
    id: 1,
    name: 'Weekly'
  },
  {
    id: 2,
    name: 'Bi-Weekly'
  },
  {
    id: 3,
    name: 'Semi-Monthly'
  },
  {
    id: 4,
    name: 'Monthly'
  }];

  dayOfWeekDropDown: any[] = [{
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

  paidOnceMonthDD: any[] = [{
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '2'
  },
  {
    id: 3,
    name: '3'
  },
  {
    id: 4,
    name: '4'
  },
  {
    id: 5,
    name: '5'
  },
  {
    id: 6,
    name: '6'
  },
  {
    id: 7,
    name: '7'
  },
  {
    id: 8,
    name: '8'
  },
  {
    id: 9,
    name: '9'
  },
  {
    id: 10,
    name: '10'
  },
  {
    id: 11,
    name: '12'
  },
  {
    id: 12,
    name: '13'
  },
  {
    id: 14,
    name: '14'
  },
  {
    id: 15,
    name: '15'
  },
  {
    id: 16,
    name: '16'
  },
  {
    id: 17,
    name: '17'
  },
  {
    id: 18,
    name: '18'
  },
  {
    id: 19,
    name: '19'
  },
  {
    id: 20,
    name: '20'
  },
  {
    id: 21,
    name: '21'
  },
  {
    id: 22,
    name: '22'
  },
  {
    id: 23,
    name: '23'
  },
  {
    id: 24,
    name: '24'
  },
  {
    id: 25,
    name: '25'
  },
  {
    id: 26,
    name: '26'
  },
  {
    id: 27,
    name: '27'
  },
  {
    id: 28,
    name: '28'
  },
  {
    id: 29,
    name: '29'
  },
  {
    id: 30,
    name: '30'
  },
  {
    id: 31,
    name: '31'
  },
  {
    id: 32,
    name: 'End of Month'
  }];

  sevenDayWorkStartDD: any[] = [{
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

  sevenDayWorkEndDD: any[] = [{
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

  paidTwiceMonth1DropDown: any[] = [{
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '2'
  },
  {
    id: 3,
    name: '3'
  },
  {
    id: 4,
    name: '4'
  },
  {
    id: 5,
    name: '5'
  },
  {
    id: 6,
    name: '6'
  },
  {
    id: 7,
    name: '7'
  },
  {
    id: 8,
    name: '8'
  },
  {
    id: 9,
    name: '9'
  },
  {
    id: 10,
    name: '10'
  },
  {
    id: 11,
    name: '12'
  },
  {
    id: 12,
    name: '13'
  },
  {
    id: 14,
    name: '14'
  },
  {
    id: 15,
    name: '15'
  },
  {
    id: 16,
    name: '16'
  },
  {
    id: 17,
    name: '17'
  },
  {
    id: 18,
    name: '18'
  },
  {
    id: 19,
    name: '19'
  },
  {
    id: 20,
    name: '20'
  },
  {
    id: 21,
    name: '21'
  },
  {
    id: 22,
    name: '22'
  },
  {
    id: 23,
    name: '23'
  },
  {
    id: 24,
    name: '24'
  },
  {
    id: 25,
    name: '25'
  },
  {
    id: 26,
    name: '26'
  },
  {
    id: 27,
    name: '27'
  },
  {
    id: 28,
    name: '28'
  },
  {
    id: 29,
    name: '29'
  },
  {
    id: 30,
    name: '30'
  },
  {
    id: 31,
    name: '31'
  }];

  paidTwiceMonth2DropDown: any[] = [{
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '2'
  },
  {
    id: 3,
    name: '3'
  },
  {
    id: 4,
    name: '4'
  },
  {
    id: 5,
    name: '5'
  },
  {
    id: 6,
    name: '6'
  },
  {
    id: 7,
    name: '7'
  },
  {
    id: 8,
    name: '8'
  },
  {
    id: 9,
    name: '9'
  },
  {
    id: 10,
    name: '10'
  },
  {
    id: 11,
    name: '12'
  },
  {
    id: 12,
    name: '13'
  },
  {
    id: 14,
    name: '14'
  },
  {
    id: 15,
    name: '15'
  },
  {
    id: 16,
    name: '16'
  },
  {
    id: 17,
    name: '17'
  },
  {
    id: 18,
    name: '18'
  },
  {
    id: 19,
    name: '19'
  },
  {
    id: 20,
    name: '20'
  },
  {
    id: 21,
    name: '21'
  },
  {
    id: 22,
    name: '22'
  },
  {
    id: 23,
    name: '23'
  },
  {
    id: 24,
    name: '24'
  },
  {
    id: 25,
    name: '25'
  },
  {
    id: 26,
    name: '26'
  },
  {
    id: 27,
    name: '27'
  },
  {
    id: 28,
    name: '28'
  },
  {
    id: 29,
    name: '29'
  },
  {
    id: 30,
    name: '30'
  },
  {
    id: 31,
    name: '31'
  },
  {
    id: 32,
    name: 'End of Month'
  }];

  constructor(protected formService: OnboardingFormService) {
    super(formService);

    window.scrollTo(0, 0);
  }

  ngOnInit() {
    super.ngOnInit();

    this.payFrequencyDDSelected(this.formGroup.get('payFrequencyDD').value);
  }

  clickCheckDateSaturday(event: any) {
    if (event.element.innerText === 'Monday') {
      if (event.value) {
        this.checkDateSaturdayMon = true;
        this.checkDateSaturdayFri = false;
      }
    } else if (event.element.innerText === 'Friday') {
      if (event.value) {
        this.checkDateSaturdayMon = false;
        this.checkDateSaturdayFri = true;
      }
    }
  }

  clickCheckDateSunday(event: any) {
    if (event.element.innerText === 'Monday') {
      if (event.value) {
        this.checkDateSundayMon = true;
        this.checkDateSundayFri = false;
      }
    } else if (event.element.innerText === 'Friday') {
      if (event.value) {
        this.checkDateSundayMon = false;
        this.checkDateSundayFri = true;
      }
    }
  }

  clickCheckDateHoliday(event: any) {
    if (event.element.innerText === 'Before') {
      if (event.value) {
        this.checkDateHolidayBefore = true;
        this.checkDateHolidayAfter = false;
      }
    } else if (event.element.innerText === 'After') {
      if (event.value) {
        this.checkDateHolidayBefore = false;
        this.checkDateHolidayAfter = true;
      }
    }
  }

  clickAdditionalPayCycles(event: any) {
    if (event.element.innerText === 'Yes') {
      if (event.value) {
        this.additionalPayCyclesYes = true;
        this.additionalPayCyclesNo = false;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.additionalPayCyclesYes = false;
        this.additionalPayCyclesNo = true;
      }
    }
  }

  get showSevenDayWorkFields() {
    const businessTypeId = this.formGroup.get('payFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredSevenDayWorkFields.includes(businessType);
  }

  get showTwiceMonthFields() {
    const businessTypeId = this.formGroup.get('payFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredTwiceMonthFields.includes(businessType);
  }

  get showOnceMonthFields() {
    const businessTypeId = this.formGroup.get('payFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredOnceMonthFields.includes(businessType);
  }

  get AddlShowSevenDayWorkFields() {
    const businessTypeId = this.formGroup.get('additionalFieldsGroup.addlPayFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredSevenDayWorkFields.includes(businessType);
  }

  get AddlShowTwiceMonthFields() {
    const businessTypeId = this.formGroup.get('additionalFieldsGroup.addlPayFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredTwiceMonthFields.includes(businessType);
  }

  get AddlShowOnceMonthFields() {
    const businessTypeId = this.formGroup.get('additionalFieldsGroup.addlPayFrequencyDD').value;
    const businessType = this.payFrequencyDropDown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredOnceMonthFields.includes(businessType);
  }

  get checkDateSaturdayGroup(): FormGroup {
    return this.formGroup.get('checkDateSaturdayGroup') as FormGroup;
  }

  get checkDateSundayGroup(): FormGroup {
    return this.formGroup.get('checkDateSundayGroup') as FormGroup;
  }

  get checkDateHolidayGroup(): FormGroup {
    return this.formGroup.get('checkDateHolidayGroup') as FormGroup;
  }

  get additionalPayCyclesGroup(): FormGroup {
    return this.formGroup.get('additionalPayCyclesGroup') as FormGroup;
  }

  get additionalPayCyclesName(): string {
    for (const name in this.additionalPayCyclesGroup.controls) {
      if (this.additionalPayCyclesGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'checkDateSaturdayGroup') {
      for (const formControlName in this.checkDateSaturdayGroup.controls) {
        if ( controlName !== formControlName) {
            this.checkDateSaturdayGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'checkDateSundayGroup') {
      for (const formControlName in this.checkDateSundayGroup.controls) {
        if ( controlName !== formControlName) {
            this.checkDateSundayGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'checkDateHolidayGroup') {
      for (const formControlName in this.checkDateHolidayGroup.controls) {
        if ( controlName !== formControlName) {
            this.checkDateHolidayGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'additionalPayCyclesGroup') {
      for (const formControlName in this.additionalPayCyclesGroup.controls) {
        if ( controlName !== formControlName) {
            this.additionalPayCyclesGroup.get(formControlName).patchValue(false);
        }
      }

      if (controlName.value) {
        this.additionalPayCyclesGroup.get('selectedAdditionalPayCycles').patchValue('Valid');
      } else {
        this.additionalPayCyclesGroup.get('selectedAdditionalPayCycles').patchValue('');
      }
    }
  }

  payFrequencyDDSelected(event) {
    console.log(event);
    const typeInList = this.payFrequencyDropDown.find(x => x.id === event);
    const businessType = typeInList ? typeInList.name : undefined;

    const shouldDisableSevenDayWorkFields = !this._typesWithRequiredSevenDayWorkFields.includes(businessType);

    const shouldDisableTwiceMonthFields = !this._typesWithRequiredTwiceMonthFields.includes(businessType);

    const shouldDisableOnceMonthFields = !this._typesWithRequiredOnceMonthFields.includes(businessType);

  }

  checkDaySelected(event) {

  }

  paidTwiceMonth1Selected(event) {

  }

  paidTwiceMonth2Selected(event) {

  }

  paidOnceMonthSelected(event) {

  }

  addlCheckDaySelected(eventId) {

  }

  addlPaidTwiceMonth1Selected(eventId) {

  }

  addlPaidTwiceMonth2Selected(eventId) {

  }

  addlPaidOnceMonthSelected(eventId) {

  }

  addlSevenDayWorkStartSelected(eventId) {

  }

  addlSevenDayWorkEndSelected(eventId) {

  }
}

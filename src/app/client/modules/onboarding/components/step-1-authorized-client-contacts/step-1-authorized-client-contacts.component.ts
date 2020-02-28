import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientContacts } from '../../../../models';
import { FormGroup, FormArray, FormBuilder } from '../../../../../../../node_modules/@angular/forms';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { PhoneMask } from '../../../../../shared/directives';


@Component({
  selector: 'app-step-1-authorized-client-contacts',
  templateUrl: './step-1-authorized-client-contacts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-1-authorized-client-contacts.component.scss']
})
export class Step1AuthorizedClientContactsComponent extends AbstractStep implements OnInit {
  groupId = 'authorizedClientContacts';

  tempData: any = '';
  primaryData: any = '';

  simpleYears: number[];
  selectedWebAccess: number;

  openedWebAccessDropdown: boolean;

  webAccessDropdown: any[] = [
    {
      id: 1,
      name: 'None'
    },
    {
      id: 2,
      name: 'Full'
    },
    {
      id: 3,
      name: 'Restricted'
    }
  ];

  public clientContacts: string[] = [
    'Secondary',
    'CFO/Acct',
    'Payroll',
    'Benefits',
    'Human Resources',
    '401(k)',
    'Safety and W/C Claims',
    'Survey',
  ];

  selectedStates = [];

  constructor(private formBuilder: FormBuilder,
              protected formService: OnboardingFormService) {
    super(formService);

    this.openedWebAccessDropdown = false;
   }

  ngOnInit() {
    super.ngOnInit();
    this._initOrRefreshGroup();
  }

  openWebAuthForm (link) {
    window.open(link, '_blank');
  }

  selectedCheckbox(contact: FormGroup) {
    const unset = !contact.get('sameAsPrimary').value;
    this._copyPrimaryContact(contact, unset);
  }

  private _initOrRefreshGroup() {
    this.formGroup = this.formService.get('gettingStarted', this.groupId);
    const list = this.formGroup.controls.list as FormArray;
    const hasList = !!list.length;

    for (let i = 0; i < this.clientContacts.length; i++) {
      if (hasList) { // Just refresh the contacts list if "Same as Primary" is checked.
        const item = list.controls[i] as FormGroup;
        if (item.get('sameAsPrimary').value) {
          this._copyPrimaryContact(item, false);
        }
      } else { // Initialize the contacts list
        const roleName = this.clientContacts[i];
        this.formService.addAuthorizedClientContact(roleName);
      }
    }
  }

  private _copyPrimaryContact(contact: FormGroup, unset: boolean = false) {
    this.primaryData = this.formService.get('gettingStarted', 'primaryDecisionMaker');

    // For every common field, set equal to primary's field.
    for (const key in contact.controls) {
      if (key) {
        const control = contact.get(key);
        const primary = this.primaryData.get(key);
        if (!(control && primary)) {
          continue;
        } else if (unset) {
          control.setValue('');
          control.enable();
        } else {
          control.setValue(primary.value);
          control.disable();
        }
      }
    }

    if (!unset) {
      contact.get('webAccess').disable();
      contact.get('webAccess').patchValue('Full');
    } else {
      contact.get('webAccess').enable();
      contact.get('webAccess').patchValue('');
    }
  }

  get list() {
    return this.formGroup.get('list') as FormArray;
  }

  onWebAccessEnterKey(event) {
    this.openedWebAccessDropdown = !this.openedWebAccessDropdown;
  }

  onWebAccessClosed(event) {
    this.openedWebAccessDropdown = false;
  }
}

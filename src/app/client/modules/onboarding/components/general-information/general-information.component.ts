import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { States } from '../../../../../shared/models';
import { StatesService } from '../../../../../shared/services';
import { OnboardingWizardService } from '../../services';
import { FormGroup } from '@angular/forms';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { AbstractStep } from '../../AbstractStep';

import { PhoneMask } from '../../../../../shared/directives';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent extends AbstractStep implements OnInit {
  groupId = 'generalInfo';
  statesList: States[] = [];
  isDropDownBoxOpened = false;
  selectedState = '';

  constructor(private stateServices: StatesService,
              protected formService: OnboardingFormService) {
      super(formService);
    }

  ngOnInit() {
    super.ngOnInit();

    this.stateServices.getUSStatesData().subscribe(states => {
      this.statesList = states;
    });
  }

  stateSelection(item) {
    this.selectedState = item.Name;
    this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
  }
}

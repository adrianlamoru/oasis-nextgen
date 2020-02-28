import { Component, OnInit } from '@angular/core';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { FormGroup } from '../../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-benefits-orientation',
  templateUrl: './benefits-orientation.component.html',
  styleUrls: ['./benefits-orientation.component.scss']
})
export class BenefitsOrientationComponent extends AbstractStep implements OnInit {
  groupId = 'benefitsOrientation';

  i9ElectionCheckboxGroup = {
    i9sOasis: false,
    i9sCurrent: false
  };

  biLingualNeedsCheckboxGroup = {
    yes: false,
    no: false
  };

  constructor(protected formService: OnboardingFormService) {
    super(formService);
   }

  ngOnInit() {
    super.ngOnInit();

    window.scrollTo(0, 0);
  }

  get i9ElectionGroup(): FormGroup {
    return this.formGroup.get('i9ElectionGroup') as FormGroup;
  }

  get biLingualGroup(): FormGroup {
    return this.formGroup.get('biLingualGroup') as FormGroup;
  }

  get biLingualName(): string {
    for (const name in this.biLingualGroup.controls) {
      if (this.biLingualGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'i9ElectionGroup') {
      for (const formControlName in this.i9ElectionGroup.controls) {
        if ( controlName !== formControlName) {
            this.i9ElectionGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'biLingualGroup') {
      for (const formControlName in this.biLingualGroup.controls) {
        if ( controlName !== formControlName) {
            this.biLingualGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }
}

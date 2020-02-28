import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { OnboardingWizardService } from '../../services';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-onboarding-wizard',
  templateUrl: './onboarding-wizard.component.html',
  styleUrls: ['./onboarding-wizard.component.scss']
})
export class OnboardingWizardComponent implements OnInit {
  form: FormGroup;

  constructor(private onboardingWizzardService: OnboardingWizardService,
              private formService: OnboardingFormService,
              private modalService: NgbModal,
              public router: Router) {
  }

  ngOnInit() {
    //console.log(this.onboardingWizzardService.GO_BACK_PATH);
    window.scrollTo(0, 0);
  }

  isStepValid(id: string) {
    const formGroup = this.formService.get(id);
    if (!formGroup) {
      return true;
    }

    let allSubValid = true;
    for (const g in formGroup.controls) {
      if (formGroup.controls[g]) {
        const groupValid = this.formService.checkGroupValidation(id, g);
        allSubValid = allSubValid && groupValid;
      }
    }
    return allSubValid;
  }

  openFinalModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  // Update Onboarding Flag as Done.
  // This is temparory until backend call gets created.
  updateOnboardingFlag() {
    localStorage.setItem('isOnboardingDone', 'done');
    // setTimeout(() => {
      this.router.navigate(['/client/onboarding/onbording-completed']);
    // }, 500);
  }
}

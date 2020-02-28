import { FormGroup } from '@angular/forms';
import { Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnboardingFormService } from './services/onboarding-form.service';

export abstract class AbstractStep implements OnInit {
  @Input() groupTrace: string[] = [];

  abstract groupId: string;
  public formGroup: FormGroup;

  constructor(protected formService: OnboardingFormService) {
  }

  ngOnInit() {
    this.groupTrace.push(this.groupId);
    this.formGroup = this.formService.get(...this.groupTrace) as FormGroup;
  }

  public groupIsValid(subGroupId: string) {
    return this.formService.checkGroupValidation(this.groupId, subGroupId);
  }
}

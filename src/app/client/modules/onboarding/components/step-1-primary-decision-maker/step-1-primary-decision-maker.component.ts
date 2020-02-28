import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientContacts } from '../../../../models';
import { FormGroup } from '../../../../../../../node_modules/@angular/forms';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { PhoneMask } from '../../../../../shared/directives';


@Component({
  selector: 'app-step-1-primary-decision-maker',
  templateUrl: './step-1-primary-decision-maker.component.html',
  styleUrls: ['./step-1-primary-decision-maker.component.scss']
})
export class Step1PrimaryDecisionMakerComponent extends AbstractStep implements OnInit {
  @Input() primaryContactData: FormGroup;
  @Output() primaryContactModifiedEvent = new EventEmitter<any>();

  groupId = 'primaryDecisionMaker';

  constructor(protected formService: OnboardingFormService) {
    super(formService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}

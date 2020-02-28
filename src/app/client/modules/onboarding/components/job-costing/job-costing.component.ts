import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { OnboardingWizardService } from '../../services';
import { AbstractStep } from '../../AbstractStep';

@Component({
  selector: 'app-job-costing',
  templateUrl: './job-costing.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-costing.component.scss']
})
export class JobCostingComponent extends AbstractStep implements OnInit {
  groupId = 'jobCosting';

  public question: string;
  public yesAnswered: boolean;
  public noAnswered: boolean;
  public answer: boolean;
  public selectedTab: string;
  public tabDivitions: string;
  public tabDepartments: string;
  public tabProjects: string;
  public tabShifts: string;

  questionCheckboxGroup = {
    yes: false,
    no: false
  };

  constructor(protected formService: OnboardingFormService) {
    super(formService);

    this.question = 'Do you track or designate a grouping of employees within your organization?';
    this.noAnswered = false;
    this.yesAnswered = true;
    this.tabDepartments = 'Departments';
    this.tabDivitions = 'Divitions';
    this.answer = true;
    this.tabProjects = 'Projects';
    this.tabShifts = 'Shifts';
    this.selectedTab = this.tabDivitions;
   }

  ngOnInit() {
  }

  updateSelectedTab(selectedTab: string) {
    this.selectedTab = selectedTab;
  }

  answered(event: any) {
    if (event.element.innerText === 'Yes' ) {
      if (event.value) {
        this.noAnswered = false;
      } else {
        this.noAnswered = true;
      }
    } else if (event.element.innerText === 'No') {
      if (event.value) {
        this.yesAnswered = false;
      } else {
        this.yesAnswered = true;
      }
    }

  }

  onGroupedCheckBoxChanged(group, variable, event) {
    if (!event.value) {
      return;
    }

    for (const property in this[group]) {
      if (property !== variable) {
        this[group][property] = false;
      }
    }
  }
}

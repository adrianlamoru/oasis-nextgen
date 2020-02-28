import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { OnboardingWizardService } from '../../services';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss']
})
export class PayrollInformationComponent extends AbstractStep implements OnInit, AfterViewChecked {

  selectedTab: string;

  public groupId = 'payrollInformation';

  @ViewChild('tabSet')
  private tabSet: NgbTabset;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private onboardingWizzardService: OnboardingWizardService,
    protected formService: OnboardingFormService
  ) {
    super(formService);

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const urlParts = router.url.split('/');
        this.selectedTab = urlParts[urlParts.length - 1];
      }
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewChecked(): void {
    if (this.tabSet) {
      this.tabSet.select(this.selectedTab);
    }
  }

  onTabChange(event: NgbTabChangeEvent) {
    this.onboardingWizzardService.saveAndGo(event.activeId);
    this.router.navigate(['../' + event.nextId], { relativeTo: this.route });
  }



}

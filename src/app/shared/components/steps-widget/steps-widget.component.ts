import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StepWidget } from '../../models/step-widget';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-steps-widget',
  templateUrl: './steps-widget.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./steps-widget.component.scss']
})
export class StepWidgetComponent implements OnInit {

  @Input() stepData: StepWidget;

  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'Open',
      name: 'Open'
    }]
  }];

  constructor(private router: Router) {
   }

  ngOnInit() {
    //console.log(this.stepData);
  }

  onActionsDropdownClick(args, step, menu) {

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          menu.instance._visibleSubmenu.hide();
        }, 100);
        return;
      }
    }

    if (args.itemData.id === 'Open') {
      switch (step) {
        case 1:
          this.router.navigateByUrl('/client/onboarding/wizard/getting-started');
          break;
        case 2:
          this.router.navigateByUrl('/client/onboarding/wizard/setup-client');
          break;
        case 3:
          this.router.navigateByUrl('/client/onboarding/wizard/employee-information');
          break;
        case 4:
          this.router.navigateByUrl('/client/onboarding/wizard/payroll-information');
          break;
        case 5:
          this.router.navigateByUrl('/client/onboarding/wizard/benefits-information');
          break;
        case 6:
          this.router.navigateByUrl('/client/onboarding/wizard/finalize-and-submit');
          break;
      }
    }
  }
}

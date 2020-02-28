import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { IPage } from '../../../shared/models';
import { PageConfigService } from '../../../shared/services';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  routeSubscription: any;
  showCardTop = true;
  payrollText: string;
  page: IPage;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pageConfigService: PageConfigService) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/client/payroll/run') {
          this.showCardTop = true;
        } else {
          this.showCardTop = false;
        }

        if (this.page) {
          this.page.alerts = [];
        }
      }
    });

    this.payrollText = `Do you remember your first paycheck? As you continue in your career,
                        each paycheck may not be as exciting as the first one was, but each one is just as important.
                        Getting paid accurately and on time should be an automatic expectation for your employees. Ready to run payroll? Let’s do it!`;
   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.page = this.pageConfigService.getPageConfig();
  }

  get diagnosticAlerts() { return JSON.stringify(this.page.alerts); }
  get diagnosticPage() { return JSON.stringify(this.page); }
}

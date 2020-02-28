import { Component, OnInit } from '@angular/core';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

// Services
import { NewsService, TasksService, PageConfigService, AlertsService, DashboardSlidesService } from '../../../shared/services';

// Modals
import { NewsModal, Tasks, portalType, Slide, IPage, AlertData, AlertModal } from '../../../shared/models';
import { ClientEmployeeOrientationService } from '../../modules/onboarding/services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  newsModalData: NewsModal[];
  newsModalDataFiltered: NewsModal[];

  clientEmployeeOrientationData: any[];
  clientEmployeeOrientationDataFiltered: any[];

  isLoading: boolean;

  myTasksData: Tasks[];
  slides: Slide[];
  showLeftRail = true;
  page: IPage;

  alerts: AlertData[];

  portal: portalType;

  constructor(
    private router: Router,
    private newsService: NewsService,
    private alertsService: AlertsService,
    private clientEmployeeOrientationService: ClientEmployeeOrientationService,
    private tasksService: TasksService,
    private pageConfigService: PageConfigService,
    private slideService: DashboardSlidesService
  ) {
    this.portal = portalType.client;

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url.includes('/client/payroll/run/')
          || router.url.includes('/client/payroll/analytics/')
          || router.url.includes('/client/onboarding/wizard/')
          || router.url.includes('/client/reports/reports-listing/')
          || router.url.includes('/details/employeeReports/')) {
          this.showLeftRail = false;
        } else {
          this.showLeftRail = true;
        }

        this.page = this.pageConfigService.getPageConfig();
        this.page.alerts = [];
      }
    });
  }

  ngOnInit() {

    this.alertsService.getAlertsModalData(this.portal).subscribe(alertsModalData => {
        this.alerts = alertsModalData ? alertsModalData[0].alertsList : [];
    });

    this.newsService.getNewsModalData()
      .subscribe(newsModalData => {
        this.newsModalData = newsModalData;
        this.filterNewsList(newsModalData);
      });

    this.clientEmployeeOrientationService.getClientEmployeeOrientationData()
      .subscribe(clientEmployeeOrientationData => {
        this.clientEmployeeOrientationData = clientEmployeeOrientationData;
        this.filterClientEmployeeOrientationList(clientEmployeeOrientationData);
      });

    this.tasksService.getMyTasksData()
      .subscribe(myTasksData => {
        this.myTasksData = myTasksData;
      });

    this.slideService.get(this.portal).subscribe(
      (slides: Slide[]) => {
        this.slides = slides;
      },
      (e) => { this.slides = []; throw e; }
    );

    this.getData();
  }

  isLoadingValueChange(isLoadingValueFromHeader) {
    this.isLoading = isLoadingValueFromHeader;
  }

  isGSW() {
    return this.router.url.includes('/client/onboarding');
  }

  getData() {
    this.page = this.pageConfigService.getPageConfig();
  }

  filterNewsList(newsData) {
  this.newsModalDataFiltered = [];
    newsData.forEach((item) => {
      if (item.visibleOnDashboard) {
          this.newsModalDataFiltered.push(item);
        }
    });
  }

  filterClientEmployeeOrientationList(newsData) {
    this.clientEmployeeOrientationDataFiltered = [];
      newsData.forEach((item) => {
        if (item.visibleOnDashboard) {
            this.clientEmployeeOrientationDataFiltered.push(item);
          }
      });
    }

  get diagnosticPage() { return JSON.stringify(this.page); }
}

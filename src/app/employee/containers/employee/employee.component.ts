import { DashboardSlidesService } from './../../../shared/services/dashboard-slides.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

// Models
import {
  Announcement,
  ClientDetail,
  BenefitsDetail,
  OfferDetail,
  LeaveTracker,
} from '../../models';

import {
  Slide, portalType, NewsModal
} from '../../../shared/models';

// Local Services
import {
  AnnouncementService,
  ClientDetailService,
  BenefitsService,
 } from '../../services';
import { NewsService } from '../../../shared/services';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  id: string;
  clientDetail: ClientDetail;
  benefitsDetail: BenefitsDetail;
  slides: Slide[];

  portal: portalType = portalType.employee;

  newsModalData: NewsModal[];
  newsModalDataFiltered: NewsModal[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientDetailService: ClientDetailService,
    private newsService: NewsService,
    private benefitsService: BenefitsService,
    private slideService: DashboardSlidesService
  ) {
      this.newsModalData = [];
      this.newsModalDataFiltered = [];
   }

  ngOnInit() {

    this.clientDetailService.getClientDetail()
      .subscribe(clientDetail => {
        this.clientDetail = clientDetail;
      });

    this.benefitsService.getBenefits()
      .subscribe(benefits => {
        this.benefitsDetail = benefits;
      });

      this.slideService.get(this.portal).subscribe(
        (slides: Slide[]) => {
          this.slides = slides;
        },
        (e) => { this.slides = []; throw e; }
      );

    this.newsService.getEmployeeNewsModalData().subscribe((news: NewsModal[]) => {
      this.newsModalData = news;
      this.newsModalDataFiltered = news.filter((currentNew: NewsModal) => currentNew.visibleOnDashboard);
    });
  }
}

import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { HeaderService } from '../../../shared/services/index';
import { Company, Message } from '../../../shared/models/index';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  company: Company;
  companySubscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.company = this.headerService.selectedCompany.getValue();
  }

  ngOnInit() {
    this.companySubscription = this.headerService.selectedCompany$.subscribe(
      company => {
        this.company = company;
        this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.companySubscription.unsubscribe();
}

}

import { Component, OnInit } from '@angular/core';
import { ReportsReportCreatorCard } from '../../models';
import { ReportsReportCreatorService } from '../../services';

@Component({
  selector: 'app-reports-report-creator',
  templateUrl: './reports-report-creator.component.html',
  styleUrls: ['./reports-report-creator.component.scss']
})
export class ReportsReportCreatorComponent implements OnInit {

  reportsReportCreatorCard: ReportsReportCreatorCard[];

  constructor(
    private reportsReportCreatorService: ReportsReportCreatorService
  ) { }

  ngOnInit() {

    this.reportsReportCreatorService.getReportsReportCreatorList().subscribe(
      reportsReportCreatorCardList => {
        this.reportsReportCreatorCard = reportsReportCreatorCardList;
      }
    );

  }

}

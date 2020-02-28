// Angular
import { Component, OnInit } from '@angular/core';

// Models
import {
  OfferDetail,
  PaySummary,
  LeaveTracker,
  EmployeeContribution,
  MyPaySummary
} from '../../models';

import {
  Message
} from '../../../shared/models';

// Shared Services
import {
  MessageService,
  NewsService
} from '../../../shared/services';

// Client Services
import {
  LeaveTrackerService,
  Employee401kService,
  PaySummaryService
} from '../../services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  messages: Message[];
  leaveTracker: LeaveTracker[];
  my401kData: EmployeeContribution[];
  leaveTrackerEnabled: boolean;
  my401kEnabled: boolean;
  myPayEnabled: boolean;
  myPayEnabledSummaries: boolean;
  widgetsAvailables: number;

  constructor(
    private messageService: MessageService,
    private leaveTrackerService: LeaveTrackerService,
    private my401kService: Employee401kService) {
      this.leaveTrackerEnabled = false;
      this.my401kEnabled = false;
      this.myPayEnabled = true;
      this.myPayEnabledSummaries = true;
      this.widgetsAvailables = 0;
    }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(messages => {
        this.messages = messages;
      });

      // this.leaveTrackerService.getLeaveTracker()
      //   .subscribe(leaveTracker => {
      //     this.leaveTracker = leaveTracker;
      //   });

       this.leaveTracker = this.leaveTrackerService.getLeaveTrackerMock();

      // this.my401kService.getMy401k()
      // .subscribe(my401kData => {
      //   this.my401kData = my401kData;
      // });
       this.my401kData = this.my401kService.getMy401kDataMock();
      this.checkWidgetsVisivility();
  }

  checkWidgetsVisivility() {
    this.widgetsAvailables = 0;
    if (this.leaveTracker != null) {
      this.leaveTrackerEnabled = true;
      this.widgetsAvailables++;
    }
    if (this.my401kData != null) {
      this.my401kEnabled = true;
      this.widgetsAvailables++;
    }
    if (this.myPayEnabled) {
      this.widgetsAvailables++;
    }
    if (this.myPayEnabledSummaries) {
      this.widgetsAvailables++;
    }
  }

  loadedPaySummary(paySummary: MyPaySummary) {
    if (paySummary != null) {
      this.myPayEnabled = true;
    } else {
      this.myPayEnabled = false;
    }
    this.checkWidgetsVisivility();
  }

  loadedPaySummaries(paySummaries: PaySummary[]) {
    if (paySummaries != null) {
      this.myPayEnabledSummaries = true;
    } else {
      this.myPayEnabledSummaries = false;
    }
    this.checkWidgetsVisivility();
  }
}

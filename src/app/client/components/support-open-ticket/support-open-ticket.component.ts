import { Component, OnInit, Input } from '@angular/core';
import { ISupportTicket } from '../../models';

@Component({
  selector: 'app-support-open-ticket',
  templateUrl: './support-open-ticket.component.html',
  styleUrls: ['./support-open-ticket.component.scss']
})
export class SupportOpenTicketComponent implements OnInit {
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @Input() selectedCaseData: ISupportTicket;

  tabSelected = 'tab_summary';

  constructor() { }

  ngOnInit() {
  }

  updateTabSelection(tabSelected): void {
    this.tabSelected = tabSelected;
  }

}

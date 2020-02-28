import { Component, OnInit, Input } from '@angular/core';
import { AlertData } from '../../models';

@Component({
  selector: 'app-dashboard-alerts',
  templateUrl: './dashboard-alerts.component.html',
  styleUrls: ['./dashboard-alerts.component.scss']
})
export class DashboardAlertsComponent implements OnInit {

  @Input() alerts: AlertData[];
  @Input() showAll: boolean;


  constructor() { }

  ngOnInit() {
  }

}

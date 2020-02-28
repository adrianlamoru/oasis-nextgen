import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { LeaveTracker } from '../../models';

@Component({
  selector: 'app-my-leave-tracker',
  templateUrl: './my-leave-tracker.component.html',
  styleUrls: ['./my-leave-tracker.component.scss']
})
export class MyLeaveTrackerComponent implements OnInit, AfterContentInit {

  @Input() leaveTracker: LeaveTracker;

  vacationChartPalette = ['#1a52ce', '#e7eaee'];
  personalChartPalette = ['#a55eef', '#e7eaee'];
  sickChartPalette = ['#00b2d5', '#e7eaee'];

  ptoDataVacation = [];
  ptoDataPersonal = [];
  ptoDataSick = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.ptoDataVacation.push(this.leaveTracker[0]);
    this.ptoDataPersonal.push(this.leaveTracker[1]);
    this.ptoDataSick.push(this.leaveTracker[2]);
  }

  customizeLabel = (arg: any) => {
    return {
      visible: true,
      customizeText: function (e: any) {
        return e.valueText;
      }
    };
  }
}

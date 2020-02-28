import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hr-activities',
  templateUrl: './hr-activities.component.html',
  styleUrls: ['./hr-activities.component.scss']
})
export class HrActivitiesComponent implements OnInit {
  @Input() available: string;

  hrActivitiesCardData = {
    title: 'HR Activities',
    previewItemsList: [{ activityName: 'Activity 1', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 2', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 3', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 4', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 5', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 6', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 7', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 8', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 9', activityLink: 'http://www.oasisadvantage.com/' },
    { activityName: 'Activity 10', activityLink: 'http://www.oasisadvantage.com/' }]
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  openActivity(link) {
    window.open(link, '_blank');
  }

}

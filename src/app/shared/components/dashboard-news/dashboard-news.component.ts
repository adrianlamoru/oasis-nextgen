import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewsModal, AreaContainer } from '../../models';

import {AgreementService, AuthService} from '../../services';

@Component({
  selector: 'app-dashboard-news',
  templateUrl: './dashboard-news.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard-news.component.scss']
})
export class DashboardNewsComponent implements OnInit {
  @Input() newsModalData: NewsModal[];
  @Input() newsModalFilteredList: NewsModal[];
  @Input() areaContainer: AreaContainer;

  userType: string;

  closeResult: string;
  activeIndex;
  toggle = 0;

  constructor(
    private modalService: NgbModal,
    private agreementService: AgreementService) {
      this.areaContainer = AreaContainer.mainArea;
     }

  openNewsModal(content, anchorID) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static', windowClass : 'news-modal' });
    const index = this.getNewsIndex(anchorID);
    if (index > 0) {
      this.clicked(index, 1);
    }

    setTimeout(() => {
      const element = document.getElementById(anchorID);

      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 500);
  }

  ngOnInit() {
    this.userType = this.agreementService.getUserType();
  }

  clicked(index, toggle) {
    this.activeIndex = index;
    this.toggle = toggle;
  }

  isMainArea(): boolean {
    return this.areaContainer === AreaContainer.mainArea;
  }

  isLeftPanelArea(): boolean {
    return this.areaContainer === AreaContainer.leftPanelArea;
  }

  getNewsIndex(anchorID): number {
    for (let i = 0; i < this.newsModalData.length; i++) {
      if (this.newsModalData[i].anchorID === anchorID) {
        return i;
      }
    }

    return -1;
  }
}

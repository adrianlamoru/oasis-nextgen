import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-human-resources-training',
  templateUrl: './human-resources-training.component.html',
  styleUrls: ['./human-resources-training.component.scss']
})
export class HumanResourcesTrainingComponent implements OnInit {
  @Input() available: string;
  @Input() humanResourcesActivitesCardData: any;
  @Input() websiteLink: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  openButtonAction(link) {
    window.open(link, '_blank');
  /*In HTML:
     href="{{item.docLink}}"*/
  }
}


import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-human-resources-upcoming-reviews-links',
  templateUrl: './human-resources-upcoming-reviews-links.component.html',
  styleUrls: ['./human-resources-upcoming-reviews-links.component.scss']
})
export class HumanResourcesUpcomingReviewsLinksComponent implements OnInit {
  @Input() available: string;
  @Input() innerData: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    if (this.innerData.title == 'Upcoming Reviews'){
      this.innerData.previewItemsList.sort(function(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      });
    }
    else{
      this.innerData.previewItemsList.sort(function(a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
      });
    }
  }

  openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  openReviewLink(link) {
    window.open(link, '_blank');
  }

}

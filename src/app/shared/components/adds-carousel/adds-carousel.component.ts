import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slide } from '../../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adds-carousel',
  templateUrl: './adds-carousel.component.html',
  styleUrls: ['./adds-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})

export class AddsCarouselComponent implements OnInit {

  @ViewChild('loadOasisNews') loadOasisNews;

  @Input() public maxHeight: number;
  @Input() public slides: Array<Slide>;

  constructor(
    config: NgbCarouselConfig,
    private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 100000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

  openRouterLink(link) {
    // console.log("actionUrl: " + link);

    if (link === 'oasis-news') {
      // console.log("hit oasis news");
      // console.log("loadOasisNews: " + this.loadOasisNews.nativeElement.className);
      // this.loadOasisNews.nativeElement.className = 'modal fade show';

    } else if (link.includes('http://') || link.includes('https://')) {
      window.open(link, '_blank');
    } else {
      this.router.navigate([link]);
    }
  }


}

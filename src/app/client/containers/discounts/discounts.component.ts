import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  @ViewChild('discountsDetailModal') discountsDetailModal: ViewContainerRef;

  selectedDiscountItem: any;
  discountType: string;
  discountsData = [
    {
      'heading': 'FINANCIAL SERVICES',
      'title': 'Dept Management Credit Counseling Corp',
      'body': 'lorem ipsum dolor sit amet consectetur adipiscing',
      'link': 'http://www.oasisadvantage.com',
      'text': ''
    },
    {
      'heading': 'RETAIL',
      'title': 'Brooks Brothers',
      'body': 'lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris',
      'link': '',
      'text': `lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris
                lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris`
    },
    {
      'heading': 'HEALTH AND WELLNESS',
      'title': 'Anytime Fitness',
      'body': 'Libero lobortis necor laoreet tortor vehicula mauris sed consectetur faucibus tempus',
      'link': '',
      'text': `lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris
      lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris`
    },
    {
      'heading': 'TRAVEL AND ENTERTAINMENT',
      'title': 'WMPH Vacations',
      'body': 'Get their best deal on your next cruise',
      'link': 'http://www.oasisadvantage.com',
      'text': ''
    },
    {
      'heading': 'RETAIL',
      'title': '(SSO) Working Advantage',
      'body': 'Get upto 60% of entertainment, events and shopping',
      'link': '',
      'text': `lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris
      lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris`
    },
    {
      'heading': 'TRAVEL AND ENTERTAINMENT',
      'title': 'Rental Car',
      'body': 'Get their best deal on your rental car',
      'link': 'http://www.oasisadvantage.com',
      'text': ''
    },
    {
      'heading': 'FINANCIAL SERVICES',
      'title': 'Credit Counseling Corp',
      'body': 'lorem ipsum dolor sit amet consectetur adipiscing',
      'link': 'http://www.oasisadvantage.com',
      'text': ''
    },
    {
      'heading': 'HEALTH AND WELLNESS',
      'title': 'Rocks Fitness',
      'body': 'Libero lobortis necor laoreet tortor vehicula mauris sed consectetur faucibus tempus',
      'link': '',
      'text': `lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris
      lorem ipsum dolor sit amet consectetur adipiscing tempus neque faucibus quis mauris`
    }
  ];

  constructor(private modalService: NgbModal,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.discountType = params['discountType'];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getDiscountType(type) {
    let cssClasses;
    if (type === 'FINANCIAL SERVICES') {
      cssClasses = {
        'badge badge-label-financial-services mb-2 mr-1': true
      };
    }
    if (type === 'RETAIL') {
      cssClasses = {
        'badge badge-label-retail mb-2 mr-1': true
      };
    }
    if (type === 'HEALTH AND WELLNESS') {
      cssClasses = {
        'badge badge-label-travel-entertainment mb-2 mr-1': true
      };
    }
    if (type === 'TRAVEL AND ENTERTAINMENT') {
      cssClasses = {
        'badge badge-label-health-wellness mb-2 mr-1': true
      };
    }
    return cssClasses;
  }

  getDetailedDiscounts(discountItem) {
    this.selectedDiscountItem = discountItem;
    if (discountItem.link === '') {
      this.openDiscountDetailModal('xs', this.discountsDetailModal);
    } else {
      window.open(discountItem.link, '_blank');
    }
  }

  openDiscountDetailModal(size, content) {
    this.modalService.open(content, { size: size });
  }
}

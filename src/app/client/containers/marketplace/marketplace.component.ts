import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// import { SpiderData } from '../../shared/models';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarketplaceComponent implements OnInit {

  ctaButtonData = [
    {
      btnLabel: 'Call to Action1',
      btnLink: 'https://www.google.com',
      btnLinkConfig: '_blank'
    },
    {
      btnLabel: 'Call to Action2',
      btnLink: 'https://www.oasisadvantage.com',
      btnLinkConfig: '_self'
    }
  ];

  marketplaceWidgetData  = {
    chartTitle: 'Where You Started',
    spiderDataSource: {
    axisData: [{field: 'cat1', name: 'Category1'},
        {field: 'cat2', name: 'Category2'},
        {field: 'cat3', name: 'Category3'},
        {field: 'cat4', name: 'Category4'}],
    dataSet: [{
        arg: 'Payroll',
        cat1: 4.21,
        cat2: 6.22,
        cat3: 0.8,
        cat4: 7.47
        }, {
        arg: 'HR',
        cat1: 3.33,
        cat2: 8.65,
        cat3: 1.06,
        cat4: 5
        }, {
        arg: 'WC',
        cat1: 2.6,
        cat2: 4.25,
        cat3: 0.78,
        cat4: 1.71
        }, {
        arg: 'Benefits',
        cat1: 2.2,
        cat2: 7.78,
        cat3: 0.52,
        cat4: 2.39
        }, {
        arg: 'Emp',
        cat1: 2.16,
        cat2: 2.26,
        cat3: 3.09,
        cat4: 6.26
      }]
    }
  };

  marketplaceWidgetDataToday = {
    chartTitle: 'Where You Are Today',
    spiderDataSource: {
    axisData: [{field: 'cat1', name: 'Category1'},
        {field: 'cat2', name: 'Category2'},
        {field: 'cat3', name: 'Category3'},
        {field: 'cat4', name: 'Category4'}],
    dataSet: [{
        arg: 'Payroll',
        cat1: 6.21,
        cat2: 8.22,
        cat3: 2.8,
        cat4: 9.47
        }, {
        arg: 'HR',
        cat1: 4.33,
        cat2: 10.65,
        cat3: 3.06,
        cat4: 7
        }, {
        arg: 'WC',
        cat1: 4.6,
        cat2: 6.25,
        cat3: 2.78,
        cat4: 3.71
        }, {
        arg: 'Benefits',
        cat1: 4.2,
        cat2: 9.78,
        cat3: 2.52,
        cat4: 4.39
        }, {
        arg: 'Emp',
        cat1: 4.16,
        cat2: 4.26,
        cat3: 5.09,
        cat4: 8.26
      }]
    }
  };

    marketplaceWidgetDataFuture = {
    chartTitle: 'Where You Could Be',
    spiderDataSource: {
    axisData: [{field: 'cat1', name: 'Category1'},
        {field: 'cat2', name: 'Category2'},
        {field: 'cat3', name: 'Category3'},
        {field: 'cat4', name: 'Category4'}],
    dataSet: [{
        arg: 'Payroll',
        cat1: 12.21,
        cat2: 12.22,
        cat3: 6.8,
        cat4: 14.47
        }, {
        arg: 'HR',
        cat1: 10.33,
        cat2: 14.65,
        cat3: 8.06,
        cat4: 10
        }, {
        arg: 'WC',
        cat1: 9.6,
        cat2: 9.25,
        cat3: 5.78,
        cat4: 6.71
        }, {
        arg: 'Benefits',
        cat1: 8.2,
        cat2: 13.78,
        cat3: 5.52,
        cat4: 7.39
        }, {
        arg: 'Emp',
        cat1: 7.16,
        cat2: 9.26,
        cat3: 8.09,
        cat4: 10.26
      }]
    }
  };

  marketplaceCardDescription = [
    {
      name: "We'll help you review your job classifications and tools so that your payroll stays in compliance with overtime, minimum wage, child labor, full and part time requirements, and record keeping for employees in the private sector as well as in federal, state and local governments."
    },
    {
      name: "Need help developing job descriptions that are compliant with the Americans with Disabilities Act (ADA), as well as your standard jobs and those hard to describe roles? We can help with all the variety of your growing workforce."
    }, 
    {
      name: "The devil is in the detail when it comes to Handbooks. There are federal and state compliance considerations, which include workplace harassment, disciplinary actions and employee leave. Our Core Handbook helps you navigate all of those details and stay compliant. We can also customize additional areas specifically for you and your company."
    },
    {
      name: "Let us help you by processing and administering your eligible employees FMLA. We'll determine eligibility, provide letters as well as notices and reminders to your employees and track the time your employees are on FMLA."
    },
    {
      name: "We keep copies of your employees' I-9 forms and can help you keep track of work authorizations expiration and renewal dates as well as help with researching immigration laws."
      
    },
    {
      name: "To help you with state unemployement requirements, we provide regulatory reporting for new hires, terminations, and wages as well as wage adn employment verification."
    }
  ];

  constructor(config: NgbCarouselConfig,
    private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 100000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  openCTAButtonAction(link, btnLinkConfig) {
    window.open(link, btnLinkConfig);
  }

  goToDiscounts(discountType) {
    this.router.navigate(['client/discounts'], {queryParams: {discountType}});
  }
}

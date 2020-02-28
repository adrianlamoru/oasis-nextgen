import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/services';
import { Company, IPage } from '../../../shared/models';


import { PageConfigService } from '../../../shared/services';

@Component({
  selector: 'app-hr-resources',
  templateUrl: './hr-resources.component.html',
  styleUrls: ['./hr-resources.component.scss']
})
export class HrResourcesComponent implements OnInit {
  company: Company;
  page: IPage;

  hrHandBooksDocuments = {
    title: 'Handbooks & Documents',
    previewItemsList: [
    { docName: 'Oasis Core Handbook', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis CORE Handbook (English)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis CORE Handbook (Spanish)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' }
    ]};

    handBooksDocumentsLink = 'http://www.somewebsite.com';

    upcomingReviewsCardData = {
      title: 'Upcoming Reviews',
      previewItemsList: [ { name: 'Sophie Lawrence', date: new Date('10/01/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Elsie Christensen', date: new Date('10/11/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Elijah Bowen', date: new Date('10/21/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Alfred Francis', date: new Date('10/02/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Leila Cummings', date: new Date('10/08/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Sophie Lawrence 2', date: new Date('10/07/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Elsie Christensen 2', date: new Date('10/09/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Elijah Bowen 2', date: new Date('10/10/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'Alfred Francis 2', date: new Date('10/28/2018'), reviewLink: 'http://www.oasisadvantage.com/'  },
                          { name: 'eila Cummings 2', date: new Date('10/15/2018'), reviewLink: 'http://www.oasisadvantage.com/'  } ]
    };

  // hrCTAButtons = [{
  //   btnLabel: 'Call to action 1',
  //   btnLink: 'https://www.google.com',
  //   btnLinkConfig: 'self'
  // }, {
  //   btnLabel: 'Call to action 2',
  //   btnLink: '/assets/pdf/samplePDFForPrint.pdf',
  //   btnLinkConfig: '_blank'
  // }];

  hrCards = {
    'showELearning': true,
    'showUpcomingReviews': true,
    'showRecruitmentAppTracking': true,
    'showHRCompliance': true,
    'showHandbooksDocuments': true,
    'showHRActivities': false,
    'showStateComplianceModule': true
  };

  constructor(
    private headerService: HeaderService,
    private pageConfigService: PageConfigService) { }

  ngOnInit() {
    this.headerService.selectedCompany.subscribe(company => {
      try {
        this.company = company;
      } catch (e) { }
    });

    console.log(this.company);

    this.page = this.pageConfigService.getPageConfig();
  }

  openCTAButtonAction(link, btnLinkConfig) {
    window.open(link, btnLinkConfig);
  }

}

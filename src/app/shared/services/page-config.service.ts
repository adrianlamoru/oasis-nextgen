import { Injectable } from '@angular/core';

import {
  IWouldLikeLink,
  IPage,
  Message
} from '../models';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { constants } from 'fs';

@Injectable()

export class PageConfigService {

  public pages: IPage[];

  public defaultIWouldLikeLinks: IWouldLikeLink[];

  constructor(private router: Router) {
    this.pages = [];
    this.defaultIWouldLikeLinks = [];

    this.loadDefaultIWouldLikeLinks().subscribe();
    this.loadPages().subscribe( () => {
      this.registerPages('', router.config);
    });
  }

  public getPageConfig(): IPage {
    const url = this.reverseEngineerRoutingModuleUrl(this.router.routerState.root.children, this.router.url).toLowerCase();

    if (url) {
      let page: IPage = null;
      const filteredPages = this.pages.filter(x => x.url.toLowerCase().includes(url));

      if (filteredPages.length === 0) {
        page = {
          id: 0,
          title: 'Unknown',
          url: 'Unknown',
          maxIWouldLikeLinks: 4,
          iWouldLikeLinks: [],
          pageLabels: []
        };
      } else {
        page = filteredPages[0];
      }

      this.configureIWouldLikeLinks(page);
      this.configureAlerts(page);

      return page;
    }

    return null;
  }

  private configureIWouldLikeLinks(page: IPage) {
    if (page.iWouldLikeLinks === null || page.iWouldLikeLinks === undefined || page.iWouldLikeLinks.length === 0) {
      page.iWouldLikeLinks = this.defaultIWouldLikeLinks;
    }

    for (const link of page.iWouldLikeLinks) {
      if (link.searchableText === null || link.searchableText === undefined) {
        link.searchableText = link.title + link.text;
      }

      link.searchableText = link.searchableText.replace(/[^a-zA-Z0-9\s-]/ig, '');
    }
  }

  private configureAlerts(page: IPage) {
    if (page.alerts === undefined || page.alerts === null) {
      page.alerts = [];
    }
  }

  private loadPages(): Observable<void> {
    const url = this.router.url;
    const pageProvider: Observable<IPage[]> = (url.startsWith('/employee') ? this.loadEmployeePages() : this.loadClientPages());

    return pageProvider.map((pages: IPage[]) => {
      this.pages = pages;
    });
  }

  private loadClientPages(): Observable<IPage[]> {
    return Observable.of([
      {
        id: 1,
        title: 'Workers\' Comp',
        url: '/client/workers-comp-and-safety',
        maxIWouldLikeLinks: 4,
        iWouldLikeLinks: [
          {
            id: null,
            title: 'Submit Workers\' Comp Claim',
            text: 'Simple explanation here',
            icon: 'folder',
            link: '/client/projects',
            sortOrder: 1,
            target: '_blank'
          },
          {
            id: null,
            title: 'Download Certificate of Insurance',
            text: 'Simple explanation here',
            icon: 'insurance',
            link: '/client/bizvault',
            sortOrder: 2,
            target: '_blank'
          },
          {
            id: null,
            title: 'Request a Safety Review',
            text: 'Simple explanation here',
            icon: 'todo',
            link: 'https://google.com',
            sortOrder: 3,
            target: '_blank'
          },
          {
            id: null,
            title: 'Learn More About Managing Risk',
            text: 'Simple explanation here',
            icon: 'risk2',
            link: '/client/support',
            sortOrder: 4,
            target: '_blank'
          }
        ],
        pageLabels: [
          {
            code: 'POSTERS-AND-FORMS-CARD',
            description: 'Poster Card',
            displayTitle: 'State-Compliant Posters and Forms',
            displayText: 'Oasis has the state-specific resources you need.'
          }
        ]
      },
      {
        id: 2,
        title: 'Payroll - Batch - Hours & Earnings',
        url: '/client/payroll/run/batch/[PARAM]/roster/[PARAM]/hours-earnings',
        maxIWouldLikeLinks: 4
      },
      {
        id: 3,
        title: 'hr-resources',
        url: '/client/hr-resources',
        maxIWouldLikeLinks: 4,
        iWouldLikeLinks: [
          {
            id: null,
            title: 'Submit HR Claim',
            text: 'Simple explanation here',
            icon: 'folder',
            link: '/client/projects',
            sortOrder: 1,
            target: '_blank'
          },
          {
            id: null,
            title: 'Download Certificate of Insurance',
            text: 'Simple explanation here',
            icon: 'insurance',
            link: '/client/bizvault',
            sortOrder: 2,
            target: '_blank'
          },
          {
            id: null,
            title: 'Request a Safety Review',
            text: 'Simple explanation here',
            icon: 'todo',
            link: 'https://google.com',
            sortOrder: 3,
            target: '_blank'
          },
          {
            id: null,
            title: 'Learn More About Managing Risk',
            text: 'Simple explanation here',
            icon: 'risk2',
            link: '/client/support',
            sortOrder: 4,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get info on Applicant Tracking',
            text: 'You can learn about Applicant Tracking',
            icon: 'risk2',
            link: '/client/support',
            sortOrder: 5,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get info on Recruiting',
            text: 'You can learn about Recruiting',
            icon: 'risk2',
            link: '/client/support',
            sortOrder: 6,
            target: '_blank'
          }
        ],
        pageLabels: [
          {
            code: 'POSTERS-AND-FORMS-CARD',
            description: 'Poster Card',
            displayTitle: 'State-Compliant Posters and Forms',
            displayText: 'Oasis has the state-specific resources you need.'
          }
        ]
      },
      {
        id: 4,
        title: 'benefits',
        url: '/client/benefits/',
        maxIWouldLikeLinks: 4,
        iWouldLikeLinks: [
          {
            id: null,
            title: 'Defer 401(k) - Company',
            text: 'You can request a 401(k) Deferral from a company plan',
            icon: 'folder',
            link: '',
            action: 'createSupportTicket',
            sortOrder: 1,
            target: '_blank'
          },
          {
            id: null,
            title: 'Defer 401(k)  - Oasis',
            text: 'You can request a 401(k) Deferral for an Oasis Plan',
            icon: 'insurance',
            link: '/client/benefits',
            sortOrder: 2,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get Co. 401(k) Loan Refund',
            text: 'You can request a company 401(k) loan refund',
            icon: 'todo',
            link: '/client/benefits',
            sortOrder: 3,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get Oasis 401(k) Loan Refund',
            text: 'You can request an Oasis 401(k) loan refund',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 4,
            target: '_blank'
          },
          {
            id: null,
            title: 'Check My 401(k) Contributions',
            text: 'We\'ll audit your 401(k) contributions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 5,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get Advice on 401(k) Plans',
            text: 'Get a consult before adding a 401(K) plan',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 6,
            target: '_blank'
          },
          {
            id: null,
            title: 'Change 401K Deferral Amount',
            text: 'You can change an employee\'s 401(k) deferral amount',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 7,
            target: '_blank'
          },
          {
            id: null,
            title: 'Start or Stop 401(k) Loan',
            text: 'You can start or stop a 401(k) loan',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 8,
            target: '_blank'
          },
          {
            id: null,
            title: 'Send Info - New 401(k) Plan',
            text: 'You can submit info on a new company sponsored 401 (k) plan',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 9,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Oasis 401(k) plan',
            text: 'Get answers to 401 (k) Oasis plan questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 10,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get a 401(k) Contribution Report',
            text: 'See and print a 401(k) contribution report',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 11,
            target: '_blank'
          },
          {
            id: null,
            title: 'Change ACA Billing Setup or Get Refund',
            text: 'You can change your ACA Billing Setup or Get a Refund',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 12,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about ACA Compliance',
            text: 'Get your ACA compliance questions answered',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 13,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get an ACA report',
            text: 'Request an ACA Report',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 14,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get IRS Notices and Appeals for ACA',
            text: 'See and print my IRS notices or appeals for ACA',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 15,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about or update 1094/1095C',
            text: 'You can get answers or make corrections to a 1094/1095c',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 16,
            target: '_blank'
          },
          {
            id: null,
            title: 'Run ACA Reports',
            text: 'You can run ACA reports and get the results',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 17,
            target: '_blank'
          },
          {
            id: null,
            title: 'Check ACA Eligibility',
            text: 'You can check ACA eligibility status',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 18,
            target: '_blank'
          },
          {
            id: null,
            title: 'Change Employee ACA info',
            text: 'You can change employee ACA info',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 19,
            target: '_blank'
          },
          {
            id: null,
            title: 'Change Company ACA info',
            text: 'You can change company ACA info',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 20,
            target: '_blank'
          },
          {
            id: null,
            title: 'Meet about Annual Enrollment',
            text: 'You can request an Annual Enrollment',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 21,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get my Payroll Deductions',
            text: 'You can review payroll deductions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 22,
            target: '_blank'
          },
          {
            id: null,
            title: 'Get my Payroll Issue Handled Now',
            text: 'You can request urgent payroll processing assistance',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 23,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Disability',
            text: 'Get answers to disability questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 24,
            target: '_blank'
          },
          {
            id: null,
            title: 'Terminate Benefits',
            text: 'You can terminate benefit coverage for an employee',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 25,
            target: '_blank'
          },
          {
            id: null,
            title: 'See My Benefit Deductions',
            text: 'You can review your benefit deductions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 26,
            target: '_blank'
          },
          {
            id: null,
            title: 'Renew My Benefit Plan',
            text: 'You can renew your benefit plan',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 27,
            target: '_blank'
          },
          {
            id: null,
            title: 'Reconcile My Benefits',
            text: 'You can reconcile benefits payments and deductions here',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 28,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about COBRA',
            text: 'Get answers to COBRA questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 29,
            target: '_blank'
          },
          {
            id: null,
            title: 'Check on Enrollment and Eligibility',
            text: 'Review Enrollment and Eligibility',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 30,
            target: '_blank'
          },
          {
            id: null,
            title: 'Do Something Else...',
            text: 'Don\'t see what you\'re looking for? Ask here',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 31,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Benefit Plans',
            text: 'Get answers to benefit plan questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 32,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Deduction Service',
            text: 'Get answers on benefit deductions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 33,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Eligibility',
            text: 'Get answers on eligiblity',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 34,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about FSA/HSA',
            text: 'Get answers to FSA or HSA questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 35,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Life Insurance',
            text: 'Get answers to Life insurance questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 36,
            target: '_blank'
          },
          {
            id: null,
            title: 'Ask about Annual Enrollment',
            text: 'Get answers to Annual Enrollment questions',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 37,
            target: '_blank'
          },
          {
            id: null,
            title: '',
            text: '',
            icon: 'risk2',
            link: '/client/benefits',
            sortOrder: 38,
            target: '_blank'
          },
        ],
        pageLabels: [
          {
            code: 'POSTERS-AND-FORMS-CARD',
            description: 'Poster Card',
            displayTitle: 'State-Compliant Posters and Forms',
            displayText: 'Oasis has the state-specific resources you need.'
          }
        ]
      },
    ]);
  }

  private loadEmployeePages(): Observable<IPage[]> {
    return Observable.of([]);
  }

  private loadDefaultIWouldLikeLinks(): Observable<void> {
    const url = this.router.url;
    const iWouldLikeLinksProvider: Observable<IWouldLikeLink[]> = (url.startsWith('/employee') ?
      this.loadEmployeeDefaultIWouldLikeLinks() : this.loadClientDefaultIWouldLikeLinks());

    return iWouldLikeLinksProvider.map((iWouldLikeLinks: IWouldLikeLink[]) => {
      this.defaultIWouldLikeLinks = iWouldLikeLinks;
    });
  }

  private loadClientDefaultIWouldLikeLinks(): Observable<IWouldLikeLink[]> {
    return Observable.of([
      {
        id: null,
        title: 'Process Payroll',
        text: 'Process your next batch',
        icon: 'paper',
        link: '/client/payroll/run',
        sortOrder: 1,
        target: '_self'
      },
      {
        id: null,
        title: 'Manage Direct Deposit',
        text: 'Update your employees\' bank, checking or savings allocations for payroll direct deposits',
        icon: 'cheque',
        link: 'https://www.google.com',
        sortOrder: 2,
        target: '_self'
      },
      {
        id: null,
        title: 'Add a Dependent',
        text: 'Update your employees\' dependent details',
        icon: 'add',
        link: 'https://www.google.com',
        sortOrder: 3,
        target: '_blank'
      },
      {
        id: null,
        title: 'Get a W-9',
        text: 'You can view or print your W-9',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 4,
        target: '_blank'
      },
      {
        id: null,
        title: 'Get SOC Report',
        text: 'You can request a SOC report',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 7,
        target: '_blank'
      },
      {
        id: null,
        title: 'Change Bank - Financial Institution',
        text: 'You can change your bank or financial information',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 8,
        target: '_blank'
      },
      {
        id: null,
        title: 'Ask About a Fraudulent Check',
        text: 'You can ask about or report a fraudulent check',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 9,
        target: '_blank'
      },
      {
        id: null,
        title: 'Get a 1099',
        text: 'You can see or print a 1099',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 10,
        target: '_blank'
      },
      {
        id: null,
        title: 'Ask about an Invoice',
        text: 'Get answers to your invoice questions',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 11,
        target: '_blank'
      },
      {
        id: null,
        title: 'Ask about a Payment',
        text: 'Ask about or report a payment issue',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 12,
        target: '_blank'
      },
      {
        id: null,
        title: 'Change My Payment Method',
        text: 'You can change payment method',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 13,
        target: '_blank'
      },
      {
        id: null,
        title: 'Ask about Taxes',
        text: 'Get answers or report a tax issue',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 14,
        target: '_blank'
      },
      {
        id: null,
        title: 'Update W-2',
        text: 'You can correct or update your W-2',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 15,
        target: '_blank'
      },
      {
        id: null,
        title: 'Report a Bank Issue',
        text: 'Ask about or report a banking isssue',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 16,
        target: '_blank'
      },
      {
        id: null,
        title: 'Change from Wire to ACH',
        text: 'You can change payment method from Wire to ACH',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 17,
        target: '_blank'
      },
      {
        id: null,
        title: 'Ask about Collecting COBRA',
        text: 'Get answers to or define my COBRA colllection method',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 18,
        target: '_blank'
      },
      {
        id: null,
        title: 'Do a Wire-Transfer',
        text: 'You can request a one-time wire transfer',
        icon: 'folder',
        link: '/client/dashboard',
        sortOrder: 19,
        target: '_blank'
      },
      {
        id: null,
        title: 'Add a Division Code',
        text: 'Add another Division Code',
        icon: 'folder',
        link: '/client/setup/divisions',
        sortOrder: 20,
        target: '_self'
      },
      {
        id: null,
        title: 'Invoice Summary',
        text: 'View my Invoice Summary',
        icon: 'folder',
        link: '/client/payroll/analytics',
        sortOrder: 21,
        target: '_self'
      }
    ]);
  }

  private loadEmployeeDefaultIWouldLikeLinks(): Observable<IWouldLikeLink[]> {
    return Observable.of([{
      id: null,
      title: 'Benefits',
      text: 'Employee benefits',
      icon: 'paper',
      link: '/employee/benefits',
      sortOrder: 1,
      target: '_self'
    }, {
      id: null,
      title: 'Compensation',
      text: 'Employee Compensation',
      icon: 'paper',
      link: '/employee/compensation',
      sortOrder: 2,
      target: '_self'
    }, {
      id: null,
      title: 'Resources',
      text: 'Employee Resources',
      icon: 'paper',
      link: '/employee/resources',
      sortOrder: 3,
      target: '_self'
    }, {
      id: null,
      title: 'Perks & Discounts',
      text: 'Employee Perks & Discounts',
      icon: 'paper',
      link: '/employee/perks-discounts',
      sortOrder: 4,
      target: '_self'
    }]);
  }

  registerPages(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const currentRoute = config[i] as any;
      const path = (parent + '/' + currentRoute.path).replace('//', '/');

      if (!path.endsWith('/') && path.length > 1) {

        this.pages.push({
          id: 0,
          title: path,
          url: path,
          maxIWouldLikeLinks: 4
        });
      }

      if (currentRoute.children && currentRoute.path) {
        this.registerPages(parent + currentRoute.path, currentRoute.children);
      } else if (currentRoute._loadedConfig) {
        this.registerPages(parent + '/' + currentRoute.path, currentRoute._loadedConfig.routes);
      } else if (currentRoute.children) {
        this.registerPages(parent + '/' + currentRoute.path, currentRoute.children);
      }
    }
  }

  reverseEngineerRoutingModuleUrl(activatedRoutes: ActivatedRoute[], originalUrl: string): string {
    let path = originalUrl;

    for (const route of activatedRoutes) {
      if (route.children.length > 0) {
        return this.reverseEngineerRoutingModuleUrl(route.children, originalUrl);
      } else {
        const params = route.snapshot.params;

        for (const propertyName in route.snapshot.params) {
          if (route.snapshot.params.hasOwnProperty(propertyName)) {
            path = path.replace('/' + route.snapshot.params[propertyName] + '/', '/:' + propertyName + '/');
          }
        }

        return path;
      }
    }
  }
}

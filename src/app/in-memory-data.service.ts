import { CompensationTax } from './employee/models/compensation-tax.model';
import { CompensationEarningDetails } from './employee/models/compensation-earning-details.model';
import { ICompensationDeductionDetail } from './employee/models/compensation-deduction-detail.interface';
import { ICompensationEarningsSummary } from './employee/models/compensation-earnings-summary.interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import {
  ClientDetail,
  BenefitsDetail,
  Announcement,
  OfferDetail,
  PaySummary,
  LeaveTracker,
  EmployeeContribution,
  IPerkDiscountCard,
  IEmployeeBenefitsPlan
} from './employee/models';

import {
  SubnavMenu,
  ClientEmployees,
  ClientContacts,
  IClientEmployeePayrollLoan,
  IClientEmployeePayrollLoanStatus,
  IClientEmployeePayrollLoanReason,
  IClientEmployeePayrollLoanPaymentFrequency,
  IClientEmployeeScheduledPayments,
  IClientEmployeeScheduledPaymentsStatus,
  IClientEmployeeSkillCodeAssignment,
  IClientEmployeeSkillCodeType,
  IClientEmployeeRecurringDeduction,
  IClientEmployeeRecurringDeductionFrequency,
  IClientEmployeeRecurringDeductionType,
  IClientEmployeeRecurringDeductionPeriod,
  IClientEmployeeScheduledPaymentsType,
  IClientEmployeePTO,
  IClientEmployeePTOSummary,
  Employee401k,
  ClientBenefitSummary,
  ReportsEmployee401kSummary,
  EmployeeBenefitsRegister,
  IClientEmployeeHrEventAssignment,
  IClientEmployeeHrEventAssignmentType,
  IClientEmployeeJobRates,
  IClientEmployeeJobRatesType,
  IClientEmployeeJobRatesPayCodeType,
  IClientBenefitsPlan,
  ISupportTicket,
  IWorkersCompClaim,
  IWorkersCompClaimCaseDetails,
  ClientEmployeeProjectDetails,
  DashboardContact,
  ReportsInvoiceReprint,
  InvoiceReprintData,
  InvoiceReprintDataNumber,
  ReportsPtoAbsenceSummary,
  AverageHours,
  WagesEarningsPayCodes,
  EarningsSummary,
  PayrollVoucherDetail,
  EmployeeReportsEmployeeInformationInquiry,
  ReportsReportCreatorCard,
  ReportsHRTermination,
  ReportsW2AddressChange,
  EmployeeReportJobHistory,
  EmployeeReportStatusInquiry,
  EmployeeReportScheduledDeductions
} from './client/models';

import {
  Header,
  Message,
  NewsModal,
  Tasks,
  States,
  IGender,
  IEthnicity,
  IMaritalStatus,
  IInterRelationship,
  IAddress,
  IEmergencyContact,
  PieData,
  StackedHorizontalData,
  IDataDriven,
  IStateComplianceDocumentRepo,
  IStateComplianceDocumentCollection,
  IAgreement,
  AlertData,
  AlertModal,
  FileLink,
  SearchResult,
  EmployeeDirectDeposit
} from './shared/models';
import { EmployeeReportPayHistory } from './client/models/employee-reports-hr-pay-history.interface';

export class MockDatabaseService implements InMemoryDbService {
  createDb() {
    const supplementalForms: IDataDriven[] = [
      { ID: '1', Text: 'Supplemental Form 1A' },
      { ID: '2', Text: 'Supplemental Form 1B' },
      { ID: '3', Text: 'Supplemental Form 2C' },
      { ID: '4', Text: 'Supplemental Form 2D' },
      { ID: '5', Text: 'Supplemental Form 4A' },
      { ID: '6', Text: 'Supplemental Form 4B' },
      { ID: '7', Text: 'Supplemental Form 5C' },
      { ID: '8', Text: 'Supplemental Form 5D' }
    ];

    const client: ClientDetail = {
      name: 'Robert Alexander',
      title: 'Senior User Experience Architect',
      department: 'CX TEAM'
    };

    const benefits: BenefitsDetail = {
      medicalInsurance: 'Aetna National OA MC',
      dentalInsurance: 'Metlife Dental',
      visionInsurance: 'Humana'
    };

    const messages: Message[] = [
      {
        text: `The deadline to file taxes is April 15.`,
        actionText: 'Access your electronic W-2 here',
        actionUrl: 'https://www.irs.gov/',
        read: false,
        type: 'success'
      },
      {
        text: `You can get up to 20% discount on your AT&T monthly bill.`,
        actionText: 'Sign up today!',
        actionUrl: 'https://www.att.com/',
        read: false,
        type: 'warning'
      }
    ];

    const announcements: Announcement[] = [
      {
        title: 'News Headline1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content1.',
        link: '#',
        imgSrc: 'http://via.placeholder.com/300x200'
      },
      {
        title: 'News Headline2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content2.',
        link: '#',
        imgSrc: 'http://via.placeholder.com/300x200'
      },
      {
        title: 'News Headline3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content3.',
        link: '#',
        imgSrc: 'http://via.placeholder.com/300x200'
      }
    ];

    const USStates: States[] = [{
      ID: 1,
      Name: 'Alabama',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 2,
      Name: 'Alaska',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 3,
      Name: 'Arizona',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 4,
      Name: 'Arkansas',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 5,
      Name: 'California',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 6,
      Name: 'Colorado',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 7,
      Name: 'Connecticut',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 8,
      Name: 'Delaware',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 9,
      Name: 'District of Columbia',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 10,
      Name: 'Florida',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 11,
      Name: 'Georgia',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 12,
      Name: 'Hawaii',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 13,
      Name: 'Idaho',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 14,
      Name: 'Illinois',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 15,
      Name: 'Indiana',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 16,
      Name: 'Iowa',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 17,
      Name: 'Kansas',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 18,
      Name: 'Kentucky',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 19,
      Name: 'Louisiana',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 20,
      Name: 'Maine',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 21,
      Name: 'Maryland',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 22,
      Name: 'Massachusetts',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 23,
      Name: 'Michigan',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 24,
      Name: 'Minnesota',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 25,
      Name: 'Mississippi',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 26,
      Name: 'Missouri',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 27,
      Name: 'Montana',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 28,
      Name: 'Nebraska',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 29,
      Name: 'Nevada',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 30,
      Name: 'New Hampshire',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 31,
      Name: 'New Jersey',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 32,
      Name: 'New Mexico',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 33,
      Name: 'New York',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 34,
      Name: 'North Carolina',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 35,
      Name: 'North Dakota',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 36,
      Name: 'Ohio',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 37,
      Name: 'Oklahoma',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 38,
      Name: 'Oregon',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 39,
      Name: 'Pennsylvania',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 40,
      Name: 'Rhode Island',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 41,
      Name: 'South Carolina',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 42,
      Name: 'South Dakota',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 43,
      Name: 'Tennessee',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 44,
      Name: 'Texas',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 45,
      Name: 'Utah',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 46,
      Name: 'Vermont',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 47,
      Name: 'Virginia',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 48,
      Name: 'Washington',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 49,
      Name: 'West Virginia',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 50,
      Name: 'Wisconsin',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }, {
      ID: 51,
      Name: 'Wyoming',
      StateCompliancePoster: { ID: '1', Text: 'Poster' }
    }];

    const header: Header = {
      clientCompanyLogo: '/assets/images/brand/levatas-logo-small.png',
      menuOptions: [
        {
          text: 'Dashboard',
          link: 'dashboard',
          active: true
        },
        {
          text: 'Profile',
          link: 'profile'
        },
        {
          text: 'Benefits',
          link: 'benefits'
        },
        {
          text: 'Compensation',
          link: 'compensation'
        },
        {
          text: 'Human Resources',
          link: 'human-resources'
        },
        {
          text: 'Perks & Discounts',
          link: 'perks-discounts'
        }
      ],
      profileOptions: [
        {
          text: 'My Profile',
          link: '/employee/profile'
        },
        {
          text: 'Switch to Client',
          link: '/client/dashboard'
        }
      ]
    };

    const header_client: Header = {
      showResponsiveLogo: false,
      showResponsiveHorizontalMenu: true,
      companies: [
        {
          text: 'Spectrum Digital Inc.',
          id: 0,
          states: USStates.filter(x => x.ID === 34 || x.ID === 2),
          stateComplianceDocumentRepo: {
            stateCollection: [
              {
                state: USStates.filter(x => x.ID === 34)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              },
              {
                state: USStates.filter(x => x.ID === 2)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              }
            ]
          },
          hrCardsAvailable: [
            {
              hrCardName: 'elearning',
              hrCardStatus: true
            },
            {
              hrCardName: 'Recruitment',
              hrCardStatus: true
            }
          ]
        },
        {
          text: 'Microsoft Corporation',
          id: 1,
          states: USStates.filter(x => x.ID === 10 || x.ID === 11),
          stateComplianceDocumentRepo: {
            stateCollection: [
              {
                state: USStates.filter(x => x.ID === 10)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              },
              {
                state: USStates.filter(x => x.ID === 11)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              }
            ]
          },
          hrCardsAvailable: [
            {
              hrCardName: 'elearning',
              hrCardStatus: false
            },
            {
              hrCardName: 'Recruitment',
              hrCardStatus: true
            }
          ]
        },
        {
          text: 'Oracle Corporation',
          id: 2,
          states: USStates.filter(x => x.ID === 14 || x.ID === 17),
          stateComplianceDocumentRepo: {
            stateCollection: [
              {
                state: USStates.filter(x => x.ID === 14)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              },
              {
                state: USStates.filter(x => x.ID === 17)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              }
            ]
          },
          hrCardsAvailable: [
            {
              hrCardName: 'elearning',
              hrCardStatus: false
            },
            {
              hrCardName: 'Recruitment',
              hrCardStatus: false
            }
          ]

        },
        {
          text: 'Alphabet Inc.',
          id: 3,
          states: USStates.filter(x => x.ID === 19 || x.ID === 29),
          stateComplianceDocumentRepo: {
            stateCollection: [
              {
                state: USStates.filter(x => x.ID === 19)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              },
              {
                state: USStates.filter(x => x.ID === 29)[0],
                forms: supplementalForms.slice(Math.floor(Math.random() * supplementalForms.length))
              }
            ]
          },
          hrCardsAvailable: [
            {
              hrCardName: 'elearning',
              hrCardStatus: true
            },
            {
              hrCardName: 'Recruitment',
              hrCardStatus: true
            }
          ]
        }
      ],
      menuOptions: [
        {
          text: 'Dashboard',
          link: 'dashboard',
          active: true,
        },
        {
          text: 'Employees',
          link: 'employees'
        },
        {
          text: 'Payroll',
          link: 'payroll'
        },
        {
          text: 'Human Resources',
          link: 'hr-resources'
        },
        {
          text: 'Benefits',
          link: 'benefits'
        },
        {
          text: 'Workers\' Comp',
          link: 'workers-comp-and-safety'
        },
        {
          text: 'Reports',
          link: 'reports'
        },
        {
          text: 'Setup',
          link: 'setup'
        },
        {
          text: 'Getting Started',
          link: 'onboarding',
          enableOnFirstTimeLoging: true,
          visibleOnlyOnFirstTimeLoging: true
        },
        // {
        //   text: 'Projects',
        //   link: 'projects',
        //   visibleOnlyAfterFirstTimeLoging: true
        // },
        {
          text: 'BizVault',
          link: 'bizvault'
        },
        {
          text: 'Support',
          link: 'support',
          enableOnFirstTimeLoging: true
        },
        // {
        //   text: 'Requirements',
        //   link: 'requirements'
        // }
      ],
      profileOptions: [
        {
          text: 'Switch to Employee',
          link: '/employee/dashboard'
        }
      ]
    };

    const offer: OfferDetail = {
      detail: `You can get up to 20% discount on your AT&T monthly bill. Sign up today!.`,
      link: '/discounts/1'
    };

    const paySummary: PaySummary[] = [
      {
        id: 'PS001',
        amount: 3847,
        date: 'Jan 15, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS002',
        amount: 2015.68,
        date: 'Jan 1, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS003',
        amount: 1000.85,
        date: 'Dec 15, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS004',
        amount: 3698.21,
        date: 'Jan 15, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS005',
        amount: 1001,
        date: 'Jan 1, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS006',
        amount: 5500,
        date: 'Dec 15, 2017',
        link: 'https://www.google.com'
      },
      {
        id: 'PS007',
        amount: 1245.35,
        date: 'Dec 15, 2018',
        link: 'https://www.google.com'
      }
    ];

    const leaveTracker: LeaveTracker[] = [
      {
        ptoType: 'Vacation',
        remaining: 7,
        used: 3
      },
      {
        ptoType: 'Personal',
        remaining: 2,
        used: 2
      },
      {
        ptoType: 'Sick',
        remaining: 3,
        used: 2
      }
    ];
    const my401kData: EmployeeContribution[] = [
      {
        month: 'NOV',
        balance: 20,
        employerMatch: 30,
        employeeContribution: 40
      },
      {
        month: 'DEC',
        balance: 40,
        employerMatch: 60,
        employeeContribution: 80
      },
      {
        month: 'JAN',
        balance: 60,
        employerMatch: 80,
        employeeContribution: 100
      },
      {
        month: 'FEB',
        balance: 80,
        employerMatch: 100,
        employeeContribution: 120
      }
    ];

    const newsModal: NewsModal[] = [
      {
        title: `Request for Information (RFI), Defining and Delimiting the Exemptions for Executive, Administrative,
         Professional, Outside Sales and Computer Employees`,
        body: `The U.S. Department of Labor announced on July 25, 2017 , that it will publish a Request for Information (RFI),
        Defining and Delimiting the Exemptions for Executive, Administrative, Professional, Outside Sales and Computer Employees.
        The RFI offers the public the opportunity to provide information that will aid the Department
         in formulating a proposal to revise these regulations.
         The RFI solicits feedback on questions related to the salary level test, the duties test,
         inclusion of non-discretionary bonuses and incentive payments to satisfy a portion of the salary level,
          the salary test for highly compensated employees and automatic updating of the salary level tests.
         The 60-day comment period for all issues raised in the RFI ends on September 25, 2017.
        The public may submit comments according to the instructions listed in the RFI as published in the Federal Register.`,
        visibleOnDashboard: true,
        anchorID: 'news1'
      },
      {
        title: `Check out the new Updated Form I-9`,
        body: `USCIS released the latest Form I-9, Employment Eligibility Verification, on July 17, 2017.
         Employers are able to use this revised version or continue using Form I-9 with a revision date of 11/14/16 N
         through September 17, 2017. On September 18, 2017, employers must use the revised form with a revision date of 07/17/17 N.
         Oasis will no longer accept the expired version as of that date.
         Employers must continue following existing storage and retention rules for any previously completed Form I-9s.`,
        visibleOnDashboard: true,
        anchorID: 'news2'
      },
      {
        title: `8 Workplace Legal Trends for 2018`,
        body: `Legal protections for employees are likely to expand at the state level in 2018 but shrink under federal law, employment law attorneys say. At the federal level, 
        expect a more employer-friendly Department of Labor (DOL), a new proposed overtime rule and greater deference by the National Labor Relations Board (NLRB) to employee handbook policies. 
        But retaliation claims will continue to be prevalent. At the state level, more sexual harassment training laws and pay equity legislation may be passed,
        as well as laws legalizing marijuana use and requiring paid leave.`,
        visibleOnDashboard: true,
        anchorID: 'news3'

      },
      {
        title: `Why Trust Matters at Work`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        visibleOnDashboard: true,
        anchorID: 'news18'
      }
    ];

    const newsEmployeeModal: NewsModal[] = [
      {
        title: `1914 translation by H. Rackham`,
        body: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
        I will give you a complete account of the system,
        and expound the actual teachings of the great explorer of the truth,
        the master-builder of human happiness. No one rejects, dislikes,
        or avoids pleasure itself, because it is pleasure, but because those who do not know
        how to pursue pleasure rationally encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
        because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
        To take a trivial example, which of us ever undertakes laborious physical exercise,
        except to obtain some advantage from it? But who has any right to
        find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
        or one who avoids a pain that produces no resultant pleasure?`,
        visibleOnDashboard: true,
        anchorID: 'news19'
      },
      {
        title: `Check out the new Updated Form I-9`,
        body: `USCIS released the latest Form I-9, Employment Eligibility Verification, on July 17, 2017.
         Employers are able to use this revised version or continue using Form I-9 with a revision date of 11/14/16 N
         through September 17, 2017. On September 18, 2017, employers must use the revised form with a revision date of 07/17/17 N.
         Oasis will no longer accept the expired version as of that date.
         Employers must continue following existing storage and retention rules for any previously completed Form I-9s.`,
        visibleOnDashboard: true,
        anchorID: 'news20'
      },
      {
        title: `1914 translation by H. Rackham`,
        body: `On the other hand, we denounce with righteous indignation and dislike men
        who are so beguiled and demoralized by the charms of pleasure of the moment,
        so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;
        and equal blame belongs to those who fail in their duty through weakness of will,
        which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour,
        when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided.
        But in certain circumstances and owing to the claims of duty or the obligations of business
        it will frequently occur that pleasures have to be repudiated and annoyances accepted.
        The wise man therefore always holds in these matters to this principle of selection:
        he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`,
        visibleOnDashboard: true,
        anchorID: 'news21'

      },
      {
        title: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form`,
        body: `There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet.
        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
        to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
        injected humour, or non-characteristic words etc.`,
        visibleOnDashboard: true,
        anchorID: 'news22'
      }
    ];

    const myTasks: Tasks[] = [
      {
        taskId: 'task1',
        taskDescription: 'Vivamus tincidunt eleifend',
        taskStatus: 'active',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task2',
        taskDescription: 'Nulla ut turpis accumsan nunc tempus aenean vestibulum fermentum pretium',
        taskStatus: 'active',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task3',
        taskDescription: 'Nunc libero libero porta vel dolor suscipit sed gravida vitae augue quis dictum',
        taskStatus: 'active',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task4',
        taskDescription: 'Eincidunt vivamus eleifend purus pharetra',
        taskStatus: 'completed',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task5',
        taskDescription: 'lorem lorem texasajnms asjkansu',
        taskStatus: 'deleted',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task6',
        taskDescription: 'Consequat quis dolore est nostrud laboris occaecat deserunt officia sit pariatur exercitation laboris.',
        taskStatus: 'active',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task7',
        taskDescription: 'Consequat cupidatat officia pariatur eu anim excepteur tempor sit.',
        taskStatus: 'active',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task8',
        taskDescription: 'Elit non sit aute veniam ex veniam velit irure eiusmod occaecat ullamco minim Lorem.',
        taskStatus: 'completed',
        url: '/navigate-to-task'
      },
      {
        taskId: 'task9',
        taskDescription: 'Consectetur in amet ut laboris consectetur.',
        taskStatus: 'deleted',
        url: '/navigate-to-task'
      },
    ];

    const dashboardContacts: DashboardContact[] = [
      {
        firstName: 'Teresa',
        lastName: 'Benson',
        title: 'Payroll Account Manager',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'Lillian',
        lastName: 'Fox',
        title: 'Relationship Manager',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'Richard',
        lastName: 'Delaney',
        title: 'Cattle Management Expert',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'Ravi',
        lastName: 'Pinnisetty',
        title: 'Culinary Overseer',
        phone: '(123) 456-7890',
      },
    ];

    const dashboardContactsEmployee: DashboardContact[] = [
      {
        firstName: 'Michelle',
        lastName: 'Benson',
        title: 'Payroll Account Manager',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'George',
        lastName: 'Fox',
        title: 'Relationship Manager',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'Willians',
        lastName: 'Delaney',
        title: 'Cattle Management Expert',
        phone: '(123) 456-7890',
      },
      {
        firstName: 'Andrea',
        lastName: 'Pinnisetty',
        title: 'Culinary Overseer',
        phone: '(123) 456-7890',
      },
    ];

    const dashboardSlides = [
      {
        alt: 'Random first slide',
        title: 'Take advantage of discounts from Oasis partners.',
        actionText: 'See All Discounts',
        actionUrl: '/client/discounts',
        imgUrl: '../../assets/images/adds-carousel/dashboardDiscounts.png'
      },
      {
        alt: 'Random second slide',
        title: 'Refer a new client to Oasis and you can earn up to $10,000! Make a Referral Today',
        actionText: 'Go To',
        actionUrl: 'http://www.oasisadvantage.com/Client-Referral-Form?cpn=70136000001EIXw ',
        imgUrl: '../../assets/images/adds-carousel/dashboardReferrals.png'
      },
      {
        alt: 'Random third slide',
        title: 'Check out key products and services to help you grow your business! See Products and Services',
        actionText: 'Go To BizVault',
        actionUrl: '/client/bizvault',
        imgUrl: '../../assets/images/adds-carousel/dashboardGrowYouBusiness.png'
      }
    ];

    const dashboardSlidesEmployee = [
      {
        alt: 'Random first slide employee',
        title: 'Take employee advantage of discounts from Oasis partners.',
        actionText: 'See All Discounts',
        actionUrl: '/employee/perks-discounts',
        imgUrl: '../../assets/images/adds-carousel/dashboardDiscounts.png'
      },
      {
        alt: 'Random second slide employee',
        title: 'Refer a new employee to Oasis and you can earn up to $10,000! Make a Referral Today',
        actionText: 'Go To',
        actionUrl: '/employee/benefits',
        imgUrl: '../../assets/images/adds-carousel/dashboardReferrals.png'
      },
      {
        alt: 'Random third slide employee',
        title: 'Check out employees and services to help you grow your business! See Products and Services',
        actionText: 'Go To BizVault',
        actionUrl: '/employee/compensation',
        imgUrl: '../../assets/images/adds-carousel/dashboardGrowYouBusiness.png'
      }
    ];

    const subnavForReports: SubnavMenu = {
      subMenuOptions: [
        {
          label: 'Favorites',
          route: 'reports-favorites'
        },
        {
          label: 'Oasis',
          route: 'reports-oasis'
        },
        {
          label: 'Browse',
          route: 'reports-listing'
        },
        {
          label: 'Report Creator',
          route: 'report-creator'
        }
      ]
    };

    const subnavForCompensation: SubnavMenu = {
      subMenuOptions: [
        {
          label: 'Earnings Summary',
          route: 'earnings-summary'
        },
        {
          label: 'Deduction Detail',
          route: 'deduction-detail'
        },
        {
          label: 'Earnings Detail',
          route: 'earnings-detail'
        },
        {
          label: 'Tax',
          route: 'tax'
        }
      ]
    };

    const subnav: SubnavMenu = {
      subMenuOptions: [
        {
          label: 'Worksite Update',
          route: 'worksite-update'
        },
        {
          label: 'Divisions',
          route: 'divisions'
        },
        {
          label: 'Departments',
          route: 'departments'
        },
        {
          label: 'Project',
          route: 'projects'
        },
        {
          label: 'Jobs',
          route: 'job-codes'
        },
        {
          label: 'General Ledger',
          route: 'general-ledger'
        },
        {
          label: 'Events',
          route: 'events'
        },
        {
          label: 'Skill Maintenance',
          route: 'skill-maintenance'
        }
      ]
    };

    const clientEmployeesList: ClientEmployees[] = [
      {
        id: 'Z58491',
        firstName: 'Constantine',
        lastName: 'Harveyjacksmith',
        nickName: 'Tiny',
        title: 'UX Designer',
        department: 'Strategy',
        empType: 'Full Time',
        empStatus: 'Active',
        clientId: 114,
        externalEmployeeId: '7058BAD5',
        ssn: '123456789',
        dob: new Date('04/01/1975'),
        primaryPhone: '7271234567',
        secondaryPhone: null,
        emailAddress: 'test@test.com',
        maritalStatus: {
          id: 1,
          name: 'Single'
        },
        ethnicity: {
          id: 1,
          name: 'American'
        },
        gender: {
          id: 1,
          name: 'Male'
        },
        homeAddress: {
          address1: '123 Anywhere Lane',
          address2: null,
          unitNumber: null,
          city: 'Gotham',
          state: {
            'ID': 33,
            'Name': 'New York'
          },
          zip: '10012'
        },
        mailingAddress: {
          address1: '123 Anywhere Lane',
          address2: null,
          unitNumber: null,
          city: 'Gotham',
          state: {
            'ID': 33,
            'Name': 'New York'
          },
          zip: '10012',
          isSameAsHomeAddress: true
        },
        w2Address: {
          address1: '123 Anywhere Lane',
          address2: null,
          unitNumber: null,
          city: 'Gotham',
          state: {
            'ID': 33,
            'Name': 'New York'
          },
          zip: '10012',
          isSameAsHomeAddress: false
        },
        emergencyContact: <IEmergencyContact>{}
      }
      // {
      //   id: '2',
      //   firstName: 'Mollie',
      //   lastName: 'Mendoza',
      //   nickName: 'The Muscle',
      //   title: 'Product Owner',
      //   department: 'Strategy',
      //   empType: 'Contractor',
      //   empStatus: 'Active',
      //   clientId: 114,
      //   externalEmployeeId: '6279A5C8',
      //   ssn: '987654123',
      //   dob: new Date('01/01/1985'),
      //   maritalStatus: {
      //     id: 2,
      //     name: 'Married'
      //   },
      //   ethnicity: {
      //     id: 2,
      //     name: 'Mexican'
      //   },
      //   gender: {
      //     id: 2,
      //     name: 'Female'
      //   },
      //   homeAddress: <IAddress>{},
      //   mailingAddress: {
      //     addressLine1: '123123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   w2Address: {
      //     addressLine1: '80890 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   emergencyContact: <IEmergencyContact>{}
      // },
      // {
      //   id: '3',
      //   firstName: 'Curtis',
      //   lastName: 'Lamb',
      //   nickName: 'Pound Cake',
      //   title: 'UI Designer',
      //   department: 'Design',
      //   empType: 'Full Time',
      //   empStatus: 'Active',
      //   clientId: 114,
      //   externalEmployeeId: 'D9814CD4',
      //   ssn: '159753123',
      //   dob: new Date('08/01/1985'),
      //   maritalStatus: {
      //     id: 2,
      //     name: 'Married'
      //   },
      //   ethnicity: {
      //     id: 1,
      //     name: 'American'
      //   },
      //   gender: {
      //     id: 1,
      //     name: 'Male'
      //   },
      //   homeAddress: {
      //     addressLine1: '123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012'
      //   },
      //   mailingAddress: {
      //     addressLine1: '123123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   w2Address: {
      //     addressLine1: '80890 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   emergencyContact: <IEmergencyContact>{}
      // },
      // {
      //   id: '4',
      //   firstName: 'Lydia',
      //   lastName: 'Osborne',
      //   title: 'Accountant',
      //   department: 'BF',
      //   empType: 'Full Time',
      //   empStatus: 'Active',
      //   clientId: 114,
      //   externalEmployeeId: 'D7D8ACEB',
      //   ssn: '852741963',
      //   dob: new Date('07/25/1968'),
      //   maritalStatus: {
      //     id: 1,
      //     name: 'Single'
      //   },
      //   ethnicity: {
      //     id: 3,
      //     name: 'Australian'
      //   },
      //   gender: {
      //     id: 2,
      //     name: 'Female'
      //   },
      //   homeAddress: {
      //     addressLine1: '123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012'
      //   },
      //   mailingAddress: {
      //     addressLine1: '123123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   w2Address: {
      //     addressLine1: '80890 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   emergencyContact: <IEmergencyContact>{}
      // },
      // {
      //   id: '5',
      //   firstName: 'Lester',
      //   lastName: 'Figueroa',
      //   nickName: 'El Chapo',
      //   title: 'UI Designer',
      //   department: 'Design',
      //   empType: 'Full Time',
      //   empStatus: 'Active',
      //   clientId: 114,
      //   externalEmployeeId: '7E09E60B',
      //   ssn: '495268855',
      //   dob: new Date('07/08/1970'),
      //   maritalStatus: {
      //     id: 4,
      //     name: 'Divorced'
      //   },
      //   ethnicity: {
      //     id: 1,
      //     name: 'American'
      //   },
      //   gender: {
      //     id: 1,
      //     name: 'Male'
      //   },
      //   homeAddress: {
      //     addressLine1: '123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012'
      //   },
      //   mailingAddress: {
      //     addressLine1: '123123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   w2Address: {
      //     addressLine1: '80890 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   emergencyContact: <IEmergencyContact>{}
      // },
      // {
      //   id: '6',
      //   firstName: 'Jared',
      //   lastName: 'Keller',
      //   nickName: 'Man Man',
      //   title: 'Product Owner',
      //   department: 'Strategy',
      //   empType: 'Full Time',
      //   empStatus: 'Active',
      //   clientId: 114,
      //   externalEmployeeId: '7E09E60B',
      //   ssn: '654987123',
      //   dob: new Date('07/08/1970'),
      //   maritalStatus: {
      //     id: 1,
      //     name: 'Single'
      //   },
      //   ethnicity: {
      //     id: 2,
      //     name: 'Mexican'
      //   },
      //   gender: {
      //     id: 1,
      //     name: 'Male'
      //   },
      //   homeAddress: {
      //     addressLine1: '123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012'
      //   },
      //   mailingAddress: {
      //     addressLine1: '123123 Anywhere Lane',
      //     addressLine2: null,
      //     unitNumber: null,
      //     city: 'Gotham',
      //     state: {
      //       'ID': 33,
      //       'Name': 'New York'
      //     },
      //     zipCode: '10012',
      //     isSameAsHomeAddress: false
      //   },
      //   w2Address: <IAddress>{},
      //   emergencyContact: <IEmergencyContact>{}
      // }
    ];

    const clientContacts: ClientContacts[] = [
      {
        contactId: 'primary',
        contactType: 'Primary',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'payroll',
        contactType: 'Payroll',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'humanResource',
        contactType: 'Human Resource',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'secondary',
        contactType: 'Secondary',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'benefits',
        contactType: 'Benefits',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'safetyWCClaims',
        contactType: 'Safety and W/C Claims',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'cfoAcct',
        contactType: 'CFO/Acct',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'c_401k',
        contactType: '401(k)',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'John',
          lastName: 'Doe',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      },
      {
        contactId: 'survery',
        contactType: 'Survey',
        sameAsPrimary: true,
        contactDetail: {
          firstName: 'David',
          lastName: 'Ben',
          title: 'CEO',
          email: 'jdoe@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-789-7890'
        }
      }
    ];

    const ClientEmployeePayrollLoansList: IClientEmployeePayrollLoan[] = [
      {
        id: 1,
        date: new Date('04/01/2018'),
        datePicker: null,
        startDate: new Date('05/01/2018'),
        startDatePicker: null,
        stopDate: new Date('05/30/2019'),
        stopDatePicker: null,
        amount: 1000.01,
        payAmount: 100.00,
        paybackAmount: 200.00,
        repaidAmount: 300.00,

        reason: 'College Tuition',
        status: {
          id: 1,
          name: 'Active'
        },
        frequency: {
          id: 1,
          name: 'Period'
        }
      },
      {
        id: 2,
        date: new Date('04/01/2018'),
        datePicker: null,
        startDate: new Date('04/01/2018'),
        startDatePicker: null,
        stopDate: new Date('04/30/2019'),
        stopDatePicker: null,
        amount: 2000.00,
        payAmount: 500.00,
        paybackAmount: 600.00,
        repaidAmount: 700.00,
        reason: 'Mortgage Payments',
        status: {
          id: 2,
          name: 'Inactive'
        },
        frequency: {
          id: 2,
          name: 'Monthly'
        }
      }];

    const ClientEmployeePayrollLoanStatusList: IClientEmployeePayrollLoanStatus[] = [
      {
        id: 1,
        name: 'Active'
      },
      {
        id: 2,
        name: 'Inactive'
      }];

    const ClientEmployeePayrollLoanReasonList: IClientEmployeePayrollLoanReason[] = [
      {
        id: 1,
        name: 'Reason 1'
      },
      {
        id: 2,
        name: 'Reason 2'
      }];

    const ClientEmployeePayrollLoanPaymentFrequencyList: IClientEmployeePayrollLoanPaymentFrequency[] = [
      {
        id: 1,
        name: 'Period'
      },
      {
        id: 2,
        name: 'Monthly'
      }];

    const ClientEmployeeScheduledPaymentsList: IClientEmployeeScheduledPayments[] = [
      {
        id: 1,
        paymentType: {
          id: 1,
          code: 'PC-1000',
          description: 'PC 1000 Pay Code'
        },
        startDate: new Date('04/01/2018'),
        startDatePicker: null,
        stopDate: new Date('05/30/2019'),
        stopDatePicker: null,
        amount: 1000.01,
        deductionPeriod: [
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 4, name: '4' }
        ],
        status: {
          id: 1,
          name: 'Active'
        }
      },
      {
        id: 2,
        paymentType: {
          id: 2,
          code: 'PC-1001',
          description: '1PC 1000 Pay Code'
        },
        startDate: new Date('04/01/2018'),
        startDatePicker: null,
        stopDate: new Date('04/30/2019'),
        stopDatePicker: null,
        amount: 2000.00,
        deductionPeriod: [
          { id: 1, name: '1' },
          { id: 3, name: '3' },
          { id: 5, name: '5' }
        ],
        status: {
          id: 2,
          name: 'Inactive'
        }
      }];

    const ClientEmployeeScheduledPaymentsStatusList: IClientEmployeeScheduledPaymentsStatus[] = [
      {
        id: 1,
        name: 'Active'
      },
      {
        id: 2,
        name: 'Inactive'
      },
      {
        id: 3,
        name: 'One-Time'
      }
    ];

    const ClientEmployeeScheduledPaymentsPayCodesList: IClientEmployeeScheduledPaymentsType[] = [
      {
        id: 1,
        code: 'PC-1000',
        description: 'PC 1000 Pay Code'
      },
      {
        id: 2,
        code: 'PC-1001',
        description: 'PC 1001 Pay Code'
      }];


    const ClientEmployeeRecurringDeductionsList: IClientEmployeeRecurringDeduction[] = [
      {
        id: 1,
        deductionType: {
          id: 1,
          code: 'UNIFORM',
          name: 'UNIFORM DEDUCTION'
        },
        amount: 15,
        periods: [
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 4, name: '4' }
        ],
        hasDetails: true,
        limit: 2,
        maximum: 4,
        basis: {
          id: 1,
          name: 'M-Monthly'
        },
        trackArrears: true,
        startDate: new Date('05/01/2018'),
        startDatePicker: null,
        endDate: new Date('05/30/2019'),
        endDatePicker: null,
        GLOverrideAccount: '1234'
      },
      {
        id: 2,
        deductionType: {
          id: 2,
          code: 'BADGE',
          name: 'BADGE DEDUCTION'
        },
        amount: 22,
        periods: [
          { id: 1, name: '1' },
          { id: 2, name: '2' }
        ],
        hasDetails: false,
        limit: 1,
        maximum: 2,
        basis: {
          id: 1,
          name: 'Y-Yearly'
        },
        trackArrears: false,
        startDate: new Date('06/01/2018'),
        startDatePicker: null,
        endDate: new Date('06/30/2019'),
        endDatePicker: null,
        GLOverrideAccount: '78975464564564'
      }];

    const ClientEmployeeRecurringDeductionFrequencyList: IClientEmployeeRecurringDeductionFrequency[] = [
      {
        id: 1,
        name: 'M-Monthly'
      },
      {
        id: 2,
        name: 'Q-Quarterly'
      },
      {
        id: 3,
        name: 'Y-Yearly'
      }];

    const ClientEmployeeRecurringDeductionTypeList: IClientEmployeeRecurringDeductionType[] = [
      {
        id: 1,
        code: 'UNIFORM',
        name: 'UNIFORM DEDUCTION'
      },
      {
        id: 2,
        code: 'BADGE',
        name: 'BADGE DEDUCTION'
      }];

    const ClientEmployeeRecurringDeductionPeriodList: IClientEmployeeRecurringDeductionPeriod[] = [
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      }];

    const GenderList: IGender[] = [
      {
        id: 1,
        name: 'Male'
      },
      {
        id: 2,
        name: 'Female'
      }];

    const MaritalStatusList: IMaritalStatus[] = [
      {
        id: 1,
        name: 'Single'
      },
      {
        id: 2,
        name: 'Married'
      },
      {
        id: 3,
        name: 'Separated'
      },
      {
        id: 4,
        name: 'Divorced'
      },
      {
        id: 5,
        name: 'Widow'
      }];

    const ClientEmployeePTO: IClientEmployeePTO[] =
      [{
        // id: 1,
        ptoType: 'Sick',
        // ptoData: [{
        carryOverExpiresDate: '123',
        ptoDescription: 'Testing',
        yearEndDate: '02/29/2019',
        carryOver: '160.00',
        hoursAccrued: '0.88',
        hoursTaken: '40.00',
        hoursAvailable: '120.88',
        accruedThruDate: '03/02/2018'
        //  }]
      }];

    const ClientEmployeePTOSummary: IClientEmployeePTOSummary[] = [
      {
        referenceNumber: '1000',
        effectiveDate: '10/10/2010',
        absenceCode: 'Sick',
        absenceDescription: 'Sick',
        hoursAbsent: '0.00',
        hoursAccrued: '48.00',
        hoursCarriedOver: '0.00',
        comment: 'VOUCHER #31923'
      },
      // {
      //   reference: '1001',
      //   date: '10/10/2010',
      //   code: 'Sick',
      //   description: 'Sick',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #31923'
      // },
      // {
      //   reference: '1002',
      //   date: '10/15/2010',
      //   code: 'Sick',
      //   description: 'Sick',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #31999'
      // },
      // {
      //   reference: '1003',
      //   date: '10/31/2010',
      //   code: 'Sick',
      //   description: 'Sick',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #31723'
      // },
      // {
      //   reference: '1004',
      //   date: '11/15/2010',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #222888'
      // },
      // {
      //   reference: '1005',
      //   date: '11/31/2010',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #222999'
      // },
      // {
      //   reference: '1006',
      //   date: '12/12/2010',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #111999'
      // },
      // {
      //   reference: '1007',
      //   date: '12/21/2010',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #111666'
      // },
      // {
      //   reference: '1008',
      //   date: '12/31/2010',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #111555'
      // },
      // {
      //   reference: '1009',
      //   date: '01/15/2011',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #909090'
      // },
      // {
      //   reference: '1010',
      //   date: '01/31/2011',
      //   code: 'Vacation',
      //   description: 'Vacation',
      //   hoursAbsent: '0.00',
      //   hoursAccrued: '48.00',
      //   hoursCarriedOver: '0.00',
      //   comment: 'VOUCHER #808080'
      // }
    ];

    const EthnicityList: IEthnicity[] = [
      {
        id: 1,
        name: 'American'
      },
      {
        id: 2,
        name: 'Mexican'
      },
      {
        id: 3,
        name: 'Australian'
      },
      {
        id: 4,
        name: 'Martian'
      }];

    const InterRelationshipList: IInterRelationship[] = [
      {
        id: 1,
        name: 'Mother'
      },
      {
        id: 2,
        name: 'Father'
      },
      {
        id: 3,
        name: 'Brother'
      },
      {
        id: 4,
        name: 'Sister'
      },
      {
        id: 5,
        name: 'Cousin'
      },
      {
        id: 6,
        name: 'Uncle'
      },
      {
        id: 7,
        name: 'Aunt'
      },
      {
        id: 8,
        name: 'Grandmother'
      },
      {
        id: 9,
        name: 'Grandfather'
      },
      {
        id: 10,
        name: 'Friend'
      },
      {
        id: 11,
        name: 'Colleague'
      }];

    const ClientEmployee401kSummary: Employee401k[] = [
      //   {
      //   empID: 1,
      //   empName: 'Employee 1',
      //   base401kEarnings: 1,
      //   eeContributionPreTax: 1,
      //   eeContributionPostTax: 1,
      //   empNonElectedContributions: 1,
      //   rothDeduction: 1,
      //   rothCatchUp: 1,
      //   catchUpContribution: 1,
      //   emp401kLoanPayments: 1,
      //   employerMatchContribution: 1,
      //   peoMatchContribution: 1
      // },
      // {
      //   empID: 2,
      //   empName: 'Employee 2',
      //   base401kEarnings: 2,
      //   eeContributionPreTax: 2,
      //   eeContributionPostTax: 2,
      //   empNonElectedContributions: 2,
      //   rothDeduction: 2,
      //   rothCatchUp: 2,
      //   catchUpContribution: 2,
      //   emp401kLoanPayments: 2,
      //   employerMatchContribution: 2,
      //   peoMatchContribution: 2
      //   },
      //   {
      //   empID: 3,
      //   empName: 'Employee 3',
      //   base401kEarnings: 3,
      //   eeContributionPreTax: 3,
      //   eeContributionPostTax: 3,
      //   empNonElectedContributions: 3,
      //   rothDeduction: 3,
      //   rothCatchUp: 3,
      //   catchUpContribution: 3,
      //   emp401kLoanPayments: 3,
      //   employerMatchContribution: 3,
      //   peoMatchContribution: 3
      // },
      // {
      //   empID: 4,
      //   empName: 'Employee 4',
      //   base401kEarnings: 4,
      //   eeContributionPreTax: 4,
      //   eeContributionPostTax: 4,
      //   empNonElectedContributions: 4,
      //   rothDeduction: 4,
      //   rothCatchUp: 4,
      //   catchUpContribution: 4,
      //   emp401kLoanPayments: 4,
      //   employerMatchContribution: 4,
      //   peoMatchContribution: 4
      //   },
      //   {
      //   empID: 5,
      //   empName: 'Employee 5',
      //   base401kEarnings: 5,
      //   eeContributionPreTax: 5,
      //   eeContributionPostTax: 5,
      //   empNonElectedContributions: 5,
      //   rothDeduction: 5,
      //   rothCatchUp: 5,
      //   catchUpContribution: 5,
      //   emp401kLoanPayments: 5,
      //   employerMatchContribution: 5,
      //   peoMatchContribution: 5
      // },
      // {
      //   empID: 6,
      //   empName: 'Employee 6',
      //   base401kEarnings: 6,
      //   eeContributionPreTax: 6,
      //   eeContributionPostTax: 6,
      //   empNonElectedContributions: 6,
      //   rothDeduction: 6,
      //   rothCatchUp: 6,
      //   catchUpContribution: 6,
      //   emp401kLoanPayments: 6,
      //   employerMatchContribution: 6,
      //   peoMatchContribution: 6
      // }
    ];

    const ClientBenefitSummaryReport: ClientBenefitSummary[] = [{
      iD: 'A12345',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'John Smith',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    },
    {
      iD: 'B56789',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'John Doe',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    },
    {
      iD: 'C12345',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'Jane Smith',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    },
    {
      iD: 'D56789',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'Jane Smith',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    },
    {
      iD: 'E12345',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'Jim Smith',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    },
    {
      iD: 'F56789',
      reportDate: new Date('01/01/2018'),
      location: 'WPB',
      name: 'Joe Smith',
      status: 'A',
      ftPT: 'F',
      birthday: new Date('01/01/1980'),
      benClass: '1',
      planType: 'Medical',
      benefitPlan: 'AUSAHLO',
      benefitDescription: 'AETNA HNO OA STANDARD FL',
      coverageCode: 'E0',
      coverageDescription: 'EE ONLY',
      coverageDate: new Date('10/01/2017'),
      checkEEPremium: 6.90,
      checkERPremium: 192.60,
      checkTTIPremium: 199.50,
      monthEEPremium: 13.80,
      monthERPremium: 385.20,
      monthTTIPremium: 399.00
    }];

    const EmployeeReportsPayHistory: EmployeeReportPayHistory[] = [{
      effectiveDate: new Date('05/01/2011'),
      ratePayPer: '10.00 Hour',
      hours: '40.00',
      changePercent: '0.00',
      amount: 0.00,
    }, {
      effectiveDate: new Date('06/01/2013'),
      ratePayPer: '15.00 Hour',
      hours: '40.00',
      changePercent: '50.00',
      amount: 10400.00,
    }, {
      effectiveDate: new Date('01/20/2010'),
      ratePayPer: '18.00 Hour',
      hours: '40.00',
      changePercent: '20.00',
      amount: 6240.00,
    }, {
      effectiveDate: new Date('04/13/2009'),
      ratePayPer: '54.00 Hour',
      hours: '40.00',
      changePercent: '191.89',
      amount: 73840.00,
    }];

    const EmployeeReportsStatusInquiry: EmployeeReportStatusInquiry[] = [{
      date: new Date('05/01/2008'),
      statusCode: 'A',
      statusDesc: 'ACTIVE',
      typeCode: 'F',
      typeDesc: 'FULL TIME'
    }, {
      date: new Date('11/01/2008'),
      statusCode: 'A',
      statusDesc: 'ACTIVE',
      typeCode: 'P',
      typeDesc: 'PART TIME'
    }, {
      date: new Date('06/29/2011'),
      statusCode: 'A',
      statusDesc: 'ACTIVE',
      typeCode: 'F',
      typeDesc: 'FULL TIME'
    }];

    const EmployeeReportsScheduledDeductions: EmployeeReportScheduledDeductions[] = [
      {
        deductionCode: 'LODGINGDED',
        description: 'LODGING DED',
        amount: 320,
        periods: 'O',
        benefitPlan: '',
        limit: 1,
        maximum: null,
        basis: 'M - Monthly',
        trackArrears: 'Y',
        startDate: new Date('01/01/2018'),
        stopDate: new Date('03/01/2018'),
        glOverrideAcct: '01-56550-2401-8'
      },
      {
        deductionCode: 'LODGINGDED',
        description: 'LODGING DED',
        amount: 320,
        periods: 'O',
        benefitPlan: '',
        limit: 1,
        maximum: null,
        basis: 'M - Monthly',
        trackArrears: 'Y',
        startDate: new Date('01/01/2018'),
        stopDate: new Date('03/01/2018'),
        glOverrideAcct: '123456'
      },
      {
        deductionCode: 'DEPOSIT',
        description: 'DEPOSIT',
        amount: 10,
        periods: '1234',
        benefitPlan: '',
        limit: 1,
        maximum: null,
        basis: 'Q - Quarterly',
        trackArrears: 'Y',
      },
      {
        deductionCode: '401K',
        description: '401(K)',
        amount: 100,
        periods: '12345',
        benefitPlan: '',
        maximum: null,
        basis: 'M - Monthly',
        trackArrears: 'Y',
        startDate: new Date('01/01/2018'),
        glOverrideAcct: '123456'
      },
      {
        deductionCode: 'IEMPLOYEE',
        description: 'IEMPLOYEE',
        amount: 0,
        periods: '123',
        benefitPlan: 'TIMEATT',
        maximum: 12,
        basis: 'M - Monthly',
        trackArrears: 'Y',
        startDate: new Date('01/01/2018'),
        glOverrideAcct: '123456'
      },
      {
        deductionCode: 'VIS125',
        description: 'VISION 125',
        amount: 100,
        periods: '12345',
        benefitPlan: 'SUPER',
        maximum: 12,
        basis: 'M - Monthly',
        trackArrears: 'Y',
        startDate: new Date('01/01/2018'),
        glOverrideAcct: '123456'
      }
    ];

    const EmployeeReportsJobHistory: EmployeeReportJobHistory[] = [{
      date: new Date('05/01/2013'),
      jobCode: 'THINKER',
      jobTitle: 'THINKER',
    }, {
      date: new Date('10/28/2015'),
      jobCode: 'LINECOOK',
      jobTitle: '	LINE COOK',
    }, {
      date: new Date('06/11/2017'),
      jobCode: 'ACCOUNTINGCOORDINATOR1',
      jobTitle: 'ACCOUNTING COORDINATOR 1',
    }];

    const CompensationTaxData: CompensationTax[] = [
      {
        id: 1,
        ficaMedicare: 2.2,
        ficaOasdi: 3.1,
        federalIncomeTax: 2.0,
        total: 0
      },
      {
        id: 2,
        ficaMedicare: 2.2,
        ficaOasdi: 3.1,
        federalIncomeTax: 2.0,
        total: 0
      }
    ]

    const CompensationEarningDetailsData: CompensationEarningDetails[] = [
      {
        id: 1,
        tipCreditMakeUp: 5.5,
        tippedHours: 4.6,
        cashTips: 5.5,
        halfTime: 4.2,
        total: 0
      },
      {
        id: 2,
        tipCreditMakeUp: 5.5,
        tippedHours: 4.6,
        cashTips: 5.5,
        halfTime: 4.2,
        total: 0
      }
    ];

    const CompensationDeductionDetailData: ICompensationDeductionDetail[] = [
      {
        id: 1,
        dentalSection: 2.0
      },
      {
        id: 2,
        dentalSection: 3.0
      }
    ];

    const CompensationEarningsSumamry: ICompensationEarningsSummary[] = [
      {
        id: 1,
        earnedIncomeCredit: 1.0,
        expenseReimbursements: 2.0,
        fringeBenefits: 3.0,
        reportedTips: 4.0,
        allocatedTips: 0.0,
        grossEarnings: 0.0,
        payrollDeductions: 0.0,
        federalIncomeTaxes: 0.0,
        socialSecurityTaxes:0.0,
        medicareTaxes: 0.0,
        stateIncomeTaxes: 0.0,
        stateDIUITaxes: 0.0,
        otherStateLocalTaxes: 0.0,
        netEarnings: 0.0
      },
      {
        id: 2,
        earnedIncomeCredit: 0.0,
        expenseReimbursements: 0.0,
        fringeBenefits: 0.0,
        reportedTips: 0.0,
        allocatedTips: 0.0,
        grossEarnings: 0.0,
        payrollDeductions: 0.0,
        federalIncomeTaxes: 0.0,
        socialSecurityTaxes: 0.0,
        medicareTaxes: 0.0,
        stateIncomeTaxes: 0.0,
        stateDIUITaxes: 0.0,
        otherStateLocalTaxes: 0.0,
        netEarnings: 0.0
      },
      {
        id: 3,
        earnedIncomeCredit: 0.0,
        expenseReimbursements: 0.0,
        fringeBenefits: 0.0,
        reportedTips: 0.0,
        allocatedTips: 0.0,
        grossEarnings: 0.0,
        payrollDeductions: 0.0,
        federalIncomeTaxes: 0.0,
        socialSecurityTaxes: 0.0,
        medicareTaxes: 0.0,
        stateIncomeTaxes: 0.0,
        stateDIUITaxes: 0.0,
        otherStateLocalTaxes: 0.0,
        netEarnings: 0.0
      }
    ];

    const Reports401kSummaryReport: ReportsEmployee401kSummary[] = [{
      iD: 'A12345',
      name: 'John Smith',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'B56789',
      name: 'John Doe',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'C12345',
      name: 'Jane Smith',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'D56789',
      name: 'Jane Doe',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'E12345',
      name: 'Jim Smith',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'F56789',
      name: 'Joe Smith',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    }];

    const EmployeeReports401kSummaryReport: ReportsEmployee401kSummary[] = [
      {
      iD: 'A17447',
      name: 'DYLAN ABRAHAMS',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'R98845',
      name: 'KEELEY ABRAMO',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'G85782',
      name: 'ANTON ACOSTA',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'H93637',
      name: 'MARIO AGUILAR',
      year: 2018,
      payDate: new Date('09/07/2018'),
      base401kEarnings: 30000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'A17447',
      name: 'DYLAN ABRAHAMS',
      year: 2017,
      payDate: new Date('09/07/2017'),
      base401kEarnings: 20000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'R98845',
      name: 'KEELEY ABRAMO',
      year: 2017,
      payDate: new Date('09/07/2017'),
      base401kEarnings: 20000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'G85782',
      name: 'ANTON ACOSTA',
      year: 2017,
      payDate: new Date('09/07/2017'),
      base401kEarnings: 20000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'H93637',
      name: 'MARIO AGUILAR',
      year: 2017,
      payDate: new Date('09/07/2017'),
      base401kEarnings: 20000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'A17447',
      name: 'DYLAN ABRAHAMS',
      year: 2016,
      payDate: new Date('09/07/2016'),
      base401kEarnings: 10000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'R98845',
      name: 'KEELEY ABRAMO',
      year: 2016,
      payDate: new Date('09/07/2016'),
      base401kEarnings: 10000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'G85782',
      name: 'ANTON ACOSTA',
      year: 2016,
      payDate: new Date('09/07/2016'),
      base401kEarnings: 10000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
    {
      iD: 'H93637',
      name: 'MARIO AGUILAR',
      year: 2016,
      payDate: new Date('09/07/2016'),
      base401kEarnings: 10000,
      eeContributionPreTax: 800,
      eeContributionPostTax: 0,
      employerNonElectedContrib: 0,
      rothDeduction: 2000,
      rothCatchup: 0,
      catchupContrib: 0,
      loanPayments: 1500,
      employerMatchConditions: 2000,
      peoMatchContributions: 0
    },
  ];

//   const EmployeeReports401kSummaryByDateReport: ReportsEmployee401kSummary[] = [
//     {
//     iD: 'A17447',
//     name: 'DYLAN ABRAHAMS',
//     year: 2018,
//     base401kEarnings: 30000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'R98845',
//     name: 'KEELEY ABRAMO',
//     year: 2018,
//     base401kEarnings: 30000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'G85782',
//     name: 'ANTON ACOSTA',
//     year: 2018,
//     base401kEarnings: 30000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'H93637',
//     name: 'MARIO AGUILAR',
//     year: 2018,
//     base401kEarnings: 30000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'A17447',
//     name: 'DYLAN ABRAHAMS',
//     year: 2017,
//     base401kEarnings: 20000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'R98845',
//     name: 'KEELEY ABRAMO',
//     year: 2017,
//     base401kEarnings: 20000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'G85782',
//     name: 'ANTON ACOSTA',
//     year: 2017,
//     base401kEarnings: 20000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'H93637',
//     name: 'MARIO AGUILAR',
//     year: 2017,
//     base401kEarnings: 20000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'A17447',
//     name: 'DYLAN ABRAHAMS',
//     year: 2016,
//     base401kEarnings: 10000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'R98845',
//     name: 'KEELEY ABRAMO',
//     year: 2016,
//     base401kEarnings: 10000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'G85782',
//     name: 'ANTON ACOSTA',
//     year: 2016,
//     base401kEarnings: 10000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
//   {
//     iD: 'H93637',
//     name: 'MARIO AGUILAR',
//     year: 2016,
//     base401kEarnings: 10000,
//     eeContributionPreTax: 800,
//     eeContributionPostTax: 0,
//     employerNonElectedContrib: 0,
//     rothDeduction: 2000,
//     rothCatchup: 0,
//     catchupContrib: 0,
//     loanPayments: 1500,
//     employerMatchConditions: 2000,
//     peoMatchContributions: 0
//   },
// ];

    const ReportsEmployeeBenefitsRegisterReport: EmployeeBenefitsRegister[] = [{
      iD: 'A12345',
      name: 'John Smith',
      jobTitle: 'Administrator',
      benefitGroup: 1,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E0 Employee',
      empSpouseDepCoverage: 0,
      premiumAmtBilled: 400,
      companyContrib: 350,
      employeeContrib: 50,
      hawaiiPercent: 0
    },
    {
      iD: 'B56789',
      name: 'John Doe',
      jobTitle: 'Manager',
      benefitGroup: 2,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E4 Family',
      empSpouseDepCoverage: 100,
      premiumAmtBilled: 1000,
      companyContrib: 750,
      employeeContrib: 250,
      hawaiiPercent: 0
    },
    {
      iD: 'C12345',
      name: 'Jane Smith',
      jobTitle: 'Administrator',
      benefitGroup: 1,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E0 Employee',
      empSpouseDepCoverage: 0,
      premiumAmtBilled: 400,
      companyContrib: 350,
      employeeContrib: 50,
      hawaiiPercent: 0
    },
    {
      iD: 'D56789',
      name: 'Jane Doe',
      jobTitle: 'Manager',
      benefitGroup: 2,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E1 Employee+Spouse',
      empSpouseDepCoverage: 100,
      premiumAmtBilled: 750,
      companyContrib: 500,
      employeeContrib: 250,
      hawaiiPercent: 0
    },
    {
      iD: 'E12345',
      name: 'Jim Smith',
      jobTitle: 'Administrator',
      benefitGroup: 1,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E0 Employee',
      empSpouseDepCoverage: 0,
      premiumAmtBilled: 400,
      companyContrib: 350,
      employeeContrib: 50,
      hawaiiPercent: 0
    },
    {
      iD: 'F56789',
      name: 'Joe Smith',
      jobTitle: 'Director',
      benefitGroup: 3,
      planId: 'AFLHA',
      status: 'A',
      coverageEffDate: new Date('10/01/2017'),
      planType: 'E4 Family',
      empSpouseDepCoverage: 100,
      premiumAmtBilled: 1000,
      companyContrib: 900,
      employeeContrib: 100,
      hawaiiPercent: 0
    }];

    const EmployeeReportAverageHoursReport: any[] = [
      {
        employeeId: 'A17447',
        lastName: 'DYLAN',
        firstName: 'ABRAHAMS',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate:  '01/01/2018' ,
        payDate: new Date ( '08/03/2018' ),
        weeksWorked: 7,
        hoursWorked: 200,
        averageHours: 29
      }, {
        employeeId: 'R98845',
        lastName: 'KEELEY',
        firstName: 'ABRAMO',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate:  '10/10/2017' ,
        payDate: new Date ( '08/03/2018' ),
        weeksWorked: 25,
        hoursWorked: 560,
        averageHours: 300
      }];

      const ReportsPersonalChangeReport: any[] = [
        {
          name: 'DYLAN ABRAHAMS',
          fieldName: 'Status',
          beforeValue: 1,
          afterValue: 2,
          dateChanged: '9/24/2018',
          empId: 'A17447'
        }, {
          name: 'DYLAN ABRAHAMS',
          fieldName: 'Status',
          beforeValue: 5,
          afterValue: 12,
          dateChanged: '9/24/2018',
          empId: 'A17447'
        }, {
          name: 'KEELEY ABRAMO',
          fieldName: 'Status',
          beforeValue: 10,
          afterValue: 12,
          dateChanged: '9/24/2018',
          empId: 'R98845'
        }
      ];

    const ClientEmployeeHrEventAssignmentList: IClientEmployeeHrEventAssignment[] = [
      {
        id: 1,
        eventType: {
          id: 1,
          code: 'ET-1000',
          description: 'ET 1000 Event Code'
        },
        date: new Date('04/01/2018'),
        datePicker: null,
        nextActionDate: new Date('05/30/2019'),
        nextActionDatePicker: null,
        comment: 'ABC TEST'
      },
      {
        id: 2,
        eventType: {
          id: 1,
          code: 'ET-1001',
          description: 'ET 1001 Event Code'
        },
        date: new Date('04/01/2018'),
        datePicker: null,
        nextActionDate: new Date('05/30/2019'),
        nextActionDatePicker: null,
        comment: 'ABC TEST1'
      },
      {
        id: 3,
        eventType: {
          id: 1,
          code: 'ET-1002',
          description: 'ET 1002 Event Code'
        },
        date: new Date('04/01/2018'),
        datePicker: null,
        nextActionDate: new Date('05/30/2019'),
        nextActionDatePicker: null,
        comment: 'ABC TEST2'
      }];

    const ClientEmployeeHrEventAssignmentEventCodesList: IClientEmployeeHrEventAssignmentType[] = [
      {
        id: 1,
        code: 'ET-1000',
        description: 'PC 1000 Event Code'
      },
      {
        id: 2,
        code: 'ET-1001',
        description: 'PC 1001 Event Code'
      }];

    const ClientEmployeeJobRatesList: IClientEmployeeJobRates[] = [
      {
        id: 1,
        jobType: {
          id: 1,
          code: 'JC-1000',
        },
        standardRate: '10.5522',
        payType: {
          id: 1,
          code: 'PC-1000'
        },
        payRate: '7.65',
        multFactor: '1',
        actualRate: '7.65'
      },
      {
        id: 2,
        jobType: {
          id: 2,
          code: 'JC-1001',
        },
        standardRate: '10.5522',
        payType: {
          id: 2,
          code: 'PC-1001'
        },
        payRate: '7.65',
        multFactor: '1',
        actualRate: '7.65'
      },
      {
        id: 3,
        jobType: {
          id: 3,
          code: 'JC-1002',
        },
        standardRate: '10.5522',
        payType: {
          id: 3,
          code: 'PC-1002'
        },
        payRate: '7.65',
        multFactor: '1',
        actualRate: '7.65'
      }];

    const ClientEmployeeJobRatesJobCodeList: IClientEmployeeJobRatesType[] = [
      {
        id: 1,
        code: 'JC-1000',
      },
      {
        id: 2,
        code: 'JC-1001',
      },
      {
        id: 3,
        code: 'JC-1002',
      }];

    const ClientEmployeeJobRatesPayCodeList: IClientEmployeeJobRatesPayCodeType[] = [
      {
        id: 1,
        code: 'PC-1000'
      },
      {
        id: 2,
        code: 'PC-1001'
      },
      {
        id: 3,
        code: 'PC-1002'
      }];

    const ClientEmployeeSkillCodeAssignmentList: IClientEmployeeSkillCodeAssignment[] = [
      {
        id: 1,
        skillCodeType: {
          id: 1,
          code: 'SC-1000',
          description: 'SC-1000 DESCRIPTION'
        },
        comment: 'ABC TEST',
        competencyLevel: 50,
        dateCertified: new Date('04/01/2018'),
        dateCertifiedPicker: null,
        dateRenew: new Date('05/30/2019'),
        dateRenewPicker: null
      },
      {
        id: 2,
        skillCodeType: {
          id: 4,
          code: 'SC-1002',
          description: 'SC-1002 DESCRIPTION'
        },
        comment: 'ABC TEST1',
        competencyLevel: 100,
        dateCertified: new Date('04/01/2018'),
        dateCertifiedPicker: null,
        dateRenew: new Date('05/30/2019'),
        dateRenewPicker: null
      },
      {
        id: 3,
        skillCodeType: {
          id: 4,
          code: 'SC-1003',
          description: 'SC-1003 DESCRIPTION'
        },
        comment: 'ABC TEST2',
        competencyLevel: 20,
        dateCertified: new Date('04/01/2018'),
        dateCertifiedPicker: null,
        dateRenew: new Date('05/30/2019'),
        dateRenewPicker: null
      }];

    const ClientEmployeeSkillCodeTypesList: IClientEmployeeSkillCodeType[] = [
      {
        id: 1,
        code: 'SC-1000',
        description: 'SC-1000 DESCRIPTION'
      },
      {
        id: 2,
        code: 'SC-1001',
        description: 'SC-1001 DESCRIPTION'
      },
      {
        id: 3,
        code: 'SC-1002',
        description: 'SC-1002 DESCRIPTION'
      },
      {
        id: 4,
        code: 'SC-1003',
        description: 'SC-1003 DESCRIPTION'
      },
      {
        id: 5,
        code: 'SC-1004',
        description: 'SC-1004 DESCRIPTION'
      }];

    const ClientBenefitsPlanList: IClientBenefitsPlan[] = [
      {
        planYear: '2018',
        // planType: 'Type1',
        planStatus: 'ENROLLED',
        title: 'United Healthcare Choice Plus AHIZ/125',
        description: `This plan is a mid-level deductible plan with a maximum Family deductible of $10,000 in a calendar year.
        The Out of Pocket limit for this plan is $20,000 for a family.`,
        features: ['$10k Total Premium', 'Cafe Plan', '40 Employees enrolled (100%)'],
        additionalInfo: [
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAHIZ.PDF'
          },
          {
          text: 'Company Website',
          link: 'https://www.oasisadvantage.com'
        }],
        icon: 'icon-hospital-32',
        iconPath: '<span class="icon-hospital-32">',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        // planType: 'Type2',
        planStatus: 'ENROLLED',
        title: 'United Healthcare Choice Plus AHJD/125',
        description: `This plan is a mid-level deductible plan with a maximum Family deductible of $15,000 in a calendar year.
        The Out of Pocket limit for this plan is $20,000 for a family.`,
        features: ['$20k Total Premium', 'Cafe Plan', '40 Employees enrolled (100%)'],
        additionalInfo: [
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAHJD.PDF'
          },
          {
          text: 'Company Website',
          link: 'https://www.oasisadvantage.com'
        }],
        icon: 'icon-hospital-32',
        iconPath: '<span class="icon-hospital-32">',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        // planType: 'Type5',
        planStatus: 'ENROLLED',
        title: 'United Healthcare Choice Plus AQS6/125',
        description: `This plan is a high deductible plan with a maximum Family deductible of $20,000 in a calendar year.
        The Out of Pocket limit for this plan is $40,000 for a family.`,
        features: ['$10k Total Premium', 'Cafe Plan', '40 Employees enrolled (100%)'],
        additionalInfo: [
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAQS6.PDF'
          },
          {
          text: 'Company Website',
          link: 'https://www.oasisadvantage.com'
        }],
        icon: 'icon-hospital-32',
        iconPath: '<span class="icon-hospital-32">',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        planType: 'Type3',
        planStatus: 'AVAILABLE',
        title: 'Product Card 3',
        description: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
                        In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
                        bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
                        turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
                        blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum
                        ex egestas velit nec interdum odio neque non dui.
                        Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
                        Nullam ultrices maximus libero et blandit nibh bibendum.`,
        features: ['$30k Total Premium', 'Cafe Plan', '40 Employees enrolled (80%)'],
        additionalInfo: [
          {
            text: 'SBC',
          },
          {
          text: 'Company Website',
        }],
        icon: 'icon-tooth',
        iconPath: '<span class="path1"></span><span class="path2"></span>',
        display: false,
        websiteLink: 'https://www.oasisadvantage.com'

      },
      {
        planYear: '2018',
        planType: 'Type4',
        planStatus: 'AVAILABLE',
        title: 'Product Card 4',
        description: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
                          In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
                          bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
                          turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
                          blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum
                           ex egestas velit nec interdum odio neque non dui.
                          Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
                          Nullam ultrices maximus libero et blandit nibh bibendum.`,
        features: ['$10k Total Premium', 'Cafe Plan', '40 Employees enrolled (80%)'],
        additionalInfo: [
          {
            text: 'SBC',
          },
          {
          text: 'Company Website',
        }],
        icon: 'icon-tooth',
        iconPath: '<span class="path1"></span><span class="path2"></span>',
        display: false,
        websiteLink: 'https://www.oasisadvantage.com'

      },
      {
        planYear: '2018',
        planType: 'Type6',
        planStatus: 'ENROLLED',
        title: 'Product Card 6',
        description: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
                        In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
                        bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
                        turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
                        blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum
                        ex egestas velit nec interdum odio neque non dui.
                        Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
                        Nullam ultrices maximus libero et blandit nibh bibendum.`,
        features: ['$10k Total Premium', 'Cafe Plan', '40 Employees enrolled (80%)'],
        additionalInfo: [
          {
            text: 'SBC',
          },
          {
          text: 'Company Website',
        }],
        icon: 'icon-hospital-32',
        iconPath: '<span class="icon-hospital-32">',
        display: false,
        websiteLink: 'https://www.oasisadvantage.com'
      }
    ];

    const EmployeeBenefitsPlanList: IEmployeeBenefitsPlan[] = [
      {
        planYear: '2018',
        // planType: 'Type2',
        planStatus: 'MEDICAL',
        title: 'Product Card Title (Type)',
        description: `Mauris consequat lorem sem pharetra euismod. Duis sed nisl necat
          turpis Mauris nec eu lacus porta volutpat Suspendisse.`,
        features: ['$20k Total Premium', 'Cafe Plan', '30 Employees enrolled (60%)'],
        employeeCost: 600,
        employerCost: 200,
        additionalInfo: [
          {
            text: 'Client Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'Employee Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAHJD.PDF'
          },
          {
          text: 'SPD',
          link: 'https://www.oasisadvantage.com'
          }
          ],
        icon: 'icon-health-bag',
        iconPath: '<span class="icon-health-bag"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        // planType: 'Type2',
        planStatus: 'ANCILLARY',
        title: 'Product Card Title (Type)',
        description: `Mauris consequat lorem sem pharetra euismod. Duis sed nisl necat
          turpis Mauris nec eu lacus porta volutpat Suspendisse.`,
        features: ['$20k Total Premium', 'Cafe Plan', '30 Employees enrolled (60%)'],
        employeeCost: 600,
        employerCost: 200,
        additionalInfo: [
          {
            text: 'Client Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'Employee Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAHJD.PDF'
          },
          {
          text: 'SPD',
          link: 'https://www.oasisadvantage.com'
          }
          ],
        icon: 'icon-heart',
        iconPath: '<span class="icon-heart"></span>',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        // planType: 'Type2',
        planStatus: 'SUPPLEMENTAL',
        title: 'Product Card Title (Type)',
        description: `Mauris consequat lorem sem pharetra euismod. Duis sed nisl necat
          turpis Mauris nec eu lacus porta volutpat Suspendisse.`,
        features: ['$20k Total Premium', 'Cafe Plan', '30 Employees enrolled (60%)'],
        employeeCost: 600,
        employerCost: 200,
        additionalInfo: [
          {
            text: 'Client Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'Employee Cost Sheet',
            link: 'https://www.oasisadvantage.com'
          },
          {
            text: 'SBC',
            link: '/assets/sbc/2018_UAHJD.PDF'
          },
          {
          text: 'SPD',
          link: 'https://www.oasisadvantage.com'
          }
          ],
        icon: 'icon-pill',
        iconPath: '<span class="icon-pill"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>',
        display: true,
        websiteLink: 'https://www.oasisadvantage.com'
      },
      {
        planYear: '2018',
        planType: 'Type3',
        planStatus: 'AVAILABLE',
        title: 'Product Card 3',
        description: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
                        In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
                        bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
                        turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
                        blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum
                        ex egestas velit nec interdum odio neque non dui.
                        Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
                        Nullam ultrices maximus libero et blandit nibh bibendum.`,
        features: ['$30k Total Premium', 'Cafe Plan', '40 Employees enrolled (80%)'],
        employeeCost: 600,
        employerCost: 200,
        additionalInfo: [
          {
            text: 'SBC',
          },
          {
          text: 'Company Website',
        }],
        icon: 'icon-tooth',
        iconPath: '<span class="path1"></span><span class="path2"></span>',
        display: false,
        websiteLink: 'https://www.oasisadvantage.com'

      }
    ];

    const ReportsReportCreatorList: ReportsReportCreatorCard[] = [
      {
        imagePath: '/assets/images/report-creator/employees.svg',
        imageAlt: 'employees',
        title: 'Employees',
        description: 'Build a report using basic employee information.'
      },
      {
        imagePath: '/assets/images/report-creator/Check.svg',
        imageAlt: 'check',
        title: 'Paychecks',
        description: 'Build a report using employee paycheck data.'
      },
      {
        imagePath: '/assets/images/report-creator/earnings.svg',
        imageAlt: 'earnings',
        title: 'Earnings',
        description: 'Build a report using employee paycheck earning details.'
      },
      {
        imagePath: '/assets/images/report-creator/deductions.svg',
        imageAlt: 'deductions',
        title: 'Deductions',
        description: 'Build a report using employee deduction configuration details.'
      },
      {
        imagePath: '/assets/images/report-creator/recurringPay.svg',
        imageAlt: 'recurring',
        title: 'Recurring Pay',
        description: 'Build a report using employee recurring pay details.'
      },
    ];

    const ClientEmployeeBarchartForActivityData: PieData[] = [{
    arg: 'New Hires',
    groupByValueSet: [{
                      groupBy: 'Human Resources',
                      groupByTimeBased: 'Monthly',
                      val: 10,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'},
                                     {employeeId: 'E35186', firstName: 'ROBERT', lastName: 'ANDREWS'},
                                     {employeeId: 'I90960', firstName: 'WULL', lastName: 'ANICETTE'}]
                      }]
    }, {
    arg: 'Leave of Absence (LOA)',
    groupByValueSet: [{
                      groupBy: 'Human Resources',
                      groupByTimeBased: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'}]
                      }]
    }, {
    arg: 'Pay Rate Changes',
    groupByValueSet: [{
                      groupBy: 'Benefits',
                      groupByTimeBased: 'Monthly',
                      val: 8,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Deductions',
    groupByValueSet: [{
                      groupBy: 'Workers Comp',
                      groupByTimeBased: 'Monthly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Rehires',
    groupByValueSet: [{
                      groupBy: 'Payroll Changes',
                      groupByTimeBased: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Terminations',
    groupByValueSet: [{
                      groupBy: 'Payroll Changes',
                      groupByTimeBased: 'Monthly',
                      val: 5,
                      employeeList: [{employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Garnishments',
    groupByValueSet: [{
                      groupBy: 'Payroll Changes',
                      groupByTimeBased: 'Monthly',
                      val: 3,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'}]
                      }]
    }, {
    arg: 'W-4s',
    groupByValueSet: [{
                      groupBy: 'Human Resources',
                      groupByTimeBased: 'Quarterly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      },
                      {
                      groupBy: 'Human Resources',
                      groupByTimeBased: 'Yearly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                      {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                      {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                      {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Benefits',
    groupByValueSet: [{
                      groupBy: 'Benefits',
                      groupByTimeBased: 'Monthly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Job Changes',
    groupByValueSet: [{
                      groupBy: 'Benefits',
                      groupByTimeBased: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Status Changes',
    groupByValueSet: [{
                      groupBy: 'Workers Comp',
                      groupByTimeBased: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
  }];

  const ClientEmployeeBarchartForTimeBasedActivityData: PieData[] = [{
    arg: 'ACH Employees',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 10,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'},
                                     {employeeId: 'E35186', firstName: 'ROBERT', lastName: 'ANDREWS'},
                                     {employeeId: 'I90960', firstName: 'WULL', lastName: 'ANICETTE'}]
                      }, {
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'}]
                      }, {
                      groupBy: 'Yearly',
                      val: 2,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'}]
                      }]
    }, {
    arg: 'Active 1099',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'}]
                      }]
    }, {
    arg: 'Active Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 8,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Active Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Active Seasonal Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Active Seasonal Part Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Active Temporary Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 3,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'}]
                      }]
    }, {
    arg: 'Active Temporary Part Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'FMLA Full Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'FMLA Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'FMLA Seasonal Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
  }, {
    arg: 'FMLA Temporary Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 10,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'},
                                     {employeeId: 'E35186', firstName: 'ROBERT', lastName: 'ANDREWS'},
                                     {employeeId: 'I90960', firstName: 'WULL', lastName: 'ANICETTE'}]
                      }, {
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'}]
                      }, {
                      groupBy: 'Yearly',
                      val: 2,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'}]
                      }]
    }, {
    arg: 'Paid Leave Full TIme',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'}]
                      }]
    }, {
    arg: 'Unpaid Leave Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 8,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Unpaid Leave Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Unpaid Leave Seasonal Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Unpaid Leave Seasonal Part Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Unpaid Leave Temporary Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 3,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'}]
                      }]
    }, {
    arg: 'Unpaid Leave Temporary Part Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Terminated 1099',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Terminated Full Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Terminated Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
  }, {
    arg: 'Terminated Seasonal Full Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 10,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'},
                                     {employeeId: 'E35186', firstName: 'ROBERT', lastName: 'ANDREWS'},
                                     {employeeId: 'I90960', firstName: 'WULL', lastName: 'ANICETTE'}]
                      }, {
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'}]
                      }, {
                      groupBy: 'Yearly',
                      val: 2,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'}]
                      }]
    }, {
    arg: 'Terminated Seasonal Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'}]
                      }]
    }, {
    arg: 'Terminated Temporary Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 8,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Terminated Temporary Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Workers\' Comp FMLA Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Workers\' Comp FMLA Part Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 5,
                      employeeList: [{employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Workers\' Comp Full Time',
    groupByValueSet: [{
                      groupBy: 'Quarterly',
                      val: 3,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'}]
                      }]
    }, {
    arg: 'Workers\' Comp Part Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Workers\' Comp Seasonal Full Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 7,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'G85782', firstName: 'ANTON', lastName: 'ACOSTA'},
                                     {employeeId: 'H93637', firstName: 'MARIO', lastName: 'AGUILAR'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'}]
                      }]
    }, {
    arg: 'Workers\' Comp Seasonal Part Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'L84530', firstName: 'ROIVIN', lastName: 'ALTUZAR MARTINEZ'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }, {
    arg: 'Workers\' Comp Temporary Full Time',
    groupByValueSet: [{
                      groupBy: 'Monthly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'I51632', firstName: 'JAMES', lastName: 'AIKEN'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
  }, {
    arg: 'Workers\' Comp Temporary Part Time',
    groupByValueSet: [{
                      groupBy: 'Yearly',
                      val: 4,
                      employeeList: [{employeeId: 'A17447', firstName: 'DYLAN', lastName: 'ABRAHAMS'},
                                     {employeeId: 'R98845', firstName: 'KEELEY', lastName: 'ABRAMO'},
                                     {employeeId: 'I11503', firstName: 'COLIN', lastName: 'AMARAL'},
                                     {employeeId: 'B30192', firstName: 'RICKY', lastName: 'ANDERSON'}]
                      }]
    }];

    const ClientSupportAnalyticsPieData: PieData[] = [{
      arg: 'Payroll',
      val: 6
    }, {
      arg: 'WSE Support',
      val: 8
    }, {
      arg: 'Human Resources',
      val: 12
    }, {
      arg: 'Other',
      val: 16
    }];

    const ClientSupportAnalyticsHorizontalBarData: StackedHorizontalData[] = [{
      support: '',
      new: 6,
      open: 8,
      complete: 12,
      in_progress: 16
    }];

   // const supportListOfCases: ISupportTicket[] = [];
    const supportListOfCases: ISupportTicket[] = [
      {
        caseNumber: 12345,
        status: 'Open',
        subject: 'Implementation go live launch errors',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Critical',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 4567,
        status: 'In Progress',
        subject: 'Over paid 4,000 employees, now what?',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Critical',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 3259,
        status: 'In Progress',
        subject: 'Implementation go live launch errors. Also, verifying the code. Means Code Review. Then QA the functionality.',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'High',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 12121,
        status: 'Open',
        subject: 'Over paid 4,000 employees, now what',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'High',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 554466,
        status: 'Open',
        subject: 'Implementation go live launch errors. Also, verifying the code. Means Code Review. Then QA the functionality.',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Critical',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 47489,
        status: 'In Progress',
        subject: 'Over paid 4,000 employees, now what',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'High',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      }, {
        caseNumber: 98765,
        status: 'Open',
        subject: 'Implementation go live launch errors',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Medium',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 58142,
        status: 'In Progress',
        subject: 'Over paid 4,000 employees, now what',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Medium',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 67890,
        status: 'Open',
        subject: 'Implementation go live launch errors',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Medium',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 336699,
        status: 'Open',
        subject: 'Over paid 4,000 employees, now what',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Medium',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      }, {
        caseNumber: 778899,
        status: 'In Progress',
        subject: 'Implementation go live launch errors',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Low',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      },
      {
        caseNumber: 112233,
        status: 'Closed',
        subject: 'Over paid 4,000 employees, now what',
        category: 'Payroll',
        type: 'Payroll imports issue',
        priority: 'Low',
        detail: 'receiving a blank screen in certain locations upon launch of new site',
        discussion: 'please check your browser settings',
        resolution: 'User adjusted their Chrome settings and site is now visible - use for the other cards for now as well'
      }
    ];

    const workersCompOpenClaims: IWorkersCompClaim[] = [
      {
        employeeName: 'Dylan Abrahams',
        employeeTitle: 'Accounting Coordinator 1',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Open',
        injury: '11/12/2017',
        updated: '03/23/2018',
        claimType: 'Slip & Fall',
        details: [{
          detailsDate: '12/23/2017',
          detailsUpdateBy: 'JSmith ',
          detailsActionTaken: 'Commented',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '01/23/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Commented',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      },
      {
        employeeName: 'Mildred J. Williams',
        employeeTitle: 'Mechanical Operator II',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Open',
        injury: '01/12/2018',
        updated: '01/12/2018',
        claimType: 'Burn',
        details: [{
          detailsDate: '01/23/2018',
          detailsUpdateBy: 'JSmith',
          detailsActionTaken: 'Commented',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '02/23/2018',
          detailsUpdateBy: 'RPerry',
          detailsActionTaken: 'Updated',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      },
      {
        employeeName: 'Carlie James',
        employeeTitle: 'Mechanical Enginerr II',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Open',
        injury: '12/02/2017',
        updated: '12/12/2017',
        claimType: 'Slip & Fall',
        details: [{
          detailsDate: '03/23/2017',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Commented',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '03/23/2018',
          detailsUpdateBy: 'James Bond',
          detailsActionTaken: 'Enquired',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      },
      {
        employeeName: 'Dylan Abrahams',
        employeeTitle: 'Accounting Coordinator 1',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Closed',
        injury: '12/11/2017',
        updated: '03/23/2018',
        claimType: 'Slip & Fall',
        details: [{
          detailsDate: '02/23/2018',
          detailsUpdateBy: 'JSmith',
          detailsActionTaken: 'Enquired',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '02/25/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Updated',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        },
        {
          detailsDate: '03/23/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Resolved',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      },
      {
        employeeName: 'Keeley Abramo',
        employeeTitle: 'Accounting Coordinator 1',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Open',
        injury: '12/11/2017',
        updated: '03/23/2018',
        claimType: 'Fall',
        details: [{
          detailsDate: '02/23/2018',
          detailsUpdateBy: 'JSmith',
          detailsActionTaken: 'Enquired',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '02/25/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Updated',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        },
        {
          detailsDate: '03/23/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Resolved',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      },
      {
        employeeName: 'Dylan Abrahams',
        employeeTitle: 'Accounting Coordinator 1',
        employeeCompany: 'Spectrum Digitial LLC',
        claim: '123456BCD',
        status: 'Open',
        injury: '12/11/2017',
        updated: '03/23/2018',
        claimType: 'Fall',
        details: [{
          detailsDate: '02/23/2018',
          detailsUpdateBy: 'JSmith',
          detailsActionTaken: 'Enquired',
          detailsDesc: 'Employee was working on an unsecured latter on the exterior of the building and missed a rung upon decent leadig to a broken leg'
        },
        {
          detailsDate: '02/25/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Updated',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        },
        {
          detailsDate: '03/23/2018',
          detailsUpdateBy: 'CJames',
          detailsActionTaken: 'Resolved',
          detailsDesc: 'Employee immediately went to the ER and was treated and expected to return to work within 6 weeks'
        }]
      }];

      const ReportsInvoiceReprintReport: ReportsInvoiceReprint[] = [
        {
          invoices: '781561',
          date: new Date('01/01/2018'),
          batchNumber: 30000,
          amount: 4089.45,
          detail: 'link'
        },
        {
          invoices: '789012',
          date: new Date('01/07/2018'),
          batchNumber: 40005,
          amount: 5002.13,
          detail: 'link'
        },
        {
          invoices: '656546',
          date: new Date( '01/14/2018' ),
          batchNumber: 50012,
          amount: 41708.45,
          detail: 'link'
        },
        {
          invoices: '454665',
          date: new Date( '01/21/2018' ),
          batchNumber: 60048,
          amount: 51660.53,
          detail: 'link'
        },
        {
          invoices: '656544',
          date: new Date( '02/01/2018' ),
          batchNumber: 40010,
          amount: 102232.45,
          detail: 'link'
        },
        {
          invoices: '654654',
          date: new Date ( '02/07/2018' ),
          batchNumber: 30001,
          amount: 61912.81,
          detail: 'link'
        },
        {
          invoices: '465465',
          date: new Date( '01/01/2017' ),
          batchNumber: 10000,
          amount: 101986.93,
          detail: 'link'
        },
        {
          invoices: '654546',
          date: new Date( '02/01/2017' ),
          batchNumber: 10056,
          amount: 1282.81,
          detail: 'link'
        },
        {
          invoices: '456354',
          date: new Date ( '03/01/2017' ),
          batchNumber: 30013,
          amount: 31822.81,
          detail: 'link'
        },
        {
          invoices: '465454',
          date: new Date( '01/01/2016' ),
          batchNumber: 10012,
          amount: 61661.13,
          detail: 'link'
        },
        {
          invoices: '877897',
          date: new Date( '02/01/2016' ),
          batchNumber: 20011,
          amount: 52003.81,
          detail: 'link'
        },
        {
          invoices: '213131',
          date: new Date( '03/01/2016' ),
          batchNumber: 30003,
          amount: 81673.76,
          detail: 'link'
        }
      ];

    const InvoiceReprintDataReport: InvoiceReprintDataNumber[] = [
        {
          invoiceNumber: 781561,
          deptCode: '1',
          deptName: 'ACCOUNTING',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 3615.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 224.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 52.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 49.27
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 57.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 90.91
                                  }]
        },
        {
          invoiceNumber: 789012,
          deptCode: '2',
          deptName: 'ADMINISTRATION',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 4615.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 324.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 62.43
                                  }]
        },
        {
          invoiceNumber: 656546,
          deptCode: '3',
          deptName: 'IT',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 41234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 224.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 52.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 49.27
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 57.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 90.91
                                  }]
        },
        {
          invoiceNumber: 454665,
          deptCode: '4',
          deptName: 'FRONT DESK',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 51234.66
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 324.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 52.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 49.27
                                  }]
        },
        {
          invoiceNumber: 656544,
          deptCode: '200',
          deptName: 'EXECUTIVE',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 101234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 624.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 102.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 12.27
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 68.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 190.91
                                  }]
        },
        {
          invoiceNumber: 654654,
          deptCode: '20',
          deptName: 'JANITORIAL',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 61234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 524.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 12.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 12.63
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 58.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 70.91
                                  }]
        },
        {
          invoiceNumber: 465465,
          deptCode: '2',
          deptName: 'IT',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 101234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 724.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 15.60
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 12.63
                                  }]
        },
        {
          invoiceNumber: 654546,
          deptCode: '20',
          deptName: 'JANITORIAL',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 1234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 24.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 2.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 2.63
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 8.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 10.91
                                  }]
        },
        {
          invoiceNumber: 456354,
          deptCode: '1',
          deptName: 'ACCOUNTING',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 31234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 324.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 62.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 52.63
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 38.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 110.91
                                  }]
        },
        {
          invoiceNumber: 465454,
          deptCode: '300',
          deptName: 'WAREHOUSE',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 61234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 324.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 102.43
                                  }]
        },
        {
          invoiceNumber: 877897,
          deptCode: '40',
          deptName: 'HUMAN RESOURCES',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 51234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 624.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 102.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 12.63
                                  },
                                  {
                                    serviceDescription: 'ADMINISTRATION FEE',
                                    amount: 18.14
                                  },
                                  {
                                    serviceDescription: '401K MATCH',
                                    amount: 11.91
                                  }]
        },
        {
          invoiceNumber: 213131,
          deptCode: '400',
          deptName: 'MARKETING',
          invoiceReprintDataList: [{
                                    serviceDescription: 'GROSS WAGES',
                                    amount: 81234.53
                                  },
                                  {
                                    serviceDescription: 'SOCIAL SECURITY',
                                    amount: 324.17
                                  },
                                  {
                                    serviceDescription: 'MEDICARE',
                                    amount: 102.43
                                  },
                                  {
                                    serviceDescription: 'WORKERS COMPENSATION',
                                    amount: 12.63
                                  }]
        }];

    const ReportsAverageHoursReport: AverageHours[] = [
      {
        employeeId: 'A04754',
        lastName: 'APSEY',
        firstName: 'LOREN',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate: new Date ( '01/01/2018' ),
        payDate: new Date ( '08/03/2018' ),
        weeksWorked: 7,
        hoursWorked: 200,
        averageHours: 29
      },
      {
        employeeId: 'W04582',
        lastName: 'ASPEN',
        firstName: 'FRANK',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate: new Date ( '09/02/2016' ),
        payDate: new Date ( '08/03/2018' ),
        weeksWorked: 8,
        hoursWorked: 120.5,
        averageHours: 15
      },
      {
        employeeId: 'Z04729',
        lastName: 'BARNES',
        firstName: 'ELSA',
        statusName: 'LEAVE - PD',
        statusID: '2',
        type: 'PART TIME',
        originalHireDate: new Date ( '09/03/2015' ),
        payDate: new Date ( '08/03/2018' ),
        weeksWorked: 7,
        hoursWorked: 155.5,
        averageHours: 22
      },
      {
        employeeId: 'Y04584',
        lastName: 'JOHN',
        firstName: 'SMITH',
        statusName: 'FMLA',
        statusID: '1',
        type: 'FULL TIME',
        originalHireDate: new Date ( '01/04/2017' ),
        payDate: new Date ( '09/07/2018' ),
        weeksWorked: 7,
        hoursWorked: 159.25,
        averageHours: 23
      },
      {
        employeeId: 'A12345',
        lastName: 'SMITH',
        firstName: 'JANE',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'PART TIME',
        originalHireDate: new Date ( '03/04/2016' ),
        payDate: new Date ( '09/07/2018' ),
        weeksWorked: 7,
        hoursWorked: 24.5,
        averageHours: 4
      },
      {
        employeeId: 'B56789',
        lastName: 'CRANE',
        firstName: 'DOLORES',
        statusName: 'W COMP',
        statusID: '5',
        type: 'FULL TIME',
        originalHireDate: new Date ( '09/04/2015' ),
        payDate: new Date ( '08/31/2018' ),
        weeksWorked: 10,
        hoursWorked: 140.5,
        averageHours: 14
      },
      {
        employeeId: 'C89746',
        lastName: 'BARNES',
        firstName: 'DIANE',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'PART TIME',
        originalHireDate: new Date ( '01/04/2013' ),
        payDate: new Date ( '08/31/2018' ),
        weeksWorked: 10,
        hoursWorked: 32.75,
        averageHours: 3
      },
      {
        employeeId: 'D65478',
        lastName: 'FIELDS',
        firstName: 'DAN',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate: new Date ( '09/05/2017' ),
        payDate: new Date ( '08/31/2018' ),
        weeksWorked: 7,
        hoursWorked: 240,
        averageHours: 34
      },
      {
        employeeId: 'E65745',
        lastName: 'CORTES',
        firstName: 'JOHN',
        statusName: 'TERM',
        statusID: '4',
        type: 'PART TIME',
        originalHireDate: new Date ( '05/05/2015' ),
        payDate: new Date ( '09/07/2018' ),
        weeksWorked: 7,
        hoursWorked: 163.75,
        averageHours: 23
      },
      {
        employeeId: 'F67842',
        lastName: 'FRANKLIN',
        firstName: 'DENISE',
        statusName: 'ACTIVE',
        statusID: '0',
        type: 'FULL TIME',
        originalHireDate: new Date ( '09/05/2016' ),
        payDate: new Date ( '08/31/2018' ),
        weeksWorked: 7,
        hoursWorked: 267.75,
        averageHours: 38
      },
  ];

  const ReportsWagesEarnings: WagesEarningsPayCodes[] = [
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 762,
      hoursUnits: 63.5,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'OT',
      payCodeDesc: 'OVERTIME PAY',
      grossEarnings: 216,
      hoursUnits: 12,
      payDate: new Date ( '09/07/2018' ),
      payRate: 18,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 120,
      hoursUnits: 10,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 150.55,
      hoursUnits: 3,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'INC',
      payCodeDesc: 'INCENTIVE PAY',
      grossEarnings: 1000,
      hoursUnits: 1,
      payDate: new Date ( '09/07/2018' ),
      payRate: 1000,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 762,
      hoursUnits: 63.5,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 216,
      hoursUnits: 12,
      payDate: new Date ( '09/07/2018' ),
      payRate: 18,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 120,
      hoursUnits: 10,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 150.55,
      hoursUnits: 3,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 1000,
      hoursUnits: 1,
      payDate: new Date ( '09/07/2018' ),
      payRate: 1000,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 762,
      hoursUnits: 63.5,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'OT',
      payCodeDesc: 'OVERTIME PAY',
      grossEarnings: 216,
      hoursUnits: 12,
      payDate: new Date ( '08/31/2018' ),
      payRate: 18,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 120,
      hoursUnits: 10,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 150.55,
      hoursUnits: 3,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'INC',
      payCodeDesc: 'INCENTIVE PAY',
      grossEarnings: 1000,
      hoursUnits: 1,
      payDate: new Date ( '08/31/2018' ),
      payRate: 1000,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 762,
      hoursUnits: 63.5,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 216,
      hoursUnits: 12,
      payDate: new Date ( '08/31/2018' ),
      payRate: 18,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 120,
      hoursUnits: 10,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 150.55,
      hoursUnits: 3,
      payDate: new Date ( '08/31/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 1000,
      hoursUnits: 1,
      payDate: new Date ( '08/31/2018' ),
      payRate: 1000,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    }


  ];

  const ReportsWagesEarningsSummary: WagesEarningsPayCodes[] = [
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 1524,
      hoursUnits: 127,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'OT',
      payCodeDesc: 'OVERTIME PAY',
      grossEarnings: 432,
      hoursUnits: 24,
      payDate: new Date ( '09/07/2018' ),
      payRate: 18,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 240,
      hoursUnits: 20,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 301.10,
      hoursUnits: 6,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'INC',
      payCodeDesc: 'INCENTIVE PAY',
      grossEarnings: 2000,
      hoursUnits: 2,
      payDate: new Date ( '09/07/2018' ),
      payRate: 1000,
      locationCodeID: '230',
      divisionCodeID: '100',
      departmentCodeID: '1001',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'REG',
      payCodeDesc: 'REGULAR PAY',
      grossEarnings: 1524,
      hoursUnits: 127,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 432,
      hoursUnits: 24,
      payDate: new Date ( '09/07/2018' ),
      payRate: 18,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 240,
      hoursUnits: 20,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'DYLAN ABRAHAMS',
      empId: 'A17447',
      empSsn: '123-45-6789'
    },
    {
      payCodeID: 'HOL',
      payCodeDesc: 'HOLIDAY PAY',
      grossEarnings: 301.10,
      hoursUnits: 6,
      payDate: new Date ( '09/07/2018' ),
      payRate: 12,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'ANTON ACOSTA',
      empId: 'G85782',
      empSsn: '123-45-9876'
    },
    {
      payCodeID: 'VAC',
      payCodeDesc: 'VACATION PAY',
      grossEarnings: 2000,
      hoursUnits: 2,
      payDate: new Date ( '09/07/2018' ),
      payRate: 1000,
      locationCodeID: '340',
      divisionCodeID: '110',
      departmentCodeID: '1044',
      empName: 'KEELEY ABRAMO',
      empId: 'R98845',
      empSsn: '321-45-6789'
    }

  ];

    const ReportsEarningsDetail: EarningsSummary[] = [
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 40,
        amountPaid: 500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 10,
        amountPaid: 200,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'OT',
        payCodeDesc: 'OVERTIME PAY',
        hoursUnits: 2,
        amountPaid: 100,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 5,
        amountPaid: 200,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 40,
        amountPaid: 2000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 10,
        amountPaid: 500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 2,
        amountPaid: 100,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'INC',
        payCodeDesc: 'INCENTIVE PAY',
        hoursUnits: 1,
        amountPaid: 1000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '800',
        locationDesc: '800 - FORT LAUDERDALE',
        deptCodeID: '1049',
        deptDesc: '1049 - ADMIN',
        divisionCodeID: '120',
        divisionDesc: '120 - CENTRAL FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 40,
        amountPaid: 1500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '800',
        locationDesc: '800 - FORT LAUDERDALE',
        deptCodeID: '1049',
        deptDesc: '1049 - ADMIN',
        divisionCodeID: '120',
        divisionDesc: '120 - CENTRAL FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 10,
        amountPaid: 300,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '800',
        locationDesc: '800 - FORT LAUDERDALE',
        deptCodeID: '1049',
        deptDesc: '1049 - ADMIN',
        divisionCodeID: '120',
        divisionDesc: '120 - CENTRAL FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'HOL',
        payCodeDesc: 'HOLIDAY PAY',
        hoursUnits: 40,
        amountPaid: 1500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 40,
        amountPaid: 2000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 10,
        amountPaid: 500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 40,
        amountPaid: 2000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'OT',
        payCodeDesc: 'OVERTIME PAY',
        hoursUnits: 5,
        amountPaid: 300,
        payDate: new Date ( '09/07/2018' )
      }
    ];

    const ReportsEarningsSummary: EarningsSummary[] = [
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 50,
        amountPaid: 700,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'OT',
        payCodeDesc: 'OVERTIME PAY',
        hoursUnits: 2,
        amountPaid: 100,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '230',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1001',
        deptDesc: '1001 - GENERAL EDUCATION',
        divisionCodeID: '100',
        divisionDesc: '100 - CORPORATE',
        empName: 'DYLAN ABRAHAMS',
        empId: 'A17447',
        empSsn: '321-45-6789',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 5,
        amountPaid: 200,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 50,
        amountPaid: 2500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 2,
        amountPaid: 100,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '340',
        locationDesc: '230 - PEMBROKE PINES',
        deptCodeID: '1044',
        deptDesc: '1044 - GRANTS',
        divisionCodeID: '110',
        divisionDesc: '110 - SOUTH FLORIDA',
        empName: 'KEELEY ABRAMO',
        empId: 'R98845',
        empSsn: '123-45-9876',
        payCodeID: 'INC',
        payCodeDesc: 'INCENTIVE PAY',
        hoursUnits: 1,
        amountPaid: 1000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '800',
        locationDesc: '800 - FORT LAUDERDALE',
        deptCodeID: '1049',
        deptDesc: '1049 - ADMIN',
        divisionCodeID: '120',
        divisionDesc: '120 - CENTRAL FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 50,
        amountPaid: 1800,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '800',
        locationDesc: '800 - FORT LAUDERDALE',
        deptCodeID: '1049',
        deptDesc: '1049 - ADMIN',
        divisionCodeID: '120',
        divisionDesc: '120 - CENTRAL FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'HOL',
        payCodeDesc: 'HOLIDAY PAY',
        hoursUnits: 40,
        amountPaid: 1500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'REG',
        payCodeDesc: 'REGULAR PAY',
        hoursUnits: 50,
        amountPaid: 2500,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'VAC',
        payCodeDesc: 'VACATION PAY',
        hoursUnits: 40,
        amountPaid: 2000,
        payDate: new Date ( '09/07/2018' )
      },
      {
        locationCodeID: '900',
        locationDesc: '900 - WEST PALM BEACH',
        deptCodeID: '1059',
        deptDesc: '1059 - ATHLETICS',
        divisionCodeID: '130',
        divisionDesc: '130 - NORTH FLORIDA',
        empName: 'ANTON ACOSTA',
        empId: 'G85782',
        empSsn: '123-45-6789',
        payCodeID: 'OT',
        payCodeDesc: 'OVERTIME PAY',
        hoursUnits: 5,
        amountPaid: 300,
        payDate: new Date ( '09/07/2018' )
      }
    ];

    // const ReportsEarningsDetail: EarningsSummary[] = [
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 40,
    //     amountPaid: 500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 10,
    //     amountPaid: 200,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'OT',
    //     payCodeDesc: 'OVERTIME PAY',
    //     hoursUnits: 2,
    //     amountPaid: 100,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 5,
    //     amountPaid: 200,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 40,
    //     amountPaid: 2000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 10,
    //     amountPaid: 500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 2,
    //     amountPaid: 100,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'INC',
    //     payCodeDesc: 'INCENTIVE PAY',
    //     hoursUnits: 1,
    //     amountPaid: 1000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '800',
    //     locationDesc: '800 - FORT LAUDERDALE',
    //     deptCodeID: '1049',
    //     deptDesc: '1049 - ADMIN',
    //     divisionCodeID: '120',
    //     divisionDesc: '120 - CENTRAL FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 40,
    //     amountPaid: 1500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '800',
    //     locationDesc: '800 - FORT LAUDERDALE',
    //     deptCodeID: '1049',
    //     deptDesc: '1049 - ADMIN',
    //     divisionCodeID: '120',
    //     divisionDesc: '120 - CENTRAL FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 10,
    //     amountPaid: 300,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '800',
    //     locationDesc: '800 - FORT LAUDERDALE',
    //     deptCodeID: '1049',
    //     deptDesc: '1049 - ADMIN',
    //     divisionCodeID: '120',
    //     divisionDesc: '120 - CENTRAL FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'HOL',
    //     payCodeDesc: 'HOLIDAY PAY',
    //     hoursUnits: 40,
    //     amountPaid: 1500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 40,
    //     amountPaid: 2000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 10,
    //     amountPaid: 500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 40,
    //     amountPaid: 2000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'OT',
    //     payCodeDesc: 'OVERTIME PAY',
    //     hoursUnits: 5,
    //     amountPaid: 300,
    //     payDate: new Date ( '09/07/2018' )
    //   }
    // ];

    // const ReportsEarningsSummary: EarningsSummary[] = [
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 50,
    //     amountPaid: 700,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'OT',
    //     payCodeDesc: 'OVERTIME PAY',
    //     hoursUnits: 2,
    //     amountPaid: 100,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '230',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1001',
    //     deptDesc: '1001 - GENERAL EDUCATION',
    //     divisionCodeID: '100',
    //     divisionDesc: '100 - CORPORATE',
    //     empName: 'FRANK APSEY',
    //     empSsn: '321-45-6789',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 5,
    //     amountPaid: 200,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 50,
    //     amountPaid: 2500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 2,
    //     amountPaid: 100,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '340',
    //     locationDesc: '230 - PEMBROKE PINES',
    //     deptCodeID: '1044',
    //     deptDesc: '1044 - GRANTS',
    //     divisionCodeID: '110',
    //     divisionDesc: '110 - SOUTH FLORIDA',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     payCodeID: 'INC',
    //     payCodeDesc: 'INCENTIVE PAY',
    //     hoursUnits: 1,
    //     amountPaid: 1000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '800',
    //     locationDesc: '800 - FORT LAUDERDALE',
    //     deptCodeID: '1049',
    //     deptDesc: '1049 - ADMIN',
    //     divisionCodeID: '120',
    //     divisionDesc: '120 - CENTRAL FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 50,
    //     amountPaid: 1800,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '800',
    //     locationDesc: '800 - FORT LAUDERDALE',
    //     deptCodeID: '1049',
    //     deptDesc: '1049 - ADMIN',
    //     divisionCodeID: '120',
    //     divisionDesc: '120 - CENTRAL FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'HOL',
    //     payCodeDesc: 'HOLIDAY PAY',
    //     hoursUnits: 40,
    //     amountPaid: 1500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'REG',
    //     payCodeDesc: 'REGULAR PAY',
    //     hoursUnits: 50,
    //     amountPaid: 2500,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'VAC',
    //     payCodeDesc: 'VACATION PAY',
    //     hoursUnits: 40,
    //     amountPaid: 2000,
    //     payDate: new Date ( '09/07/2018' )
    //   },
    //   {
    //     locationCodeID: '900',
    //     locationDesc: '900 - WEST PALM BEACH',
    //     deptCodeID: '1059',
    //     deptDesc: '1059 - ATHLETICS',
    //     divisionCodeID: '130',
    //     divisionDesc: '130 - NORTH FLORIDA',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     payCodeID: 'OT',
    //     payCodeDesc: 'OVERTIME PAY',
    //     hoursUnits: 5,
    //     amountPaid: 300,
    //     payDate: new Date ( '09/07/2018' )
    //   }
    // ];

    const EmployeeReportsEmployeeInformationReport: EmployeeReportsEmployeeInformationInquiry[] = [
      {
        clientId: 123456,
        employeeId: 'A17447',
        employeeGeneralInformation: [
                                    {
                                      ssn: '123-45-6789',
                                      firstName: 'DYLAN',
                                      middleName: '',
                                      lastName: 'ABRAHAMS',
                                      address1: '123 MAIN ST',
                                      address2: '',
                                      zip: '33406',
                                      city: 'WEST PALM BEACH',
                                      state: 'FL',
                                      homePhone: '(561) 555-1212',
                                      peoStartDate: new Date ('01/01/2018'),
                                      clientStartDate: new Date ('01/01/2018'),
                                      status: 'ACTIVE',
                                      statusDate: new Date ('01/01/2018'),
                                      employeeType: 'FULL TIME',
                                      currentPayPeriod: 'WEEKLY',
                                      currentPayRate: 100000,
                                      payMethod: 'SALARY',
                                      currentAnnualizedPay: 100000,
                                      payGroup: 'WEEKLY',
                                      workShift: 'NIGHT',
                                      locationCode: 'MAIN',
                                      benefitCode: 'PRIMARY',
                                      divisionCode: 'SOUTH FLORIDA',
                                      departmentCode: 'ADMINISTRATION',
                                      employerID: 'P123M5678',
                                      jobCode: 'ANALYST',
                                      projectCode: 'PHASE I',
                                      employeeNumber: '123456',
                                      birthDate: new Date ('01/01/1993'),
                                      gender: 'MALE',
                                      ethnicity: 'WHITE',
                                      maritalStatus: 'SINGLE',
                                      unionCode: '',
                                      standardHours: 40,
                                      autoAcceptTS: 'YES',
                                      defaultTSHours: 40,
                                      emailAddress: 'TEST@OASISADVANTAGE.COM',
                                      dailyTimesheets: 'YES',
                                      termReason: '',
                                      nickname: 'Dany',
                                      age: 25
                                    }],
      employeeDirectDeposit: [
                              {
                                type: 'C',
                                account: 'xxxx12345',
                                amount: 100,
                                status: 'ACTIVE',
                              },
                              {
                                type: 'C',
                                account: 'xxxx67890',
                                amount: 200,
                                status: 'INACTIVE',
                              },
                              {
                                type: 'D',
                                account: 'xxxx68974',
                                amount: 300,
                                status: 'ACTIVE',
                              }],
      employeeStateGovernment: [
                                {
                                  state: 'GA',
                                  filingStatus: 'S - SINGLE',
                                  altCalc: 1,
                                  allowances: 1,
                                  secondaryAllowances: 1,
                                  exemption: 1,
                                  supplementaryExemption: 1,
                                  nrCertificate: 'NO',
                                  overrideType: 'A',
                                  overrideNumber: 1,
                                  w4Filed: 'Y',
                                  w4Year: 2018,
                                },
                                {
                                  state: 'NY',
                                  filingStatus: 'S - SINGLE',
                                  altCalc: 1,
                                  allowances: 1,
                                  secondaryAllowances: 1,
                                  exemption: 1,
                                  supplementaryExemption: 1,
                                  nrCertificate: 'NO',
                                  overrideType: 'F',
                                  overrideNumber: 1,
                                  w4Filed: 'Y',
                                  w4Year: 2018,
                                }],
      employeeFederalGovernment: [
                                  {
                                    filingStatus: 'SINGLE',
                                    withHolding: 1,
                                    overrideType: 'A',
                                    overrideAmount: 100,
                                    eicFileStatus: 'S - SINGLE',
                                    i9FormInfo: '',
                                    insI9FormCompleted: 'YES',
                                    ircaIdNumber: 'FL DL',
                                    alienRegistrationNumber: '',
                                    ircaEligibilityDocument: '',
                                    w4Filed: 'Y',
                                    w4Year: 2018,
                                    w5Filed: 'Y',
                                    w5Year: 2018,
                                    renewDate: new Date ('01/01/2018'),
                                    ficaExempt: 'NO',
                                  }],
      employeeEmergencyInformation: [
                                    {
                                      contactName: 'JOHN SMITH',
                                      relation: 'BROTHER',
                                      telephone: '(561) 555-1212',
                                    }],
      employeeOtherItems: [
                          {
                            handicapped: 'NO',
                            smoker: 'NO',
                            courtOrderedMedical: 'NO',
                            hawaiiMedicalWaiver: '',
                            mailCheckHome: 'NO',
                            officer: 'NO',
                            citizenship: 'USA',
                            licensePlateNumber: '',
                            driverLicenseNumber: '',
                            licenseExpiresDate: new Date ('01/01/2018'),
                            stateIssuingLicense: 'FL',
                            serviceMedalVet: 'NO',
                            blind: 'NO',
                            disabledVet: 'NO',
                            taxCreditEmployee: 'NO',
                            ohioFormC112Signed: '',
                            sCorpPrincipal: 'NO',
                            vietnamVet: 'NO',
                            handbookMailed: 'YES',
                            handbookReceived: 'YES',
                            maxGarnishmentPercent: '',
                            clockNumber: '123456',
                            newlySeparatedVet: 'NO',
                            activeDutyBadgeVet: 'NO',
                            }]
      }];

    // const ReportsPayrollVoucherDetail: PayrollVoucherDetail[] = [
    //   {
    //     batchNo: '123462',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     empId: 'A12345',
    //     payDate: new Date ( '10/19/2018' ),
    //     periodBegin: new Date ( '09/28/2018' ),
    //     periodEnd: new Date ( '10/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123462',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     empId: 'B12345',
    //     payDate: new Date ( '10/19/2018' ),
    //     periodBegin: new Date ( '09/28/2018' ),
    //     periodEnd: new Date ( '10/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123462',
    //     empName: 'JOHN SMITH',
    //     empSsn: '654-12-7896',
    //     empId: 'C12345',
    //     payDate: new Date ( '10/19/2018' ),
    //     periodBegin: new Date ( '09/28/2018' ),
    //     periodEnd: new Date ( '10/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123463',
    //     empName: 'JANE SMITH',
    //     empSsn: '754-13-7896',
    //     empId: 'D12345',
    //     payDate: new Date ( '10/19/2018' ),
    //     periodBegin: new Date ( '09/28/2018' ),
    //     periodEnd: new Date ( '10/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123463',
    //     empName: 'JOHN CURTIS',
    //     empSsn: '854-14-7896',
    //     empId: 'E12345',
    //     payDate: new Date ( '10/19/2018' ),
    //     periodBegin: new Date ( '09/28/2018' ),
    //     periodEnd: new Date ( '10/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },

    //   {
    //     batchNo: '123460',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     empId: 'A12345',
    //     payDate: new Date ( '10/05/2018' ),
    //     periodBegin: new Date ( '09/13/2018' ),
    //     periodEnd: new Date ( '09/27/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123460',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     empId: 'B12345',
    //     payDate: new Date ( '10/05/2018' ),
    //     periodBegin: new Date ( '09/13/2018' ),
    //     periodEnd: new Date ( '09/27/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123460',
    //     empName: 'JOHN SMITH',
    //     empSsn: '654-12-7896',
    //     empId: 'C12345',
    //     payDate: new Date ( '10/05/2018' ),
    //     periodBegin: new Date ( '09/13/2018' ),
    //     periodEnd: new Date ( '09/27/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123461',
    //     empName: 'JANE SMITH',
    //     empSsn: '754-13-7896',
    //     empId: 'D12345',
    //     payDate: new Date ( '10/05/2018' ),
    //     periodBegin: new Date ( '09/13/2018' ),
    //     periodEnd: new Date ( '09/27/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123461',
    //     empName: 'JOHN CURTIS',
    //     empSsn: '854-14-7896',
    //     empId: 'E12345',
    //     payDate: new Date ( '10/05/2018' ),
    //     periodBegin: new Date ( '09/13/2018' ),
    //     periodEnd: new Date ( '09/27/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },

    //   {
    //     batchNo: '123458',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     empId: 'A12345',
    //     payDate: new Date ( '09/21/2018' ),
    //     periodBegin: new Date ( '08/29/2018' ),
    //     periodEnd: new Date ( '09/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123458',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     empId: 'B12345',
    //     payDate: new Date ( '09/21/2018' ),
    //     periodBegin: new Date ( '08/29/2018' ),
    //     periodEnd: new Date ( '09/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123458',
    //     empName: 'JOHN SMITH',
    //     empSsn: '654-12-7896',
    //     empId: 'C12345',
    //     payDate: new Date ( '09/21/2018' ),
    //     periodBegin: new Date ( '08/29/2018' ),
    //     periodEnd: new Date ( '09/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123459',
    //     empName: 'JANE SMITH',
    //     empSsn: '754-13-7896',
    //     empId: 'D12345',
    //     payDate: new Date ( '09/21/2018' ),
    //     periodBegin: new Date ( '08/29/2018' ),
    //     periodEnd: new Date ( '09/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123459',
    //     empName: 'JOHN CURTIS',
    //     empSsn: '854-14-7896',
    //     empId: 'E12345',
    //     payDate: new Date ( '09/21/2018' ),
    //     periodBegin: new Date ( '08/29/2018' ),
    //     periodEnd: new Date ( '09/12/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },

    //   {
    //     batchNo: '123456',
    //     empName: 'LOREN APSEY',
    //     empSsn: '123-45-6789',
    //     empId: 'A12345',
    //     payDate: new Date ( '09/07/2018' ),
    //     periodBegin: new Date ( '08/14/2018' ),
    //     periodEnd: new Date ( '08/28/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123456',
    //     empName: 'ELSA BARNES',
    //     empSsn: '123-45-9876',
    //     empId: 'B12345',
    //     payDate: new Date ( '09/07/2018' ),
    //     periodBegin: new Date ( '08/14/2018' ),
    //     periodEnd: new Date ( '08/28/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123456',
    //     empName: 'JOHN SMITH',
    //     empSsn: '654-12-7896',
    //     empId: 'C12345',
    //     payDate: new Date ( '09/07/2018' ),
    //     periodBegin: new Date ( '08/14/2018' ),
    //     periodEnd: new Date ( '08/28/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 6000,
    //     fedIncTax: 400,
    //     fica: 200,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 1000,
    //     netPay: 4000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123457',
    //     empName: 'JANE SMITH',
    //     empSsn: '754-13-7896',
    //     empId: 'D12345',
    //     payDate: new Date ( '09/07/2018' ),
    //     periodBegin: new Date ( '08/14/2018' ),
    //     periodEnd: new Date ( '08/28/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   },
    //   {
    //     batchNo: '123457',
    //     empName: 'JOHN CURTIS',
    //     empSsn: '854-14-7896',
    //     empId: 'E12345',
    //     payDate: new Date ( '09/07/2018' ),
    //     periodBegin: new Date ( '08/14/2018' ),
    //     periodEnd: new Date ( '08/28/2018' ),
    //     regHours: 80,
    //     premHours: 0,
    //     grossPay: 7000,
    //     fedIncTax: 500,
    //     fica: 300,
    //     stateIncTax: 0,
    //     otherTaxes: 0,
    //     payrollDeducts: 2000,
    //     netPay: 5000,
    //     weeksWorked: 2
    //   }
    // ];

    const ReportsPayrollVoucherDetail: PayrollVoucherDetail[] = [
      {
        batchNo: '123462',
        empName: 'DYLAN ABRAHAMS',
        empSsn: '123-45-6789',
        empId: 'A17447',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123462',
        empName: 'KEELEY ABRAMO',
        empSsn: '123-45-9876',
        empId: 'R98845',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123462',
        empName: 'ANTON ACOSTA',
        empSsn: '654-12-7896',
        empId: 'G85782',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123463',
        empName: 'MARIO AGUILAR',
        empSsn: '754-13-7896',
        empId: 'H93637',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },
      {
        batchNo: '123463',
        empName: 'ROIVIN ALTUZAR MARTINEZ',
        empSsn: '854-14-7896',
        empId: 'L84530',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },

      {
        batchNo: '123460',
        empName: 'DYLAN ABRAHAMS',
        empSsn: '123-45-6789',
        empId: 'A17447',
        payDate: new Date ( '10/05/2018' ),
        periodBegin: new Date ( '09/13/2018' ),
        periodEnd: new Date ( '09/27/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123460',
        empName: 'KEELEY ABRAMO',
        empSsn: '123-45-9876',
        empId: 'R98845',
        payDate: new Date ( '10/05/2018' ),
        periodBegin: new Date ( '09/13/2018' ),
        periodEnd: new Date ( '09/27/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123460',
        empName: 'ANTON ACOSTA',
        empSsn: '654-12-7896',
        empId: 'G85782',
        payDate: new Date ( '10/05/2018' ),
        periodBegin: new Date ( '09/13/2018' ),
        periodEnd: new Date ( '09/27/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123461',
        empName: 'MARIO AGUILAR',
        empSsn: '754-13-7896',
        empId: 'H93637',
        payDate: new Date ( '10/05/2018' ),
        periodBegin: new Date ( '09/13/2018' ),
        periodEnd: new Date ( '09/27/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },
      {
        batchNo: '123461',
        empName: 'ROIVIN ALTUZAR MARTINEZ',
        empSsn: '854-14-7896',
        empId: 'L84530',
        payDate: new Date ( '10/05/2018' ),
        periodBegin: new Date ( '09/13/2018' ),
        periodEnd: new Date ( '09/27/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },

      {
        batchNo: '123458',
        empName: 'DYLAN ABRAHAMS',
        empSsn: '123-45-6789',
        empId: 'A17447',
        payDate: new Date ( '09/21/2018' ),
        periodBegin: new Date ( '08/29/2018' ),
        periodEnd: new Date ( '09/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123458',
        empName: 'KEELEY ABRAMO',
        empSsn: '123-45-9876',
        empId: 'R98845',
        payDate: new Date ( '09/21/2018' ),
        periodBegin: new Date ( '08/29/2018' ),
        periodEnd: new Date ( '09/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123458',
        empName: 'ANTON ACOSTA',
        empSsn: '654-12-7896',
        empId: 'G85782',
        payDate: new Date ( '09/21/2018' ),
        periodBegin: new Date ( '08/29/2018' ),
        periodEnd: new Date ( '09/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123459',
        empName: 'MARIO AGUILAR',
        empSsn: '754-13-7896',
        empId: 'H93637',
        payDate: new Date ( '09/21/2018' ),
        periodBegin: new Date ( '08/29/2018' ),
        periodEnd: new Date ( '09/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },
      {
        batchNo: '123459',
        empName: 'ROIVIN ALTUZAR MARTINEZ',
        empSsn: '854-14-7896',
        empId: 'L84530',
        payDate: new Date ( '09/21/2018' ),
        periodBegin: new Date ( '08/29/2018' ),
        periodEnd: new Date ( '09/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },

      {
        batchNo: '123456',
        empName: 'DYLAN ABRAHAMS',
        empSsn: '123-45-6789',
        empId: 'A17447',
        payDate: new Date ( '09/07/2018' ),
        periodBegin: new Date ( '08/14/2018' ),
        periodEnd: new Date ( '08/28/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123456',
        empName: 'KEELEY ABRAMO',
        empSsn: '123-45-9876',
        empId: 'R98845',
        payDate: new Date ( '09/07/2018' ),
        periodBegin: new Date ( '08/14/2018' ),
        periodEnd: new Date ( '08/28/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123456',
        empName: 'ANTON ACOSTA',
        empSsn: '654-12-7896',
        empId: 'G85782',
        payDate: new Date ( '09/07/2018' ),
        periodBegin: new Date ( '08/14/2018' ),
        periodEnd: new Date ( '08/28/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      },
      {
        batchNo: '123457',
        empName: 'MARIO AGUILAR',
        empSsn: '754-13-7896',
        empId: 'H93637',
        payDate: new Date ( '09/07/2018' ),
        periodBegin: new Date ( '08/14/2018' ),
        periodEnd: new Date ( '08/28/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      },
      {
        batchNo: '123457',
        empName: 'ROIVIN ALTUZAR MARTINEZ',
        empSsn: '854-14-7896',
        empId: 'L84530',
        payDate: new Date ( '09/07/2018' ),
        periodBegin: new Date ( '08/14/2018' ),
        periodEnd: new Date ( '08/28/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 7000,
        fedIncTax: 500,
        fica: 300,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 2000,
        netPay: 5000,
        weeksWorked: 2
      }
    ];

    const ReportsPayrollVoucherSummary: PayrollVoucherDetail[] = [
      {
        batchNo: '123462',
        empName: 'APSEY LOREN',
        empSsn: '123-45-6789',
        empId: 'A17447',
        payDate: new Date ( '10/19/2018' ),
        periodBegin: new Date ( '09/28/2018' ),
        periodEnd: new Date ( '10/12/2018' ),
        regHours: 80,
        premHours: 0,
        grossPay: 6000,
        fedIncTax: 400,
        fica: 200,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 1000,
        netPay: 4000,
        weeksWorked: 2
      }, {
        batchNo: '123462',
        empName: 'BARNES ELSA',
        empSsn: '123-45-6789',
        empId: 'A174s47',
        payDate: new Date ( '4/15/2016' ),
        periodBegin: new Date ( '04/04/2016' ),
        periodEnd: new Date ( '5/15/2016' ),
        regHours: 240,
        premHours: 0,
        grossPay: 34615.38,
        fedIncTax: 9271.92,
        fica: 2609.82,
        stateIncTax: 0,
        otherTaxes: 0,
        payrollDeducts: 500,
        netPay: 22233.64,
        weeksWorked: 6
      }];

    const ReportsHRTerminationReport: ReportsHRTermination[] = [
      {
        termDate: new Date ('09/01/2016'),
        employeeName: 'APSEY LOREN',
        employeeTitle: 'ANALYST',
        employeeDept: 'IT',
        employeeLoc: 'SOUTH FLORIDA',
        employeeDiv: 'WORKERS COMP',
        termReason: '100 - NO SHOW',
        hireDate: new Date ('09/01/2017'),
        yearsService: 1,
        annualPay: 60000,
        status: 'TERM',
        rehireOkay: 'N',
        garnFlag: 'N',
        clientId: 243,
        eeId: 'A12345'
      },
      {
        termDate: new Date ('08/01/2017'),
        employeeName: 'LISA BARNES',
        employeeTitle: 'MANAGER',
        employeeDept: 'OPERATIONS',
        employeeLoc: 'CENTERAL FLORIDA',
        employeeDiv: 'PAYROLL',
        termReason: '200 - RELOCATED',
        hireDate: new Date ('01/01/2016'),
        yearsService: 1.67,
        annualPay: 70000,
        status: 'TERM',
        rehireOkay: 'N',
        garnFlag: 'N',
        clientId: 243,
        eeId: 'B12345'
      },
      {
        termDate: new Date ('08/01/2018'),
        employeeName: 'JOHN SMITH',
        employeeTitle: 'WAREHOUSE OPERATOR',
        employeeDept: 'OPERATIONS',
        employeeLoc: 'NORTH FLORIDA',
        employeeDiv: 'OPS',
        termReason: '300 - QUIT',
        hireDate: new Date ('01/01/2018'),
        yearsService: .67,
        annualPay: 65000,
        status: 'TERM',
        rehireOkay: 'Y',
        garnFlag: 'Y',
        clientId: 243,
        eeId: 'C12345'
      },
      {
        termDate: new Date ('08/01/2018'),
        employeeName: 'JANE SMITH',
        employeeTitle: 'SALESPERSON',
        employeeDept: 'SALES',
        employeeLoc: 'SOUTH FLORIDA',
        employeeDiv: 'PAYROLL',
        termReason: '200 - RELOCATED',
        hireDate: new Date ('07/01/2018'),
        yearsService: .08,
        annualPay: 75000,
        status: 'TERM',
        rehireOkay: 'N',
        garnFlag: 'N',
        clientId: 243,
        eeId: 'D12345'
      },
      {
        termDate: new Date ('08/01/2018'),
        employeeName: 'ALISA SMITH',
        employeeTitle: 'PAYROLL ADMIN',
        employeeDept: 'PAYROLL',
        employeeLoc: 'CENTERAL FLORIDA',
        employeeDiv: 'PAYROLL',
        termReason: '100 - NO SHOW',
        hireDate: new Date ('01/01/2018'),
        yearsService: .67,
        annualPay: 50000,
        status: 'TERM',
        rehireOkay: 'Y',
        garnFlag: 'N',
        clientId: 243,
        eeId: 'E12345'
      },      {
        termDate: new Date ('08/01/2018'),
        employeeName: 'ERIC HANS',
        employeeTitle: 'MANAGER',
        employeeDept: 'WORKERS COMP',
        employeeLoc: 'SOUTH FLORIDA',
        employeeDiv: 'WORKERS COMP',
        termReason: '300 - QUIT',
        hireDate: new Date ('06/01/2018'),
        yearsService: .17,
        annualPay: 70000,
        status: 'TERM',
        rehireOkay: 'N',
        garnFlag: 'N',
        clientId: 243,
        eeId: 'F12345'
      }
    ];

    const ReportsW2AddressChangeReport: ReportsW2AddressChange[] = [
      {
        eeId: 'A12345',
        employeeName: 'APSEY LOREN',
        address1: '123 MAIN ST',
        address2: 'APT 100',
        city: 'WEST PALM BEACH',
        state: 'FL',
        zip: 33411,
        w2address1: '123 MAIN ST',
        w2address2: 'APT 100',
        w2city: 'WEST PALM BEACH',
        w2state: 'FL',
        w2zip: 33411,
      },
      {
        eeId: 'B12345',
        employeeName: 'JOHN SMITH',
        address1: '456 MAIN ST',
        address2: '',
        city: 'WEST PALM BEACH',
        state: 'FL',
        zip: 33411,
        w2address1: '456 MAIN ST',
        w2address2: '',
        w2city: 'WEST PALM BEACH',
        w2state: 'FL',
        w2zip: 33411,
      },
      {
        eeId: 'C12345',
        employeeName: 'JANE SMITH',
        address1: '100 WINDING LN',
        address2: '',
        city: 'PALM BEACH GARDENS',
        state: 'FL',
        zip: 33418,
        w2address1: '100 WINDING LN',
        w2address2: 'APT 100',
        w2city: 'PALM BEACH GARDENS',
        w2state: 'FL',
        w2zip: 33418,
      },
      {
        eeId: 'D12345',
        employeeName: 'JIM BARNES',
        address1: '300 NE AVE',
        address2: 'UNIT 200',
        city: 'WEST PALM BEACH',
        state: 'FL',
        zip: 33411,
        w2address1: '300 NE AVE',
        w2address2: 'UNIT 200',
        w2city: 'WEST PALM BEACH',
        w2state: 'FL',
        w2zip: 33411,
      },
      {
        eeId: 'E12345',
        employeeName: 'ELSA LAUREN',
        address1: '50 PEACHTREE ST',
        address2: '',
        city: 'NORTH PALM BEACH',
        state: 'FL',
        zip: 33418,
        w2address1: '50 PEACHTREE ST',
        w2address2: '',
        w2city: 'NORTH PALM BEACH',
        w2state: 'FL',
        w2zip: 33418,
      },
      {
        eeId: 'F12345',
        employeeName: 'GEORGE TAKEI',
        address1: '1701 NCC ST',
        address2: '',
        city: 'WEST KHAN BEACH',
        state: 'FL',
        zip: 33411,
        w2address1: '1701 NCC ST',
        w2address2: '',
        w2city: 'WEST KHAN BEACH',
        w2state: 'FL',
        w2zip: 33411,
      },
    ];


    const agreement: IAgreement = {
      content: 'Client agrees and accepts that it is solely responsible for the entry of payroll data into Oasis'
    };

    const documentsAndForms: FileLink[] = [
      {
        title: 'Separation Form',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'Employee Leave and Return',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'Employee Rehire Form',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'HIPAA Privacy Notice',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'Separation Form 2',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'Employee Leave and Return 2',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'Employee Rehire Form 2',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      },
      {
        title: 'HIPAA Privacy Notice 2',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf'
      }
    ];

    const gettingStartedDocumentsAndForms: FileLink[] = [
      {
        title: 'Onboarding Overview',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf',
        type: 'pdf'
      },
      {
        title: 'Implementation Checklist',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf',
        type: 'pdf'
      },
      {
        title: 'Getting Started Reference Guide',
        url: '/assets/pdf/samplePDFForPrint.pdf',
        name: 'samplePDFForPrint.pdf',
        type: 'pdf'
      },
      {
        title: 'Getting Started Demo Video',
        url: 'http://www.oasisadvantage.com/',
        name: 'samplePDFForPrint.pdf',
        type: 'video'
      }
    ];

    // const ClientEmployeeProjectDetailsData: ClientEmployeeProjectDetails[] = [];
    const ClientEmployeeProjectDetailsData: ClientEmployeeProjectDetails[] = [
      { projectName: 'Getting Started', taskName: 'Getting Started Application', projectStatusColor: 'blue', dueDate: '08/01/2018', dueDateRedAlert: false, totalSteps: 6, stepsCompleted: 5 },
      { projectName: 'Workers Comp', taskName: 'Obtain copy of marriage certificate', projectStatusColor: 'blue', dueDate: '07/28/2018', dueDateRedAlert: true, totalSteps: 8, stepsCompleted: 5 },
      { projectName: 'Getting Started', taskName: 'Setup New Client', projectStatusColor: 'green', dueDate: '07/01/2018', dueDateRedAlert: false, totalSteps: 6, stepsCompleted: 6 },
      { projectName: 'Benefits', taskName: 'Benefits Enrollment', projectStatusColor: 'blue', dueDate: '09/01/2018', dueDateRedAlert: false, totalSteps: 6, stepsCompleted: 2 },
      { projectName: 'Payroll', taskName: 'Setup Orientation', projectStatusColor: 'green', dueDate: '07/15/2018', dueDateRedAlert: false, totalSteps: 5, stepsCompleted: 5 },
      { projectName: 'Getting Started', taskName: 'Application Access', projectStatusColor: 'red', dueDate: '07/20/2018', dueDateRedAlert: true, totalSteps: 4, stepsCompleted: 1 },
      { projectName: 'Payroll', taskName: 'Setup New Client', projectStatusColor: 'blue', dueDate: '08/01/2018', dueDateRedAlert: false, totalSteps: 7, stepsCompleted: 5 },
      { projectName: 'Workers Comp', taskName: 'Read books', projectStatusColor: 'blue', dueDate: '08/28/2018', dueDateRedAlert: false, totalSteps: 8, stepsCompleted: 5 }
    ];

    const ClientEmployeeOrientationData: any[] = [
      {
        title: `Welcome Letter`,
        body: `Sub heading lorem ipsum gravitas vivmus.
         The 60-day comment period for all issues raised in the RFI ends on September 25, 2017.
        The public may submit comments according to the instructions listed in the RFI as published in the Federal Register.`,
        visibleOnDashboard: true,
        anchorID: 'news1'
      },
      {
        title: `Sub heading lorem ipsum gravitas vivmus`,
        body: `Sub heading gravitas vivmus lorem ipsum.
         Employers must continue following existing storage and retention rules for any previously completed Form I-9s.`,
        visibleOnDashboard: true,
        anchorID: 'news2'
      },
      {
        title: `System Requirements`,
        body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
         In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
          bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
           turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
            blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
             Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
              Nullam ultrices maximus libero et blandit nibh bibendum.`,
        visibleOnDashboard: true,
        anchorID: 'news3'
      },
      {
        title: `Electronic Onboarding Demo`,
        body: `Diam metus, bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex
         consectetur arcu quis imperdiet turpis ipsum ac augue phasellus sagittis`,
        visibleOnDashboard: true,
        anchorID: 'news4'
      },
      {
        title: `Electronic Onboarding Presentation Guide`,
        body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
        In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
         bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
          turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
           blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
            Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
             Nullam ultrices maximus libero et blandit nibh bibendum.`,
        visibleOnDashboard: true,
        anchorID: 'news5'
      },
      {
        title: `IRS updates for tax year 2018`,
        body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
         In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
          bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
           turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
            blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
             Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
              Nullam ultrices maximus libero et blandit nibh bibendum.`,
        visibleOnDashboard: true,
        anchorID: 'news6'
      }
    ];

    const alertModal: AlertModal[] = [{
      isNew: true,
      alertsList: [{
                  type: 'success',
                  message: 'Alison Taylor just completed her onboarding.',
                  time: '3 hours ago'
                }, {
                  type: 'warning',
                  message: 'Your payroll is due in two days on 8/15/18.',
                  time: '6 hours ago'
                }, {
                  type: 'danger',
                  message: 'Payroll batch 1234 is two days overdue.',
                  time: '2 days ago'
                }, {
                  type: 'warning',
                  message: 'Your open enrollment period starts on 9/15/2018.',
                  time: '4 days ago'
                }, {
                  type: 'success',
                  message: 'Your request for 30 vacation days has been approved. Get packing!',
                  time: '5 days ago'
                }, {
                  type: 'success',
                  message: 'Joseph Spencer just started FMLA.',
                  time: '10 days ago'
                }]
    }];

    const alertModalEmployee: AlertModal[] = [{
      isNew: true,
      alertsList: [{
        type: 'success',
        message: 'The employee just completed her onboarding.',
        time: '3 hours ago'
      }, {
        type: 'warning',
        message: 'Your employee payroll is due in two days on 8/15/18.',
        time: '6 hours ago'
      }, {
        type: 'danger',
        message: 'Payroll batch 1234 is two days overdue.',
        time: '2 days ago'
      }, {
        type: 'warning',
        message: 'Your open enrollment period starts on 9/15/2018.',
        time: '4 days ago'
      }, {
        type: 'success',
        message: 'Your request for 30 vacation days has been approved. Get packing!',
        time: '5 days ago'
      }, {
        type: 'success',
        message: 'Joseph Spencer just started FMLA.',
        time: '10 days ago'
      }]
    }];

    const search_client: SearchResult[] = [{
      type: 'DOCUMENTS AND FORMS',
      description: 'Separation Form',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'Employee Leave and Return',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'Employee Rehire Form',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'HIPAA Privacy Notice',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'REPORTS',
      description: 'Employee 401(k) Summary',
      actionUrl: '/client/reports/reports-listing/401k-summary-report'
    }, {
      type: 'REPORTS',
      description: ' Employee 401(k) Summary By Date Range',
      actionUrl: '/client/reports/reports-listing/401k-summary-report-by-date'
    }, {
      type: 'REPORTS',
      description: 'Benefits Payroll Register',
      actionUrl: '/client/reports/reports-listing/benefits-payroll-register'
    }, {
      type: 'REPORTS',
      description: 'Client Benefit Summary',
      actionUrl: '/client/reports/reports-listing/company-benefits-summary'
    }, {
      type: 'REPORTS',
      description: 'Employee Benefits Register',
      actionUrl: '/client/reports/reports-listing/employee-benefits-register'
    }, {
      type: 'REPORTS',
      description: 'Employee Change',
      actionUrl: '/client/reports/reports-listing/employee-change-summary'
    }, {
      type: 'REPORTS',
      description: 'Employee Personal Change',
      actionUrl: '/client/reports/reports-listing/employee-personal-change-summary'
    }, {
      type: 'REPORTS',
      description: 'Birthdays',
      actionUrl: '/client/reports/reports-listing/birthdays-summary'
    }, {
      type: 'REPORTS',
      description: 'Census',
      actionUrl: '/client/reports/reports-listing/census-summary'
    }, {
      type: 'REPORTS',
      description: 'Employee Listing',
      actionUrl: '/client/reports/reports-listing/employee-listing-summary'
    }
    ];

    const search_employee: SearchResult[] = [{
      type: 'DOCUMENTS AND FORMS',
      description: 'Separation Form',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'Employee Leave and Return',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'Employee Rehire Form',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'DOCUMENTS AND FORMS',
      description: 'HIPAA Privacy Notice',
      actionUrl: 'assets/pdf/samplePDFForPrint.pdf',
      externalLink: true
    }, {
      type: 'LINKS',
      description: 'Dashboard',
      actionUrl: '/employee/dashboard'
     }, {
     type: 'LINKS',
     description: 'Profile',
     actionUrl: '/employee/profile'
     }, {
     type: 'LINKS',
     description: 'Benefits',
     actionUrl: '/employee/benefits'
     }, {
     type: 'LINKS',
     description: 'Compensation',
     actionUrl: '/employee/compensation'
     }, {
      type: 'LINKS',
      description: 'Human Resources',
      actionUrl: '/employee/human-resources'
    }, {
      type: 'LINKS',
      description: 'Perks & Discounts',
      actionUrl: '/employee/perks-discounts'
    }, {
      type: 'PERKS & DISCOUNTS',
      description: 'Dept Management Credit Counseling Corp',
      actionUrl: '/employee/perks-discounts'
    }, {
      type: 'PERKS & DISCOUNTS',
      description: 'Brooks Brothers',
      actionUrl: '/employee/perks-discounts'
    }, {
      type: 'PERKS & DISCOUNTS',
      description: '(SSO) Working Advantage',
      actionUrl: '/employee/perks-discounts'
    }, {
      type: 'PERKS & DISCOUNTS',
      description: 'Rental Car',
      actionUrl: '/employee/perks-discounts'
    }
    ];

    const employeeDirectDeposit: EmployeeDirectDeposit[] = [{
        id: 'ED-001',
        type: 'TY-001',
        transitNumber: '005021',
        bankName: 'BN-001',
        account: 'xxxx56789',
        method: 'MT-F',
        amount: 10.00,
        limit: 5000,
        status: 'ST-001'
      }, {
        id: 'ED-002',
        type: 'TY-002',
        transitNumber: '005022',
        bankName: 'BN-002',
        account: 'xxxx98888',
        method: 'MT-P',
        amount: 100,
        limit: 7500,
        status: 'ST-002'
      }, {
        id: 'ED-003',
        type: 'TY-002',
        transitNumber: '005023',
        bankName: 'BN-001',
        account: 'xxxx56789',
        method: 'MT-F',
        amount: 150,
        limit: 6800,
        status: 'ST-001'
      }];

    const typeDirectDeposit: IDataDriven[] = [{
        ID: 'TY-001',
        Text: 'C'
      }, {
        ID: 'TY-002',
        Text: 'S'
    }];

    const accountDirectDeposit: IDataDriven[] = [{
        ID: 'AC-001',
        Text: 'xxxx56789'
      }, {
        ID: 'AC-002',
        Text: 'xxxx98888'
      }];

    const bankName: IDataDriven[] = [{
      ID: 'BN-001',
      Text: 'Bank of America'
    }, {
      ID: 'BN-002',
      Text: 'U.S. Bancorp'
    }];

    const methodDirectDeposit: IDataDriven[] = [{
      ID: 'MT-F',
      Text: 'Fixed'
    }, {
      ID: 'MT-P',
      Text: 'Percent'
    }];

    const amountDirectDeposit: IDataDriven[] = [{
        ID: 'AM-001',
        Text: '$10.00'
      }, {
        ID: 'AM-002',
        Text: 'BALANCE'
      }];

    const statusDirectDeposit: IDataDriven[] = [{
        ID: 'ST-001',
        Text: 'Deposit Active'
      },
      {
        ID: 'ST-002',
        Text: 'Deposit Inactive'
      }];

    const perksDiscountCards: IPerkDiscountCard[] = [
      {
        tag: 'financial-services',
        image: 'https://picsum.photos/341/120?image=600',
        companyName: 'Debt Management Credit Counseling Corp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit',
        pdf: '',
      },
      {
        tag: 'financial-services',
        image: 'https://picsum.photos/341/120?image=701',
        companyName: 'Home Point Financial Mortgage',
        description: 'Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.',
        pdf: '',
      },
      {
        tag: 'education-discounts',
        image: 'https://picsum.photos/341/120?image=602',
        companyName: 'Keiser Tuition Assistance Program',
        description: 'Consectetur adipiscing elit. Quisque sapien velit nam eu neque vulputate diam rhoncus faucibus.',
        pdf: '',
      },
      {
        tag: 'education-discounts',
        image: 'https://picsum.photos/341/120?image=603',
        companyName: 'Keiser School of Golf',
        description: 'Quisque sapien velit nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero.',
        pdf: '',
      },
      {
        tag: 'education-discounts',
        image: 'https://picsum.photos/341/120?image=604',
        companyName: 'College Savings Plan',
        description: 'Cras metus velit, elementum sed pellentesque a, pharetra eu eros.',
        pdf: '',
      },
      {
        tag: 'health-wellness',
        image: 'https://picsum.photos/341/120?image=605',
        companyName: 'Anytime Fitness',
        description: 'Aliquam placerat sem at mauris suscipit porta. Cras metus velit.',
        pdf: '',
      },
      {
        tag: 'health-wellness',
        image: 'https://picsum.photos/341/120?image=606',
        companyName: 'Medi-Weightloss Clinics',
        description: 'In ornare, massa a cursus cursus, nisl mi ornare mauris, nec porttitor risus erat ut odio.',
        pdf: '',
      },
      {
        tag: 'health-wellness',
        image: 'https://picsum.photos/341/120?image=607',
        companyName: 'Denta Choice',
        description: 'Vivamus facilisis orci rutrum nulla porta dignissim.',
        pdf: '',
      },
      {
        tag: 'discount-programs',
        image: 'https://picsum.photos/341/120?image=608',
        companyName: 'Petfirst Pet Insurance',
        description: 'Fusce fermentum id nibh laoreet volutpat. Suspendisse venenatis, risus sed euismod finibus.',
        pdf: '',
      },
      {
        tag: 'discount-programs',
        image: 'https://picsum.photos/341/120?image=609',
        companyName: 'PetAfford Discount Program',
        description: 'Suspendisse venenatis, risus sed euismod finibus, risus arcu fringilla augue.',
        pdf: '',
      },
      {
        tag: 'discount-programs',
        image: 'https://picsum.photos/341/120?image=610',
        companyName: 'USA PetMeds',
        description: 'Integer malesuada hendrerit purus ullamcorper molestie. Fusce imperdiet orci.',
        pdf: '',
      },
      {
        tag: 'travel-entertainment',
        image: 'https://picsum.photos/341/120?image=611',
        companyName: 'Tickets at Work',
        description: 'Sed vel placerat lectus. Pellentesque habitant morbi tristique.',
        pdf: '',
      },
      {
        tag: 'travel-entertainment',
        image: 'https://picsum.photos/341/120?image=612',
        companyName: 'WMPH Vacations',
        description: 'Pellentesque pharetra felis sit amet erat pellentesque malesuada.',
        pdf: '',
      },
      {
        tag: 'travel-entertainment',
        image: 'https://picsum.photos/341/120?image=613',
        companyName: 'Shula’s Steaks',
        description: 'In urna ante, consectetur ac nunc in, hendrerit elementum lacus.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=614',
        companyName: 'Working Advantage',
        description: 'Aliquam euismod lobortis enim et condimentum. Suspendisse pharetra.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=615',
        companyName: '1-800 Flowers',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=616',
        companyName: 'AT&T',
        description: 'Aenean ullamcorper at erat a dictum. Donec vel nulla elit.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=617',
        companyName: 'Brooks Brothers',
        description: 'Maecenas suscipit luctus enim, ut facilisis elit venenatis ut.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=618',
        companyName: 'Coast-to-Coast Florist',
        description: 'Suspendisse potenti. Sed a euismod mi.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=619',
        companyName: 'Costco',
        description: 'Vivamus posuere, arcu nec tincidunt eleifend, ligula metus convallis odio.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=620',
        companyName: 'KS Design Gift Baskets',
        description: 'Curabitur facilisis, purus sed placerat blandit, risus massa sollicitudin dolor.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=621',
        companyName: 'Nest Fragrances',
        description: 'Suspendisse ac neque ut leo placerat vehicula. Morbi volutpat nunc ac finibus mollis.',
        pdf: '',
      },
      {
        tag: 'retail',
        image: 'https://picsum.photos/341/120?image=622',
        companyName: 'Shoes for Crews',
        description: 'Phasellus quis lorem bibendum, eleifend massa eu, vulputate urna. Sed et sodales dui.',
        pdf: '',
      }
    ];

    const garnishmentsDocketReportData: any[] = [{
      'Docket Number': '81212003',
      'Receipt Date': '01/31/2014',
      'Issuing Authority': 'State of FI',
      'Category': 'Child Support',
      'Garnishment Limit': '',
      'Flat Amount': '100.00',
      'Start Date': '02/01/2014',
      'Stop Date': '',
      'Pay Period Limit': '',
      'Payee ID': '',
      'Deduction Code': 'CHDSUPP - Child Support',
      'Garnishment Fee': '2.00',
      'Maximum Garnishment %': '',
      'Maximum Basis': '',
      'Supress Pay Times': '',
      'Annotation': '',
      'Override Amount': '',
      'Override Start Date': '',
      'Override Stop Date': ''
    },
    {
      'Docket Number': '81212004',
      'Receipt Date': '01/31/2014',
      'Issuing Authority': 'State of FI',
      'Category': 'Child Support',
      'Garnishment Limit': '',
      'Flat Amount': '100.00',
      'Start Date': '02/01/2014',
      'Stop Date': '',
      'Pay Period Limit': '',
      'Payee ID': '',
      'Deduction Code': 'CHDSUPP - Child Support',
      'Garnishment Fee': '2.00',
      'Maximum Garnishment %': '',
      'Maximum Basis': '',
      'Supress Pay Times': '',
      'Annotation': '',
      'Override Amount': '',
      'Override Start Date': '',
      'Override Stop Date': ''
    },
    {
      'Docket Number': '81212005',
      'Receipt Date': '01/31/2014',
      'Issuing Authority': 'State of FI',
      'Category': 'Child Support',
      'Garnishment Limit': '',
      'Flat Amount': '100.00',
      'Start Date': '02/01/2014',
      'Stop Date': '',
      'Pay Period Limit': '',
      'Payee ID': '',
      'Deduction Code': 'CHDSUPP - Child Support',
      'Garnishment Fee': '2.00',
      'Maximum Garnishment %': '',
      'Maximum Basis': '',
      'Supress Pay Times': '',
      'Annotation': '',
      'Override Amount': '',
      'Override Start Date': '',
      'Override Stop Date': ''
    }];

    const garnishmentsDocketReportsIDX: string[] = ['81212003', '81212004', '81212005'];

    var selectedGarnishmentReportIdx = '81212003';
    return {
      agreement,
      client,
      benefits,
      messages,
      announcements,
      header,
      header_client,
      offer,
      paySummary,
      leaveTracker,
      my401kData,
      newsModal,
      newsEmployeeModal,
      myTasks,
      dashboardContacts,
      dashboardContactsEmployee,
      dashboardSlides,
      dashboardSlidesEmployee,
      subnav,
      subnavForReports,
      subnavForCompensation,
      clientEmployeesList,
      USStates,
      clientContacts,
      ClientEmployeeHrEventAssignmentList,
      ClientEmployeeHrEventAssignmentEventCodesList,
      ClientEmployeePayrollLoansList,
      ClientEmployeePayrollLoanStatusList,
      ClientEmployeePayrollLoanReasonList,
      ClientEmployeePayrollLoanPaymentFrequencyList,
      ClientEmployeeScheduledPaymentsList,
      ClientEmployeeScheduledPaymentsStatusList,
      ClientEmployeeScheduledPaymentsPayCodesList,
      ClientEmployeeRecurringDeductionsList,
      ClientEmployeeRecurringDeductionFrequencyList,
      ClientEmployeeRecurringDeductionTypeList,
      ClientEmployeeRecurringDeductionPeriodList,
      ClientEmployeePTO,
      ClientEmployeePTOSummary,
      ClientEmployee401kSummary,
      ClientBenefitSummaryReport,
      Reports401kSummaryReport,
      EmployeeReports401kSummaryReport,
      ReportsEmployeeBenefitsRegisterReport,
      GenderList,
      MaritalStatusList,
      EthnicityList,
      InterRelationshipList,
      ClientEmployeeJobRatesList,
      ClientEmployeeJobRatesJobCodeList,
      ClientEmployeeJobRatesPayCodeList,
      ClientEmployeeSkillCodeAssignmentList,
      ClientEmployeeSkillCodeTypesList,
      ClientBenefitsPlanList,
      EmployeeBenefitsPlanList,
      ClientEmployeeBarchartForTimeBasedActivityData,
      ClientEmployeeBarchartForActivityData,
      ClientSupportAnalyticsPieData,
      ClientSupportAnalyticsHorizontalBarData,
      supportListOfCases,
      workersCompOpenClaims,
      documentsAndForms,
      gettingStartedDocumentsAndForms,
      ClientEmployeeProjectDetailsData,
      ClientEmployeeOrientationData,
      alertModal,
      alertModalEmployee,
      ReportsInvoiceReprintReport,
      InvoiceReprintDataReport,
      ReportsAverageHoursReport,
      ReportsWagesEarnings,
      ReportsWagesEarningsSummary,
      ReportsEarningsSummary,
      ReportsEarningsDetail,
      ReportsPayrollVoucherDetail,
      EmployeeReportsPayHistory,
      EmployeeReportsEmployeeInformationReport,
      EmployeeReportAverageHoursReport,
      ReportsPersonalChangeReport,
      ReportsPayrollVoucherSummary,
      ReportsReportCreatorList,
      ReportsHRTerminationReport,
      ReportsW2AddressChangeReport,
      EmployeeReportsJobHistory,
      EmployeeReportsStatusInquiry,
      EmployeeReportsScheduledDeductions,
      search_client,
      search_employee,
      CompensationEarningsSumamry,
      CompensationDeductionDetailData,
      CompensationEarningDetailsData,
      CompensationTaxData,
      employeeDirectDeposit,
      typeDirectDeposit,
      accountDirectDeposit,
      bankName,
      methodDirectDeposit,
      amountDirectDeposit,
      statusDirectDeposit,
      perksDiscountCards,
      garnishmentsDocketReportData,
      garnishmentsDocketReportsIDX,
      selectedGarnishmentReportIdx
    };
  }
}

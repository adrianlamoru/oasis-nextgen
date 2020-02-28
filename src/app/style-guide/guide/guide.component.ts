import {
  Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges,
  ViewChild, ElementRef, HostListener, DoCheck
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../shared/utils/ngbDateCustomFormatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule, DxDataGridComponent, DxPolarChartModule } from 'devextreme-angular';

import { NewsService, StatesService, HeaderService } from '../../shared/services';
import {
  NewsModal, States, LoginModel, PieData, HistogramData,
  StackedData, StackedHorizontalData, AreaData, SpiderData, Header, portalType, ChooseColumnsModal
} from '../../shared/models';
import { CurrencyPipe } from '@angular/common';
import { Element } from '@angular/compiler';
import { StepWidget } from '../../shared/models/step-widget';
import { PhoneMask } from '../../shared/directives';
import { FormGroup, FormControl } from '@angular/forms';


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const now = new Date();

@Component({
  templateUrl: './guide.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./guide.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})

export class GuideComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  @ViewChild('navbar') navbar: ElementRef;

  @ViewChild('moreDropdown') moreDropdown: ElementRef;

  public model: any;
  public radioModel: any;
  public datePickerDate: NgbDateStruct;
  public clientHeader: Header;

  step: StepWidget = {
    step: 1,
    stepName: 'Getting Started',
    subSteps: 3,
    status: 'Ready',
    date: new Date(),
    percent: 100,
    color: 'green',
    img: '../../../../assets/images/getting-started/step-1.svg',
    error: false
  };

  navbarCollapsed = true;

  loginModel: LoginModel = {
    loginType: 'Client',
    email: '',
    password: '',
    rememberMe: false
  };

  selectedDropdownState: any = {
    name: 'California',
    abbr: 'CA'
  };

  loginTypes: string[] = ['Client', 'Employee', 'Internal Employee'];
  statesDropdown: any[] = [{
    name: 'Alabama',
    abbr: 'AL'
  },
  {
    name: 'Alaska',
    abbr: 'AK'
  },
  {
    name: 'American Samoa',
    abbr: 'AS'
  },
  {
    name: 'Arizona',
    abbr: 'AZ'
  },
  {
    name: 'Arkansas',
    abbr: 'AR'
  },
  {
    name: 'California',
    abbr: 'CA'
  },
  {
    name: 'Colorado',
    abbr: 'CO'
  }];

  skillDataRows = [{
    'ID': 1,
    'Code': '20185',
    'Description': 'South Florida'
  }, {
    'ID': 2,
    'Code': '35467',
    'Description': 'Union Dues'
  }, {
    'ID': 3,
    'Code': '98745',
    'Description': 'Sales'
  }, {
    'ID': 4,
    'Code': '35467',
    'Description': 'Siesta Time'
  }, {
    'ID': 5,
    'Code': '98745',
    'Description': 'Western Region'
  }];

  subMenuOptions = [
    {
      label: 'Worksite Update',
      route: '#',
      active: true
    },
    {
      label: 'Divisions',
      route: '#',
      active: false
    },
    {
      label: 'Departments',
      route: '#',
      active: false
    },
    {
      label: 'Project',
      route: '#',
      active: false
    },
    {
      label: 'Jobs',
      route: '#',
      active: false
    },
    {
      label: 'General Ledger',
      route: '#',
      active: false
    },
    {
      label: 'Events',
      route: '#',
      active: false
    },
    {
      label: 'Skill Maintenance',
      route: '#',
      active: false
    }
  ];

  searchText = '';
  searchTextDropdown = '';
  searchTextDropdownResults: string[];
  searchResults: string[];
  menuOptions: any;
  navMenuOptions: any;
  moreMenuOptions: any;
  showResponsiveHorizontalMenu = true;

  listOfStates: States[];
  contentReady: boolean;
  selectedStates: string[];
  selectedStatesS = '';
  isDropDownBoxOpened = false;
  isDropDownBoxSOpened = false;
  isDropDownBoxModalOpened = false;
  selectedStatesInModal: '';
  modalInputVal: number;
  showPopupDevEx = false;

  benefitsModal: any = {
    title: `Product Card Title (Type)`,
    body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
      In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
      bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
      turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
      blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
      Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
      Nullam ultrices maximus libero et blandit nibh bibendum.`
  };

  offerModal: any = {
    title: `Product Card Title (Type)`,
    body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
      In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
      bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
      turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
      blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
      Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
      Nullam ultrices maximus libero et blandit nibh bibendum.`
  };

  newsModalData: NewsModal[] = [
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
      The public may submit comments according to the instructions listed in the RFI as published in the Federal Register.`
    },
    {
      title: `Check out the new Updated Form I-9`,
      body: `USCIS released the latest Form I-9, Employment Eligibility Verification, on July 17, 2017.
       Employers are able to use this revised version or continue using Form I-9 with a revision date of 11/14/16 N
       through September 17, 2017. On September 18, 2017, employers must use the revised form with a revision date of 07/17/17 N.
       Oasis will no longer accept the expired version as of that date.
       Employers must continue following existing storage and retention rules for any previously completed Form I-9s.`
    },
    {
      title: `Don’t miss out! Open enrollment starts on June 1st`,
      body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
       In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
        bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
         turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
          blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
           Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
            Nullam ultrices maximus libero et blandit nibh bibendum.`
    },
    {
      title: `Levatas has uploaded a new Employee Handbook`,
      body: `Diam metus, bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex
       consectetur arcu quis imperdiet turpis ipsum ac augue phasellus sagittis`
    }
  ];

  chooseColumnsModalData: ChooseColumnsModal[] = [
    {
      type: 'COMPANY',
      chooseColumnsData: [
                          {
                            id: 1,
                            title: 'Client Number',
                            state: false
                          },
                          {
                            id: 2,
                            title: 'Company Name',
                            state: false
                          },
                          {
                            id: 3,
                            title: 'Company DBA Name',
                            state: false
                          },
                          {
                            id: 4,
                            title: 'Company EIN Long Number For Testing',
                            state: false
                          }]
    },
    {
      type: 'PERSONAL',
      chooseColumnsData: [
                          {
                            id: 1,
                            title: 'First Name',
                            state: false
                          },
                          {
                            id: 2,
                            title: 'Middle Initial',
                            state: false
                          },
                          {
                            id: 3,
                            title: 'Last Name',
                            state: false
                          },
                          {
                            id: 4,
                            title: 'Age',
                            state: false
                          },
                          {
                            id: 5,
                            title: 'Gender',
                            state: false
                          },
                          {
                            id: 6,
                            title: 'Marital Status',
                            state: false
                          },
                          {
                            id: 7,
                            title: 'Social Security Number',
                            state: false
                          },
                          {
                            id: 8,
                            title: 'Citizenship Long Description For Testing',
                            state: false
                          },
                          {
                            id: 9,
                            title: 'Ethnic Group',
                            state: false
                          }]
    },
    {
      type: 'CONTACT',
      chooseColumnsData: [
                          {
                            id: 1,
                            title: 'Address Line 1',
                            state: false
                          },
                          {
                            id: 2,
                            title: 'Address Line2',
                            state: false
                          },
                          {
                            id: 3,
                            title: 'City',
                            state: false
                          },
                          {
                            id: 4,
                            title: 'State Long Description For Testing',
                            state: false
                          },
                          {
                            id: 5,
                            title: 'Zip',
                            state: false
                          },
                          {
                            id: 6,
                            title: 'Telephone',
                            state: false
                          }]
    }];

  activeIndex;
  toggle = 0;

  SampleTableDataRows = [{
    'Employee': 'Cornelia Parsons',
    'ID': 'W04712',
    'Hrs/Amt': 2541.67,
    'Ded Amt': 0,
    'Reg Pay': 0,
    'Overtime Pay': 450.50,
    'Vacation Pay': 0,
    'Sick Pay': 0,
    'Holiday Pay': 250.10,
    'Bonus': 300,
    'Commission': 50
  },
  {
    'Employee': 'Jason Mathews',
    'ID': 'W04712',
    'Hrs/Amt': 2541.67,
    'Ded Amt': 0,
    'Reg Pay': 0,
    'Overtime Pay': 450.50,
    'Vacation Pay': 0,
    'Sick Pay': 0,
    'Holiday Pay': 250.10,
    'Bonus': 300,
    'Commission': 50
  },
  {
    'Employee': 'Eugenia Steele',
    'ID': 'W04712',
    'Hrs/Amt': 2541.67,
    'Ded Amt': 0,
    'Reg Pay': 0,
    'Overtime Pay': 450.50,
    'Vacation Pay': 0,
    'Sick Pay': 0,
    'Holiday Pay': 250.10,
    'Bonus': 300,
    'Commission': 50
  },
  {
    'Employee': 'James Higgins',
    'ID': 'W04712',
    'Hrs/Amt': 2541.67,
    'Ded Amt': 0,
    'Reg Pay': 0,
    'Overtime Pay': 450.50,
    'Vacation Pay': 0,
    'Sick Pay': 0,
    'Holiday Pay': 250.10,
    'Bonus': 300,
    'Commission': 50
  }];

  /*---CHARTS----*/
  doughnutDataSource: PieData[] = [{
    arg: 'Gross Pay',
    val: 41196.53
  }, {
    arg: 'Deductions',
    val: 34412.78
  }, {
    arg: 'Net Pay ',
    val: 10129.12
  }];

  pieDataSource: PieData[] = [{
    arg: 'New Hires',
    val: 110
  }, {
    arg: 'Pay Rate Change',
    val: 100
  }, {
    arg: 'Status Change',
    val: 72
  }, {
    arg: 'Address Change',
    val: 47
  }, {
    arg: 'Direct Deposit Change',
    val: 46
  }, {
    arg: 'Leave of Absence',
    val: 41
  }];

  histogramDataSource: HistogramData[] = [{
    arg: 'NOV',
    vals: [{
      key: 'vacation',
      name: 'Vacation',
      value: 100
    }, {
      key: 'personal',
      name: 'Personal',
      value: 100
    }, {
      key: 'sick',
      name: 'Sick',
      value: 120
    }
    ]
  }, {
    arg: 'DEC',
    vals: [{
      key: 'vacation',
      name: 'Vacation',
      value: 180
    }, {
      key: 'personal',
      name: 'Personal',
      value: 100
    }, {
      key: 'sick',
      name: 'Sick',
      value: 100
    }
    ]
  }, {
    arg: 'JAN',
    vals: [{
      key: 'vacation',
      name: 'Vacation',
      value: 210
    }, {
      key: 'personal',
      name: 'Personal',
      value: 100
    }, {
      key: 'sick',
      name: 'Sick',
      value: 110
    }
    ]
  }, {
    arg: 'FEB',
    vals: [{
      key: 'vacation',
      name: 'Vacation',
      value: 250
    }, {
      key: 'personal',
      name: 'Personal',
      value: 100
    }, {
      key: 'sick',
      name: 'Sick',
      value: 110
    }
    ]
  }
  ];

  stackedDataSource: StackedData[] = [{
    arg: 'Vacation',
    val1: 7,
    val2: 2
  }, {
    arg: 'Personal',
    val1: 2,
    val2: 2
  }, {
    arg: 'Sick',
    val1: 3,
    val2: 2
  }];

  stackedHorizontalDataSource: StackedHorizontalData[] = [{
    support: '',
    new: 6,
    open: 8,
    complete: 12,
    in_progress: 16
  }];

  areaDataSource: AreaData[] = [{
    arg: new Date(2017, 11, 15),
    val: 22000
  }, {
    arg: new Date(2017, 11, 16),
    val: 21900
  }, {
    arg: new Date(2017, 11, 17),
    val: 21800
  }, {
    arg: new Date(2017, 11, 18),
    val: 21700
  }, {
    arg: new Date(2017, 11, 19),
    val: 21500
  }, {
    arg: new Date(2017, 11, 20),
    val: 21300
  }, {
    arg: new Date(2017, 11, 21),
    val: 21100
  }, {
    arg: new Date(2017, 11, 22),
    val: 20900
  }, {
    arg: new Date(2017, 11, 23),
    val: 20600
  }, {
    arg: new Date(2017, 11, 24),
    val: 20300
  }, {
    arg: new Date(2017, 11, 25),
    val: 20000
  }, {
    arg: new Date(2017, 11, 26),
    val: 19700
  }, {
    arg: new Date(2017, 11, 27),
    val: 19400
  }, {
    arg: new Date(2017, 11, 28),
    val: 19200
  }, {
    arg: new Date(2017, 11, 29),
    val: 19000
  }, {
    arg: new Date(2017, 11, 30),
    val: 18900
  }, {
    arg: new Date(2017, 11, 31),
    val: 18800
  }, {
    arg: new Date(2018, 0, 1),
    val: 18800
  }, {
    arg: new Date(2018, 0, 2),
    val: 18900
  }, {
    arg: new Date(2018, 0, 3),
    val: 19000
  }, {
    arg: new Date(2018, 0, 4),
    val: 19200
  }, {
    arg: new Date(2018, 0, 5),
    val: 19400
  }, {
    arg: new Date(2018, 0, 6),
    val: 19600
  }, {
    arg: new Date(2018, 0, 7),
    val: 19800
  }, {
    arg: new Date(2018, 0, 8),
    val: 20000
  }, {
    arg: new Date(2018, 0, 9),
    val: 20300
  }, {
    arg: new Date(2018, 0, 10),
    val: 20600
  }, {
    arg: new Date(2018, 0, 11),
    val: 20900
  }, {
    arg: new Date(2018, 0, 12),
    val: 21200
  }, {
    arg: new Date(2018, 0, 13),
    val: 21600
  }, {
    arg: new Date(2018, 0, 14),
    val: 22000
  }, {
    arg: new Date(2018, 0, 15),
    val: 22400
  }, {
    arg: new Date(2018, 0, 16),
    val: 22800
  }, {
    arg: new Date(2018, 0, 17),
    val: 23200
  }, {
    arg: new Date(2018, 0, 18),
    val: 23600
  }, {
    arg: new Date(2018, 0, 19),
    val: 24000
  }, {
    arg: new Date(2018, 0, 20),
    val: 24500
  }, {
    arg: new Date(2018, 0, 21),
    val: 25000
  }, {
    arg: new Date(2018, 0, 22),
    val: 25600
  }, {
    arg: new Date(2018, 0, 23),
    val: 26200
  }, {
    arg: new Date(2018, 0, 24),
    val: 26800
  }, {
    arg: new Date(2018, 0, 25),
    val: 27400
  }, {
    arg: new Date(2018, 0, 26),
    val: 28100
  }, {
    arg: new Date(2018, 0, 27),
    val: 28900
  }, {
    arg: new Date(2018, 0, 28),
    val: 29400
  }, {
    arg: new Date(2018, 0, 29),
    val: 29800
  }, {
    arg: new Date(2018, 0, 30),
    val: 30100
  }, {
    arg: new Date(2018, 0, 31),
    val: 30400
  }, {
    arg: new Date(2018, 1, 1),
    val: 30300
  }, {
    arg: new Date(2018, 1, 2),
    val: 30200
  }, {
    arg: new Date(2018, 1, 3),
    val: 30100
  }, {
    arg: new Date(2018, 1, 4),
    val: 30000
  }, {
    arg: new Date(2018, 1, 5),
    val: 29800
  }, {
    arg: new Date(2018, 1, 6),
    val: 29600
  }, {
    arg: new Date(2018, 1, 7),
    val: 29400
  }, {
    arg: new Date(2018, 1, 8),
    val: 29200
  }, {
    arg: new Date(2018, 1, 9),
    val: 29000
  }, {
    arg: new Date(2018, 1, 10),
    val: 28800
  }, {
    arg: new Date(2018, 1, 11),
    val: 28500
  }, {
    arg: new Date(2018, 1, 12),
    val: 28300
  }, {
    arg: new Date(2018, 1, 13),
    val: 28100
  }, {
    arg: new Date(2018, 1, 14),
    val: 27900
  }, {
    arg: new Date(2018, 1, 15),
    val: 27700
  }, {
    arg: new Date(2018, 1, 16),
    val: 27500
  }, {
    arg: new Date(2018, 1, 17),
    val: 27300
  }, {
    arg: new Date(2018, 1, 18),
    val: 27100
  }, {
    arg: new Date(2018, 1, 19),
    val: 27000
  }, {
    arg: new Date(2018, 1, 20),
    val: 26900
  }, {
    arg: new Date(2018, 1, 21),
    val: 26800
  }, {
    arg: new Date(2018, 1, 22),
    val: 26850
  }, {
    arg: new Date(2018, 1, 23),
    val: 26900
  }, {
    arg: new Date(2018, 1, 24),
    val: 26950
  }, {
    arg: new Date(2018, 1, 25),
    val: 27000
  }, {
    arg: new Date(2018, 1, 26),
    val: 27200
  }, {
    arg: new Date(2018, 1, 27),
    val: 27400
  }, {
    arg: new Date(2018, 1, 28),
    val: 27500
  }, {
    arg: new Date(2018, 2, 1),
    val: 27700
  }, {
    arg: new Date(2018, 2, 2),
    val: 28000
  }, {
    arg: new Date(2018, 2, 3),
    val: 28300
  }, {
    arg: new Date(2018, 2, 4),
    val: 28600
  }, {
    arg: new Date(2018, 2, 5),
    val: 28900
  }, {
    arg: new Date(2018, 2, 6),
    val: 29200
  }, {
    arg: new Date(2018, 2, 7),
    val: 29600
  }, {
    arg: new Date(2018, 2, 8),
    val: 30000
  }, {
    arg: new Date(2018, 2, 9),
    val: 30400
  }, {
    arg: new Date(2018, 2, 10),
    val: 30800
  }, {
    arg: new Date(2018, 2, 11),
    val: 31300
  }, {
    arg: new Date(2018, 2, 12),
    val: 31800
  }, {
    arg: new Date(2018, 2, 13),
    val: 32400
  }, {
    arg: new Date(2018, 2, 14),
    val: 33000
  }, {
    arg: new Date(2018, 2, 15),
    val: 33500
  }, {
    arg: new Date(2018, 2, 16),
    val: 34000
  }, {
    arg: new Date(2018, 2, 17),
    val: 34500
  }, {
    arg: new Date(2018, 2, 18),
    val: 35000
  }, {
    arg: new Date(2018, 2, 19),
    val: 35500
  }, {
    arg: new Date(2018, 2, 20),
    val: 36000
  }, {
    arg: new Date(2018, 2, 21),
    val: 36500
  }, {
    arg: new Date(2018, 2, 22),
    val: 37000
  }, {
    arg: new Date(2018, 2, 23),
    val: 36800
  }, {
    arg: new Date(2018, 2, 24),
    val: 36600
  }, {
    arg: new Date(2018, 2, 25),
    val: 36400
  }, {
    arg: new Date(2018, 2, 26),
    val: 36200
  }, {
    arg: new Date(2018, 2, 27),
    val: 36000
  }, {
    arg: new Date(2018, 2, 28),
    val: 35700
  }, {
    arg: new Date(2018, 2, 29),
    val: 35400
  }, {
    arg: new Date(2018, 2, 30),
    val: 35100
  }, {
    arg: new Date(2018, 2, 31),
    val: 34500
  }];

  spiderDataSource = [{
    arg: 'USA',
    apples: 4.21,
    grapes: 6.22,
    lemons: 0.8,
    oranges: 7.47
  }, {
    arg: 'China',
    apples: 3.33,
    grapes: 8.65,
    lemons: 1.06,
    oranges: 5
  }, {
    arg: 'Turkey',
    apples: 2.6,
    grapes: 4.25,
    lemons: 0.78,
    oranges: 1.71
  }, {
    arg: 'Italy',
    apples: 2.2,
    grapes: 7.78,
    lemons: 0.52,
    oranges: 2.39
  }, {
    arg: 'India',
    apples: 2.16,
    grapes: 2.26,
    lemons: 3.09,
    oranges: 6.26
  }];

  myGroup: FormGroup;

  constructor(private modalService: NgbModal,
    private newsService: NewsService,
    private stateServices: StatesService,
    private headerService: HeaderService) {
    this.navMenuOptions = [];
    this.moreMenuOptions = [];
  }

  ngOnInit() {
    this.myGroup = new FormGroup({
      phoneFaxMask: new FormControl()
    });

    this.newsService.getNewsModalData().subscribe(newsModalData => {
      // this.newsModalData = newsModalData;
    });

    /* this.stateServices.getUSStatesData().subscribe( states => {
      this.listOfStates = states;
    }); */

    this.datePickerDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    this.menuOptions = [
      {
        text: 'Dashboard',
        link: 'dashboard',
        active: true
      },
      {
        text: 'Payroll',
        link: 'payroll'
      },
      {
        text: 'Employees',
        link: 'employees'
      },
      {
        text: 'Benefits',
        link: 'benefits'
      },
      {
        text: 'HR Resources',
        link: 'hr-resources'
      },
      {
        text: 'Setup',
        link: 'setup'
      },
      {
        text: 'Workers Comp',
        link: 'workers-comp-and-safety'
      },
      {
        text: 'Projects',
        link: 'projects'
      },
      {
        text: 'Reports',
        link: 'reports'
      },
      {
        text: 'BizVault',
        link: 'bizvault'
      },
      {
        text: 'Support',
        link: 'support'
      },
      {
        text: 'Requirements',
        link: 'requirements'
      }
    ];
    // this.onResize();

    this.headerService.getHeaderData(portalType.client).subscribe(response => {
      this.clientHeader = response;
    });
  }

  ChangeLoginType(newLoginType: string) {
    this.loginModel.loginType = newLoginType;
  }

  ChangeDropdownState(newState: string) {
    this.selectedDropdownState.abbr = newState;
  }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  performSearch() {
    if (this.searchText.length > 2) {
      this.searchResults = states
        .filter(statesItem => statesItem.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      this.searchResults = [];
    }
  }

  performSearchDropdown() {
    console.log('HELLO:' + this.searchTextDropdown);
    if (this.searchTextDropdown.length > 2) {
      this.searchTextDropdownResults = states
        .filter(statesItem => statesItem.toLowerCase().includes(this.searchTextDropdown.toLowerCase()));
    } else {
      this.searchTextDropdownResults = [];
    }
  }

  selectedSearchDropdownItem(selectedItem) {
    this.searchTextDropdown = selectedItem;
  }

  selectedSearchItem(selectedItem) {
    this.searchText = selectedItem;
  }

  changeCodeSelection(item) {
    this.selectedStatesS = item.name;
    this.isDropDownBoxSOpened = !this.isDropDownBoxSOpened;
  }

  changeCodeSelectionInModal(item) {
    this.selectedStatesInModal = item.name;
    this.isDropDownBoxModalOpened = !this.isDropDownBoxModalOpened;
  }

  ngDoCheck(): void {
    this.onResize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onResize();
  }



  openPdf() {
    window.open('/assets/pdf/WebUserAuthorization.pdf', '_blank');
  }

  openLink() {
    window.open('https://www.oasisadvantage.com', '_blank');
  }

  responsiveMenuItems() {
    if (this.menuOptions !== undefined) {

      const totalWidth = this.navbar.nativeElement.clientWidth - 30;
      const rightWidth = 0;
      // const rightWidth = this.rightWidget.nativeElement.clientWidth;

      const companyWidth = 0;
      const limit = Math.round(((totalWidth - (rightWidth + companyWidth)) / 100));
      let count = 0;

      this.navMenuOptions = [];
      this.moreMenuOptions = [];

      const displayMore: boolean = this.navbar.nativeElement.clientWidth >= 576;
      const total: number = this.menuOptions.length;
      this.menuOptions.forEach(element => {
        if (displayMore && total !== limit + 1) {
          if (count < limit) {
            this.navMenuOptions.push(element);
          } else {
            this.moreMenuOptions.push(element);
          }
        } else {
          this.navMenuOptions.push(element);
        }

        count++;
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    // guard against resize before view is rendered
    this.responsiveMenuItems();
  }

  openDevExPopup() {
    this.showPopupDevEx = true;
  }

  closeDevExPopup() {
    this.showPopupDevEx = false;
  }

  open(size, content) {
    this.modalService.open(content, { size: size });
  }

  // syncTreeViewSelection(e:any, cell:any):void {
  //   var component = (e && e.component);

  //   if (!component) return;

  //   this.contentReady = false;
  //   component.unselectAll();

  //   if(cell.value == undefined) cell.setValue([]);

  //   cell.value.forEach( item => {
  //       component.selectItem(item);
  //   });
  //   this.contentReady = true;

  //   var selectAll = document.getElementsByClassName('dx-treeview-select-all-item').item(0);
  //   selectAll.addEventListener('click', function() {
  //     cell.value = component.getSelectedNodesKeys();
  //   });
  // }

  // refreshValues(e:any, cell:any){
  //   cell.setValue(cell.value);
  // }

  // treeView_itemSelectionChanged(e:any, cell:any){
  //     var component = (e && e.component);

  //     if (!component) return;

  //     cell.value = component.getSelectedNodesKeys();
  // }

  // News Modals Links
  clickedNewsModalLink(index, toggle) {
    this.activeIndex = index;
    this.toggle = toggle;
  }
  /*---------------------------------*/

  onEnterKeyDown(event) {
    if (event.event.code === 'Enter') {
      this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
      event.event.stopPropagation();
    }
  }
}

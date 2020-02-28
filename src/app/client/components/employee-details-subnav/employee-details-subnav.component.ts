import { Component, OnInit, ViewChild, ElementRef, HostListener, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee-details-subnav',
  templateUrl: './employee-details-subnav.component.html',
  styleUrls: ['./employee-details-subnav.component.scss']
})
export class EmployeeDetailsSubnavComponent implements OnInit{

  isnavbarMainMenuDropdown1Opened: boolean;
  moreMenuOptions: any[];
  RIGHT_LEFT_MARGIN = 80;

  @ViewChild('navbar') navbar: ElementRef;

  subNavMenuConfig = [
    {
      name: 'Personal Details',
      route: 'personal'
    },
    {
      name: 'Tax Withholding',
      route: 'taxWithholding'
    },
    {
      name: 'Employment',
      route: 'employment'
    },
    {
      name: 'Paid Time Off',
      route: 'paidTimeOff'
    },
    {
      name: 'Benefit Summary',
      route: 'benefitSummary'
    },
    {
      name: '401(k) Summary',
      route: 'emp401KSummary'
    },
    {
      name: 'Employee Reports',
      route: 'employeeReports'
    },
    {
      name: 'Direct Deposit',
      route: 'empDirectDeposit'
    },
    {
      name: 'Documents',
      route: 'empDocuments'
    }
  ];

	empSubNavMenuOptions = [];

  constructor() { }

  ngOnInit() {
    this.moreMenuOptions = [];

    this.onResize();
  }

  // ngDoCheck(): void {
  //   this.onResize();
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.onResize();
  // }

  @HostListener('window:resize')
  onResize() {
    // guard against resize before view is rendered
    this.responsiveMenuItems();
  }

  responsiveMenuItems() {

    // Reset current values
    this.empSubNavMenuOptions = [];
    this.moreMenuOptions = [];

    const headerMenuItems = this.getMenuItems();
    const menuOptionsMaxItems = this.getMenuOptionsMaxItems();

    if (this.displayMore()) {
      for (let i = 0; i < headerMenuItems.length; i++) {
        const menuItem = headerMenuItems[i];
        if (i < menuOptionsMaxItems) {
          this.empSubNavMenuOptions.push(menuItem);
        } else {
          this.moreMenuOptions.push(menuItem);
        }
      }
    } else {
      this.empSubNavMenuOptions = headerMenuItems;
    }
  }

  getMenuOptionsMaxItems() {
    console.log(this.navbar.nativeElement.clientWidth);
    const leftRailWidth = document.getElementById('leftRailMenu').clientWidth;
    const totalWidth = this.navbar.nativeElement.clientWidth - (leftRailWidth / 2) - this.RIGHT_LEFT_MARGIN;
    console.log(Math.round((totalWidth) / 100 ));
    return Math.round((totalWidth) / 100 );
  }

  displayMore() {
    return this.navbar.nativeElement.clientWidth >= 400;
  }

  moreMenuOptionOpenChange(e) {
    const isOpen = e;

    if (this.isnavbarMainMenuDropdown1Opened !== isOpen) {
      this.isnavbarMainMenuDropdown1Opened = isOpen;
    }
  }

  getMenuItems() {
    return this.subNavMenuConfig;
  }

}

import { Component, OnInit, ViewChild, ElementRef, HostListener, OnChanges, DoCheck, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-compensation-details-subnav',
  templateUrl: './compensation-details-subnav.component.html',
  styleUrls: ['./compensation-details-subnav.component.scss']
})
export class CompensationDetailsSubnavComponent implements OnInit {

  isnavbarMainMenuDropdown1Opened: boolean;
  moreMenuOptions: any[];
  RIGHT_LEFT_MARGIN = 80;
  activeTab = 0;

  @ViewChild('navbar') navbar: ElementRef;

  subNavMenuConfig = [
    {
      name: 'Pay Stubs',
      route: 'payStubs'
    },
	{
      name: 'Annual Pay Summary',
      route: 'annualPaySummary'
    },
    {
      name: 'Paid Time Off',
      route: 'paidTimeOff'
    },
    {
      name: 'Garnishments',
      route: 'garnischments'
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
    //console.log(this.navbar.nativeElement.clientWidth);
    const leftRailWidth = document.getElementById('leftRailMenu').clientWidth;
    const totalWidth = this.navbar.nativeElement.clientWidth - (leftRailWidth / 2) - this.RIGHT_LEFT_MARGIN;
    //console.log(Math.round((totalWidth) / 100 ));
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
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  HostListener,
  DoCheck,
  Output,
  EventEmitter,
  ViewContainerRef
} from '@angular/core';

import { Router, ActivatedRoute, NavigationStart, Event } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NgbModal, NgbPopover, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {
  MenuOption,
  Header,
  Company,
  SearchResult,
  AlertData, AlertModal, portalType
} from '../../models';

import {
  AuthService,
  HeaderService,
  AlertsService
} from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck {
  @Input() header: Header;

  @Input() headerType: portalType;

  @Output() isLoadingValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLoading: boolean;
  actionModalHandle: NgbModalRef;

  searchText = '';
  navbarCollapsed = true;
  selectedCompany: Company;
  searchResults: SearchResult[];
  seeAll = false;
  searchModal = null;
  hasNewAlerts = false;

  RIGHT_LEFT_MARGIN = 30;
  boarded = false;

  isnavbarMainMenuDropdown1Opened: boolean;

  navMenuOptions: MenuOption[];
  moreMenuOptions: MenuOption[];
  tempHeaderMenu: MenuOption[];
  alerts: AlertData[];

  @ViewChild('popover') popover: NgbPopover;

  @ViewChild('popoverAlert') popoverAlert: NgbPopover;

  @ViewChild('navbar') navbar: ElementRef;

  @ViewChild('leftnavbar') leftnavbar?: ElementRef;

  @ViewChild('rightWidget') rightWidget: ElementRef;

  @ViewChild('moreDropdown') moreDropdown: ElementRef;

  @ViewChild('navbarLogo') navbarLogo: ElementRef;

  @ViewChild('navbarCompanyLogo') navbarCompanyLogo: ElementRef;

  @ViewChild('navbarCompanies') navbarCompanies: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private authService: AuthService,
    private headerService: HeaderService,
    private alertsService: AlertsService
  ) {
    this.navMenuOptions = [];
    this.moreMenuOptions = [];
    this.tempHeaderMenu = [];
    this.headerType = portalType.client;

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.closeSearchPopover();
        this.closeAlertPopover();
      }
    });
  }

  open(content) {
    this.searchModal = this.modalService.open(content, {
      size: 'lg',
      backdrop: 'static',
      windowClass: 'search-bar-modal'
    });
  }

  openActionUrl(action: string, externalLink: boolean = false) {
    if (externalLink) {
      window.open(action, '_blank');
    } else {
      this.router.navigate([action]);
    }
    this.closeSearchPopover();
  }

  closeSearchPopover() {
    this.seeAll = false;
    this.searchText = '';
    if (this.popover) {
      this.popover.close();
    }

    this.performSearch();
  }

  closeAlertPopover() {
    if (this.popoverAlert) {
      this.popoverAlert.close();
    }
  }

  // Once the backend call gets written for the Alerts, this needs to do a call-back
  // and update isNew value to False if its true.
  resetNewAlertsFlag() {
    if (this.hasNewAlerts) {
      this.hasNewAlerts = false;
    }
  }

  ngOnInit() {
    this.isnavbarMainMenuDropdown1Opened = false;

    this.boarded = this.isBoarded();

    this.performSearch();
    this.alertsService.getAlertsModalData(this.headerType).subscribe(alertsModalData => {
      this.alerts = alertsModalData ? alertsModalData[0].alertsList : [];
      this.hasNewAlerts = alertsModalData ? alertsModalData[0].isNew : false;
    });
  }

  ngDoCheck(): void {
    this.onResize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.header !== undefined && this.header.companies !== undefined) {
      // this.selectedCompany =
      //   this.header.companies.length > 0 ? this.header.companies[0] : null;

      const compnayId = this.route.snapshot.queryParams.companyId;
      this.setSelectedCompany(compnayId);
    }

    this.onResize();
  }

  setSelectedCompany(companyId) {
    if (this.header && this.header.companies && this.header.companies.length > 0) {
      this.selectedCompany = this.header.companies.find(c => c.id === Number(companyId));
      if (!this.selectedCompany) {
        this.selectedCompany = this.header.companies[0];
      }
    } else {
      this.selectedCompany = null;
    }

    this.headerService.isSelectedComany(this.selectedCompany);
  }

  responsiveMenuItems() {
    if (!this.header) {
      return;
    }

    // Reset current values
    this.navMenuOptions = [];
    this.moreMenuOptions = [];

    const headerMenuItems = this.getMenuItems();
    const menuOptionsMaxItems = this.getMenuOptionsMaxItems();

    if (this.displayMore()) {
      for (let i = 0; i < headerMenuItems.length; i++) {
        const menuItem = headerMenuItems[i];
        if (i < menuOptionsMaxItems) {
          this.navMenuOptions.push(menuItem);
        } else {
          this.moreMenuOptions.push(menuItem);
        }
      }
    } else {
      this.navMenuOptions = headerMenuItems;
    }
  }

  getMenuItems() {
    if (this.boarded) {
      return this.header.menuOptions.filter((o) => {
          return (o.visibleOnlyOnFirstTimeLoging !== true
                || o.visibleOnlyOnFirstTimeLoging === undefined);
        });
    } else {
      return this.header.menuOptions.filter((o) => {
          return o.visibleOnlyAfterFirstTimeLoging !== true
          || o.visibleOnlyAfterFirstTimeLoging === undefined;
      });
    }
  }

  getMenuOptionsMaxItems() {
    const totalWidth = this.navbar.nativeElement.clientWidth - this.RIGHT_LEFT_MARGIN;
    const leftNavBarWidth = this.leftnavbar.nativeElement.clientWidth;
    const rightWidgetWidth = this.rightWidget.nativeElement.clientWidth;
    return Math.round((totalWidth - (leftNavBarWidth + rightWidgetWidth)) / 100 );
  }

  displayMore() {
    return this.navbar.nativeElement.clientWidth >= 576;
  }

  isBoarded() {
    const isOnboardingDone = localStorage.getItem('isOnboardingDone');
    return isOnboardingDone !== null && isOnboardingDone === 'done' ? true : false;
  }

  getCompanyData(company: Company): void {

    this.isLoading = true;
    this.isLoadingValue.emit(this.isLoading);
    setTimeout(() => {
      this.selectedCompany = company;
      this.headerService.isSelectedComany(company);
      this.router.navigate(['client/dashboard']);
      this.isLoading = false;
      this.isLoadingValue.emit(this.isLoading);
    }, 3000);
  }

  @HostListener('window:resize')
  onResize() {
    // guard against resize before view is rendered
    this.responsiveMenuItems();
  }

  performSearch() {
    this.headerService.search(this.searchText, this.seeAll ? Number.MAX_SAFE_INTEGER : 3).subscribe(
      searchResult => {
        this.searchResults = searchResult;
      }
    );
  }

  onToggleSeeAll() {
    this.seeAll = !this.seeAll;
    this.performSearch();
  }

  selectedSearchItem(selectedItem) {
    this.searchText = selectedItem;
  }

  moreMenuOptionOpenChange(e) {
    const isOpen = e;

    if (this.isnavbarMainMenuDropdown1Opened !== isOpen) {
      this.isnavbarMainMenuDropdown1Opened = isOpen;
    }
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }

  openModal(size, content, windowsClass) {
    if (!windowsClass) {
      windowsClass = '';
    }

    this.actionModalHandle = this.modalService.open(content, {
      size: size,
      windowClass : windowsClass,
     });
  }
}

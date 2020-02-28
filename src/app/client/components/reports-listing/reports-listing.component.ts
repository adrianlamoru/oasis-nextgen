import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '../../../../../node_modules/@angular/router';
import { FileService } from '../../../shared/services';
import { ReportsService } from '../../services';
import { ReportsList } from '../../models';

const FAVORITES_TITLE = 'favorites';

@Component({
  selector: 'app-reports-listing',
  templateUrl: './reports-listing.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-listing.component.scss']
})
export class ReportsListingComponent implements OnInit {

  @Input() reportsList: ReportsList[];
  @Input() pageSource?: string;
  @Input() tabSubTitle ?= '';
  @Input() employeeId?: string;

  reportsUnsortedList: any[];
  reportsFavoritesListHolder: any[];
  dropdownFilterBy: any[];
  dropdownActions: any[];
  dropdownEmployeeActions: any[];

  filterByOption = '';
  isTabFavorites = false;
  hasFavorites = false;

  constructor(
    private modalService: NgbModal,
    private reportsService: ReportsService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FileService) {}

  ngOnInit() {
    if (this.router.url.includes('client/reports/')) {
      this.isTabFavorites = this.route.snapshot.data['title'] === FAVORITES_TITLE;
      this.tabSubTitle = this.route.snapshot.data['title'];
      const reportsDataList = this.reportsService.getReportsList();
      this.updateReportsFavoritesListHolder(reportsDataList);
      this.reportsList = reportsDataList;
    }
    this.dropdownFilterBy = this.reportsService.getDropdownFilterBy();
    this.dropdownActions = this.reportsService.getDropdownActions();
    this.dropdownEmployeeActions = this.reportsService.getEmployeeDropdownActions();
  }

  updateReportsFavoritesListHolder(reports) {
  this.reportsFavoritesListHolder = [];
    for (let i = 0; i < reports.length ; i++) {
      this.reportsFavoritesListHolder.push(reports[i].isFavorite);
      if (reports[i].isFavorite) {
        this.hasFavorites = true;
      }
    }
  }

  routeToLinkSpecified(link) {
    if (this.pageSource !== 'employeeReports') {
      if (link === 'employee-information') {
        this.fileService.downloadFileByUrl('/assets/csv/EmployeeInformationDownload.csv', 'Employee Information');
      } else if (link === 'information-download') {
        this.fileService.downloadFileByUrl('/assets/csv/EmployeeInformationDownload.csv', 'Information Download');
      } else if (link === 'analytics') {
          const url = 'client/payroll/' + link;
          this.router.navigate([url]);
      } else {
        const url = 'client/reports/reports-listing/' + link;
        this.router.navigate([url]);
      }
    } else if (this.pageSource === 'employeeReports') {
      if (link === 'employee-information') {
        this.fileService.downloadFileByUrl('/assets/csv/EmployeeInformationDownload.csv', 'Employee Information');
      } else if (link === 'analytics') {
          const url = 'client/payroll/' + link;
          this.router.navigate([url]);
      } else {
        const url = 'client/employees/employee/' + this.employeeId + '/details/employeeReports/' + link;
        this.router.navigate([url]);
      }
    }

  }

  onReportsActionsDropdownClick(item, reportItem, reportItemIndex) {
    if (item.id === 'Open') {
      this.routeToLinkSpecified(reportItem.link);
    } else if (item.id === 'AddFav' || item.id === 'RemFav') {
      this.toggleItemFavorite(reportItemIndex);
    }
  }

  sortReportListBy(sortKey) {
    // Storing the unsorted list of reports (Initial List that we get from the backend service)
    this.reportsUnsortedList = this.reportsList;

    // Resetting the report list to intial list before performing any sort function/case
    this.reportsList = this.reportsUnsortedList;

    switch (sortKey) {
      case 'Type': {
        this.reportsList.sort(
          function (a, b) {
            return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
          });
        break;
      }
    }
  }

  filterReportListBy(filterKey) {
    this.filterByOption = filterKey;
  }

  toggleItemFavorite(itemIndex) {
    this.reportsList[itemIndex].isFavorite = !(this.reportsList[itemIndex].isFavorite);
  }

}

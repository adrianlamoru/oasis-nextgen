import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '../../../../../node_modules/@angular/router';
import { FileService } from '../../../shared/services';
import { ReportsService, EmployeeReportsService } from '../../services';
import { ReportsList } from '../../models';

const FAVORITES_TITLE = 'favorites';

@Component({
  selector: 'app-employee-details-employee-reports',
  templateUrl: './employee-details-employee-reports.component.html',
  styleUrls: ['./employee-details-employee-reports.component.scss']
})
export class EmployeeDetailsEmployeeReportsComponent implements OnInit {

  employeeReportsList: ReportsList[];
  reportsUnsortedList: any[];
  reportsFavoritesListHolder: any[];
  dropdownFilterBy: any[];
  dropdownActions: any[];
  private employeeIdSubscription: any;
  private employeeId: string;

  tabSubTitle = '';
  filterByOption = '';
  isTabFavorites = false;
  hasFavorites = false;

  constructor(
    private modalService: NgbModal,
    private employeeReportsService: EmployeeReportsService,
    private reportsService: ReportsService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      const employeeReportsDataList = this.employeeReportsService.getEmployeeReportsList();
      this.employeeReportsList = employeeReportsDataList;

      this.updateReportsFavoritesListHolder(employeeReportsDataList);

      this.dropdownFilterBy = this.reportsService.getDropdownFilterBy();
      this.dropdownActions = this.reportsService.getEmployeeDropdownActions();
    });
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
      if (link === 'employee-information') {
        this.fileService.downloadFileByUrl('/assets/csv/EmployeeInformationDownload.csv', 'Employee Information');
      } else if (link === 'analytics') {
          const url = 'client/payroll/' + link;
          this.router.navigate([url]);
      } else {
        const url = 'client/employees/employee/' + this.employeeId + '/details/employeeReports' + link;
        this.router.navigate([url]);
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
      this.reportsUnsortedList = this.employeeReportsList;

      // Resetting the report list to intial list before performing any sort function/case
      this.employeeReportsList = this.reportsUnsortedList;

      switch (sortKey) {
        case 'Type': {
          this.employeeReportsList.sort(
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
      this.employeeReportsList[itemIndex].isFavorite = !(this.employeeReportsList[itemIndex].isFavorite);
    }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IClientEmployeePTO } from '../../models';
import { ClientEmployeePTOService, ReportsService } from '../../services';
import { AuthService } from '../../../shared/services';

@Component({
  selector: 'app-employee-reports-pto',
  templateUrl: './employee-reports-pto.component.html',
  styleUrls: ['./employee-reports-pto.component.scss'],
})
export class EmployeeReportsPtoComponent implements OnInit {

  ptoTableDataRows: IClientEmployeePTO[];
  private tokenData: String = '';
  actionModalHandle: NgbModalRef;

  @Input() employeeId: string;
  grouped: any;
  private employeeIdSubscription: any;

  reportGeneratedDate: string;
  dropdownOptions: any[];

  checkSumCount = '';

  constructor(private router: Router,
              private modalService: NgbModal,
              private route: ActivatedRoute,
              private authService: AuthService,
              private reportsService: ReportsService,
              private clientEmployeePTOService: ClientEmployeePTOService) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEmployeeReportsPTOData(this.tokenData);
    },
    err => {
      console.log(err);
    });

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  getEmployeeReportsPTOData(sessionToken) {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.clientEmployeePTOService.getEmployeePTOData(sessionToken, this.employeeId)
      .subscribe( (clientEmployeePTOData: any) => {
            this.ptoTableDataRows = clientEmployeePTOData.JSONOUT.responseBody.employeePtoSummary;
            this.grouped = this.groupBy(this.ptoTableDataRows, pto => pto.ptoType);
            this.checkSumCount = clientEmployeePTOData.JSONOUT.responseProfile.recordChecksum;
        }
      );
    });
  }

  groupBy(list, keyGetter) {
    const map = new Map();
    if (list !== undefined) {
      list.forEach((item) => {
          const key = keyGetter(item);
          if (!map.has(key)) {
              map.set(key, [item]);
          } else {
              map.get(key).push(item);
          }
      });
      return map;
    }
  }

  openEmployeeActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption() {}
}

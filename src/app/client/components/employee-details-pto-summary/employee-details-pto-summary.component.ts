import { Component, OnInit, Input } from '@angular/core';
import { IClientEmployeePTOSummary } from '../../models';
import { ClientEmployeePTOService, ReportsService } from '../../services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-employee-details-pto-summary',
  templateUrl: './employee-details-pto-summary.component.html',
  styleUrls: ['./employee-details-pto-summary.component.scss'],
  providers: [NgbActiveModal]
})
export class EmployeeDetailsPtoSummaryComponent implements OnInit {
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  @Input() selectedEmployeeId: string;
  private employeePTOSummary: IClientEmployeePTOSummary[];
  private tokenData: String = '';
  isLoading = true;

  dropdownOptions: any[];
  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private reportsService: ReportsService,
    private clientEmployeePTOService: ClientEmployeePTOService) { }

  ngOnInit() {

    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getDetailsPTOSummaryData(this.tokenData);
    },
    err => {
      console.log(err);
    });

    this.isLoading = false;
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  getDetailsPTOSummaryData(sessionData) {
    // console.log(this.selectedEmployeeId);
    this.clientEmployeePTOService.getEmployeePTOViewDetail(sessionData, this.selectedEmployeeId)
    .subscribe(
      (employeePTOSummary: any) => {
        if (employeePTOSummary.JSONOUT.errorMessage) {
          alert(employeePTOSummary.JSONOUT.errorMessage);
        } else {
        this.employeePTOSummary = employeePTOSummary.JSONOUT.responseBody.employeePtoDetails;
        // console.log('employeePTOSummary =>', this.employeePTOSummary);
        }
      }
    );
  }

  selectedDownloadOption() {}
}

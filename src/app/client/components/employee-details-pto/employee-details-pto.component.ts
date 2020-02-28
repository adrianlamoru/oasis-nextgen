import { Component, OnInit, Input } from '@angular/core';
import { NgbModal,
  NgbActiveModal,
  NgbModalRef,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';

import { ClientEmployeePTOService } from '../../services';
import { IClientEmployeePTO } from '../../models';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details-pto',
  templateUrl: './employee-details-pto.component.html',
  styleUrls: ['./employee-details-pto.component.scss']
})
export class EmployeeDetailsPtoComponent implements OnInit {
  ptoTableDataRows: IClientEmployeePTO[];
  actionModalHandle: NgbModalRef;
  private tokenData: String = '';
  private employeeIdSubscription: any;

  showError = false;
  errorMsg = '';
  checkSumCount = '';
  @Input() employeeId: string;
  grouped: any;
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private route: ActivatedRoute,
    private clientEmployeePTOService: ClientEmployeePTOService ) { }

  ngOnInit() {
    this.authService.getSessionToken().subscribe( (response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getPTOData(this.tokenData);
    },
    err => {
      console.log(err);
    });
  }

  getPTOData(sessionToken) {
    // console.log(this.employeeId);
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.clientEmployeePTOService.getEmployeePTOData(sessionToken, this.employeeId)
      .subscribe( (clientEmployeePTOData: any) => {
          if (clientEmployeePTOData.JSONOUT.errorMessage) {
            this.showError = true;
            this.errorMsg = clientEmployeePTOData.JSONOUT.errorMessage;
          } else {
            this.ptoTableDataRows = clientEmployeePTOData.JSONOUT.responseBody.employeePtoSummary;
            this.grouped = this.groupBy(this.ptoTableDataRows, pto => pto.ptoType);
            this.checkSumCount = clientEmployeePTOData.JSONOUT.responseProfile.recordChecksum;
          }
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
    } else {
      this.showError = true;
      this.errorMsg = 'There are no results available for the request per user security or filter criteria.';
    }
  }

  openEmployeeActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }
}

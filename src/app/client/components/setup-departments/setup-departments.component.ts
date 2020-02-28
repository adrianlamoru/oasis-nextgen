import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent, DxLoadIndicatorModule } from 'devextreme-angular';
import { ClientSetupDepartmentsService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-setup-department',
  templateUrl: './setup-departments.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-departments.component.scss']
})
export class SetupDepartmentsComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(NgForm) depCodeForm: NgForm;

  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible: Boolean = false;
  checkSumCount  = '';

  private loadingVisible: Boolean = true;
  private departmentsDataRows = [];
  private tokenData: String = '';

  constructor(private departmentService: ClientSetupDepartmentsService, private authService: AuthService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getDepartmentData(this.tokenData);
    },
      err => {
        console.log(err);
      });
    this.currentSelectedRow = {
      'departmentCode': '',
      'departmentDescription': '',
      'perDiem': 0,
      'glSegmentCode1': '',
      'glSegmentCode2': '',
      'miscSegmentCodes': [],
      'recordChecksum': ''
    };
  }

  // Getting Departments data and populating in data grid
  getDepartmentData(sessionToken) {
    this.departmentService.getDepartmentsData(sessionToken).subscribe((res: any) => {
      //  this.departmentsDataRows = [];
      if (res.JSONOUT.errorMessage) {
        alert(res.JSONOUT.errorMessage);
      } else {
        this.departmentsDataRows = res.JSONOUT.responseBody.companyDepartments;
        this.loadingVisible = false;
        // this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
      }
    },
      err => {
        alert('Error occurred');
      }
    );
  }

  // Setting up departments data and pushing into database
  setDepartmentsData(departmentData) {
    this.departmentService.setDepartmentsData(departmentData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.getDepartmentData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }


  addCode(): void {
    if ( this.depCodeForm ) {
      this.depCodeForm.reset();
    }
    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow('', '', null, '', '', '0');
    this.updatePopupStaticText();
    this.editPopupVisible = true;
  }

  onCellButtonClick(e) {
    this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelected === 'EDIT') {
      this.updatePopupStaticText();
      this.updateCurrentSelectedRow(e.data.departmentCode, e.data.departmentDescription,
        e.data.perDiem, e.data.glSegmentCode1, e.data.glSegmentCode2, e.data.recordChecksum);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    const myObject = { 'sessionToken': this.tokenData};
    if (this.actionTypeSelected === 'EDIT') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setDepartmentsData(myObject);
    } else if (this.actionTypeSelected === 'ADD') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setDepartmentsData(myObject);
    }
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    this.currentSelectedRow.departmentCode = '';
    this.currentSelectedRow.departmentDescription = '';
    this.currentSelectedRow.perDiem = null;
    this.currentSelectedRow.glSegmentCode1 = '';
    this.currentSelectedRow.glSegmentCode2 = '';
    this.currentSelectedRow.recordChecksum = '';
  }

  updateCurrentSelectedRow(departmentCode, departmentDescription, perDiem, glSegmentCode1, glSegmentCode2, recordChecksum): void {
    this.currentSelectedRow.departmentCode = departmentCode;
    this.currentSelectedRow.departmentDescription = departmentDescription;
    this.currentSelectedRow.perDiem = perDiem;
    this.currentSelectedRow.glSegmentCode1 = glSegmentCode1;
    this.currentSelectedRow.glSegmentCode2 = glSegmentCode2;
    this.currentSelectedRow.recordChecksum = recordChecksum;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Department Code';
  }

}

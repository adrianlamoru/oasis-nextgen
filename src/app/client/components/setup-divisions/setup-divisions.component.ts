import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupDivisionsService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';
import { ErrorMessageCenterService } from '../../../shared/services';

@Component({
  selector: 'app-setup-division',
  templateUrl: './setup-divisions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-divisions.component.scss']
})
export class SetupDivisionsComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(NgForm) dcForm: NgForm;

  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;
  errorMessage = '';
  checkSumCount  = '';

  public divisionDataRows = [];
  private tokenData: String = '';

  constructor(private clientSetupDivisionService: ClientSetupDivisionsService,
    private oasisErrorMessageCenterService: ErrorMessageCenterService,
    private authService: AuthService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    this.authService.getSessionToken().subscribe((response: any) => {
      // console.log('token => ', response.JSONOUT.responseProfile.sessionToken);
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getDivisionsData(this.tokenData);
    },
      err => {
        console.log(err);
      });
    this.currentSelectedRow = {
      'divisionCode': '',
      'divisionDescription': '',
      'glSegmentCode1': '',
      'glSegmentCode2': '',
      'glSegmentCode3': '',
      'recordChecksum': ''
    };
  }

  getDivisionsData(sessionToken) {
    this.clientSetupDivisionService.getDivisionsData(sessionToken).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          // this.divisionDataRows = [];
          this.divisionDataRows = res.JSONOUT.responseBody.companyDivisions;
        }
      },
      err => {
        this.errorMessage = this.oasisErrorMessageCenterService.showErrorMessageCenterService(err);
        console.log(this.errorMessage);
        throw err;
      }
    );
  }

  setDivisionsData(divisionData) {
    this.clientSetupDivisionService.setDivisionsData(divisionData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.getDivisionsData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  addCode(): void {
    if (this.dcForm) {
      this.dcForm.reset();
    }
    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow('', '', '', '0');
    this.updatePopupStaticText();
    this.editPopupVisible = true;
  }

  onCellButtonClick(e) {
    this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelected === 'EDIT') {
      this.updatePopupStaticText();
      this.updateCurrentSelectedRow(e.data.divisionCode, e.data.divisionDescription, e.data.glSegmentCode1, e.data.recordChecksum);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    const myObject = { 'sessionToken': this.tokenData };
    if (this.actionTypeSelected === 'EDIT') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setDivisionsData(myObject);
    } else if (this.actionTypeSelected === 'ADD') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setDivisionsData(myObject);
    }
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    this.currentSelectedRow.divisionCode = '';
    this.currentSelectedRow.divisionDescription = '';
    this.currentSelectedRow.glSegmentCode1 = '';
    this.currentSelectedRow.recordChecksum = '';
  }

  updateCurrentSelectedRow(divisionCode, divisionDescription, glSegmentCode, recordChecksum): void {
    this.currentSelectedRow.divisionCode = divisionCode;
    this.currentSelectedRow.divisionDescription = divisionDescription;
    this.currentSelectedRow.glSegmentCode1 = glSegmentCode;
    this.currentSelectedRow.recordChecksum = recordChecksum;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Division Code';
  }
}

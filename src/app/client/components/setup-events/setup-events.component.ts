import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupEventsService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-setup-events',
  templateUrl: './setup-events.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-events.component.scss']
})
export class SetupEventsComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(NgForm) eventCodeForm: NgForm;

  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;
  rowSelected = 0;
  checkSumCount = '';

  private tokenData: String = '';
  // eventDataRows = [{
  //   'Code': '20185',
  //   'Description': 'South Florida'
  // }, {
  //   'Code': '35467',
  //   'Description': 'Union Dues'
  // }, {
  //   'Code': '98745',
  //   'Description': 'Sales'
  // }, {
  //   'Code': '35467',
  //   'Description': 'Siesta Time'
  // }, {
  //   'Code': '98745',
  //   'Description': 'Western Region'
  // }];
  eventDataRows = [];

  constructor(private clientSetupEventsService: ClientSetupEventsService,
    private authService: AuthService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getEventsData(this.tokenData);
    },
      err => {
        console.log(err);
      });

    this.currentSelectedRow = {
      'eventCode': '',
      'eventDescription': '',
      'recordChecksum': ''
    };
  }

  getEventsData(sessionToken) {
    this.clientSetupEventsService.getEventsData(sessionToken).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          // this.eventDataRows = [];
          this.eventDataRows = res.JSONOUT.responseBody.companyEvents;
          // this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
          // End
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  setEventsData(divisionData) {
    this.clientSetupEventsService.setEventsData(divisionData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.getEventsData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  addCode(): void {
    if (this.eventCodeForm) {
      this.eventCodeForm.reset();
    }
    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow('', '', '0');
    this.updatePopupStaticText();
    this.editPopupVisible = true;
  }

  onCellButtonClick(e) {
    this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelected === 'EDIT') {
      // DELECT this part when service is ready - START
      this.rowSelected = e.rowIndex;
      // DELECT this part when service is ready - END
      this.updatePopupStaticText();
      this.updateCurrentSelectedRow(e.data.eventCode, e.data.eventDescription, e.data.recordChecksum);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    // const myObject = { 'sessionToken': this.tokenData };
    const myObject = { 'sessionToken': this.tokenData };
    Object.assign(myObject, this.currentSelectedRow);
    this.setEventsData(myObject);

    // DELECT this part when service is ready - START
    // if (this.actionTypeSelected === 'EDIT') {
    //     this.eventDataRows[this.rowSelected].Code = this.currentSelectedRow.eventCode;
    //     this.eventDataRows[this.rowSelected].Description = this.currentSelectedRow.eventDescription;
    // } else if (this.actionTypeSelected === 'ADD') {
    //     this.eventDataRows.push({ 'Code': this.currentSelectedRow.eventCode,
    // 'Description': this.currentSelectedRow.eventDescription });
    // }
    // DELECT this part when service is ready - END

    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    this.currentSelectedRow.Code = '';
    this.currentSelectedRow.Description = '';
    this.currentSelectedRow.recordChecksum = '';
  }

  updateCurrentSelectedRow(code, description, recordChecksum): void {
    this.currentSelectedRow.eventCode = code;
    this.currentSelectedRow.eventDescription = description;
    this.currentSelectedRow.recordChecksum = recordChecksum;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Event Code';
  }

}

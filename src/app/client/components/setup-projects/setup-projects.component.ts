import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupProjectsService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';
import { SetupProject } from '../../models';

@Component({
  selector: 'app-setup-project',
  templateUrl: './setup-projects.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-projects.component.scss']
})
export class SetupProjectsComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(NgForm) pCodeForm: NgForm;

  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;
  checkSumCount = '';

  private tokenData: String = '';
  private projectsDataRows = [];

  popupVisible = false;

  constructor(private authService: AuthService, private projectService: ClientSetupProjectsService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getProjectsData(this.tokenData);
    },
      err => {
        console.log(err);
      });
    this.currentSelectedRow = {
      'projectCode': '',
      'projectDescription': '',
      'certifiedPayroll': null,
      'projectLocation': '',
      'projectContractNumber': '',
      'recordChecksum': ''
    };
  }

  // Getting Projects data and populating in data grid
  getProjectsData(sessionToken) {
    this.projectService.getProjectsData(sessionToken).subscribe((res: any) => {
      // this.projectsDataRows = [];
      if (res.JSONOUT.errorMessage) {
        alert(res.JSONOUT.errorMessage);
      } else {
        this.projectsDataRows = res.JSONOUT.responseBody.companyProjects;
        // this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
      }
    },
      err => {
        alert('Error occurred');
      }
    );
  }

  // Setting up Projects data and pushing into database
  setProjectsData(departmentData) {
    this.projectService.setProjectsData(departmentData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.getProjectsData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  addCode(): void {
    if (this.pCodeForm) {
      this.pCodeForm.reset();
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
      this.updateCurrentSelectedRow(e.data.projectCode, e.data.projectDescription,
        e.data.certifiedPayroll, e.data.projectLocation, e.data.projectContractNumber, e.data.recordChecksum);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    const myObject = { 'sessionToken': this.tokenData };
    if (this.actionTypeSelected === 'EDIT') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setProjectsData(myObject);
    } else if (this.actionTypeSelected === 'ADD') {
      Object.assign(myObject, this.currentSelectedRow);
      this.setProjectsData(myObject);
    }
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    this.currentSelectedRow.projectCode = '';
    this.currentSelectedRow.projectDescription = '';
    this.currentSelectedRow.certifiedPayroll = null;
    this.currentSelectedRow.projectLocation = '';
    this.currentSelectedRow.projectContractNumber = '';
  }

  updateCurrentSelectedRow(projectCode, projectDescription, certifiedPayroll, projectLocation, projectContractNumber, checkSumCount): void {
    this.currentSelectedRow.projectCode = projectCode;
    this.currentSelectedRow.projectDescription = projectDescription;
    this.currentSelectedRow.certifiedPayroll = certifiedPayroll;
    this.currentSelectedRow.projectLocation = projectLocation;
    this.currentSelectedRow.projectContractNumber = projectContractNumber;
    this.currentSelectedRow.recordChecksum = checkSumCount;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Project Code';
  }

}

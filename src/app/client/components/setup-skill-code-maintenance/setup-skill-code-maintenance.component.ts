import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupSkillMaintenanceService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-setup-skill-code-maintenance',
  templateUrl: './setup-skill-code-maintenance.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-skill-code-maintenance.component.scss']
})
export class SetupSkillCodeMaintenanceComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(NgForm) skillCodeForm: NgForm;

  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;

  private tokenData: String = '';
  skillDataRows = [];
  checkSumCount = '';

  constructor(private authService: AuthService, private skillService: ClientSetupSkillMaintenanceService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getSkillMaintenanceData(this.tokenData);
    },
      err => {
        console.log(err);
      });

    this.currentSelectedRow = {
      'skillCode': '',
      'skillDescription': '',
      'recordChecksum': ''
    };
  }

  // Getting Skill Maintenance data and populating into data grid
  getSkillMaintenanceData(sessionToken) {
    this.skillService.getSkillMaintenanceData(sessionToken).subscribe((res: any) => {
      if (res.JSONOUT.errorMessage) {
        alert(res.JSONOUT.errorMessage);
      } else {
        this.skillDataRows = [];
        this.skillDataRows = res.JSONOUT.responseBody.companySkills;
        // this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;
      }
    },
      err => {
        alert('Error occurred');
      }
    );
  }

  // Setting up Skill Maintenance data and pushing into database
  setSkillMaintenanceData(skillData) {
    this.skillService.setSkillMaintenanceData(skillData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.getSkillMaintenanceData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  addCode(): void {
    if (this.skillCodeForm) {
      this.skillCodeForm.reset();
    }
    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow('', '', '0');
    this.updatePopupStaticText();
    this.editPopupVisible = true;
  }

  onCellButtonClick(e) {
    this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelected === 'EDIT') {
      this.updatePopupStaticText();
      this.updateCurrentSelectedRow(e.data.skillCode, e.data.skillDescription, e.data.recordChecksum);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    // const myObject = { 'sessionToken': this.tokenData };
    const myObject = { 'sessionToken': this.tokenData, 'recordChecksum': this.checkSumCount };
    Object.assign(myObject, this.currentSelectedRow);
    this.setSkillMaintenanceData(myObject);
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    this.currentSelectedRow.skillCode = '';
    this.currentSelectedRow.skillDescription = '';
    this.currentSelectedRow.recordChecksum = '';
  }

  updateCurrentSelectedRow(skillCode, skillDescription, recordChecksum): void {
    this.currentSelectedRow.skillCode = skillCode;
    this.currentSelectedRow.skillDescription = skillDescription;
    this.currentSelectedRow.recordChecksum = recordChecksum;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Skill Code';
  }

}

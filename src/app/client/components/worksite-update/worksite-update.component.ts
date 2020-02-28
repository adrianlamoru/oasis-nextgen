import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupWorksiteupdateService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

import { States } from '../../../shared/models';
import { HeaderService } from '../../../shared/services';

import { PhoneMask } from '../../../shared/directives';

@Component({
  selector: 'app-worksite-update',
  templateUrl: './worksite-update.component.html',
  styleUrls: ['./worksite-update.component.scss']
})
export class WorksiteUpdateComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChild('worksiteForm') worksiteForm: NgForm;
  @ViewChild('ccForm') ccForm: NgForm;

  states: States[];

  isWorkCompStateOpened = false;
  isStateOpened = false;
  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;
  // rowSelected = 0;
  tabSelected = '';
  tab_WC = 'WorkSite Code';
  tab_CC = 'Client Contacts';
  viewContacts = 'VIEW CONTACTS';


  currentContactSelectedRow: any;
  actionTypeSelectedForContact = '';
  popupContactTitle = '';
  editContactPopupVisible = false;
  checkSumCount = '';

  private tokenData: String = '';
  worksiteDataRows: any[];
  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'edit',
      name: 'EDIT'
    }, {
      id: 'view_contacts',
      name: 'VIEW CONTACTS'
    }]
  }];

  constructor(private headerService: HeaderService, private clientSetupWorkSiteService: ClientSetupWorksiteupdateService,
    private authService: AuthService) {
    this.onCellButtonClick = this.onCellButtonClick.bind(this);
  }

  ngOnInit() {
    // this.statesService.getUSStatesData()
    //   .subscribe(USStates => {
    //     this.states = USStates;
    // });

    // Get State List
    this.headerService.selectedCompany
      .subscribe(company => {
        if (company) {
          const that = this;
          setTimeout(function () {
            that.states = company.states;
          }, 100);
        }
      });

    this.authService.getSessionToken().subscribe((response: any) => {
      this.tokenData = response.JSONOUT.responseProfile.sessionToken;
      this.getWorkSiteData(this.tokenData);
    }, err => {
        console.log(err);
    });

    this.currentSelectedRow = {
      'locationCode': '',
      'locationDescription': '',
      'stateName': '',
      'addressLine1': '',
      'addressLine2': '',
      'city': '',
      'state': '',
      'county': '',
      'zipCode': '',
      'faxNumber': '',
      'workCompState': '',
      'glSegmentCode1': '',
      'glSegmentCode2': '',
      'glSegmentCode3': '',
      'recordChecksum': '',
      'availableContacts': []
    };

    this.currentContactSelectedRow = {
    'contactIndex': '',
    'contactPhone': '',
    'contactEmail': '',
    'contactName': '',
    'contactTitle': '',
    'contactFax': ''
    };
  }

  getWorkSiteData(sessionToken) {
    const arrayNames = [];
    this.clientSetupWorkSiteService.getWorkSiteData(sessionToken).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          this.worksiteDataRows = [];
          // this.worksiteDataRows = res.JSONOUT.responseBody.companyLocations;
          res.JSONOUT.responseBody.companyLocations.forEach(element => {
            element.availableContacts.forEach(contact => {
              arrayNames.push(contact.contactName);
            });
            element.contactName = arrayNames.join(', ');
            element.obsoleteLocation = element.obsoleteLocation ? element.obsoleteLocation : 'No';
            this.worksiteDataRows.push(element);
          });
          // this.checkSumCount = res.JSONOUT.responseBody.companyLocations[0].recordChecksum;
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  getWorkSiteContactsData(sessionToken) {
    this.clientSetupWorkSiteService.getWorkSiteContactsData(sessionToken).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          const companyLocation = res.JSONOUT.responseBody.companyLocations[0];
          this.currentSelectedRow.availableContacts = companyLocation.availableContacts;
          this.currentSelectedRow.recordChecksum = companyLocation.recordChecksum;
          // this.checkSumCount = res.JSONOUT.responseBody.companyLocations[0].recordChecksum;
          // console.log('getWorkSiteContactsData', this.checkSumCount);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }


  setWorkSiteData(workSiteData) {
    this.clientSetupWorkSiteService.setWorkSiteData(workSiteData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          // console.log('Data inserted');
          this.getWorkSiteContactsData(this.tokenData);
          this.getWorkSiteData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  setWorkSiteContactsData(workSiteData) {
    this.clientSetupWorkSiteService.setWorkSiteContactsData(workSiteData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
           // console.log('Data inserted');
           this.getWorkSiteContactsData(this.tokenData);
           // this.getWorkSiteData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }


  changeStateSelection(item) {
    this.currentSelectedRow.state = item;
    this.isStateOpened = !this.isStateOpened;
  }

  changeWorkCompStateSelection(item) {
    this.currentSelectedRow.workCompState = item;
    this.isWorkCompStateOpened = !this.isWorkCompStateOpened;
  }


  addCode(): void {
    if (this.worksiteForm) {
      this.worksiteForm.reset();
    }
    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow('', '', '', '', '', '', '', '', '', '', '', '', '', '', [], '', '');
    this.updatePopupStaticText();
    this.editPopupVisible = true;
  }

  onCellButtonClick(e) {
    this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelected === 'EDIT' || this.actionTypeSelected === this.viewContacts) {
      // DELECT this part when service is ready - START
      // this.rowSelected = e.rowIndex;
      // DELECT this part when service is ready - END
      this.updatePopupStaticText();
      this.updateCurrentSelectedRow(e.data.locationCode, e.data.locationDescription, e.data.stateName, e.data.addressLine1,
        e.data.addressLine2, e.data.city, e.data.state, 'USA', e.data.zipCode, e.data.faxNumber,
        e.data.workCompState, e.data.glSegmentCode1, e.data.glSegmentCode2,
        e.data.glSegmentCode3, e.data.availableContacts, e.data.recordChecksum, e.data.obsoleteLocation);
      this.editPopupVisible = true;
    }
  }

  onSubmitClick() {
    const myObject = { 'sessionToken': this.tokenData };
    // const myObject = { 'sessionToken': this.tokenData };
    const modifyData = {faxNumber: this.currentSelectedRow.faxNumber,
      glSegmentCode1: this.currentSelectedRow.glSegmentCode1,
      glSegmentCode2: this.currentSelectedRow.glSegmentCode2,
      glSegmentCode3: this.currentSelectedRow.glSegmentCode3,
      locationCode: this.currentSelectedRow.locationCode,
      recordChecksum: this.currentSelectedRow.recordChecksum};
    Object.assign(myObject, modifyData);
    this.setWorkSiteData(myObject);

    // DELECT this part when service is ready - START
    //   if (this.actionTypeSelected === 'EDIT') {
    //       this.worksiteDataRows[this.rowSelected].Code = this.currentSelectedRow.Code;
    //       this.worksiteDataRows[this.rowSelected].Description = this.currentSelectedRow.Description;
    //       this.worksiteDataRows[this.rowSelected].Name = this.currentSelectedRow.Name;
    //       this.worksiteDataRows[this.rowSelected].StreetAddressLine1 = this.currentSelectedRow.StreetAddressLine1;
    //       this.worksiteDataRows[this.rowSelected].StreetAddressLine2 = this.currentSelectedRow.StreetAddressLine2;
    //       this.worksiteDataRows[this.rowSelected].City = this.currentSelectedRow.City;
    //       this.worksiteDataRows[this.rowSelected].State = this.currentSelectedRow.State;
    //       this.worksiteDataRows[this.rowSelected].County = this.currentSelectedRow.County;
    //       this.worksiteDataRows[this.rowSelected].ZipCode = this.currentSelectedRow.ZipCode;
    //       this.worksiteDataRows[this.rowSelected].FaxNumber = this.currentSelectedRow.FaxNumber;
    //       this.worksiteDataRows[this.rowSelected].WorkCompState = this.currentSelectedRow.WorkCompState;
    //       this.worksiteDataRows[this.rowSelected].GLSegmentCode = this.currentSelectedRow.GLSegmentCode;
    //       this.worksiteDataRows[this.rowSelected].GLSegmentCode2 = this.currentSelectedRow.GLSegmentCode2;
    //       this.worksiteDataRows[this.rowSelected].GLSegmentCode3 = this.currentSelectedRow.GLSegmentCode3;
    //   } else if (this.actionTypeSelected === 'ADD') {
    //       this.worksiteDataRows.push({ 'Code': this.currentSelectedRow.Code,
    //                                 'Description': this.currentSelectedRow.Description,
    //                                 'Name': this.currentSelectedRow.Name,
    //                                 'StreetAddressLine1': this.currentSelectedRow.StreetAddressLine1,
    //                                 'StreetAddressLine2': this.currentSelectedRow.StreetAddressLine2,
    //                                 'City': this.currentSelectedRow.City,
    //                                 'State': this.currentSelectedRow.State,
    //                                 'County': this.currentSelectedRow.County,
    //                                 'ZipCode': this.currentSelectedRow.ZipCode,
    //                                 'FaxNumber': this.currentSelectedRow.FaxNumber,
    //                                 'WorkCompState': this.currentSelectedRow.WorkCompState,
    //                                 'GLSegmentCode': this.currentSelectedRow.GLSegmentCode,
    //                                 'GLSegmentCode2': this.currentSelectedRow.GLSegmentCode2,
    //                                 'GLSegmentCode3': this.currentSelectedRow.GLSegmentCode3 });
    //   }
    // DELECT this part when service is ready - END

    this.editPopupVisible = false;
    this.actionTypeSelected = '';
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.actionTypeSelected = '';
    // this.currentSelectedRow.locationCode = '';
    // this.currentSelectedRow.locationDescription = '';
    // this.currentSelectedRow.stateName = '';
    // this.currentSelectedRow.addressLine1 = '';
    // this.currentSelectedRow.addressLine2 = '';
    // this.currentSelectedRow.city = '';
    // this.currentSelectedRow.state = '';
    // this.currentSelectedRow.county = '';
    // this.currentSelectedRow.zipCode = '';
    // this.currentSelectedRow.faxNumber = '';
    // this.currentSelectedRow.workCompState = '';
    // this.currentSelectedRow.glSegmentCode1 = '';
    // this.currentSelectedRow.glSegmentCode2 = '';
    // this.currentSelectedRow.glSegmentCode3 = '';
    // this.currentSelectedRow.availableContacts = [];
    this.currentSelectedRow = {};
  }

  updateCurrentSelectedRow(Code, Description, Name, StreetAddressLine1,
    StreetAddressLine2, City, State, County, ZipCode, FaxNumber,
    WorkCompState, GLSegmentCode, GLSegmentCode2, GLSegmentCode3, availableContacts, recordChecksum, ObsoleteLocation): void {
    this.currentSelectedRow.locationCode = Code;
    this.currentSelectedRow.locationDescription = Description;
    this.currentSelectedRow.stateName = Name;
    this.currentSelectedRow.addressLine1 = StreetAddressLine1;
    this.currentSelectedRow.addressLine2 = StreetAddressLine2;
    this.currentSelectedRow.city = City;
    this.currentSelectedRow.state = State;
    this.currentSelectedRow.county = County;
    this.currentSelectedRow.zipCode = ZipCode;
    this.currentSelectedRow.faxNumber = FaxNumber;
    this.currentSelectedRow.workCompState = WorkCompState;
    this.currentSelectedRow.glSegmentCode1 = GLSegmentCode;
    this.currentSelectedRow.glSegmentCode2 = GLSegmentCode2;
    this.currentSelectedRow.glSegmentCode3 = GLSegmentCode3;
    this.currentSelectedRow.obsoleteLocation = ObsoleteLocation;
    this.currentSelectedRow.recordChecksum = recordChecksum;
    this.currentSelectedRow.availableContacts = availableContacts;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() === 'ADD' ? 'Add' : 'Edit' + ' Worksite Code';
    this.updateTabSelection(this.actionTypeSelected === this.viewContacts ? this.tab_CC : this.tab_WC);
    this.actionTypeSelected = 'EDIT';
  }

  updateTabSelection(tabSelected): void {
    this.tabSelected = tabSelected;
  }

  addContactRow(): void {
    if (this.ccForm) {
      this.ccForm.reset();
    }
    this.actionTypeSelectedForContact = 'ADD';
    this.updateContactCurrentSelectedRow((this.currentSelectedRow.availableContacts.length + 1).toString(), '', '', '');
    this.updateContactPopupStaticText();
    this.editContactPopupVisible = true;
  }

  onContactCellButtonClick(e) {
    this.actionTypeSelectedForContact = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
    if (this.actionTypeSelectedForContact === 'EDIT') {
      this.updateContactPopupStaticText();
      this.updateContactCurrentSelectedRow(e.data.contactIndex, e.data.contactName, e.data.contactTitle, e.data.contactPhone);
      this.editContactPopupVisible = true;
    }
  }

  onContactSubmitClick() {
    const myObject = { 'sessionToken': this.tokenData };
    console.log('recordChecksum =>', this.currentSelectedRow.recordChecksum);
    if (this.actionTypeSelectedForContact === 'ADD') {
      this.currentContactSelectedRow.contactIndex = '';
      this.currentSelectedRow.availableContacts.push(JSON.parse(JSON.stringify(this.currentContactSelectedRow)));
    } else {
      const itemIndex = this.currentSelectedRow.availableContacts.findIndex(item =>
        item.contactIndex === this.currentContactSelectedRow.contactIndex);
        this.currentSelectedRow.availableContacts[itemIndex] = JSON.parse(JSON.stringify(this.currentContactSelectedRow));
    }
    Object.assign(myObject, this.currentSelectedRow);
    this.setWorkSiteContactsData(myObject);

    this.editContactPopupVisible = false;
    this.actionTypeSelectedForContact = '';
  }

  onContactCancelClick() {
    this.editContactPopupVisible = false;
    this.actionTypeSelectedForContact = '';

    this.currentContactSelectedRow.contactIndex = '';
    this.currentContactSelectedRow.contactName = '';
    this.currentContactSelectedRow.contactTitle = '';
    this.currentContactSelectedRow.contactPhone = '';
  }

  updateContactCurrentSelectedRow(contactIndex, contactName, contactTitle, contactPhone): void {
    this.currentContactSelectedRow.contactIndex =  contactIndex;
    this.currentContactSelectedRow.contactName = contactName;
    this.currentContactSelectedRow.contactTitle = contactTitle;
    this.currentContactSelectedRow.contactPhone = contactPhone;
  }

  updateContactPopupStaticText(): void {
    this.popupContactTitle = this.actionTypeSelectedForContact.toLowerCase() + ' Client Contact';
  }

}

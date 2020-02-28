import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientSetupGeneralLedgerService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
    selector: 'app-setup-general-ledgercodes',
    templateUrl: './setup-general-ledgercodes.component.html',
    styleUrls: ['./setup-general-ledgercodes.component.scss']
})

export class SetupGeneralLedgercodesComponent implements OnInit {
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    @ViewChild(NgForm) glForm: NgForm;

    editPopupVisible = false;
    deletePopupVisible = false;
    actionTypeSelected = '';
    popupHeight = 0;
    popupSubTitle = '';
    popupLabelCode = '';
    popupLabelFormat = '';
    currentSelectedRow: any;
    tabSelected = 0;
    isDropDownBoxOpened = false;

    // Assigning array of Accounting System Details
    private accSysDetailsArr = [{
        'code': 'Generic',
        'format': 'EEDP.CASH',
        'default': false
    }];
    // Assigning array of Earning Account Format
    private earningAccFormatArr = [{
        'code': 'Default',
        'format': 'EEDP.EARNINGS',
        'default': true
    }];
    private earningAccDDNArr = [{
        'ID': 'AUTO-NT',
        'Name': 'Auto Reimbursement'
    }];
    // Assigning array of Deduction Account Format
    private deductionAccFormatArr = [{
        'code': 'Default',
        'format': 'EEDP.DEDUCT',
        'default': true
    }];
    // Assigning array of Tax Account Format
    private taxAccFormatArr = [{
        'code': 'Default',
        'format': 'EEDP.TAX',
        'default': true
    }];
    // Assigning array of Other Account Format
    private otherAccFormatArr = [{
        'code': 'Default',
        'format': 'EEDP.ADMIN',
        'default': true
    }];

    glCodeTabs = [
        {
            'label': 'Accounting System Details',
            'popupFieldLabels': 'Accounting System',
            'active': true,
            'disableAddButton': true,
            'tableData': [{
                'code': 'Generic',
                'format': 'EEDP.CASH',
                'default': false
            }],
            'accDropdown': [{
                'ID': 'Generic',
                'Name': 'Generic'
            }]
        }, {
            'label': 'Earning Account Format',
            'popupFieldLabels': 'Earning',
            'active': false,
            'disableAddButton': false,
            'tableData': this.earningAccFormatArr,
            'accDropdown': this.earningAccDDNArr
        }, {
            'label': 'Deduction Account Format',
            'popupFieldLabels': 'Deduction',
            'active': false,
            'disableAddButton': false,
            'tableData': this.deductionAccFormatArr,
            'accDropdown': [{
                'ID': 'CODENT',
                'Name': 'Client Dental S.125'
            }]
        }, {
            'label': 'Tax Account Format',
            'popupFieldLabels': 'Tax',
            'active': false,
            'disableAddButton': false,
            'tableData': this.taxAccFormatArr,
            'accDropdown': [{
                'ID': '00-13',
                'Name': 'Earned Income Credit'
            }]
        }, {
            'label': 'Other Billing Account Format',
            'popupFieldLabels': 'Other Billing',
            'active': false,
            'disableAddButton': false,
            'tableData': this.otherAccFormatArr,
            'accDropdown': [{
                'ID': '401K',
                'Name': '401K MATCH'
            }]
        }
    ];
    private tokenData: String = '';
    checkSumCount = '';
    constructor(private generalLedgerService: ClientSetupGeneralLedgerService, private authService: AuthService) {
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onCellButtonClick = this.onCellButtonClick.bind(this);
    }

    onSubmitClick() {
        if (this.actionTypeSelected === 'EDIT') {
            this.glCodeTabs[this.tabSelected].tableData[this.currentSelectedRow.ID].code = this.currentSelectedRow.code;
            this.glCodeTabs[this.tabSelected].tableData[this.currentSelectedRow.ID].format = this.currentSelectedRow.format;
            this.editPopupVisible = false;
        } else if (this.actionTypeSelected === 'DELETE') {
            this.glCodeTabs[this.tabSelected].tableData.splice(this.currentSelectedRow.ID, 1);
            this.deletePopupVisible = false;
        } else if (this.actionTypeSelected === 'ADD') {
            this.glCodeTabs[this.tabSelected].tableData
                .splice(1, 0, { 'code': this.currentSelectedRow.code, 'format': this.currentSelectedRow.format, 'default': false });
            this.editPopupVisible = false;
        }
        this.setEditDeleteGLData();
        this.actionTypeSelected = '';
    }

    onCancelClick() {
        this.editPopupVisible = false;
        this.deletePopupVisible = false;
        this.actionTypeSelected = '';
        this.currentSelectedRow.ID = 0;
        this.currentSelectedRow.code = '';
        this.currentSelectedRow.format = '';
    }

    onCellButtonClick(e) {
        this.actionTypeSelected = e.cellElement.innerText == null ? '' : e.cellElement.innerText.trim().toUpperCase();
        if (this.actionTypeSelected === 'EDIT') {
            this.updatePopupStaticText(e.data.code);
            this.updateCurrentSelectedRow(e.rowIndex, e.data.code, e.data.format);
            this.editPopupVisible = true;
        } else if (this.actionTypeSelected === 'DELETE' && !e.data.default) {
            this.updatePopupStaticText(e.data.code);
            this.updateCurrentSelectedRow(e.rowIndex, e.data.code, e.data.format);
            this.deletePopupVisible = true;
            this.currentSelectedRow.ID = e.rowIndex;
        }
    }

    getDDNDataCode(matchingText, DdnArray) {
        let selectedCode = '';
        if (matchingText === 'DEFAULT') {
            selectedCode = 'DEFAULT';
        } else {
            DdnArray.map(item => {
                if (item.Name === matchingText) {
                    selectedCode = item.ID;
                }
            });
        }
        return selectedCode;
    }

    ngOnInit() {
        this.currentSelectedRow = {
            'ID': 0,
            'code': '',
            'format': '',
            'ddn_code': ''
        };
        this.authService.getSessionToken().subscribe((response: any) => {
            this.tokenData = response.JSONOUT.responseProfile.sessionToken;
            this.getGeneralLedgerData(this.tokenData);
        },
            err => {
                console.log(err);
            });
    }

    setEditDeleteGLData() {
        // const myObject = { 'sessionToken': this.tokenData };
        const myObject = { 'sessionToken': this.tokenData, 'recordChecksum': this.checkSumCount };
        const dataEditObj = {};
        const dataEditObj1 = {};
        const dataEditArr = [];
        if (this.tabSelected === 0) {
            dataEditObj['ID'] = this.currentSelectedRow.ID;
            dataEditObj['accountingSystemCode'] = this.currentSelectedRow.ddn_code;
            dataEditObj['companyOffsetAccount'] = this.currentSelectedRow.format;
            // This object has one to one relation ship
            Object.assign(myObject, dataEditObj);

        } else if (this.tabSelected === 1) {
            dataEditObj['ID'] = this.currentSelectedRow.ID;
            dataEditObj['earningCode'] = this.currentSelectedRow.ddn_code;
            dataEditObj['earningCodeFormat'] = this.currentSelectedRow.format;
            dataEditArr.push(dataEditObj);
            dataEditObj1['earningCodeFormats'] = dataEditArr;
            // This object has one to many relation ship
            Object.assign(myObject, dataEditObj1);

        } else if (this.tabSelected === 2) {
            dataEditObj['ID'] = this.currentSelectedRow.ID;
            dataEditObj['deductionCode'] = this.currentSelectedRow.ddn_code;
            dataEditObj['deductionCodeFormat'] = this.currentSelectedRow.format;
            dataEditArr.push(dataEditObj);
            dataEditObj1['deductionCodeFormats'] = dataEditArr;
            Object.assign(myObject, dataEditObj1);

        } else if (this.tabSelected === 3) {
            dataEditObj['ID'] = this.currentSelectedRow.ID;
            dataEditObj['taxCode'] = this.currentSelectedRow.ddn_code;
            dataEditObj['taxCodeFormat'] = this.currentSelectedRow.format;
            dataEditArr.push(dataEditObj);
            dataEditObj1['taxCodeFormats'] = dataEditArr;
            Object.assign(myObject, dataEditObj1);

        } else if (this.tabSelected === 4) {
            dataEditObj['ID'] = this.currentSelectedRow.ID;
            dataEditObj['otherBillingCode'] = this.currentSelectedRow.ddn_code;
            dataEditObj['otherBillingCodeFormat'] = this.currentSelectedRow.format;
            dataEditArr.push(dataEditObj);
            dataEditObj1['otherBillingCodeFormats'] = dataEditArr;
            Object.assign(myObject, dataEditObj1);

        }
        // Depending on condition Delete / Update data
        if (this.actionTypeSelected === 'DELETE') {
            this.deleteGeneralLedgerData(myObject);
        } else {
            this.setGeneralLedgerData(myObject);
        }
    }
    getGeneralLedgerData(sessionToken) {
        let resArr = [];
        let resDDNArr = [];
        this.generalLedgerService.getGeneralLedgerData(sessionToken).subscribe(
            (res: any) => {
                if (res.JSONOUT.errorMessage) {
                    alert(res.JSONOUT.errorMessage);
                } else {
                    // console.log(res.JSONOUT.responseBody.companyGeneralLedgerCodes);
                    this.checkSumCount = res.JSONOUT.responseBody.companyGeneralLedgerCodes[0].recordChecksum;
                    resArr = res.JSONOUT.responseBody.companyGeneralLedgerCodes;
                    resDDNArr = res.JSONOUT.responseBody;
                    this.populateDropdownsData(resDDNArr);
                    this.populateDataGridProviders(resArr);
                }
            },
            err => {
                alert('Error occurred');
            }
        );
    }
    populateDropdownsData(DDNArray) {
        // Assigning Accounting System Details Dropdown Array
        this.glCodeTabs[0].accDropdown = DDNArray['availableAccountingSystems'].map(o => {
            return { ID: o.accountingSystemCode, Name: o.accountingSystemDescription };
        });
        // End
        // Assigning Accounting System Details Dropdown Array
        this.glCodeTabs[4].accDropdown = DDNArray['availableBillingCodes'].map(o => {
            return { ID: o.billingCode, Name: o.billingCodeDescription };
        });
        // End
        // Assigning Accounting System Details Dropdown Array
        this.glCodeTabs[2].accDropdown = DDNArray['availableDeductionCodes'].map(o => {
            return { ID: o.deductionCode, Name: o.deductionCodeDescription };
        });
        // End
        // Assigning Accounting System Details Dropdown Array
        this.glCodeTabs[1].accDropdown = DDNArray['availableEarningCodes'].map(o => {
            return { ID: o.earningCode, Name: o.earningCodeDescription };
        });
        // End
        // Assigning Accounting System Details Dropdown Array
        this.glCodeTabs[3].accDropdown = DDNArray['availableTaxCodes'].map(o => {
            return { ID: o.taxCode, Name: o.taxCodeDescription };
        });
        // End
    }
    populateDataGridProviders(dataProvider) {
        // Assigning Deduction Account Format Tab values
        this.glCodeTabs[2].tableData = dataProvider[0].deductionCodeFormats.map(o => {
            return {
                code: o.deductionCodeDescription, format: o.deductionCodeFormat,
                default: (o.deductionCode === 'DEFAULT' ? true : false)
            };
        });
        // End
        // Assigning Tax Account Format Tab values
        this.glCodeTabs[3].tableData = dataProvider[0].taxCodeFormats.map(o => {
            return { code: o.taxCodeDescription, format: o.taxCodeFormat, default: (o.taxCode === 'DEFAULT' ? true : false) };
        });
        // End
        // Assigning Earning Account Format Tab values
        this.glCodeTabs[1].tableData = dataProvider[0].earningCodeFormats.map(o => {
            return { code: o.earningCodeDescription, format: o.earningCodeFormat, default: (o.earningCode === 'DEFAULT' ? true : false) };
        });
        // End
        // Assigning Other Billing  Account Format Tab values
        this.glCodeTabs[4].tableData = dataProvider[0].otherBillingCodeFormats.map(o => {
            return {
                code: o.otherBillingCodeDescription, format: o.otherBillingCodeFormat,
                default: (o.otherBillingCode === 'DEFAULT' ? true : false)
            };
        });
        // End
        // Assigning Accounting System Details Tab values
        this.glCodeTabs[0].tableData.map(o => {
            o.code = dataProvider[0].accountingSystemDescription;
            o.format = dataProvider[0].companyOffsetAccount;
            o.default = (o.code === 'DEFAULT' ? true : false);
            return o;
        });
        // End
    }
    setGeneralLedgerData(glData) {
        this.generalLedgerService.setGeneralLedgerData(glData).subscribe(
            (res: any) => {
                if (res.JSONOUT.errorMessage) {
                    alert(res.JSONOUT.errorMessage);
                } else {
                    // 'Data inserted' calling List to show data
                    this.getGeneralLedgerData(this.tokenData);
                }
            },
            err => {
                alert('Error occurred');
            }
        );
    }

    deleteGeneralLedgerData(glData) {
        this.generalLedgerService.deleteGeneralLedgerData(glData).subscribe(
            (res: any) => {
                if (res.JSONOUT.errorMessage) {
                    alert(res.JSONOUT.errorMessage);
                } else {
                    // 'Data inserted' calling List to show data
                    this.getGeneralLedgerData(this.tokenData);
                }
            },
            err => {
                alert('Error occurred');
            }
        );
    }

    addCode(): void {
        if (!this.glCodeTabs[this.tabSelected].disableAddButton) {
            if (this.glForm) {
                this.glForm.reset();
            }
            this.actionTypeSelected = 'ADD';
            this.updateCurrentSelectedRow(0, '', '');
            this.updatePopupStaticText('');
            this.editPopupVisible = true;
        }
    }

    updatePopupStaticText(customSubTitle): void {
        this.popupHeight = this.actionTypeSelected === 'ADD' || this.tabSelected === 0 ? 500 : 425;
        this.popupSubTitle = this.actionTypeSelected.toLowerCase() + ' ';
        this.popupSubTitle += (this.actionTypeSelected === 'ADD' || this.tabSelected === 0)
            ? this.glCodeTabs[this.tabSelected].label : customSubTitle;
        this.popupLabelCode = this.tabSelected === 0 ? 'Accounting System' : this.glCodeTabs[this.tabSelected].popupFieldLabels + ' Code';
        this.popupLabelFormat = this.tabSelected === 0 ? 'Offset Account' : this.glCodeTabs[this.tabSelected].popupFieldLabels + ' Format';
    }

    updateCurrentSelectedRow(id, code, format): void {
        this.currentSelectedRow.ID = id;
        this.currentSelectedRow.code = code;
        this.currentSelectedRow.format = format;
        this.currentSelectedRow.ddn_code = this.getDDNDataCode(code, this.glCodeTabs[this.tabSelected].accDropdown);
    }

    updateTabSelection(tabIndex) {
        this.glCodeTabs.forEach(function (tabItem, index, theArray) {
            if (tabItem.active) {
                theArray[index].active = false;
            }
        });
        this.glCodeTabs[tabIndex].active = true;
        this.tabSelected = tabIndex;
    }

    changeCodeSelection(item) {
        this.currentSelectedRow.code = item.Name;
        this.currentSelectedRow.ddn_code = item.ID;
        this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
    }
}

import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import { StatesService } from '../../../../../shared/services';
import { confirm } from 'devextreme/ui/dialog';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { AbstractStep } from '../../AbstractStep';
import { FormGroup, FormArray } from '../../../../../../../node_modules/@angular/forms';
import { OnboardingWizardService } from '../../services';

//import { PhoneMask } from '../../../../../shared/directives';

@Component({
  selector: 'app-client-information-business-structure',
  templateUrl: './client-information-business-structure.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./client-information-business-structure.component.scss']
})
export class ClientInformationBusinessStructureComponent extends AbstractStep implements OnInit {
  groupId = 'businessStructure';

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;
  @ViewChild('dxStatesDataGrid') dxStatesDataGrid: DxDataGridComponent;
  @ViewChild('dxLocationDataGrid') dxLocationDataGrid: DxDataGridComponent;
  @ViewChild('dxPaymentDataGrid') dxPaymentDataGrid: DxDataGridComponent;

  contentReadyRowEdited = false;
  insertingRow = false;

  selectedBusinessType = '';
  disableInputs = true;
  isDropDownBoxOpened = false;

  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  //phonePattern: any = "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$";
  phoneRules: any = {
    X: /[02-9]/
  }


  businessTypesDropdown: any[] = [{
    name: 'S-Corp',
    id: 1,
  },
  {
    name: 'LLC',
    id: 2,
  },
  {
    name: 'Partnership',
    id: 3,
  },
  {
    name: 'Sole Proprietor',
    id: 4,
  },
  {
    name: 'C-Corp',
    id: 5,
  },
  {
    name: 'Church',
    id: 6,
  },
  {
    name: 'Government Entity',
    id: 7,
  },
  {
    name: 'Tax Exempt Organization',
    id: 8,
  },
  {
    name: 'Other',
    id: 9,
  }];

  feinEntitiesDataRows = [
    {
      'ID': 1,
      'Fein': '11256',
      'EntityName': 'Waterfall',
      'inserting': false
    }, {
      'ID': 2,
      'Fein': '11257',
      'EntityName': 'Sprint',
      'inserting': false
    },
    {
      'ID': 3,
      'Fein': '',
      'EntityName': '',
      'inserting': true
    },
  ];

  physicalLocations = [{
    ID: 1,
    Code: 'Main',
    Name: 'Main TX',
    Address1: '238 N Loop 1604 W',
    Address2: '2342341',
    City: 'San Antonio',
    Township: '-',
    State: 'TX',
    ZipCode: '78232',
    ContactName: 'Alexander Cole',
    ContactNumber: '(210) 942-5277',
    inserting: false
  }, {
    ID: 2,
    Code: 'Main',
    Name: 'Main NY',
    Address1: '133 Roebling St',
    Address2: '2342341',
    City: 'Brooklyn',
    Township: '-',
    State: 'NV',
    ZipCode: '11211',
    ContactName: 'Sarah White',
    ContactNumber: '(718) 782-0332',
    inserting: false
  }, {
    ID: 3,
    Code: '',
    Name: '',
    Address1: '',
    Address2: '',
    City: '',
    Township: '-',
    State: '',
    ZipCode: '',
    ContactName: '',
    ContactNumber: '',
    inserting: true
  }
  ];

  paymentAccounts = [{
      ID: 1,
      BankName: 'Wells Fargo',
      RoutingNumber: '4562342341',
      ConfirmRoutingNumber: '4562342341',
      AccountNumber: '9872342341',
      ConfirmAccountNumber: '9872342341',
      AllocationCode: '78232',
      AllocationDescription: 'Cras sollicitudin sapien nec...',
      inserting: false
    }, {
      ID: 2,
      BankName: 'Chase',
      RoutingNumber: '4562342341',
      ConfirmRoutingNumber: '4562342341',
      AccountNumber: '9872342341',
      ConfirmAccountNumber: '9872342341',
      AllocationCode: '11211',
      AllocationDescription: 'Consectetur adipiscing elit...',
      inserting: false
    }, {
      ID: 3,
      BankName: '',
      RoutingNumber: '',
      ConfirmRoutingNumber: '',
      AccountNumber: '',
      ConfirmAccountNumber: '',
      AllocationCode: '',
      AllocationDescription: '',
      inserting: true
    }
  ];

  statesList: any[] = [
    {
      ID: 1,
      Name: 'Alabama',
      inserting: false
    }, {
      ID: 2,
      Name: 'Alaska',
      inserting: false
    }, {
      ID: 3,
      Name: '',
      inserting: true
    }
  ];

  private _typesWithRequiredOwnerFields = [
    'S-Corp',
    'LLC',
    'Partnership',
    'Sole Proprietor',
  ];

  constructor(private stateServices: StatesService,
              protected formService: OnboardingFormService) {
    super(formService);
  }

  ngOnInit() {

    window.scrollTo(0, 0);
    super.ngOnInit();

    this.businessTypeSelected(this.formGroup.get('businessType').value);

    this._initFein();
  }

  get paymentMethod(): FormGroup {
    return this.formGroup.get('paymentMethod') as FormGroup;
  }

  get paymentMethodName(): string {
    for (const name in this.paymentMethod.controls) {
      if (this.paymentMethod.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get showOwnerFields() {
    const businessTypeId = this.formGroup.get('businessType').value;
    const businessType = this.businessTypesDropdown.find(x => x.id === businessTypeId).name;
    return this._typesWithRequiredOwnerFields.includes(businessType);
  }

  get jointEmployerGroup(): FormGroup {
    return this.formGroup.get('jointEmployerGroup') as FormGroup;
  }

  get jointEmployerGroupName(): string {
    for (const name in this.jointEmployerGroup.controls) {
      if (this.jointEmployerGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get relatedToOasisGroup(): FormGroup {
    return this.formGroup.get('relatedToOasisGroup') as FormGroup;
  }

  get relatedToOasisGroupName(): string {
    for (const name in this.relatedToOasisGroup.controls) {
      if (this.relatedToOasisGroup.get(name).value) {
        return name;
      }
    }
    return '';
  }

  get joinEntityPrimaryCompanyGroup(): FormGroup {
    return this.formGroup.get('joinEntityPrimaryCompanyGroup') as FormGroup;
  }

  get overtimeCalculationGroup(): FormGroup {
    return this.formGroup.get('overtimeCalculationGroup') as FormGroup;
  }

  openWireTransferInstructions() {
    window.open('https://www2.oasisadvantage.com/marketing/docs/Finance/WireTransfer.pdf', '_blank');
  }

  onContentReadydxTreeView(e, cell: any) {
  const component = (e && e.component);
    if (!component) {
      return;
    }

    this.contentReadyRowEdited = false;
    component.unselectAll();

    if (cell.value === undefined) {
      cell.setValue([]);
    }

    cell.value.forEach(item => {
      component.selectItem(item);
    });
    this.contentReadyRowEdited = true;


    const selectAll = document.getElementsByClassName('dx-treeview-select-all-item').item(0);
  }

  public test(e) {
    console.log(e);
  }

  private _initFein() {
    const feinGroup = this.formGroup.get('fein') as FormArray;
    if (feinGroup.controls.length) {
      return;
    }
    this.feinEntitiesDataRows.forEach((row) => {
      this.formService.addFeinEntity(row.Fein, row.EntityName);
    });
  }

  private _disableOwnerInputs(disable: boolean = true) {
    const owner = this.formGroup.get('owner');
    const shareholder = this.formGroup.get('shareholder');
    const partner = this.formGroup.get('partner');
    if (disable) {
      owner.disable();
      shareholder.disable();
      partner.disable();
    } else {
      owner.enable();
      shareholder.enable();
      partner.enable();
    }
  }

  businessTypeSelected(businessTypeId) {
    const typeInList = this.businessTypesDropdown.find(x => x.id === businessTypeId);
    const businessType = typeInList ? typeInList.name : undefined;
    const shouldDisable = !this._typesWithRequiredOwnerFields.includes(businessType);
    this._disableOwnerInputs(shouldDisable);
  }

  onItemSelectionChangedRowEdited(e, cell: any) {
    const component = (e && e.component);
    if (!component) {
      return;
    }
  }

  onAddRow(data) {
    this.feinEntitiesDataRows[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.feinEntitiesDataRows[data.rowIndex].ID + 1,
      'Fein': '',
      'EntityName': '',
      'inserting': true
    };
    this.feinEntitiesDataRows.push(inserted);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.feinEntitiesDataRows.splice(data.rowIndex, 1);
      }
    });
  }

  onAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onAddRow(data);
    }
  }

  onDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onDeleteRow(data);
    }
  }

  // For States
  onStateAddRow(data) {
    this.statesList[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.statesList[data.rowIndex].ID + 1,
      'Name': '',
      'inserting': true
    };

    this.statesList.push(inserted);
  }

  onStateDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.statesList.splice(data.rowIndex, 1);
      }
    });
  }

  onStateAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onStateAddRow(data);
    }
  }

  onStateDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onStateDeleteRow(data);
    }
  }

  // For Physical Locations
  onLocationAddRow(data) {
    this.physicalLocations[data.rowIndex].inserting = false;
    const inserted = {
      ID: this.physicalLocations[data.rowIndex].ID + 1,
      Code: '',
      Name: '',
      Address1: '',
      Address2: '',
      City: '',
      Township: '-',
      State: '',
      ZipCode: '',
      ContactName: '',
      ContactNumber: '',
      inserting: true
    };
    this.physicalLocations.push(inserted);
  }

  onLocationDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.physicalLocations.splice(data.rowIndex, 1);
      }
    });
  }

  onLocationAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onLocationAddRow(data);
    }
  }

  onLocationDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onLocationDeleteRow(data);
    }
  }

  // For Payment accounts
  onPaymentMethodAddRow(data) {
    this.paymentAccounts[data.rowIndex].inserting = false;
    const inserted = {
      ID: this.paymentAccounts[data.rowIndex].ID + 1,
      BankName: '',
      RoutingNumber: '',
      ConfirmRoutingNumber: '',
      AccountNumber: '',
      ConfirmAccountNumber: '',
      AllocationCode: '',
      AllocationDescription: '',
      inserting: true
    };
    this.paymentAccounts.push(inserted);
  }

  onPaymentMethodDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.paymentAccounts.splice(data.rowIndex, 1);
      }
    });
  }

  onPaymentMethodAddKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onPaymentMethodAddRow(data);
    }
  }

  onPaymentMethodDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onPaymentMethodDeleteRow(data);
    }
  }

  onGroupedCheckBoxChanged(controlName, groupName, event) {
    if (!event.value) {
      return;
    }

    if (groupName === 'jointEmployerGroup') {
      for (const formControlName in this.jointEmployerGroup.controls) {
        if ( controlName !== formControlName) {
            this.jointEmployerGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'relatedToOasisGroup') {
      for (const formControlName in this.relatedToOasisGroup.controls) {
        if ( controlName !== formControlName) {
            this.relatedToOasisGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'paymentMethod') {
      for (const formControlName in this.paymentMethod.controls) {
        if ( controlName !== formControlName) {
            this.paymentMethod.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'joinEntityPrimaryCompanyGroup') {
      for (const formControlName in this.joinEntityPrimaryCompanyGroup.controls) {
        if ( controlName !== formControlName) {
            this.joinEntityPrimaryCompanyGroup.get(formControlName).patchValue(false);
        }
      }
    } else if (groupName === 'overtimeCalculationGroup') {
      for (const formControlName in this.overtimeCalculationGroup.controls) {
        if ( controlName !== formControlName) {
            this.overtimeCalculationGroup.get(formControlName).patchValue(false);
        }
      }
    }
  }
}


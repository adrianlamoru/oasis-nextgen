import { Component, OnInit, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { EmployeeDirectDeposit, IDataDriven } from '../../../shared/models';
import { DirectDepositService } from '../../../shared/services';
import { DxDataGridComponent } from 'devextreme-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const METHOD_FIXED = 'MT-F';

const METHOD_PERCENT = 'MT-P';

@Component({
  selector: 'app-employee-details-direct-deposit',
  templateUrl: './employee-details-direct-deposit.component.html',
  styleUrls: ['./employee-details-direct-deposit.component.scss']
})
export class EmployeeDetailsDirectDepositComponent implements OnInit {
  @ViewChild('directDepositDataGrid') dxDataGrid: DxDataGridComponent;

  @ViewChild('payrollDebitCard') payrollDebitCard: ViewContainerRef;

  @ViewChild('unEnrollFromPaperless') unEnrollFromPaperless: ViewContainerRef;

  directDepositData: EmployeeDirectDeposit[];

  typeDataDriven: IDataDriven[];

  bankNameDataDriven: IDataDriven[];

  methodDataDriven: IDataDriven[];

  statusDataDriven: IDataDriven[];

  method: IDataDriven;

  editing: boolean;

  checkImage: any;

  digitsPattern: string;

  popupTitle = () => {
    if (this.editing) {
        return 'Edit Direct Deposit';
    }

    return 'Add Direct Deposit';
  }

  popupHeight = () => {
    if (this.editing) {
      return 840;
    }

    return 765;
  }

  amountMessage = () => {
    return 'Pepe';
  }

  customizeItem = (item: any) => {
    if (item.dataField === 'bankName') {
      item.visible = this.editing;
    }
  }

  constructor(@Inject(DirectDepositService) private directDepositService: DirectDepositService,
    @Inject(NgbModal) private modalService: NgbModal,
  ) {
    this.directDepositData = [];
    this.typeDataDriven = [];
    this.bankNameDataDriven = [];
    this.methodDataDriven = [];
    this.statusDataDriven = [];

    this.isEditingMode = this.isEditingMode.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onMethodValueChanged = this.onMethodValueChanged.bind(this);

    this.digitsPattern = '^\\d+$';
    this.checkImage = null;
    this.editing = false;
    this.method = null;
  }

  ngOnInit() {
    this.directDepositService.getTypes().subscribe((typeDataDriven: IDataDriven[]) => {
      this.typeDataDriven = typeDataDriven;
    });

    this.directDepositService.getBankNames().subscribe((bankNameDataDriven: IDataDriven[]) => {
      this.bankNameDataDriven = bankNameDataDriven;
    });

    this.directDepositService.getMethods().subscribe((methodDataDriven: IDataDriven[]) => {
      this.methodDataDriven = methodDataDriven;
    });

    this.directDepositService.getStatus().subscribe((statusDataDriven: IDataDriven[]) => {
      this.statusDataDriven = statusDataDriven;
    });

    this.directDepositService.getEmployeeDirectDeposits().subscribe((directDepositData: EmployeeDirectDeposit[]) => {
      this.directDepositData = directDepositData;
    });
  }

  public addDirectDeposit(): void {
    this.editing = false;
    this.dxDataGrid.instance.addRow();
  }

  public getBanckNameFromData(data): string {
    return data.value;
  }

  public getCheckImageFromData(data) {
    const formData = data.component.option('formData');
    const checkImage = formData[data.dataField];

    return checkImage ? [checkImage] : [];
  }

  public isEditingMode(): boolean {
    return this.editing;
  }

  public isfixedAmount(data) {
  }

  public isPercentAmount(data) {
  }

  public onCancelClick() {
    this.dxDataGrid.instance.cancelEditData();
  }

  public onSubmitClick() {
    this.dxDataGrid.instance.saveEditData();
  }

  public onEditRow(data) {
    this.editing = true;
    this.dxDataGrid.instance.editRow(data.rowIndex);
  }

  public onDeleteRow(data) {
    this.dxDataGrid.instance.deleteRow(data.rowIndex);
  }

  public onEditKeyDown(event, data) {
    if (event.keyCode === 13) {
        this.onEditRow(data);
    }
  }

  public onDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
        this.onDeleteRow(data);
    }
  }

  public onImageChange(event: any[], data) {
    const formData = data.component.option('formData');

    this.checkImage = null;

    if (event && event.length > 0) {
      formData[data.dataField] = event[0];

      this.checkImage = event[0];
    }
  }

  public onRowInserting(event) {
    const data: EmployeeDirectDeposit = event.data;

    data.checkImage = this.checkImage;

    this.directDepositService.addDirectDeposit(data)
      .subscribe((directDeposit: EmployeeDirectDeposit) => {
        this.directDepositData.push(directDeposit);
      });

    event.cancel = true;
    this.onCancelClick();
  }

  public onRowUpdating(event) {
    const oldData: EmployeeDirectDeposit = event.oldData;
    const data: EmployeeDirectDeposit = event.newData;
    const dataIndex: number = this.directDepositData
      .map((directDeposit: EmployeeDirectDeposit) => directDeposit.id)
      .indexOf(oldData.id);

    data.checkImage = this.checkImage;

    if (dataIndex >= 0) {
      this.directDepositService.updateDirectDeposit(oldData.transitNumber, data)
      .subscribe((directDeposit: EmployeeDirectDeposit) => {
        // On integration delete this code
        const oldDirectDeposit: EmployeeDirectDeposit = this.directDepositData[dataIndex];
        if (directDeposit.account) {
          oldDirectDeposit.account = directDeposit.account;
        }

        if (directDeposit.amount) {
          oldDirectDeposit.amount = directDeposit.amount;
        }

        if (directDeposit.bankName) {
          oldDirectDeposit.bankName = directDeposit.bankName;
        }

        if (directDeposit.checkImage) {
          oldDirectDeposit.checkImage = directDeposit.checkImage;
        }

        if (directDeposit.limit) {
          oldDirectDeposit.limit = directDeposit.limit;
        }

        if (directDeposit.method) {
          oldDirectDeposit.method = directDeposit.method;
        }

        if (directDeposit.status) {
          oldDirectDeposit.status = directDeposit.status;
        }

        if (directDeposit.transitNumber) {
          oldDirectDeposit.transitNumber = directDeposit.transitNumber;
        }

        if (directDeposit.type) {
          oldDirectDeposit.type = directDeposit.type;
        }
      });
    }

    event.cancel = true;
    this.onCancelClick();
  }

  public onPayrollDebitCard() {
    this.modalService.open(this.payrollDebitCard, { size: 'sm' });
  }

  public onUnEnrollFromPaperless() {
    this.modalService.open(this.unEnrollFromPaperless, { size: 'sm' });
  }

  public onValueChanged(event) {

  }

  public onMethodValueChanged(event: { value: string}) {
    const index: number = this.methodDataDriven.map((data: IDataDriven) => data.ID).indexOf(event.value);
    if (index >= 0) {
      this.method = this.methodDataDriven[index];
    }
  }

  public amountValidation(event) {
    return true;
  }

  public amountDisplayText(data: EmployeeDirectDeposit) {
    if (data.method === METHOD_FIXED) {
      return '$' + data.amount;
    } else if (data.method === METHOD_PERCENT) {
      return data.amount + ' %';
    }

    return data.amount.toString();
  }
}

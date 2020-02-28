import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DataDriven, PayrollPtoOverLimit } from '../../models/index';
import { DatePipe } from '@angular/common';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-payroll-run-review-submit-pto-over-limit',
  templateUrl: './payroll-run-review-submit-pto-over-limit.component.html',
  styleUrls: ['./payroll-run-review-submit-pto-over-limit.component.scss']
})
export class PayrollRunReviewSubmitPtoOverLimitComponent implements OnInit {
  ptoOverLimitDataRows: PayrollPtoOverLimit[];
  sortCodes: DataDriven[];
  now = new Date();
  sortCodeData: any;
  selectedSortCode: string;
  openedSortCodeSelectBox: boolean;

  constructor() {
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onEnterKey = this.onEnterKey.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.onOpened = this.onOpened.bind(this);

    this.openedSortCodeSelectBox = false;
  }

  ngOnInit(): void {
    this.ptoOverLimitDataRows = [
      { id: '001', ee: 1 , employeeName: 'Employee Name 1', regType: 'Reg Type 1', currAvail: 1, amtEntered: 1, amtOver: 1  },
      { id: '002', ee: 1 , employeeName: 'Employee Name 2', regType: 'Reg Type 2', currAvail: 2, amtEntered: 2, amtOver: 2  },
      { id: '003', ee: 1 , employeeName: 'Employee Name 3', regType: 'Reg Type 3', currAvail: 3, amtEntered: 3, amtOver: 3  },
      { id: '004', ee: 1 , employeeName: 'Employee Name 4', regType: 'Reg Type 4', currAvail: 4, amtEntered: 4, amtOver: 4  },
      { id: '005', ee: 1 , employeeName: 'Employee Name 5', regType: 'Reg Type 5', currAvail: 5, amtEntered: 5, amtOver: 5  },
      { id: '006', ee: 1 , employeeName: 'Employee Name 6', regType: 'Reg Type 6', currAvail: 6, amtEntered: 6, amtOver: 6  },
      { id: '007', ee: 1 , employeeName: 'Employee Name 7', regType: 'Reg Type 7', currAvail: 7, amtEntered: 7, amtOver: 7  },
      { id: '008', ee: 1 , employeeName: 'Employee Name 8', regType: 'Reg Type 8', currAvail: 8, amtEntered: 8, amtOver: 8  },
      { id: '009', ee: 1 , employeeName: 'Employee Name 9', regType: 'Reg Type 9', currAvail: 9, amtEntered: 9, amtOver: 9  },
      { id: '010', ee: 1 , employeeName: 'Employee Name 10', regType: 'Reg Type 10', currAvail: 10, amtEntered: 10, amtOver: 10  },
      { id: '011', ee: 1 , employeeName: 'Employee Name 11', regType: 'Reg Type 11', currAvail: 11, amtEntered: 11, amtOver: 11  },
      { id: '012', ee: 1 , employeeName: 'Employee Name 12', regType: 'Reg Type 12', currAvail: 12, amtEntered: 12, amtOver: 12  }
    ];

    this.sortCodes = [
      { ID: 'Employee', Text: 'Employee' },
      { ID: 'Department', Text: 'Department' },
      { ID: 'Division', Text: 'Division' },
      { ID: 'Location', Text: 'Location' }
    ];

    this.sortCodeData = {
      sortCode: 'Employee'
    };

    this.selectedSortCode = this.sortCodeData.sortCode;
  }

  onValueChanged(event): void {
    this.selectedSortCode = event.value;
  }

  onEnterKey(event) {
    if (!this.openedSortCodeSelectBox) {
      this.openedSortCodeSelectBox = true;
    }
  }

  onOpened(event) {
    this.openedSortCodeSelectBox = true;
  }

  onClosed(event) {
    this.openedSortCodeSelectBox = false;
  }

  print() {
    let printContents, popupWin;
    printContents = document.getElementById('contentToRender').outerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        ${this.getHeadHtml(document)}
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }

  getHeadHtml = (document: Document): string => {
    const head: string[] = [];

    const styleElements = document.getElementsByTagName('head');
    for (let idx = 0; idx < styleElements.length; idx++) {
      head.push(styleElements[idx].outerHTML);
    }

    return head.join('\r\n');
  }
}

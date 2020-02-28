import { Component, OnInit } from '@angular/core';
import { DataDriven, PayrollEEDefaults } from '../../models/index';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payroll-run-review-submit-ee-defaults',
  templateUrl: './payroll-run-review-submit-ee-defaults.component.html',
  styleUrls: ['./payroll-run-review-submit-ee-defaults.component.scss']
})
export class PayrollRunReviewSubmitEeDefaultsComponent implements OnInit {

  ptoOverLimitDataRows: PayrollEEDefaults[];
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
      {
        id: '001',
        date: new Date(2018, 8, 18),
        hrs: 2,
        hrsWorked: 4,
        amtUnits: 4,
        rate: 3,
        total: 10,
        payCode: 'Auto',
        department: '100',
        location: '003',
        division: '3.00',
        jobCode: 'Clerk',
        projectCode: 'Test'
      }, {
        id: '002',
        date: new Date(2018, 6, 22),
        hrs: 2,
        hrsWorked: 4,
        amtUnits: 4,
        rate: 3,
        total: 10,
        payCode: 'Auto',
        department: '100',
        location: '003',
        division: '3.00',
        jobCode: 'Clerk',
        projectCode: 'Test'
      }, {
        id: '003',
        date: new Date(2018, 6, 14),
        hrs: 2,
        hrsWorked: 4,
        amtUnits: 4,
        rate: 3,
        total: 10,
        payCode: 'Auto',
        department: '100',
        location: '003',
        division: '3.00',
        jobCode: 'Clerk',
        projectCode: 'Test'
      }, {
        id: '004',
        date: new Date(2018, 9, 28),
        hrs: 2,
        hrsWorked: 4,
        amtUnits: 4,
        rate: 3,
        total: 10,
        payCode: 'Auto',
        department: '100',
        location: '003',
        division: '3.00',
        jobCode: 'Clerk',
        projectCode: 'Test'
      }
    ];

    this.sortCodes = [
      { ID: 'Employee', Text: 'Employee' },
      { ID: 'Pay Code', Text: 'Pay Code' },
      { ID: 'Department Code', Text: 'Department Code' },
      { ID: 'Location Code', Text: 'Location Code' },
      { ID: 'Division Code', Text: 'Division Code' },
      { ID: 'Job Code', Text: 'Job Code' },
      { ID: 'Project/Cost Center Code', Text: 'Project/Cost Center Code' }
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
    printContents = document.getElementById('contentToRender').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>    <script src="dist/styles.bundle.js"></script>

          <style>
          //........Customized style.......
          .header {
            font-weight: bold;
          }

          .content {
            table {
              border: 1px solid black;
            }
          }
          </style>
        </head>
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }
}

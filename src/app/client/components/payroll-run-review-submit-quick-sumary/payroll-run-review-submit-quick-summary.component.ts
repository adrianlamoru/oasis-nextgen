import { Component, OnInit } from '@angular/core';

/* Models */
import { PayrollQuickSummaryInterface } from '../../models/payroll-quick-summary.interface';
import { PayrollDeductionInterface } from '../../models/payroll-deduction.interface';
import { DataDriven } from '../../models/data-driven.interface';
import { PayCode } from '../../models/payroll.interface';
import { PayrollService } from '../../services/index';

@Component({
    selector: 'app-payroll-run-review-submit-quick-summary',
    templateUrl: './payroll-run-review-submit-quick-summary.component.html',
    styleUrls: ['./payroll-run-review-submit-quick-summary.component.scss']
  })
export class PayrollRunReviewSubmitQuickSummaryComponent implements OnInit {
  quickSummaryDataRows: PayrollQuickSummaryInterface[];

  deductionDataRows: PayrollDeductionInterface[];

  payCodes: DataDriven[];
  deductionPayCodes: DataDriven[];

  sortTypes: DataDriven[];
  selectedType: DataDriven;
  secondSortTypes: any;
  selected2ndSortType: DataDriven;

  constructor(private payrollService: PayrollService) {

  }

  ngOnInit(): void {
    this.quickSummaryDataRows = this.payrollService.getQuickSummaryData();

    this.payCodes = [
      { ID: 'ADBG001', Text: 'Auto Allowance' },
      { ID: 'ADBG002', Text: 'Auto Reimbursement' },
      { ID: 'ADBG003', Text: 'Bereavement Pay' },
      { ID: 'ADBG004', Text: 'Bonus' },
      { ID: 'ADBG005', Text: 'Commissions' },
      { ID: 'ADBG006', Text: 'Commissions Supplemental' },
      { ID: 'ADBG007', Text: 'Holiday Pay' },
      { ID: 'ADBG008', Text: 'Regular Pay' },
      { ID: 'ADBG009', Text: 'Sick Pay' },
      { ID: 'ADBG010', Text: 'Vacation Pay' },
    ];

    this.deductionDataRows = this.payrollService.getQuickSummaryDeductionsData();

    this.deductionPayCodes = [
      { ID: 'ADBG001', Text: 'Cellphone' },
      { ID: 'ADBG002', Text: 'Pager Deduction' },
      { ID: 'ADBG003', Text: 'Client Dental' },
      { ID: 'ADBG004', Text: 'Pay Advance' },
      { ID: 'ADBG005', Text: 'Travel' },
      { ID: 'ADBG006', Text: 'Uniform Deduction' },
      { ID: 'ADBG007', Text: 'Meal Deduction' },
      { ID: 'ADBG008', Text: 'Client Medical' },
    ];

    this.sortTypes = [
      {
        ID: 'Department',
        Text: 'Department'
      }, {
        ID: 'Job',
        Text: 'Job'
      }, {
        ID: 'Location',
        Text: 'Location'
      }, {
        ID: 'Project',
        Text: 'Project'
      }, {
        ID: 'Division',
        Text: 'Division'
      }
    ];

    this.secondSortTypes = {
      'Department': [
        {
          ID: 'All',
          Text: 'All'
        }, {
          ID: 'Dept Option 1',
          Text: 'Dept Option 1'
        }, {
          ID: 'Dept Option 2',
          Text: 'Dept Option 2'
        }
      ],
      'Job': [
        {
          ID: 'All',
          Text: 'All'
        }, {
          ID: 'Job Option 1',
          Text: 'Job Option 1'
        }, {
          ID: 'Job Option 2',
          Text: 'Job Option 2'
        }
      ],
      'Location': [
        {
          ID: 'All',
          Text: 'All'
        }, {
          ID: 'Loc Option 1',
          Text: 'Dept Option 1'
        }, {
          ID: 'Loc Option 2',
          Text: 'Loc Option 2'
        }
      ],
      'Project': [
        {
          ID: 'All',
          Text: 'All'
        }, {
          ID: 'Proj Option 1',
          Text: 'Proj Option 1'
        }, {
          ID: 'Proj Option 2',
          Text: 'Proj Option 2'
        }
      ],
      'Division': [
        {
          ID: 'All',
          Text: 'All'
        }, {
          ID: 'Div Option 1',
          Text: 'Div Option 1'
        }, {
          ID: 'Div Option 2',
          Text: 'Div Option 2'
        }
      ]
    };
  }

  ngbDropdownSortChange(type: DataDriven) {
    if  (!this.selectedType || this.selectedType.ID !== type.ID) {
      this.selectedType = type;
      this.selected2ndSortType = this.secondSortTypes[type.ID][0];
      this.quickSummaryDataRows = this.payrollService.getQuickSummaryData(this.selectedType.ID, this.selected2ndSortType.ID);
      this.deductionDataRows = this.payrollService.getQuickSummaryDeductionsData(this.selectedType.ID, this.selected2ndSortType.ID);
    }
  }

  ngbDropdown2ndSortChange(type: DataDriven) {
    if  (!this.selected2ndSortType || this.selected2ndSortType.ID !== type.ID) {
      this.selected2ndSortType = type;
      this.quickSummaryDataRows = this.payrollService.getQuickSummaryData(this.selectedType.ID, this.selected2ndSortType.ID);
      this.deductionDataRows = this.payrollService.getQuickSummaryDeductionsData(this.selectedType.ID, this.selected2ndSortType.ID);
    }
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

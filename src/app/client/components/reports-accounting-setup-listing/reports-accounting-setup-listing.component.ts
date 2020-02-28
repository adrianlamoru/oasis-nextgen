import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-accounting-setup-listing',
  templateUrl: './reports-accounting-setup-listing.component.html',
  styleUrls: ['./reports-accounting-setup-listing.component.scss']
})
export class ReportsAccountingSetupListingComponent implements OnInit {

  reportGeneratedDate: string;
  dropdownOptions: any[];
  accountingSetupListingEarnCodeData: any[];
  accountingSetupListingDeductCodeData: any[];
  accountingSetupListingTaxCodeData: any[];
  accountingSetupListingOtherBillCodeData: any[];
  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewEarnReport();
      this.isLoading = false;
    }, 1000);
  }

  viewEarnReport() {
    this.accountingSetupListingEarnCodeData = [
      {
        earnCode: 'DEFAULT EARNINGS FORMAT - *',
        earnAccFormat: 'EARNING-CODE'
      }
    ];
    this.accountingSetupListingDeductCodeData = [
      {
        dedCode: 'DEFAULT DEDUCTIONS FORMAT - *',
        dedAccFormat: 'DEDUCTION-CODE'
      },
      {
        dedCode: 'LODGING DEDUCTION - LODGINGDED',
        dedAccFormat: 'EEXMYJ'
      },
      {
        dedCode: 'DEPOSIT - DEPOSIT',
        dedAccFormat: 'EEPRJFE'
      },
      {
        dedCode: 'CHARITABLE DED - CHARDED',
        dedAccFormat: 'TESTING2018'
      }
    ];
    this.accountingSetupListingTaxCodeData = [
      {
        taxCode: 'DEFAULT TAX FORMAT - *',
        taxAccFormat: 'TAX-CODE'
      },
      {
        taxCode: 'FUTA - EMPLOYEE - 00-14',
        taxAccFormat: 'TESTING123'
      },
      {
        taxCode: 'EARNED INCOME CREDIT - 00-13',
        taxAccFormat: '13433334159'
      },
      {
        taxCode: 'MEDICARE - EE - 00-11',
        taxAccFormat: 'EEDPT159'
      }
    ];
    this.accountingSetupListingOtherBillCodeData = [
      {
        otherBillCode: 'DEFAULT BILLING FORMAT - *',
        otherBillAccFormat: 'BILLING-CODE'
      },
      {
        otherBillCode: '401K MATCH - 401K',
        otherBillAccFormat: 'EEWSEM'
      },
      {
        otherBillCode: 'DEFAULT BILLING FORMAT - *',
        otherBillAccFormat: 'BILLING-CODE'
      },
      {
        otherBillCode: 'WC DEPOSIT - 005DEPOSITDHR	',
        otherBillAccFormat: 'ELBPSEPO'
      },
      {
        otherBillCode: '401K FORFEITURE - PEP401KFOR',
        otherBillAccFormat: 'TEDDDDDD'
      },
      {
        otherBillCode: '401K ADJUSTMENT MATCH - PEP401KADJ',
        otherBillAccFormat: '3451597536'
      },
      {
        otherBillCode: '401K MATCH - SP401K',
        otherBillAccFormat: 'P333965'
      }
    ];
  }


  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {}

}

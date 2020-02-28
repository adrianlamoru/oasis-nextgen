import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceReprintDataNumber, InvoiceReprintData } from '../../models/index';
import { InvoiceReprintDataService, ReportsService } from '../../services';


@Component({
  selector: 'app-invoice-reprint-details',
  templateUrl: './invoice-reprint-details.component.html',
  styleUrls: ['./invoice-reprint-details.component.scss']
})
export class InvoiceReprintDetailsComponent implements OnInit {

  invoiceReprintDataReport: InvoiceReprintDataNumber;
  unfilteredInvoiceReprintDataReport: InvoiceReprintDataNumber[];
  invoiceReprintDataList: InvoiceReprintData[];

  reportGeneratedDate: any;
  invoiceNumber: string;
  deptCode: string;
  deptName: string;
  dropdownOptions: any[];


  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private invoiceReprintDataService: InvoiceReprintDataService
  ) { }

  ngOnInit() {

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    const employeeIdSubscription = this.route.params.subscribe(params => {
      this.invoiceNumber = params['invoiceNumber'];
      this.getInvoiceReprintData(this.invoiceNumber);
    });
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  getInvoiceReprintData(invoiceNumber) {

    this.invoiceReprintDataService.getInvoiceReprintData()
      .subscribe(invoiceReprintDataReport => {
        this.unfilteredInvoiceReprintDataReport = invoiceReprintDataReport;
        this.invoiceReprintDataReport = this.unfilteredInvoiceReprintDataReport.find(
          (item: InvoiceReprintDataNumber) => {
            const invNum = item.invoiceNumber;
            return invNum.toString() === invoiceNumber;
          }
          );

        this.invoiceReprintDataList = (this.invoiceReprintDataReport !== undefined) ?
                                        this.invoiceReprintDataReport.invoiceReprintDataList : [];
        this.deptCode = (this.invoiceReprintDataReport !== undefined) ? this.invoiceReprintDataReport.deptCode : '';
        this.deptName = (this.invoiceReprintDataReport !== undefined) ? this.invoiceReprintDataReport.deptName : '';
        this.isLoading  = false;
      });
  }


  goToReports() {
    this.router.navigate(['/client/reports/']);
  }

  goToInvoiceReprint() {
    this.router.navigate(['/client/reports/reports-listing/invoice-reprint']);
  }

}

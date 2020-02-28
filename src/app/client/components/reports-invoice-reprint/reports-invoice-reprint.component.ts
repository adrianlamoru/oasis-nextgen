import { Component, OnInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsInvoiceReprint, InvoiceReprintData } from '../../models/index';
import { ReportsInvoiceReprintService, ReportsService } from '../../services';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reports-invoice-reprint',
  templateUrl: './reports-invoice-reprint.component.html',
  styleUrls: ['./reports-invoice-reprint.component.scss']
})
export class ReportsInvoiceReprintComponent implements OnInit {

  @ViewChild('invoiceDetailModal') invoiceDetailModal: ViewContainerRef;
  private actionModalHandle: NgbModalRef;
  @Input() invoiceNumber: string;
  reportsInvoiceReprintReport: ReportsInvoiceReprint[];
  filteredInvoiceReprintReport: ReportsInvoiceReprint[];

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;
  reportGeneratedDate: any;
  disableViewReportButton = true;
  dropdownOptions: any[];

  selectedInvoice: InvoiceReprintData;

  isLoading = true;


  constructor(
    private reportsInvoiceReprintService: ReportsInvoiceReprintService,
    private reportsService: ReportsService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getYears();
    this.reportsInvoiceReprintService.getInvoiceReprint()
    .subscribe(
      reportsInvoiceReprintReport => {
        this.reportsInvoiceReprintReport = reportsInvoiceReprintReport;
        this.isLoading = false;
        this.filterDataRow();
      }
    );
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  // Get simpleYears array
  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 3;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionChanged(year) {
    this.selectedYearDisplay = year;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  onClickInvoiceDetail(data) {
    this.selectedInvoice = data.invoices;
    const url = 'client/reports/reports-listing/invoice-reprint-details';
    this.router.navigate([url, this.selectedInvoice]);
    this.invoiceNumber = '77846';
    // this.openActionModal('lg', this.invoiceDetailModal);
  }

  // onKeyDownInvoiceDetail(event, data) {
  //   if (event.keyCode === 13) {
  //       this.onClickInvoiceDetail(data);
  //   }
  // }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  // test purpose - simulating service filter action
  filterDataRow() {
    this.selectedYear = this.selectedYearDisplay;

   this.filteredInvoiceReprintReport =
    this.reportsInvoiceReprintReport.filter(y => new Date(y.date).getFullYear().toString() === this.selectedYear.toString());

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

     this.isLoading = false;
    }, 3000);
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  thisReport() {
    this.router.navigate(['./client/reports/reports-invoice-reprint']);
  }

}

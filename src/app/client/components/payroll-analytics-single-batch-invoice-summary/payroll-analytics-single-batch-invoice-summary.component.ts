import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { PayrollAnalyticsInvoice } from '../../models';
import { PayrollAnalyticsService } from '../../services';

// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

@Component({
  selector: 'app-payroll-analytics-single-batch-invoice-summary',
  templateUrl: './payroll-analytics-single-batch-invoice-summary.component.html',
  styleUrls: ['./payroll-analytics-single-batch-invoice-summary.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class PayrollAnalyticsSingleBatchInvoiceSummaryComponent implements OnInit {

  @ViewChild('payStubModal') payStubModal: ViewContainerRef;
  @Input() batchNumber: number;
  private actionModalHandle: NgbModalRef;
  batchDate: Date;
  invoiceSummaryDataRows: PayrollAnalyticsInvoice[];
  now = new Date();
  selectedInvoice: PayrollAnalyticsInvoice;

  downloadFormats: any[] = [
    {
      name: 'XLS',
      bookType: 'xlml',
      extension: '.xls'
    }, {
      name: 'XLSX',
      bookType: 'xlsx',
      extension: '.xlsx'
    }, {
      name: 'XLSX (Text Only)',
      bookType: 'xlsx',
      extension: '.xlsx'
    }, {
      name: 'CSV',
      bookType: 'csv',
      extension: '.csv'
    }
  ];

  constructor(private payrollAnalyticsService: PayrollAnalyticsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.batchDate = this.now; // ToDo: get batch date;
    this.invoiceSummaryDataRows = this.payrollAnalyticsService.getPayrollAnalyticsInvoice();
  }

  onClickPayStub(data) {
    this.selectedInvoice = data;
    this.openActionModal('sm', this.payStubModal);
  }

  onKeyDownPayStub(event, data) {
    if (event.keyCode === 13) {
      this.onClickPayStub(data);
    }
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  onDownload(format: any) {
    const excelFileName = 'batch-' + this.batchNumber;

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.invoiceSummaryDataRows);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: format.bookType, type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName, format);
  }

  private saveAsExcelFile(buffer: any, fileName: string, format: any): void {
    const data: Blob = new Blob([buffer]);
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + format.extension);
  }
}

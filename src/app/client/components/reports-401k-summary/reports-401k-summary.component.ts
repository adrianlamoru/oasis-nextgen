import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

import { ReportsEmployee401kSummary } from '../../models';
import { Reports401kSummaryReportService } from '../../services';

@Component({
  selector: 'app-reports-401k-summary',
  templateUrl: './reports-401k-summary.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-401k-summary.component.scss']
})
export class Reports401kSummaryComponent implements OnInit {

  reports401kSummaryReport: ReportsEmployee401kSummary[];
  filtered401kSummaryReport: ReportsEmployee401kSummary[];

  isLoading = true;

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;
  reportGeneratedDate: any;
  disableViewReportButton = true;

  downloadHtmlHref: any;

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
    }, {
      name: 'HTML',
      bookType: 'html',
      extension: '.html'
    }, {
      name: 'PDF',
      bookType: 'pdf',
      extension: '.pdf'
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private reports401kSummaryReportService: Reports401kSummaryReportService,
  ) { }

  ngOnInit() {
    this.getYears();
    this.reports401kSummaryReportService.get401kSummary()
      .subscribe(
        reports401kSummaryReport => {
          this.reports401kSummaryReport = reports401kSummaryReport;
          this.isLoading = false;
        }
      );

    this.filterDataRow();

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

  /**
  * test purpose - simulating service filter accion
  */
  filterDataRow() {

    this.selectedYear = this.selectedYearDisplay;

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
    this.router.navigate(['./client/reports/401k-summary-report']);
  }

  print() {
    const printContents = document.getElementById('contentToRender');
    let popupWin;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();

    html2canvas(printContents).then(function (canvas) {
      const img = canvas.toDataURL('image/png');
      popupWin.document.write(`
        <html>
          <body onload="window.print();window.close()">
            <img src="${img}"></img>
          </body>
        </html>`
      );
      popupWin.document.close();
    });
  }

  onDownload(format: any) {
    const fileName = this.generateFileName(format);

    if (format.bookType === 'html') {
      this.saveHTML(fileName);

    } else if (format.bookType === 'pdf') {
      this.savePDF(fileName);
    }
  }

  private generateFileName(format) {
    let fileName = 'demo';
    if (format) {
      fileName += '_export_' + new Date().getTime() + format.extension;
    }

    return fileName;
  }

  savePDF(fileName) {
    const pdfContainer = document.getElementById('contentToRender');
    html2canvas(pdfContainer).then(function (canvas) {
      const img = canvas.toDataURL('image/png');
      const doc = new jsPDF('landscape');
      doc.addImage(img, 'JPEG', 5, 20);
      doc.save(fileName);
    });
  }

  private saveHTML(fileName: string): void {
    const htmlContainer = document.getElementById('contentToRender');
    html2canvas(htmlContainer).then(function (canvas) {
      const img = canvas.toDataURL('image/png');
      const htmlContent = `
      <html>
        <body>
          <img src="${img}"></img>
        </body>
      </html>`;

      const data: Blob = new Blob([htmlContent]);
      FileSaver.saveAs(data, fileName);
    });
  }
}

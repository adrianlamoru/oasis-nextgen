import { AnnualPaySummaryService } from './../../services/annual-pay-summary.service';
import { SubnavMenu } from './../../../client/models/subnav-menu.interface';
import { SubnavService } from './../../../client/services/subnav.service';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-annual-pay-summary',
  templateUrl: './annual-pay-summary.component.html',
  styleUrls: ['./annual-pay-summary.component.scss']
})
export class CompensationAnnualPaySummaryComponent implements OnInit {

  public subnavMenu: SubnavMenu;
  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;
  disableViewReportButton = true;
  reportGeneratedDate: any;

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

  isLoading = true;
  selectedLabel = 'Earnings Summary';

  constructor(private subnavService: SubnavService, 
    private annualPayService: AnnualPaySummaryService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.subnavService.getSubnavDataForCompensationTab()
      .subscribe(subnavForReports => {
        this.subnavMenu = subnavForReports;
        this.getYears();
      });
    this.annualPayService.changeSelectedYear(this.selectedYearDisplay);
    setTimeout(() => {

      this.isLoading = false;
    }, 1500);
  }

  selectLabelTab(selectedLabel: string) {
    this.selectedLabel = selectedLabel;
  }

  goToBack() { }

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
    this.disableViewReportButton = this.selectedYear == this.selectedYearDisplay;
  }

  /**
 * test purpose - simulating service filter accion
 */
  filterDataRow() {

    this.selectedYear = this.selectedYearDisplay;

    this.annualPayService.changeSelectedYear(this.selectedYear);
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

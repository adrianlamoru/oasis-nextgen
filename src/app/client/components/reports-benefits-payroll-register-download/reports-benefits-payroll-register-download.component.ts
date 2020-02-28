import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { DataDriven } from '../../models/index';
import { SortOptions } from '../../../shared/models';
import { SortService } from '../../../shared/services';
import { FileService } from '../../../shared/services';
import { DxDropDownBoxComponent } from 'devextreme-angular';

const now = new Date();

@Component({
  selector: 'app-reports-benefits-payroll-register-download',
  templateUrl: './reports-benefits-payroll-register-download.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-benefits-payroll-register-download.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class ReportsBenefitsPayrollRegisterDownloadComponent implements OnInit {

  @ViewChild(DxDropDownBoxComponent) ddb;

  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;
  reportGeneratedDate: any;

  selectedSort: any[];
  sort: SortOptions[];

  contentReady = false;
  sortSelectionComponent: any;

  isDropDownBoxOpened = false;

  constructor(
    private router: Router,
    private sortServices: SortService,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.sort = this.sortServices.getSortOptions();
    this.selectedSort = [];

    const today = new Date();
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }

  onOpened(e) {
    this.contentReady = true;
  }

  syncTreeViewSelection(e: any): void {
    const component = e && e.component;
    this.sortSelectionComponent = component;

    if (!component) {
      return;
    }

    this.contentReady = false;

    if (this.selectedSort === undefined) {
      this.selectedSort = [];
    }

    this.contentReady = true;
  }

  sortSelectionChanged(e: any) {
    const component = e && e.component;

    if (!component) {
      return;
    }

    this.selectedSort = component.getSelectedNodesKeys();

    if (this.contentReady) {
      this.ddb.instance.close();
      this.contentReady = false;
    }

  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  onDownloadClick() {
    this.fileService.downloadFileByUrl('/assets/csv/BenefitsPayrollRegister.csv', 'BenefitsPayrollRegister');
  }

  onEnterKeyDown(event) {
    if (event.event.code === 'Enter') {
      this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
      event.event.stopPropagation();
    }
  }
}

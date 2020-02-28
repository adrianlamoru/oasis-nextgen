import { AnnualPaySummaryService } from './../../services/annual-pay-summary.service';
import { Component, OnInit } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import { CompensationService } from '../../services';
import { Router } from '@angular/router';
import { ICompensationDeductionDetail } from '../../models/compensation-deduction-detail.interface';

@Component({
  selector: 'app-compensation-deduction-detail',
  templateUrl: './compensation-deduction-detail.component.html',
  styleUrls: ['./compensation-deduction-detail.component.scss']
})
export class CompensationDeductionDetailComponent implements OnInit {

  compensationDeductionDetail: ICompensationDeductionDetail[] = [];
  filtredcompensationDeductionDetail: ICompensationDeductionDetail[] = [];

  yearToFilter: number;

  constructor(private router: Router, private annualPayService: AnnualPaySummaryService) {
    this.annualPayService.getCompensationDeductionDetail().subscribe((response: ICompensationDeductionDetail[]) => {
      this.compensationDeductionDetail = response;
    });
    this.yearToFilter = this.annualPayService.getSelectedYear();
    this.annualPayService.selectedYearForFilter$.subscribe(response => {
      this.yearToFilter = this.annualPayService.getSelectedYear();
    });
  }

  ngOnInit() {
  }

}

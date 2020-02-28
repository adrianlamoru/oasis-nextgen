import { ICompensationEarningsSummary } from './../../models/compensation-earnings-summary.interface';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import { CompensationService } from '../../services/compensation.service';
import { AnnualPaySummaryService } from '../../services/annual-pay-summary.service';

@Component({
  selector: 'app-compensation-earning-summary',
  templateUrl: './compensation-earning-summary.component.html',
  styleUrls: ['./compensation-earning-summary.component.scss']
})
export class CompensationEarningSummaryComponent implements OnInit {

  compensationEarningsSummary: ICompensationEarningsSummary[] = [];
  filtredCompensationEarningsSummary: ICompensationEarningsSummary[] = [];

  yearToFilter: number;

  constructor(private router: Router, private annualPayService: AnnualPaySummaryService) {
    this.annualPayService.getCompensationEarningsSumamry().subscribe((response: ICompensationEarningsSummary[]) => {
      this.compensationEarningsSummary = response;
    });
    this.yearToFilter = this.annualPayService.getSelectedYear();
    this.annualPayService.selectedYearForFilter$.subscribe(response => {
      this.yearToFilter = this.annualPayService.getSelectedYear();
    });
   }

  ngOnInit() {
  }

}

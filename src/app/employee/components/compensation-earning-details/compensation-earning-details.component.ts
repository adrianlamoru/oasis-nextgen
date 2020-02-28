import { CompensationEarningDetails } from '../../models/compensation-earning-details.model';
import { Component, OnInit } from '@angular/core';
import { ICompensationEarningsSummary } from '../../models/compensation-earnings-summary.interface';
import { CompensationService } from '../../services';
import { Router } from '@angular/router';

import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import { AnnualPaySummaryService } from '../../services/annual-pay-summary.service';

@Component({
  selector: 'app-compensation-earning-details',
  templateUrl: './compensation-earning-details.component.html',
  styleUrls: ['./compensation-earning-details.component.scss']
})
export class CompensationEarningDetailsComponent implements OnInit {

  compensationEarningDetails: CompensationEarningDetails[] = [];
  filtredCompensationEarningDetails: CompensationEarningDetails[] = [];

  constructor(private router: Router, private annualPayService: AnnualPaySummaryService) {
    this.annualPayService.getCompensationEarningDetail().subscribe((response: CompensationEarningDetails[]) => {
      this.compensationEarningDetails = response.map(c => {
        return new CompensationEarningDetails(c.id, c.tipCreditMakeUp, c.tippedHours, c.cashTips, c.halfTime);
      });
    });
  }

  ngOnInit() {
  }
}

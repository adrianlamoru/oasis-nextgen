import { Component, OnInit } from '@angular/core';
import { AnnualPaySummaryService } from '../../services';
import { CompensationTax } from '../../models/compensation-tax.model';

@Component({
  selector: 'app-compensation-tax',
  templateUrl: './compensation-tax.component.html',
  styleUrls: ['./compensation-tax.component.scss']
})
export class CompensationTaxComponent implements OnInit {
   
  compensationTax: CompensationTax[] = [];
  filtredCompensationTax: CompensationTax[] = [];

  constructor(private annualPayService: AnnualPaySummaryService) {
    this.annualPayService.getCompensationTax().subscribe((response: CompensationTax[]) => {
      this.compensationTax = response.map(c => {
        return new CompensationTax(c.id, c.federalIncomeTax, c.ficaOasdi, c.ficaMedicare);
      });
    });
  }

  ngOnInit() {
  }

}

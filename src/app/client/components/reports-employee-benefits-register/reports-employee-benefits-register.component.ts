import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { ReportsEmployeeBenefitsRegisterService } from '../../services';
import { EmployeeBenefitsRegister } from '../../models/index';

@Component({
  selector: 'app-reports-employee-benefits-register',
  templateUrl: './reports-employee-benefits-register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-employee-benefits-register.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class ReportsEmployeeBenefitsRegisterComponent implements OnInit {

  reportsEmployeeBenefitsRegisterReport: EmployeeBenefitsRegister[];
  reportGeneratedDate: any;

  isLoading = true;

  constructor(
    private reportsEmployeeBenefitRegisterReportService: ReportsEmployeeBenefitsRegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.reportsEmployeeBenefitRegisterReportService.getEmployeeBenefitRegisterSummary()
    .subscribe(
      reportsEmployeeBenefitsRegisterReport => {
        this.reportsEmployeeBenefitsRegisterReport = reportsEmployeeBenefitsRegisterReport;
        this.isLoading = false;
      }
    );
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}

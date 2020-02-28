import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService, SupervisorByDepartmentService } from '../../services';
import { SupervisorByDepartment } from '../../models';

@Component({
  selector: 'app-reports-supervisor-by-department',
  templateUrl: './reports-supervisor-by-department.component.html',
  styleUrls: ['./reports-supervisor-by-department.component.scss']
})
export class ReportsSupervisorByDepartmentComponent implements OnInit {

  reportGeneratedDate: string;
  dropdownOptions: any[];
  isLoading = true;
  supervisorByDepartmentData: SupervisorByDepartment[];

  constructor(private router: Router,
    private reportsService: ReportsService,
    private supervisorByDepartmentService: SupervisorByDepartmentService) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.supervisorByDepartmentData = this.supervisorByDepartmentService.getSupervisorByDepartment();

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  viewReport() {}


  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {}
}

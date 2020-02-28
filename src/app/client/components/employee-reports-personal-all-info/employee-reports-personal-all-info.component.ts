import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-reports-personal-all-info',
  templateUrl: './employee-reports-personal-all-info.component.html',
  styleUrls: ['./employee-reports-personal-all-info.component.scss']
})
export class EmployeeReportsPersonalAllInfoComponent implements OnInit {

  allTabSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.allTabSelected = true;
  }

}

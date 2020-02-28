import { Component, OnInit } from '@angular/core';
import { ClientBenefitsPlanService } from '../../../client/services';
import { IEmployeeBenefitsPlan } from '../../models/employee-benefits-plan.interface';
import { EmployeeBenefitsPlanService } from '../../services/employee-benefits-plan.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  benefitsPlanList: IEmployeeBenefitsPlan[];

  benefitsCTAButtons = [{
    btnLabel: '401(k)',
    btnLink: 'https://www.google.com',
    btnLinkConfig: '_blank'
  }, {
    btnLabel: 'College Savings Plan',
    btnLink: 'https://www.google.com',
    btnLinkConfig: '_self'
  }];

  constructor(private employeeBenefitsPlanService: EmployeeBenefitsPlanService) { }

  ngOnInit() {
    this.employeeBenefitsPlanService.getEmployeeBenefitsPlanList().subscribe(
      employeeBenefitsPlanList => {
        this.benefitsPlanList = employeeBenefitsPlanList;
      }
    );
  }

  openCTAButtonAction(link, btnLinkConfig) {
    window.open(link, btnLinkConfig);
  }

  openWebsiteLink(link) {
    window.open(link, 'blank');
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IClientBenefitsPlan, Employee } from '../../models';
import { ClientBenefitsPlanService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefits-medical',
  templateUrl: './benefits-medical.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./benefits-medical.component.scss']
})
export class BenefitsMedicalComponent implements OnInit {

  benefitsPlanList: IClientBenefitsPlan[];
  benefitsDetailsModalData: any;

  showDetails: boolean;

  benefitsModal: any = {
    title: `Product Card Title Name (Type)`,
    body: `Nullam quis porta ante aenean eget lorem ipsum. Nulla eu metus in tortor cursus vehicula et quis sapien.
      In feugiat est ut eros hendrerit elementum. Ut eget neque sed diam metus,
      bibendum eu elit in ultrices pretium ex nam luctus turpis sed aliquam magna ex consectetur arcu quis imperdiet
      turpis ipsum ac augue phasellus sagittis lacus ante nec scelerisque odio euismod cursus malesuada Morbi convallis
      blandit euismod. Nulla aliquam, velit quis lacinia tincidunt ipsum ex egestas velit nec interdum odio neque non dui.
      Fusce augue enim, interdum sit amet pharetra vitae convallis vitae massa.
      Nullam ultrices maximus libero et blandit nibh bibendum.`
  };

  employees = [{
    ID: 1,
    Name: 'Willie Lambert'
  },
  {
    ID: 2,
    Name: 'Raymond McKinney'
  },
  {
    ID: 3,
    Name: 'Caleb Francis'
  },
  {
    ID: 4,
    Name: 'Tyler Jackson'
  },
  {
    ID: 5,
    Name: 'Catherine Santiago'
  },
  {
    ID: 6,
    Name: 'Antonio Jackson'
  },
  {
    ID: 7,
    Name: 'Alberta Adkins'
  },
  {
    ID: 8,
    Name: 'May Griffith'
  }];

  constructor(private modalService: NgbModal, private clientBenefitsPlanService: ClientBenefitsPlanService, private router: Router) { }

  ngOnInit() {
    this.showDetails = true;
    this.clientBenefitsPlanService.getClientBenefitsPlanList().subscribe(
      clientBenefitsPlanList => {
        this.benefitsPlanList = clientBenefitsPlanList;
      }
    );
  }

  openBenefitsDetailsModal(size, content, indexValue) {
    this.benefitsDetailsModalData = this.benefitsPlanList[indexValue];
    this.modalService.open(content, { size: size, windowClass: 'benefits-medical-modal' });
  }

  activeTabDetails(active: boolean) {
    this.showDetails = active;
  }

  goToDetails(employeeId: number) {
    this.router.navigate(['client/employees/employee', employeeId]);
  }

  openAdditionalInfoAction(additionalInfoItem){
    window.open(additionalInfoItem.link, '_blank');
  }

  openWebsiteLink(link){
    window.open(link, '_blank');
  }

}

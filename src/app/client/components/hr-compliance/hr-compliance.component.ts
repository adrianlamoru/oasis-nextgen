import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsModal } from '../../../shared/models';

@Component({
  selector: 'app-hr-compliance',
  templateUrl: './hr-compliance.component.html',
  styleUrls: ['./hr-compliance.component.scss']
})
export class HrComplianceComponent implements OnInit {
  @Input() available: string;

   newsModalData: any[] = [
    {
      title: `Top 10 HR compliance trends to watch out for in 2018`,
      body: `Stay up to date with all the latest news`
    },
    {
      title: `DOL issues final rule on overtime`,
      body: `Salaried employees will be eligible`
    },
    {
      title: `IRS updates for tax year 2018`,
      body: `Make sure your accountant reviews`
    },
    {
      title: `New labor law will restrict employee hiring questions`,
      body: `Make sure you now the changes`
    },
    {
      title: `Don’t miss out! Open enrollment starts on June 1st`,
      body: `Start exploring our different plans today`
    },
    {
      title: `Don’t miss out! Open enrollment starts on June 1st`,
      body: `Start exploring our different plans today`
    },
  ];

  closeResult: string;
  activeIndex;
  toggle = 0;

  hrComplianceCardData = {
    title: 'HR Compliance'
  };

  hrComplianceDataSource: NewsModal[] = [{
      title: 'Top 10 HR compliance trends to watch out for in 2018',
      body: 'Stay up to date with all the latest news',
    }, {
      title: 'DOL issues final rule on overtime',
      body: 'Salaried employees will be eligible',
    },
    {
      title: 'IRS updates for tax year 2018',
      body: 'Make sure your accountant reviews',
    },
    {
      title: 'New labor law will restrict employee hiring questions',
      body: 'Make sure you now the changes',
    },
    {
      title: 'Don’t miss out! Open enrollment starts on June 1st',
      body: 'Start exploring our different plans today',
    },
    {
      title: 'Don’t miss out! Open enrollment starts on June 1st',
      body: 'Start exploring our different plans today',
    }];
           

  constructor(private modalService: NgbModal) { }
  
  open(content) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }

  ngOnInit() { }

  openButtonAction(link) {
    window.open(link, '_blank');
  }

  openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  clicked(index, toggle) {
    this.activeIndex = index;
    this.toggle = toggle;
  }

}

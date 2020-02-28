import { Component, OnInit, PipeTransform } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICompensationPTO } from '../../models';


@Component({
  selector: 'app-compensation-paid-time-off',
  templateUrl: './compensation-paid-time-off.component.html',
  styleUrls: ['./compensation-paid-time-off.component.scss']
})
export class CompensationPaidTimeOffComponent implements OnInit {

  showError = false;
  errorMsg = '';
  isLoading = true;

  grouped: any;
  innerData: ICompensationPTO[] = [
    {carryOverHours: '20.00', yearToDateHoursAccrued: '60.00', yearToDateHoursTaken: '30.00', yearToDateHoursAvailable: '90.00', accruedThrough: '05-15-2015', yearEnd: '2018-12-31', description: 'VACATION'},
    {carryOverHours: '20.00', yearToDateHoursAccrued: '60.00', yearToDateHoursTaken: '30.00', yearToDateHoursAvailable: '90.00', accruedThrough: '05-25-2015', yearEnd: '2018-12-31', description: 'PERSONAL'}
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    
    this.grouped = this.groupBy(this.innerData, pto => pto.description);
    setTimeout(() => {

      this.isLoading = false;
    }, 1500);
  }

  

  openActionModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  groupBy(list, keyGetter) {
    const map = new Map();
    if (list !== undefined) {
      list.forEach((item) => {
          const key = keyGetter(item);
          if (!map.has(key)) {
              map.set(key, [item]);
          } else {
              map.get(key).push(item);
          }
      });
      return map;
    } else {
      this.showError = true;
      this.errorMsg = 'There are no results available for the request per user security or filter criteria.';
    }
  }

}

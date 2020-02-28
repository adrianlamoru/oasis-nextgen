import { Component, OnInit, Input } from '@angular/core';

import {ICompensationPTODetails } from '../../models';


@Component({
  selector: 'app-compensation-paid-time-off-modal',
  templateUrl: './compensation-paid-time-off-modal.component.html',
  styleUrls: ['./compensation-paid-time-off-modal.component.scss']
})
export class CompensationPaidTimeOffModalComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;


  modalTitle: string = "Paid Time Off";
  modalData: ICompensationPTODetails[] = [
    {referenceNumber: '24837', effectiveDate: '09-20-2018', absenceCode: 'A01002', absenceDescription: 'PERSONAL', hoursTaken: '10.00', hoursAccrued: '20.00', carryOverComment: 'JHAJDFG'},
    {referenceNumber: '24840', effectiveDate: '09-23-2018', absenceCode: 'A01003', absenceDescription: 'PERSONAL', hoursTaken: '15.00', hoursAccrued: '20.00', carryOverComment: 'JHAJDFG'},
    {referenceNumber: '24838', effectiveDate: '10-31-2018', absenceCode: 'A01002', absenceDescription: 'VACATION', hoursTaken: '10.00', hoursAccrued: '20.00', carryOverComment: 'JHAJDFG'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

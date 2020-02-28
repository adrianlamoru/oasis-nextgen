import { Component, OnInit, Input } from '@angular/core';

import { OfferDetail } from '../../models';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  @Input() offerDetail: OfferDetail;


  constructor() { }

  ngOnInit() {
  }

}

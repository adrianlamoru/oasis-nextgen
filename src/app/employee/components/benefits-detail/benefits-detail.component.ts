// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { BenefitsDetail } from '../../models';

@Component({
  selector: 'app-benefits-detail',
  templateUrl: './benefits-detail.component.html',
  styleUrls: ['./benefits-detail.component.scss']
})
export class BenefitsDetailComponent implements OnInit {

  @Input() benefitsDetail: BenefitsDetail;

  constructor() { }

  ngOnInit() {
  }

}

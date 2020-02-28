import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenefitsComponent implements OnInit {

  // THESE BUTTONS DATA are only for client whose work site location is NEWYORK
  benefitsNewYorkCTAButtons = [{
    btnLabel: 'NY DBL CERTIFICATE',
    btnLink: 'https://www.google.com',
    btnLinkConfig: '_blank'
  }, {
    btnLabel: 'PFL CERTIFICATE',
    btnLink: 'https://www.oasisadvantage.com',
    btnLinkConfig: '_self'
  }];

  benefitsCTAButtons = [{
    btnLabel: 'Employee Cost Sheet',
    btnLink: 'https://www.google.com',
    btnLinkConfig: '_blank'
  }, {
    btnLabel: 'Client Cost Sheet',
    btnLink: 'https://www.oasisadvantage.com',
    btnLinkConfig: '_self'
  }];

  constructor() { }

  ngOnInit() {
  }

  openCTAButtonAction(link, btnLinkConfig) {
    window.open(link, btnLinkConfig);
  }

}

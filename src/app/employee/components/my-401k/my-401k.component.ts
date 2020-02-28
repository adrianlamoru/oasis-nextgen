import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { EmployeeContribution } from '../../models/employee-401k.interface';

@Component({
  selector: 'app-my-401k',
  templateUrl: './my-401k.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./my-401k.component.scss']
})
export class My401kComponent implements OnInit {
  @Input() my401kData: EmployeeContribution;

  toggle401KValue = true;
  balanceAmount = this.customFormat(2900);
  myContributionAmount = this.customFormat(200);
  preTaxAmount = this.customFormat(150);
  rothAmount = this.customFormat(50);
  makeChangesUrl = '#';
  contributionDate = 'Feb 15, 2017';
  myPalette = ['#1a52ce', '#a55eef', '#00b2d5'];

  constructor() { }

  ngOnInit() {
  }

  customizeTooltip = (arg: any) => {
    return {
      html: '<div class="font-weight-bold my-401K-tooltip"><div class="text-muted">'
        + arg.seriesName + '</div><div>$' + this.customFormat(arg.valueText) + '</div></div>'
    };
  }

  toggle401K() {
    this.toggle401KValue = !this.toggle401KValue;
  }

  customFormat(numberToFormat: number) {
    if (numberToFormat) {
      if (numberToFormat.toString().split('.').length > 1) {
        return numberToFormat.toLocaleString(undefined, { maximumFractionDigits: 2 });
      } else {
        return numberToFormat.toLocaleString(undefined, { maximumFractionDigits: 2 }) + '.00';
      }
    } else {
        return '00.00';
    }
  }
}

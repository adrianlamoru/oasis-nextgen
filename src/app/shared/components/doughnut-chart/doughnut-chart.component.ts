import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PieData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() dataSource: PieData[];
  @Input() arg: string;
  @Input() val: number;

  @Input() height: number;

  palette = paletteCharts;

  constructor() { }

  ngOnInit() {
    if (this.arg === undefined && this.val === undefined ) {
      if (this.dataSource !== undefined) {
        const firstElement = this.dataSource.length > 0 ? this.dataSource[0] : { arg: '', val: 0 };
        this.arg = firstElement.arg;
        this.val = firstElement.val;
      }
    }
  }

  customizeTooltip = (arg: any) => {
      return {
          html: '<div class="tooltip-doughnut"><p class="tooltip-doughnut-arg">' + arg.argumentText + '</p>' +
          '<p class="tooltip-doughnut-val">' + arg.valueText + '</p></div>'
      };
  }

}

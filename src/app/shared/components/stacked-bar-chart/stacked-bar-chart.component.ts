import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { HistogramData, KeyNameValueData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';
import { StackedData } from '../../models/index';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {

  @Input() dataSource: StackedData[];
  @Input() height: number;

  palette = paletteCharts;

  constructor() {
  }

  ngOnInit() {

  }

  customizeText = (arg: any) => {
    return '<span class="text-stackedbar-text">' + arg.valueText + '</span>';
  }

  customizeLabelVal1 = (arg: any) => {
    return '<span class="label-stackedbar-outside">Remaining: ' + arg.valueText + ' Days</span>';
  }

  customizeLabelVal2 = (arg: any) => {
    return '<span class="label-stackedbar-outside">Used: ' + arg.valueText + ' Days</span>';
  }

  customizePoint = (arg: any) => {
    const idx = arg.index % this.palette.length;
    if (arg.seriesName === 'val1') {
      return { color: this.palette[idx] };
    }
  }

  customizeLabel = (arg: any) => {
    if (arg.seriesName === 'val1') {
      return { backgroundColor: 'transparent', verticalOffset: 18, horizontalOffset: -9999 };
    }
    if (arg.seriesName === 'val2') {
      return { backgroundColor: 'transparent', verticalOffset: 18 };
    }
  }

}

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { HistogramData, KeyNameValueData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';
import { StackedHorizontalData } from '../../models/index';

@Component({
  selector: 'app-stacked-bar-chart-horizontal',
  templateUrl: './stacked-bar-chart-horizontal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./stacked-bar-chart-horizontal.component.scss']
})
export class StackedBarChartHorizontalComponent implements OnInit {

  @Input() dataSource: StackedHorizontalData[];
  @Input() height: number;

  palette = paletteCharts;

  constructor() { }

  ngOnInit() {
  }

  customizePoint = (arg: any) => {
    const idx = arg.index % this.palette.length;
    if (arg.seriesName === 'val1') {
      return { color: this.palette[idx] };
    }
  }

  customizeLabel = (arg: any) => {
    if (arg.seriesName === 'val') {
      return { backgroundColor: 'transparent', verticalOffset: 18, horizontalOffset: -9999 };
    }
  }

  customizeLegendText = (arg: any) => {
    return '<p class="legend-pie">' + arg.seriesName + '</p>';
  }

}

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { HistogramData, KeyNameValueData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./histogram-chart.component.scss']
})
export class HistogramChartComponent implements OnInit {

  @Input() dataSource: HistogramData[];
  @Input() height: number;

  palette = paletteCharts;
  series: KeyNameValueData[];

  chartDataSource: any[];

  constructor() {
  }

  ngOnInit() {
    this.series = [];
    this.chartDataSource = [];
    /*Get all series from input dataSource & build chart dataSource*/
    if (this.dataSource !== undefined) {
      this.dataSource.forEach(ds => {
        const data = { arg: ds.arg };
        ds.vals.forEach(v => {
          if (this.series.findIndex(s => s.key === v.key) < 0) {
            this.series.push({ key: v.key, name: v.name });
          }
          data[v.key] = v.value;
        });
        this.chartDataSource.push(data);
      });
    } else {
      this.dataSource = [];
    }
  }

  customizeTooltip = (arg: any) => {
    return {
      html: '<div class="tooltip-stackedbar"><p class="tooltip-stackedbar-arg">' + arg.seriesName + '</p>' +
        '<p class="tooltip-stackedbar-val">' + arg.valueText + '</p></div>'
    };
  }

  customizeArgumentAxis = (arg: any) => {
    return '<p class="text-argument-axis">' + arg.valueText + '</p>';
  }

}

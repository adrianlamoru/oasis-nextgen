import { Component, OnInit, Input } from '@angular/core';
import { SpiderData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';

@Component({
  selector: 'app-spider-chart',
  templateUrl: './spider-chart.component.html',
  styleUrls: ['./spider-chart.component.scss']
})
export class SpiderChartComponent implements OnInit {
  @Input() dataSource: SpiderData[];
  @Input() height: number;

  palette = paletteCharts;

  constructor() { }

  ngOnInit() {
  }
}

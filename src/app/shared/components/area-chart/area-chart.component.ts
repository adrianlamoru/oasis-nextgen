import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { paletteCharts } from '../../models/palette';
import { AreaData } from '../../models/chart-data.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  @Input() dataSource: AreaData[];
  @Input() height: number;
  @Input() width: number;

  @Input() gross: number;
  @Input() net: number;

  @Input() customAreaChartPalette: any[];

  palette = paletteCharts;
  

  options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  title: string;

  pipe: CurrencyPipe;

  constructor() {
    this.pipe = new CurrencyPipe('en');
  }

  ngOnInit() {
    this.title = '';
    this.customizeTitle();
  }

  customizeTooltip = (arg: any) => {
    const argValue: Date = arg.argument;
    return {
      html: '<div class="tooltip-area"><p class="tooltip-area-arg">' + argValue.toLocaleDateString('en-US', this.options) + '</p>' +
        '<p class="tooltip-area-val">' + arg.valueText + '</p></div>'
    };
  }

  customizeTextValueAxis = (arg: any) => {
    return '<p class="text-area-value-axis">$' + arg.valueText + '</p>';
  }

  customizeTitle(): void {
    const gross: string = this.gross !== undefined ? 'Gross: <span class="title-area-value">'
     + this.pipe.transform(this.gross, 'USD', 'symbol') + '</span>' : '';
    const net: string = this.net !== undefined ? 'Net: <span class="title-area-value">'
     + this.pipe.transform(this.net, 'USD', 'symbol') + '</span>' : '';

    if (gross !== '' || net !== '') {
      this.title = '<p class="title-area">' + gross + ' ' + net + '</p>';
    } else {
      this.title = '';
    }
  }

  customizeArgumentLabel = (arg: any) => {
    return '<p class="text-area-arg-axis">' + arg.valueText.substr(0, 3) + '</p>';
  }

  onPointHoverChanged(event: any) {
    const hoveredPoint = event.target;
    if (hoveredPoint.isHovered()) {
      hoveredPoint.size = 7;
    }
  }

}

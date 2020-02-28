import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PieData } from '../../models/chart-data.interface';
import { paletteCharts } from '../../models/palette';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    @Input() dataSource: PieData[];

    @Input() width: number;

    @Input() height: number;

    @Input() chartSummary: string;

    @Input() customSupportPalette: any[];

    @Input() customRightAlignment: number;

    @Input() customTopAlignment: number;

    palette = paletteCharts;

    constructor() { }

    ngOnInit() {
    }

    toggleVisibility(item) {
        if (item.isVisible()) {
            item.hide();
        } else {
            item.show();
        }
    }

    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        const arg = e.target,
            item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    customizeTooltip = (arg: any) => {
        return {
            html: '<div class="tooltip-pie"><p class="tooltip-pie-arg">' + arg.argumentText + '</p>' +
                '<p class="tooltip-pie-val">' + arg.valueText + '</p></div>'
        };
    }

    customizeLegendText = (arg: any) => {
        return '<p class="legend-pie">' + arg.pointName + '</p>';
    }

}

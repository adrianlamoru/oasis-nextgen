import { Component, OnInit, Input } from '@angular/core';
import { StepOption } from '../../models';


@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
  })
export class ProgressBarComponent implements OnInit {
    @Input('totalSteps') totalSteps: number;

    @Input('step') step: number;

    @Input('stepsOption') stepsOption: StepOption[];

    @Input('height') height: string;

    @Input('width') width: string;

    constructor() {
        this.totalSteps = 1;
        this.step = 0;
        this.stepsOption = [];
        this.height = '';
        this.width = '';
    }

    ngOnInit(): void {
    }

    getStyle(): any {
        const style = {};
        const stepOptionIndex: number = this.stepsOption
            .map((stepO: StepOption) => stepO.step).indexOf(this.step);

        if (stepOptionIndex >= 0) {
            const stepOption: StepOption = this.stepsOption[stepOptionIndex];
            if (stepOption.color) {
                style['background-color'] = stepOption.color;
            }
        }

        style['width.%'] = this.getWidth();

        return style;
    }

    getContainerStyle() {
        const style = {};

        if (this.height !== '') {
            style['height'] = this.height;
        }

        if (this.width !== '') {
            style['width'] = this.width;
        }

        return style;
    }

    getClass(): string {
        const stepOptionIndex: number = this.stepsOption
            .map((stepO: StepOption) => stepO.step).indexOf(this.step);

        if (stepOptionIndex >= 0) {
            const stepOption: StepOption = this.stepsOption[stepOptionIndex];
            if (stepOption.stepClass) {
                return 'progress-bar ' + stepOption.stepClass;
            }
        }

        return 'progress-bar';
    }

    getWidth(): number {
        const width = this.step / this.totalSteps * 100;

        return Math.trunc(width);
    }
}

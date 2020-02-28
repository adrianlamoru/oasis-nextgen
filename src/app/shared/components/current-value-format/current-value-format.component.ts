import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { CurrentValueFormat, CurrentValueType } from '../../models/index';

@Component({
  selector: 'app-current-value-format',
  templateUrl: './current-value-format.component.html',
  styleUrls: ['./current-value-format.component.scss']
})
export class CurrentValueFormatComponent implements OnInit {

  @Input() currentValue: CurrentValueFormat;
  @Input() customClass: string;

  currentValueType = CurrentValueType;

  constructor() { }

  ngOnInit() {
  }

}

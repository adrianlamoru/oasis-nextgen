import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-edit-button-link',
  templateUrl: './edit-button-link.component.html',
  styleUrls: ['./edit-button-link.component.scss']
})
export class EditButtonLinkComponent implements OnInit, OnChanges {
  @Input() isEnabled: number;
  @Output() clickEvent = new EventEmitter<any>();

  isDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.isDisabled = true;
  }

  clicked() {
    this.isDisabled = !this.isDisabled;

    // console.log(this.isDisabled);

    this.clickEvent.emit({
      isDisabled: this.isDisabled
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (changes.isEnabled.previousValue) {
      this.isDisabled = !changes.isEnabled.currentValue;
    }
  }
}

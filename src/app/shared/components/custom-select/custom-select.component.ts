import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit {
  elementId: number;
  private onTouch: Function;
  private onModelChange: Function;

  @Input() items = [];
  @Input() title: string;
  @Input() disableDropdown?: boolean;
  @Input() placeholder: string;
  @Input() toggleIcon?: string;
  @Input() hideSelection?: boolean;
  @Input() listAccessor?: { name?: string, id?: string };
  @Input()
  set selectedValue(value: string) {
    if (value) {
      this.selectItem(value, null);
    }
  }
  @Output() selected = new EventEmitter<string>();

  value = '';
  selectedOption: string;

  constructor() {
    this.elementId = new Date().getTime();
  }

  ngOnInit() {
    this.selectedOption = this.selectedOption || this.placeholder;
      if (this.items[0].name !== this.placeholder) {
        this.items.unshift({
          [this.idProp]: '',
          [this.nameProp]: this.placeholder,
          selected: true,
        });
      }
  }

  get nameProp() {
    const hasListAccessorName = (this.listAccessor && this.listAccessor.name);
    return hasListAccessorName ? this.listAccessor.name : 'name';
  }

  get idProp() {
    const hasListAccessorId = (this.listAccessor && this.listAccessor.id);
    return hasListAccessorId ? this.listAccessor.id : 'id';
  }

  get icon() {
    return this.toggleIcon ? this.toggleIcon : 'icon-shape';
  }

  get hideItem() {
    return this.hideSelection;
  }

  writeValue(value: string) {
    this.value = value || '';
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  setEventOrigin(event) {
    event.eventOrigin = 'dropdown';
  }

  selectItem(id: any, element: any) {
    if (element) {
      element.close();
    }

    const itemSelected = this.items.filter(item => item[this.idProp] === id);
    this.value = id;
    itemSelected[0].selected = true;
    this.selectedOption = itemSelected[0][this.nameProp];

    if (this.onModelChange) {
      this.onModelChange(this.value);
    }

    this.selected.emit(this.value);
  }

  onComponentTouch() {
    if (this.onTouch) {
      this.onTouch();
    }
  }
}

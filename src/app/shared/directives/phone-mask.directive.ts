import {NgModule, Component, Directive, Output, EventEmitter} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl} from '@angular/forms';

@Directive({
  selector: '[phoneFaxMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown)':'onInputChange($event.target.value)'
  }
})

export class PhoneMask {
  constructor(public model: NgControl) {}
  
  @Output() rawChange:EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event){
   if(event !== undefined) {
      // Strip out all char
      var newVal = event.replace(/\D/g, '');

      if (newVal.length == 0) {
        newVal = newVal = newVal.replace(/^(\d{0,3})/, '$1');
      }

      // If three digits entered apply (xxx) mask
      else if(newVal.length <= 3) {
            newVal = newVal.replace(/^(\d{0,3})/, '($1');
        
        // If 6 digits entered apply (xxx) xxx mask
        } else if(newVal.length <= 6) {
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
      
      //If all digits entered apply (xxx) xxx-xxxx mask
      } else {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
      }
      this.model.valueAccessor.writeValue(newVal);      
    } 
  }
}




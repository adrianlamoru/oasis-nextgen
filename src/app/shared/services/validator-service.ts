import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ValidatorService {
  public PhoneNumber = Validators.pattern('^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');
  public PhoneExt = Validators.pattern('\\d{1,4}');
  public Zip = Validators.pattern('\\d{5}');
}

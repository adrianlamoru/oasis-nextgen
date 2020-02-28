import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IChangeUserModel, EmptyChangeUserModel } from '../../models';
import { DxFormComponent } from 'devextreme-angular';
import DxValidator from 'devextreme/ui/validator';
import DevExpress from 'devextreme/bundles/dx.all';

@Component({
  selector: 'app-change-username-modal',
  templateUrl: './change-username-modal.component.html',
  styleUrls: ['./change-username-modal.component.scss']
})
export class ChangeUsernameModalComponent implements OnInit {
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @ViewChild('changeUserForm') changeUsernameForm: DxFormComponent;

  public changeUsername: IChangeUserModel;

  isValidNewUsernameValidation: boolean;

  isValidReNewUsernameValidation: boolean;

  isValidNewUsername: boolean;

  isValidForm: boolean;

  currentUsernameComparison = () => {
    return this.changeUsername.currentUsername;
  };

  usernameComparison = () => {
    return this.changeUsername.newUsername;
  };

  currentCorrectUsernameComparison = () => {
    // ToDo: put here the correct user name
    return this.changeUsername.currentUsername;
  };

  constructor() {
    this.changeUsername = new EmptyChangeUserModel;

    this.modalCloseFunc = null;
    this.modalDismissFunc = null;
    this.isValidNewUsername = false;
    this.isValidForm = false;
    this.isValidNewUsernameValidation = true;
    this.isValidReNewUsernameValidation = true;

    this.validateChangeUsernameForm = this.validateChangeUsernameForm.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  ngOnInit() {
  }

  save(): void {
    if (this.modalCloseFunc) {
      this.modalCloseFunc();
    }
  }

  validation(): boolean {
    return this.isValidForm;
  }

  validateChangeUsernameForm(): boolean {
    const validation = this.changeUsernameForm.instance.validate();
    const newUsernameValidator: DxValidator = validation.validators[1];
    const reNewUsernameValidator: DxValidator = validation.validators[2];

    const newUsernameValidation = newUsernameValidator.validate();
    this.isValidNewUsername = newUsernameValidation.isValid;

    const reNewUsernameValidation: any = reNewUsernameValidator.validate();
    if (reNewUsernameValidation.validationRules == undefined) {
      const reNewUsernameValidationRequired: any = reNewUsernameValidation.validator._validationRules[0];
      const reNewUsernameValidationCompare: any = reNewUsernameValidation.validator._validationRules[1];
      this.isValidReNewUsernameValidation = reNewUsernameValidationRequired.isValid && reNewUsernameValidationCompare.isValid;
    } else {
      this.isValidReNewUsernameValidation = reNewUsernameValidation.isValid;
    }

    return validation.isValid && this.isValidNewUsername && this.isValidReNewUsernameValidation;
  }

  onValueChanged(event) {
    this.isValidForm = this.validateChangeUsernameForm();
  }

}

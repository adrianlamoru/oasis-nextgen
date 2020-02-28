import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChangePassword } from '../../models';
import { DxFormComponent } from 'devextreme-angular';
import DxValidator from 'devextreme/ui/validator';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @ViewChild('changePasswordForm') changePasswordForm: DxFormComponent;

  public changePassword: ChangePassword;

  isValidNewPasswordValidation: boolean;

  isValidReNewPasswordValidation: boolean;

  isValidNewPassword: boolean;

  isValidForm: boolean;

  currentPasswordComparison = () => {
    return this.changePassword.currentPassword;
  }

  passwordComparison = () => {
    return this.changePassword.newPassword;
  }

  constructor() {
    this.changePassword = {
      currentPassword : '',
      newPassword: '',
      reNewPassword: ''
    };

    this.modalCloseFunc = null;
    this.modalDismissFunc = null;
    this.isValidNewPassword = false;
    this.isValidForm = false;
    this.isValidNewPasswordValidation = true;
    this.isValidReNewPasswordValidation = true;

    this.validateChangePasswordForm = this.validateChangePasswordForm.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
   }

  ngOnInit() {
  }

  save(): void {
    if (this.modalCloseFunc) {
      this.modalCloseFunc();
    }
  }

  isEmptyNewPassword(): boolean {
    return this.changePassword.newPassword === '';
  }

  isValid(isValid: boolean): boolean {
    if (!isValid) {
      this.validateChangePasswordForm();
    }

    return isValid;
  }

  validation(): boolean {
    return this.changePassword.currentPassword !== '' && this.changePassword.reNewPassword !== '' && this.isValidForm;
  }

  validateChangePasswordForm(): boolean {
    const validation = this.changePasswordForm.instance.validate();
    const newPasswordValidator: DxValidator = validation.validators[1];
    const reNewPasswordValidator: DxValidator = validation.validators[2];

    const newPasswordValidation = newPasswordValidator.validate();
    this.isValidNewPassword = newPasswordValidation.isValid;

    const reNewPasswordValidation = reNewPasswordValidator.validate();
    this.isValidReNewPasswordValidation = reNewPasswordValidation.isValid;

    return validation.isValid;
  }

  onValueChanged(event) {
    this.isValidForm = this.validateChangePasswordForm();
  }
}

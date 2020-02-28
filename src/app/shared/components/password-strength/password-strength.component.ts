import { Component, OnInit, Input } from '@angular/core';
import { StepOption, PasswordStrength } from '../../models';


@Component({
    selector: 'app-password-strength',
    templateUrl: './password-strength.component.html',
    styleUrls: ['./password-strength.component.scss']
  })
export class PasswordStrengthComponent implements OnInit {
    @Input('password') password: string;

    @Input('minLength') minLength: number;

    stepsOption: StepOption[];

    private commonPasswordPatterns = /passw.*|12345.*|09876.*|qwert.*|asdfg.*|zxcvb.*|footb.*|baseb.*|drago.*/;

    constructor() {
        this.password = '';
        this.minLength = 8;
        this.stepsOption = [];
    }

    ngOnInit(): void {
        this.stepsOption = [
            { stepClass: 'week', step: 1 },
            { stepClass: 'moderate', step: 2 },
            { stepClass: 'strong', step: 3 }
        ];
    }

    public isPasswordCommon(password: string): boolean {
        return this.commonPasswordPatterns.test(password);
    }

    public getPasswordStrength(): PasswordStrength {
        let numberOfElements = 0;
        numberOfElements = /.*[a-z].*/.test(this.password) ? 1 : 0;
        numberOfElements = /.*[A-Z].*/.test(this.password) ? 1 : numberOfElements;
        numberOfElements = /.*[0-9].*/.test(this.password) ? ++numberOfElements : numberOfElements;
        numberOfElements = /[^a-zA-Z0-9]/.test(this.password) ? ++numberOfElements : numberOfElements;

        let currentPasswordStrength = PasswordStrength.Short;
        if (!this.password || this.password.length < this.minLength) {
            currentPasswordStrength = PasswordStrength.Short;
        } else if (this.isPasswordCommon(this.password) === true) {
            currentPasswordStrength = PasswordStrength.Common;
        } else if (numberOfElements < 2) {
            currentPasswordStrength = PasswordStrength.Weak;
        } else if (numberOfElements === 2) {
            currentPasswordStrength = PasswordStrength.Moderate;
        } else {
            currentPasswordStrength = PasswordStrength.Strong;
        }

        return currentPasswordStrength;
    }

    getLabelText(): string {
        const passwordStrength = this.getPasswordStrength();

        return PasswordStrength[passwordStrength];
    }

    getStrength(): number {
        const dx: PasswordStrength[] = [
            PasswordStrength.Short,
            PasswordStrength.Common,
            PasswordStrength.Weak,
            PasswordStrength.Moderate,
            PasswordStrength.Strong
        ];
        const dy: PasswordStrength[] = [
            1,
            1,
            1,
            2,
            3
        ];
        const passwordStrength: PasswordStrength = this.getPasswordStrength();
        for (let i = 0; i < dx.length; i++) {
            if (dx[i] === passwordStrength) {
                return dy[i];
            }
        }

        return 0;
    }
}

import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}


@Injectable()
export class NgbDateCustomFormatter extends NgbDateParserFormatter {
    constructor(public i18n: NgbDatepickerI18n) { super(); }
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split(/[ ,]+/);
            const monthNumberVal = months.indexOf(dateParts[0].toLowerCase()) + 1;
            if (dateParts.length === 1 && isNumber(monthNumberVal)) {
                return { month: toInteger(monthNumberVal), day: null, year: null };
            } else if (dateParts.length === 2 && isNumber(monthNumberVal) && isNumber(dateParts[1])) {
                return { month: toInteger(monthNumberVal), day: toInteger(dateParts[1]), year: null };
            } else if (dateParts.length === 3 && isNumber(monthNumberVal) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { month: toInteger(monthNumberVal), day: toInteger(dateParts[1]), year: toInteger(dateParts[2]) };
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        let stringDate = '';
        if (date) {
            stringDate += isNumber(date.month) ? this.i18n.getMonthFullName(date.month) + ' ' : '';
            stringDate += isNumber(date.day) ? padNumber(date.day) + ', ' : '';
            stringDate += date.year;
        }
        return stringDate;
    }
}
